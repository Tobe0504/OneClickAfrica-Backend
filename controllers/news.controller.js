const cron = require("node-cron");
const axios = require("axios");
const xml2js = require("xml2js");
const { News } = require("../models/News");
const { Comments } = require("../models/Comment");
const {
  extractImageFromHTML,
  cleanText,
  extractYouTubeID,
} = require("../helpers/extractImageUrl");
const slugify = require("slugify");
const { RSS_FIELDS } = require("../data/rssFeeds");
const Parser = require("rss-parser");
const parser = new Parser();

async function fetchAndUpdateDB(rssFeeds, key, isYoutube = false) {
  let errors = [];
  let totalArticles = 0;
  let newArticles = 0;

  for (const feed of rssFeeds) {
    try {
      console.log(`Fetching ${feed.source}...`, isYoutube);
      const response = !isYoutube
        ? await axios.get(feed.url, { timeout: 10000 })
        : await parser.parseURL(feed.url);
      const data = isYoutube
        ? response
        : await xml2js.parseStringPromise(response.data, {
            mergeAttrs: true,
          });

      const items = isYoutube ? data?.items : data?.rss?.channel[0].item || [];

      for (const item of items) {
        try {
          const rawImage =
            item.enclosure?.[0]?.url ||
            item["media:content"]?.[0]?.url ||
            item["media:thumbnail"]?.[0]?.url ||
            extractImageFromHTML(
              item["content:encoded"]?.[0] || item.description?.[0]
            ) ||
            null;

          const image = Array.isArray(rawImage) ? rawImage[0] : rawImage;

          const author = !isYoutube
            ? item.author?.[0] ||
              item["dc:creator"]?.[0] ||
              item.creator?.[0] ||
              null
            : item?.author;

          let publishedAt;
          const pubDateStr = item.pubDate?.[0] || item?.isoDate;
          if (pubDateStr) {
            const parsed = new Date(pubDateStr);
            publishedAt = isNaN(parsed.getTime()) ? new Date() : parsed;
          } else {
            publishedAt = new Date();
          }

          const videoUrl = !isYoutube ? item.link?.[0] || null : item?.link;
          const videoId = videoUrl ? extractYouTubeID(videoUrl) : null;
          const embedUrl = videoId
            ? `https://www.youtube.com/embed/${videoId}`
            : null;

          const standardized = {
            title: !isYoutube ? item.title?.[0] || "No title" : item?.title,
            description: !isYoutube
              ? cleanText(item.description?.[0]) || ""
              : "",
            url: !isYoutube ? item.link?.[0] || "No URL" : item?.link,
            source: !isYoutube ? feed.source : item?.author,
            publishedAt: publishedAt.toISOString(),
            category: key,
            image,
            author,
            slug: !isYoutube
              ? slugify(item.title?.[0] || "untitled", {
                  lower: true,
                  strict: true,
                }) +
                "-" +
                Date.now()
              : slugify(item.title || "untitled", {
                  lower: true,
                  strict: true,
                }) +
                "-" +
                Date.now(),
            video: embedUrl,
          };

          const exists = await News.findOne({ url: standardized.url });
          if (!exists) {
            await News.create(standardized);
            newArticles++;
          }
          totalArticles++;
        } catch (articleError) {
          console.error(
            `Error processing article from ${feed.source}:`,
            articleError.message
          );
        }
      }
      console.log(`Processed ${feed.source}: ${items.length} articles`);
    } catch (feedError) {
      console.error(`Error fetching ${feed?.source}:`, feedError.message);
      errors.push(`Failed to fetch ${feed.source}: ${feedError.message}`);
    }
  }
}

const LATEST_RSS_FEEDS = [
  RSS_FIELDS.BBC,
  RSS_FIELDS.REUTERS,
  RSS_FIELDS.PUNCH,
  RSS_FIELDS.GUARDIAN,
  RSS_FIELDS.VANGUARD,
  RSS_FIELDS.DAILY_TRUST,
  RSS_FIELDS.PREMIUM_TIMES,
];

async function fetchAndUpdateLatestNewsFromRss() {
  await fetchAndUpdateDB(LATEST_RSS_FEEDS, "latest");
}

