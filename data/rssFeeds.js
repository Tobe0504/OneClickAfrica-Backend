const RSS_FIELDS = {
  BBC: { source: "bbc", url: "http://feeds.bbci.co.uk/news/rss.xml" },
  REUTERS: {
    source: "reuters",
    url: "https://www.reutersagency.com/feed/?best-topics=top-news",
  },
  PUNCH: { source: "punch", url: "https://rss.app/feeds/yqOoZN9fKWFuTaY8.xml" },
  GUARDIAN: { source: "guardian", url: "https://guardian.ng/feed/" },
  VANGUARD: { source: "vanguard", url: "https://www.vanguardngr.com/feed/" },
  DAILY_TRUST: { source: "dailytrust", url: "https://dailytrust.com/feed/" },
  PREMIUM_TIMES: {
    source: "premiumtimes",
    url: "https://www.premiumtimesng.com/feed",
  },
  BELLA_NAIJA: {
    source: "BellaNaija",
    url: "https://www.bellanaija.com/feed/",
  },
  GIST_LOVER: {
    source: "Gistlover",
    url: "https://www.gistlover.com/feed/",
  },
  GIST_MANIA: {
    source: "Gistmania",
    url: "https://www.gistmania.com/feed",
  },
  OKAY_AFRICA: {
    source: "OkayAfrica",
    url: "https://www.okayafrica.com/rss/",
  },
  BBC_AFRICA: {
    source: "BBC Africa",
    url: "http://feeds.bbci.co.uk/news/world/africa/rss.xml",
  },
  NPR_WORLD: {
    source: "NPR World",
    url: "https://www.npr.org/rss/rss.php?id=1057",
  },
  DAILY_POST_NIGERIA: {
    source: "Daily Post Nigeria",
    url: "https://dailypost.ng/feed/",
  },
  NAIJA_NEWS: {
    source: "Naija News",
    url: "https://www.naijanews.com/feed/",
  },
  PULSE_NIGERIA: {
    source: "Pulse Nigeria",
    url: "https://www.pulse.ng/feed",
  },
  PUNCH_SPORTS: {
    source: "Punch Sports",
    url: "https://punchng.com/topics/sports/feed/",
  },
  GUARDIAN_SPORTS: {
    source: "Guardian Nigeria Sports",
    url: "https://guardian.ng/sport/feed/",
  },
  VANGUARD_SPORTS: {
    source: "Vanguard Sports",
    url: "https://www.vanguardngr.com/category/sports/feed/",
  },
  PREMIUM_TIMES_SPORTS: {
    source: "Premium Times Sports",
    url: "https://www.premiumtimesng.com/category/sports/feed",
  },
  DAILY_POST_NIGERIA_SPORTS: {
    source: "Daily Post Nigeria Sports",
    url: "https://dailypost.ng/sports/feed/",
  },
  NAIJA_NEWS_SPORTS: {
    source: "Naija News Sports",
    url: "https://www.naijanews.com/sports/feed/",
  },
  PULSE_NIGERIA_SPORTS: {
    source: "Pulse Nigeria Sports",
    url: "https://www.pulse.ng/sports/feed",
  },
  ESPN: {
    source: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
  },
  BBC_SPORT: {
    source: "BBC Sport",
    url: "http://feeds.bbci.co.uk/sport/rss.xml",
  },
  THE_SCORE: {
    source: "theScore",
    url: "https://www.thescore.com/feed",
  },
  SB_NATION: {
    source: "SBNation",
    url: "https://www.sbnation.com/rss/index.xml",
  },
  GOAL: {
    source: "Goal.com Africa",
    url: "https://www.goal.com/en-ng/feeds/news?fmt=rss",
  },
  PUNCH_POLITICS: {
    source: "Punch Politics",
    url: "https://punchng.com/topics/politics/feed/",
  },
  GUARDIAN_NIGERIA_POLITICS: {
    source: "Guardian Nigeria Politics",
    url: "https://guardian.ng/category/politics/feed/",
  },
  VANGUARD_POLITICS: {
    source: "Vanguard Politics",
    url: "https://www.vanguardngr.com/category/politics/feed/",
  },
  PREMIUM_TIMES_POLITICS: {
    source: "Premium Times Politics",
    url: "https://www.premiumtimesng.com/category/politics/feed",
  },
  DAILY_POST_NIGERIA_POLITICS: {
    source: "Daily Post Nigeria Politics",
    url: "https://dailypost.ng/politics/feed/",
  },
  NAIJA_NEWS_POLITICS: {
    source: "Naija News Politics",
    url: "https://www.naijanews.com/politics/feed/",
  },
  PULSE_NIGERIA_POLITICS: {
    source: "Pulse Nigeria Politics",
    url: "https://www.pulse.ng/news/politics/feed",
  },
  BBC_AFRICA: {
    source: "BBC Africa",
    url: "http://feeds.bbci.co.uk/news/world/africa/rss.xml",
  },
  AL_JAZERA_WORLD: {
    source: "Al Jazeera World",
    url: "https://www.aljazeera.com/xml/rss/all.xml",
  },
  REUTERS_WORLD: {
    source: "Reuters World",
    url: "https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best",
  },
  THE_AFRICA_REPORT: {
    source: "The Africa Report",
    url: "https://www.theafricareport.com/feed/",
  },
  THIS_DAY_POLITICS: {
    source: "This Day Politics",
    url: "https://www.thisdaylive.com/index.php/category/politics/feed/",
  },
  PUNCH_ENTERTAINMENT: {
    source: "Punch Entertainment",
    url: "https://punchng.com/topics/entertainment/feed/",
  },
  GUARDIAN_ENTERTAINMENT: {
    source: "Guardian Nigeria Life",
    url: "https://guardian.ng/life/feed/",
  },
  VANGUARD_ENTERTAINMENT: {
    source: "Vanguard Entertainment",
    url: "https://www.vanguardngr.com/category/entertainment/feed/",
  },
  PREMIUM_TIMES_ENTERTAINMENT: {
    source: "Premium Times Entertainment",
    url: "https://www.premiumtimesng.com/category/entertainment/feed",
  },
  DAILY_POST_NIGERIA_ENTERTAINMENT: {
    source: "Daily Post Nigeria Entertainment",
    url: "https://dailypost.ng/entertainment/feed/",
  },
  NAIJA_NEWS_ENTERTAINMENT: {
    source: "Naija News Entertainment",
    url: "https://www.naijanews.com/entertainment/feed/",
  },
  PULSE_NIGERIA_ENTERTAINMENT: {
    source: "Pulse Nigeria Entertainment",
    url: "https://www.pulse.ng/entertainment/feed",
  },
  TMZ: {
    source: "TMZ",
    url: "https://www.tmz.com/rss.xml",
  },
  ONTD: {
    source: "Oh No They Didn't (ONTD)",
    url: "https://ohnotheydidnt.livejournal.com/data/rss/",
  },
  PEREZ_HILTON: {
    source: "Perez Hilton",
    url: "https://perezhilton.com/feed/",
  },
  HOLLYWOOD_LIFE: {
    source: "Hollywood Life",
    url: "https://hollywoodlife.com/feed/",
  },
  LINDA_IKEJI: {
    source: "Linda Ikeji Blog",
    url: "https://www.lindaikejisblog.com/feeds/posts/default?alt=rss",
  },
  PUNCH_DIASPORA: {
    source: "Punch Diaspora",
    url: "https://punchng.com/topics/diaspora/feed/",
  },
  GUARDIAN_DIASPORA: {
    source: "Guardian Nigeria Diaspora",
    url: "https://guardian.ng/tag/diaspora/feed/",
  },

  PUNCH_BUSINESS: {
    source: "Punch Business",
    url: "https://punchng.com/topics/business/feed/",
  },
  GUARDIAN_BUSINESS: {
    source: "Guardian Nigeria Business",
    url: "https://guardian.ng/category/business/feed/",
  },
  VANGUARD_BUSINESS: {
    source: "Vanguard Business",
    url: "https://www.vanguardngr.com/category/business/feed/",
  },
  PREMIUM_TIMES_BUSINESS: {
    source: "Premium Times Business",
    url: "https://www.premiumtimesng.com/category/business/feed",
  },
  DAILY_POST_BUSINESS: {
    source: "Daily Post Nigeria Business",
    url: "https://dailypost.ng/business/feed/",
  },
  THIS_DAY_BUSINESS: {
    source: "This Day Business",
    url: "https://www.thisdaylive.com/index.php/category/business/feed/",
  },
  THE_SUN_NIGERIA_BUSINESS: {
    source: "The Sun Nigeria Business",
    url: "https://sunnewsonline.com/category/business/feed/",
  },
  NIGERIA_TRIBUNE_BUSINESS: {
    source: "Nigerian Tribune Business",
    url: "https://tribuneonlineng.com/category/business/feed/",
  },
  BLOOMBERG_AFRICA_BUSINESS: {
    source: "Bloomberg Africa",
    url: "https://www.bloomberg.com/feeds/africa/sitemap_index.xml",
  },

  BBC_VIDEO: {
    source: "BBC News Video",
    url: "https://rss.app/feeds/MIf022p5tmEeApkF.xml",
  },

  ARISE_VIDEO: {
    source: "Arise Video",
    url: "https://rss.app/feeds/YEZ1dorFPfUx5CYP.xml",
  },
  PUNCH_POLITICS: {
    source: "Punch",
    url: "https://rss.app/feeds/dMZkx0Z8KDrVo4ZR.xml",
  },
  GUARDIAN_NIGERIA_POLITICS: {
    source: "Guardian Nigeria Politics",
    url: "https://guardian.ng/category/politics/feed/",
  },
  VANGUARD_POLITICS: {
    source: "Vanguard Politics",
    url: "https://www.vanguardngr.com/category/politics/feed/",
  },
  PREMIUM_TIMES_POLITICS: {
    source: "Premium Times Politics",
    url: "https://www.premiumtimesng.com/category/politics/feed/",
  },
  DAILY_POST_NIGERIA_POLITICS: {
    source: "Daily Post Nigeria Politics",
    url: "https://dailypost.ng/politics/feed/",
  },
  CHANNELS_TV_POLITICS: {
    source: "Channels TV Politics",
    url: "https://www.channelstv.com/category/politics/feed/",
  },
  THIS_DAY_POLITICS: {
    source: "This Day Politics",
    url: "https://www.thisdaylive.com/index.php/category/politics/feed/",
  },
  THE_SUN_POLITICS: {
    source: "The Sun Nigeria Politics",
    url: "https://sunnewsonline.com/category/politics/feed/",
  },
  NIGERIAN_TRIBUNE_POLITICS: {
    source: "Nigerian Tribune Politics",
    url: "https://tribuneonlineng.com/category/politics/feed/",
  },
  ARISE_NEWS_POLITICS: {
    source: "Arise News Politics",
    url: "https://www.arise.tv/category/politics/feed/",
  },

  GHANA_WEB: {
    source: "GhanaWeb News",
    url: "https://www.modernghana.com/rss.xml", // General Ghana news
  },
  MY_JOY_ONLINE: {
    source: "MyJoyOnline News",
    url: "https://www.myjoyonline.com/feed/", // Ghana politics and trending news
  },
  // South Africa
  DAILY_MAVERICK: {
    source: "Daily Maverick",
    url: "https://www.dailymaverick.co.za/dmrss/", // South African news
  },
  MAIL_AND_GUARDIAN: {
    source: "Mail & Guardian",
    url: "https://mg.co.za/section/news/feed/", // South African politics and economics
  },
  // Morocco
  L_ECONOMISTE: {
    source: "L'Economiste",
    url: "https://leconomiste.com/rss-leconomiste",
  },
  L_AUJOURD_HUI_LE_MAROC: {
    source: "Aujourdhui Le Maroc",
    url: "https://aujourdhui.ma/feed",
  },
  HESPRESS: {
    source: "Hespress English",
    url: "https://www.hespress.com/feed",
  },
  // Ethiopia
  CAPITAL: {
    source: "Capital",
    url: "https://capitalethiopia.com/feed/", // Ethiopian government news
  },
  WALTAINFO: {
    source: "Waltainfo",
    url: "https://waltainfo.com/feed/", // Ethiopian politics and social issues
  },
  ADDIS_FORTUNE: {
    source: "Addis Fortune",
    url: "https://addisfortune.news/feed/",
  },
  // Kenya
  KENYA_NEWS_AGENCY: {
    source: "Kenya News Agency",
    url: "https://www.kenyanews.go.ke/feed/", // Kenyan general news
  },
  KENYANS: {
    source: "Kenyans",
    url: "https://www.kenyans.co.ke/feeds/news?_wrapper_format=html", // Kenyan politics and trending news
  },
  NAIROBI_WIRE: {
    source: "Nairobi Wire",
    url: "https://nairobiwire.com/feed",
  },
  // Egypt
  DAILY_NEWS_EGYPT: {
    source: "Daily News Egypt",
    url: "https://dailynewsegypt.com/feed/", // Egyptian news
  },
  EGYPT_INDEPENDENT: {
    source: "Egypt Independent",
    url: "https://www.egyptindependent.com/feed/", // Egyptian politics and culture
  },
  EGYPTION_STREET: {
    source: "Egyptian Streets",
    url: "https://egyptianstreets.com/feed/",
  },
  // Algeria
  ALGERIA_PRESS_SERVICE: {
    source: "Algeria Press Service",
    url: "https://www.aps.dz/en/feed", // Algerian government news
  },
  CAERT: {
    source: "Caert",
    url: "https://www.caert.org.dz/feed/",
  },
  AFRICA_NEWS: {
    source: "Africa News",
    url: "https://www.africanews.com/feed/rss?themes=news",
  },
  ALL_AFRICA: {
    source: "All Africa",
    url: "https://allafrica.com/tools/headlines/rdf/africa/headlines.rdf",
  },
  HOW_WE_MADE_IT_IN_AFRICA: {
    source: "How We Made It In Africa",
    url: "https://www.howwemadeitinafrica.com/feed/",
  },
  ECONOMIC_TIMES: {
    source: "Economic Times",
    url: "https://economictimes.indiatimes.com/News/rssfeeds/1715249553.cms",
  },
  FINANCIAL_TIMES: {
    source: "Financial Times",
    url: "https://www.ft.com/rss/home",
  },
  NEWSMAX_ECONOMY: {
    source: "News Max Economy",
    url: "https://www.newsmax.com/rss/economy/2/",
  },
  CNBC_ECONOMY: {
    source: "CNBC Economy",
    url: "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258",
  },
  ENERGY_CENTRAL: {
    source: "Energy Central",
    url: "https://energycentral.com/rss",
  },
  ESI: {
    source: "ESI",
    url: "https://www.esi-africa.com/feed/",
  },
  AFRICA_ENERGY_PORTAL: {
    source: "Africa Energy Portal",
    url: "https://africa-energy-portal.org/rss.xml",
  },
  NIGERIA_ELECTRICITY_HUB: {
    source: "Nigeeria Electricity Hub",
    url: "https://www.nigeriaelectricityhub.com/feed/",
  },

  SWEET_CRUDE_REPORTS: {
    source: "Sweet Crude Reports",
    url: "https://sweetcrudereports.com/feed/",
  },

  BLOOMBERG_BUSINESS: {
    source: "Bloomberg",
    url: "https://feeds.bloomberg.com/markets/news.rss",
  },

  BLOOMBERG_POLITICS: {
    source: "Bloomberg Politics",
    url: "https://feeds.bloomberg.com/politics/news.rss",
  },

  THE_ECONOMIST: {
    source: "The Economist",
    url: "https://www.economist.com/sections/business/rss.xml",
  },

  AFRICA_BUSINESS_INSIDER: {
    source: "Africa Business Insider",
    url: "https://africa.businessinsider.com/rss",
  },

  BUSINESS_DAY: {
    source: "Business Day",
    url: "https://businessday.ng/feed/",
  },

  NAIRA_METERICS: {
    source: "Naira meterics",
    url: "https://nairametrics.com/feed/",
  },
  COINDESK_TOP_STORIES: {
    source: "CoinDesk Top Stories",
    url: "https://www.coindesk.com/arc/outboundfeeds/rss/",
  },
  COINTELEGRAPH: {
    source: "Cointelegraph",
    url: "https://cointelegraph.com/rss",
  },
  BITCOIN_MAGAZINE: {
    source: "Bitcoin Magazine",
    url: "https://bitcoinmagazine.com/.rss/full/",
  },
  NEWSBTC: {
    source: "NewsBTC",
    url: "https://www.newsbtc.com/feed/",
  },
  CRYPTONEWS: {
    source: "CryptoNews",
    url: "https://cryptonews.com/news/feed",
  },
  DECRYPT: {
    source: "Decrypt",
    url: "https://decrypt.co/feed",
  },
  BLOCKONOMI: {
    source: "Blockonomi",
    url: "https://blockonomi.com/feed/",
  },
  CRYPTOBRIEFING: {
    source: "Crypto Briefing",
    url: "https://cryptobriefing.com/feed/",
  },
  THE_BLOCK: {
    source: "The Block",
    url: "https://www.theblock.co/rss.xml",
  },
  DAILY_HODL: {
    source: "The Daily Hodl",
    url: "https://dailyhodl.com/feed/",
  },
  IGN_GAMING_NEWS: {
    source: "IGN Gaming News",
    url: "https://feeds.ign.com/ign/games-all",
  },
  GAMESPOT_NEWS: {
    source: "GameSpot News",
    url: "https://www.gamespot.com/feeds/news/",
  },
  KOTAKU: {
    source: "Kotaku",
    url: "https://kotaku.com/rss",
  },
  POLYGON_NEWS: {
    source: "Polygon News",
    url: "https://www.polygon.com/rss/index.xml",
  },
  PCGAMER_NEWS: {
    source: "PC Gamer News",
    url: "https://www.pcgamer.com/rss/",
  },
  GAMEINFORMER_NEWS: {
    source: "Game Informer News",
    url: "https://www.gameinformer.com/feed",
  },
  DESTRUCTOID: {
    source: "Destructoid",
    url: "https://www.destructoid.com/rss.xml",
  },
  NINTENDO_LIFE: {
    source: "Nintendo Life",
    url: "https://www.nintendolife.com/feeds/latest",
  },
  PUSH_SQUARE: {
    source: "Push Square (PlayStation)",
    url: "https://www.pushsquare.com/feeds/latest",
  },
  XBOXLIFE: {
    source: "Pure Xbox",
    url: "https://www.purexbox.com/feeds/latest",
  },
  DAILYFX_NEWS: {
    source: "DailyFX News",
    url: "https://www.dailyfx.com/feeds/all",
  },
  FOREXFACTORY_NEWS: {
    source: "Forex Factory News",
    url: "https://www.forexfactory.com/news/rss.php",
  },
  FXSTREET_NEWS: {
    source: "FXStreet News",
    url: "https://www.fxstreet.com/rss/news",
  },
  INVESTING_COM_FOREX_NEWS: {
    source: "Investing.com Forex News",
    url: "https://www.investing.com/rss/news_25.rss",
  },
  REUTERS_FOREX_NEWS: {
    source: "Reuters Forex News",
    url: "https://feeds.reuters.com/reuters/USFXNews",
  },
  BLOOMBERG_CURRENCIES: {
    source: "Bloomberg Currencies",
    url: "https://www.bloomberg.com/feed/podcast/currencies.xml",
  },
  FOREXLIVE_NEWS: {
    source: "ForexLive News",
    url: "https://www.forexlive.com/feed/news/",
  },
  FXNEWSGROUP: {
    source: "FX News Group",
    url: "https://fxnewsgroup.com/feed/",
  },
  BABYPIPS_NEWS: {
    source: "BabyPips News",
    url: "https://www.babypips.com/news/rss",
  },
  FXEMPIRE_FOREX_NEWS: {
    source: "FXEmpire Forex News",
    url: "https://www.fxempire.com/news/forex/feed",
  },
  TECHCRUNCH: {
    source: "TechCrunch",
    url: "https://techcrunch.com/feed/",
  },
  THE_VERGE: {
    source: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
  },
  WIRED_TECH: {
    source: "Wired Tech",
    url: "https://www.wired.com/feed/category/tech/latest/rss",
  },
  CNET_NEWS: {
    source: "CNET News",
    url: "https://www.cnet.com/rss/news/",
  },
  ARS_TECHNICA: {
    source: "Ars Technica",
    url: "http://feeds.arstechnica.com/arstechnica/index",
  },
  ENGADGET: {
    source: "Engadget",
    url: "https://www.engadget.com/rss.xml",
  },
  THE_NEXT_WEB: {
    source: "The Next Web",
    url: "https://thenextweb.com/feed/",
  },
  ZDNET_TECH: {
    source: "ZDNet Tech",
    url: "https://www.zdnet.com/news/rss.xml",
  },
  MASHABLE_TECH: {
    source: "Mashable Tech",
    url: "http://feeds.mashable.com/Mashable",
  },
  TECHRADAR: {
    source: "TechRadar",
    url: "https://www.techradar.com/rss",
  },
  NEWS_NOW_BB_NAIJA: {
    source: "News Now BB Naija",
    url: "https://rss.app/feeds/fErAzw65tSuuSTWQ.xml",
  },
};

module.exports = { RSS_FIELDS };
