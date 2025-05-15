const express = require("express");
const {
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
} = require("../controllers/news.controller");
const {
  getLatestNews,
  getEntertainmentNews,
  getNaijaNews,
  getSportNews,
  getGeneralPoliticsNews,
  getGossipNews,
  getDiasporaNews,
  getafricanEconomyNews,
  getVideoNews,
  getPoliticsNews,
  getGhanaNews,
  getSaNews,
  getEthiopiaNews,
  getMorroccoNews,
  getKenyaNews,
  getEgyptNews,
  getAlgeriaNews,
  getAfricaNews,
  getEconomyNews,
  getEnergyNews,
  getBusinessNews,
  getCryptoNews,
  getGamingNews,
  getFxNews,
  getTechNews,
  getBbNaijaNews,
  searchNews,
} = require("../controllers/getNews.controller");

const router = express.Router();

router.post("/latest-news", fetchAndUpdateLatestNewsFromRss);
router.get("/latest-news", getLatestNews);

router.post("/entertainment-news", fetchAndUpdateEntertainmentNewsFromRss);
router.get("/entertainment-news", getEntertainmentNews);

router.post("/naija-news", fetchAndUpdateNaijaNewsFromRss);
router.get("/naija-news", getNaijaNews);

router.post("/sport-news", fetchAndUpdateSportsNewsFromRss);
router.get("/sport-news", getSportNews);

router.post("/general-politics-news", fetchAndUpdateGeberalPoliticsNewsFromRss);
router.get("/general-politics-news", getGeneralPoliticsNews);

router.post("/gossip-news", fetchAndUpdateGossipNewsFromRss);
router.get("/gossip-news", getGossipNews);

router.post("/diaspora-news", fetchAndUpdateDiasporaNewsFromRss);
router.get("/diaspora-news", getDiasporaNews);

router.post("/african-economy-news", fetchAndUpdateAfricanEconomyNewsFromRss);
router.get("/african-economy-news", getafricanEconomyNews);

router.post("/video-news", fetchAndUpdateVideoNewsFromRss);
router.get("/video-news", getVideoNews);

router.post("/politics-news", fetchAndUpdatePoliticsNewsFromRss);
router.get("/politics-news", getPoliticsNews);

router.post("/ghana-news", fetchAndUpdateGhanaNewsFromRss);
router.get("/ghana-news", getGhanaNews);

router.post("/south-africa-news", fetchAndUpdateSaNewsFromRss);
router.get("/south-africa-news", getSaNews);

router.post("/ethiopia-news", fetchAndUpdateEthiopiaNewsFromRss);
router.get("/ethiopia-news", getEthiopiaNews);

router.post("/morocco-news", fetchAndUpdateMorroccoNewsFromRss);
router.get("/morocco-news", getMorroccoNews);

router.post("/kenya-news", fetchAndUpdateKenyaNewsFromRss);
router.get("/kenya-news", getKenyaNews);

router.post("/egypt-news", fetchAndUpdateEgyptNewsFromRss);
router.get("/egypt-news", getEgyptNews);

router.post("/algeria-news", fetchAndUpdateAlgeriaNewsFromRss);
router.get("/algeria-news", getAlgeriaNews);

router.post("/africa-news", fetchAndUpdateAfricaNewsFromRss);
router.get("/africa-news", getAfricaNews);

router.post("/economy-news", fetchAndUpdateEconomyNewsFromRss);
router.get("/economy-news", getEconomyNews);

router.post("/energy-and-power-industry-news", fetchAndUpdateEnergyNewsFromRss);
router.get("/energy-and-power-industry-news", getEnergyNews);

router.post("/business-news", fetchAndUpdateBusinessNewsFromRss);
router.get("/business-news", getBusinessNews);

router.post("/crypto-news", fetchAndUpdateCryptoNewsFromRss);
router.get("/crypto-news", getCryptoNews);

router.post("/gaming-news", fetchAndUpdateGamingNews);
router.get("/gaming-news", getGamingNews);

router.post("/fx-news", fetchAndUpdateFxNews);
router.get("/fx-news", getFxNews);

router.post("/tech-news", fetchAndUpdateTechNews);
router.get("/tech-news", getTechNews);

router.post("/bb-naija-news", fetchAndUpdateBbNaijaNews);
router.get("/bb-naija-news", getBbNaijaNews);

router.get("/search", searchNews);

module.exports = router;