const ENTERTAINMENT_RSS_FEEDS = [
  RSS_FIELDS.BELLA_NAIJA,
  RSS_FIELDS.GIST_LOVER,
  RSS_FIELDS.GIST_MANIA,
  RSS_FIELDS.OKAY_AFRICA,
  RSS_FIELDS.BBC_AFRICA,
  RSS_FIELDS.NPR_WORLD,
];

async function fetchAndUpdateEntertainmentNewsFromRss() {
  await fetchAndUpdateDB(ENTERTAINMENT_RSS_FEEDS, "entertainment");
}

const NAIJA_RSS_FEEDS = [
  RSS_FIELDS.VANGUARD,
  RSS_FIELDS.PREMIUM_TIMES,
  RSS_FIELDS.DAILY_POST_NIGERIA,
  RSS_FIELDS.NAIJA_NEWS,
  RSS_FIELDS.PULSE_NIGERIA,
  RSS_FIELDS.PUNCH,
];

async function fetchAndUpdateNaijaNewsFromRss() {
  await fetchAndUpdateDB(NAIJA_RSS_FEEDS, "naija");
}

const SPORTS_RSS_FEEDS = [
  RSS_FIELDS.BBC_SPORT,
  RSS_FIELDS.ESPN,
  RSS_FIELDS.THE_SCORE,
  RSS_FIELDS.SB_NATION,
  RSS_FIELDS.GOAL,
  RSS_FIELDS.GUARDIAN_SPORTS,
  RSS_FIELDS.VANGUARD_SPORTS,
  RSS_FIELDS.PREMIUM_TIMES_SPORTS,
  RSS_FIELDS.DAILY_POST_NIGERIA_SPORTS,
  RSS_FIELDS.NAIJA_NEWS_SPORTS,
  RSS_FIELDS.PULSE_NIGERIA_SPORTS,
];

async function fetchAndUpdateSportsNewsFromRss() {
  await fetchAndUpdateDB(SPORTS_RSS_FEEDS, "sport");
}

const GENERAL_POLITICS_RSS_FEEDS = [
  RSS_FIELDS.BBC_AFRICA,
  RSS_FIELDS.AL_JAZERA_WORLD,
  RSS_FIELDS.THIS_DAY_POLITICS,
  RSS_FIELDS.GUARDIAN_NIGERIA_POLITICS,
  RSS_FIELDS.BLOOMBERG_POLITICS,
  RSS_FIELDS.PREMIUM_TIMES_POLITICS,
  RSS_FIELDS.NAIJA_NEWS_POLITICS,
];

async function fetchAndUpdateGeberalPoliticsNewsFromRss() {
  await fetchAndUpdateDB(GENERAL_POLITICS_RSS_FEEDS, "general-politics");
}

const GOSSIP_RSS_FEEDS = [
  RSS_FIELDS.TMZ,
  RSS_FIELDS.ONTD,
  RSS_FIELDS.HOLLYWOOD_LIFE,
  RSS_FIELDS.VANGUARD_ENTERTAINMENT,
  RSS_FIELDS.PREMIUM_TIMES_ENTERTAINMENT,
  RSS_FIELDS.DAILY_POST_NIGERIA_ENTERTAINMENT,
  RSS_FIELDS.NAIJA_NEWS_ENTERTAINMENT,
];

const fetchAndUpdateGossipNewsFromRss = async () => {
  await fetchAndUpdateDB(GOSSIP_RSS_FEEDS, "gossip");
};

const DIASPORA_RSS_FEEDS = [
  RSS_FIELDS.AL_JAZERA_WORLD,
  RSS_FIELDS.GUARDIAN_DIASPORA,
  RSS_FIELDS.THE_AFRICA_REPORT,
  RSS_FIELDS.REUTERS_WORLD,
  RSS_FIELDS.BBC_AFRICA,
];

const fetchAndUpdateDiasporaNewsFromRss = async () => {
  await fetchAndUpdateDB(DIASPORA_RSS_FEEDS, "diaspora");
};

const AFRICA_ECONOMY_RSS_FEEDS = [
  RSS_FIELDS.BLOOMBERG_AFRICA_BUSINESS,
  RSS_FIELDS.PUNCH_BUSINESS,
  RSS_FIELDS.GUARDIAN_BUSINESS,
  RSS_FIELDS.VANGUARD_BUSINESS,
  RSS_FIELDS.PREMIUM_TIMES_BUSINESS,
  RSS_FIELDS.DAILY_POST_BUSINESS,
  RSS_FIELDS.THIS_DAY_BUSINESS,
  RSS_FIELDS.THE_SUN_NIGERIA_BUSINESS,
  RSS_FIELDS.NIGERIA_TRIBUNE_BUSINESS,
];

const fetchAndUpdateAfricanEconomyNewsFromRss = async () => {
  await fetchAndUpdateDB(AFRICA_ECONOMY_RSS_FEEDS, "african-economy");
};

const TRENDING_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.BBC_VIDEO,
  RSS_FIELDS.ARISE_VIDEO,
  RSS_FIELDS.CHANNELS_VIDEO,
];

const fetchAndUpdateVideoNewsFromRss = async () => {
  await fetchAndUpdateDB(TRENDING_NEWS_VIDEO_RSS_FEEDS, "video", true);
};

const POLITICS_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.PUNCH_POLITICS,
  RSS_FIELDS.GUARDIAN_NIGERIA_POLITICS,
  RSS_FIELDS.VANGUARD_POLITICS,
  RSS_FIELDS.PREMIUM_TIMES_POLITICS,
  RSS_FIELDS.DAILY_POST_NIGERIA_POLITICS,
  RSS_FIELDS.CHANNELS_TV_POLITICS,
  RSS_FIELDS.THIS_DAY_POLITICS,
  RSS_FIELDS.THE_SUN_POLITICS,
  RSS_FIELDS.NIGERIAN_TRIBUNE_POLITICS,
  RSS_FIELDS.ARISE_NEWS_POLITICS,
];

const fetchAndUpdatePoliticsNewsFromRss = async () => {
  await fetchAndUpdateDB(POLITICS_NEWS_VIDEO_RSS_FEEDS, "politics");
};

const GHANA_NEWS_VIDEO_RSS_FEEDS = [RSS_FIELDS.MY_JOY_ONLINE];

const fetchAndUpdateGhanaNewsFromRss = async () => {
  await fetchAndUpdateDB(GHANA_NEWS_VIDEO_RSS_FEEDS, "ghana");
};

const SA_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.DAILY_MAVERICK,
  RSS_FIELDS.MAIL_AND_GUARDIAN,
];

const fetchAndUpdateSaNewsFromRss = async () => {
  await fetchAndUpdateDB(SA_NEWS_VIDEO_RSS_FEEDS, "sa");
};

const MORROCCO_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.HESPRESS,
  RSS_FIELDS.L_ECONOMISTE,
  RSS_FIELDS.L_AUJOURD_HUI_LE_MAROC,
];

const fetchAndUpdateMorroccoNewsFromRss = async () => {
  await fetchAndUpdateDB(MORROCCO_NEWS_VIDEO_RSS_FEEDS, "morrocco");
};

const ETHIOPIA_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.CAPITAL,
  RSS_FIELDS.WALTAINFO,
  RSS_FIELDS.ADDIS_FORTUNE,
];

const fetchAndUpdateEthiopiaNewsFromRss = async () => {
  await fetchAndUpdateDB(ETHIOPIA_NEWS_VIDEO_RSS_FEEDS, "ethiopia");
};

const KENYA_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.KENYA_NEWS_AGENCY,
  RSS_FIELDS.KENYANS,
  RSS_FIELDS.NAIROBI_WIRE,
];

const fetchAndUpdateKenyaNewsFromRss = async () => {
  await fetchAndUpdateDB(KENYA_NEWS_VIDEO_RSS_FEEDS, "kenya");
};

const EGYPT_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.DAILY_NEWS_EGYPT,
  RSS_FIELDS.EGYPT_INDEPENDENT,
  RSS_FIELDS.EGYPTION_STREET,
];

const fetchAndUpdateEgyptNewsFromRss = async () => {
  await fetchAndUpdateDB(EGYPT_NEWS_VIDEO_RSS_FEEDS, "egypt");
};

const ALGERIA_NEWS_VIDEO_RSS_FEEDS = [
  RSS_FIELDS.ALGERIA_PRESS_SERVICE,
  RSS_FIELDS.CAERT,
];

const fetchAndUpdateAlgeriaNewsFromRss = async () => {
  await fetchAndUpdateDB(ALGERIA_NEWS_VIDEO_RSS_FEEDS, "algeria");
};

const AFRICA_NEWS_RSS_FEEDS = [
  RSS_FIELDS.AFRICA_NEWS,
  RSS_FIELDS.ALL_AFRICA,
  RSS_FIELDS.HOW_WE_MADE_IT_IN_AFRICA,
];

const fetchAndUpdateAfricaNewsFromRss = async () => {
  await fetchAndUpdateDB(AFRICA_NEWS_RSS_FEEDS, "africa");
};

const ECONOMY_NEWS_RSS_FEEDS = [
  RSS_FIELDS.ECONOMIC_TIMES,
  RSS_FIELDS.FINANCIAL_TIMES,
  RSS_FIELDS.CNBC_ECONOMY,
];

const fetchAndUpdateEconomyNewsFromRss = async () => {
  await fetchAndUpdateDB(ECONOMY_NEWS_RSS_FEEDS, "economy");
};

const ENERGY_AND_POWER_NEWS_RSS_FEEDS = [
  RSS_FIELDS.ENERGY_CENTRAL,
  RSS_FIELDS.ESI,
  RSS_FIELDS.AFRICA_ENERGY_PORTAL,
  RSS_FIELDS.SWEET_CRUDE_REPORTS,
];

const fetchAndUpdateEnergyNewsFromRss = async () => {
  await fetchAndUpdateDB(ENERGY_AND_POWER_NEWS_RSS_FEEDS, "energy");
};

const BUSINESS_NEWS_RSS_FEEDS = [
  RSS_FIELDS.AFRICA_BUSINESS_INSIDER,
  RSS_FIELDS.BUSINESS_DAY,
  RSS_FIELDS.NAIRA_METERICS,
  RSS_FIELDS.CNBC_ECONOMY,
  RSS_FIELDS.FINANCIAL_TIMES,
  RSS_FIELDS.DAILY_POST_BUSINESS,
  RSS_FIELDS.PREMIUM_TIMES_BUSINESS,
];

const fetchAndUpdateBusinessNewsFromRss = async () => {
  await fetchAndUpdateDB(BUSINESS_NEWS_RSS_FEEDS, "business");
};

const CRYPOT_NEWS_RSS_FEEDS = [
  RSS_FIELDS.COINDESK_TOP_STORIES,
  RSS_FIELDS.COINTELEGRAPH,
  RSS_FIELDS.BITCOIN_MAGAZINE,
  RSS_FIELDS.NEWSBTC,
  RSS_FIELDS.DECRYPT,
  RSS_FIELDS.BLOCKONOMI,
  RSS_FIELDS.CRYPTOBRIEFING,
  RSS_FIELDS.THE_BLOCK,
  RSS_FIELDS.DAILY_HODL,
];

const fetchAndUpdateCryptoNewsFromRss = async () => {
  await fetchAndUpdateDB(CRYPOT_NEWS_RSS_FEEDS, "crypto");
};

const GAMING_RSS_FEEDS = [
  RSS_FIELDS.IGN_GAMING_NEWS,
  RSS_FIELDS.GAMESPOT_NEWS,
  RSS_FIELDS.KOTAKU,
  RSS_FIELDS.POLYGON_NEWS,
  RSS_FIELDS.PCGAMER_NEWS,
  RSS_FIELDS.NINTENDO_LIFE,
  RSS_FIELDS.PUSH_SQUARE,
  RSS_FIELDS.XBOXLIFE,
];

const fetchAndUpdateGamingNews = async () => {
  await fetchAndUpdateDB(GAMING_RSS_FEEDS, "gaming");
};

const FX_RSS_FEEDS = [
  RSS_FIELDS.DAILYFX_NEWS,
  RSS_FIELDS.FXSTREET_NEWS,
  RSS_FIELDS.INVESTING_COM_FOREX_NEWS,
  RSS_FIELDS.FOREXLIVE_NEWS,
  RSS_FIELDS.FXNEWSGROUP,
  RSS_FIELDS.BABYPIPS_NEWS,
];

const fetchAndUpdateFxNews = async () => {
  await fetchAndUpdateDB(FX_RSS_FEEDS, "fx");
};

const TECH_RSS_FEEDS = [
  RSS_FIELDS.TECHCRUNCH,
  RSS_FIELDS.CNET_NEWS,
  RSS_FIELDS.ARS_TECHNICA,
  RSS_FIELDS.ENGADGET,
  RSS_FIELDS.THE_NEXT_WEB,
  RSS_FIELDS.ZDNET_TECH,
  RSS_FIELDS.MASHABLE_TECH,
  RSS_FIELDS.TECHRADAR,
];

const fetchAndUpdateTechNews = async () => {
  await fetchAndUpdateDB(TECH_RSS_FEEDS, "tech");
};

const BB_NAIJA_RSS_FEEDS = [RSS_FIELDS.NEWS_NOW_BB_NAIJA];

const fetchAndUpdateBbNaijaNews = async () => {
  await fetchAndUpdateDB(BB_NAIJA_RSS_FEEDS, "bb-naija");
};

cron.schedule("*/20 * * * *", async () => {
  try {
    await fetchAndUpdateLatestNewsFromRss();
    await fetchAndUpdateEntertainmentNewsFromRss();
    await fetchAndUpdateNaijaNewsFromRss();
    await fetchAndUpdateSportsNewsFromRss();
    await fetchAndUpdateGeberalPoliticsNewsFromRss();
    await fetchAndUpdateGossipNewsFromRss();
    await fetchAndUpdateDiasporaNewsFromRss();
    await fetchAndUpdateAfricanEconomyNewsFromRss();
    await fetchAndUpdateVideoNewsFromRss();
    await fetchAndUpdatePoliticsNewsFromRss();
    await fetchAndUpdateGhanaNewsFromRss();
    await fetchAndUpdateSaNewsFromRss();
    await fetchAndUpdateEthiopiaNewsFromRss();
    await fetchAndUpdateMorroccoNewsFromRss();
    await fetchAndUpdateKenyaNewsFromRss();
    await fetchAndUpdateEgyptNewsFromRss();
    await fetchAndUpdateAlgeriaNewsFromRss();
    await fetchAndUpdateAfricaNewsFromRss();
    await fetchAndUpdateEconomyNewsFromRss();
    await fetchAndUpdateEnergyNewsFromRss();
    await fetchAndUpdateBusinessNewsFromRss();
    await fetchAndUpdateCryptoNewsFromRss();
    await fetchAndUpdateGamingNews();
    await fetchAndUpdateFxNews();
    await fetchAndUpdateTechNews();
    await fetchAndUpdateBbNaijaNews();
    console.log("Cron job completed successfully");
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});

cron.schedule("0 0 * * *", async () => {
  const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const oldNews = await News.find({ publishedAt: { $lt: cutoff } }, "_id");
  const oldNewsIds = oldNews.map((n) => n._id);

  await News.deleteMany({ _id: { $in: oldNewsIds } });

  await Comments.deleteMany({ newsId: { $in: oldNewsIds } });

  console.log("Deleted old news and related comments");
});

module.exports = {
  fetchAndUpdateLatestNewsFromRss,
  fetchAndUpdateEntertainmentNewsFromRss,
  fetchAndUpdateNaijaNewsFromRss,
  fetchAndUpdateSportsNewsFromRss,
  fetchAndUpdateGeberalPoliticsNewsFromRss,
  fetchAndUpdateGossipNewsFromRss,
  fetchAndUpdateDiasporaNewsFromRss,
  fetchAndUpdateAfricanEconomyNewsFromRss,
  fetchAndUpdateVideoNewsFromRss,
  fetchAndUpdatePoliticsNewsFromRss,
  fetchAndUpdateGhanaNewsFromRss,
  fetchAndUpdateSaNewsFromRss,
  fetchAndUpdateEthiopiaNewsFromRss,
  fetchAndUpdateMorroccoNewsFromRss,
  fetchAndUpdateKenyaNewsFromRss,
  fetchAndUpdateEgyptNewsFromRss,
  fetchAndUpdateAlgeriaNewsFromRss,
  fetchAndUpdateAfricaNewsFromRss,
  fetchAndUpdateEconomyNewsFromRss,
  fetchAndUpdateEnergyNewsFromRss,
  fetchAndUpdateBusinessNewsFromRss,
  fetchAndUpdateCryptoNewsFromRss,
  fetchAndUpdateGamingNews,
  fetchAndUpdateFxNews,
  fetchAndUpdateTechNews,
  fetchAndUpdateBbNaijaNews,
};
