const { News } = require("../models/News");

const getLatestNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "latest" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "latest" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

module.exports = {
  getLatestNews,
};

const getEntertainmentNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "entertainment" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({
      category: "entertainment",
    });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getNaijaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "naija" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "naija" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getSportNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "sport" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "sport" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getGeneralPoliticsNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "general-politics" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({
      category: "general_politics",
    });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getGossipNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "gossip" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "gossip" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getDiasporaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "diaspora" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "diaspora" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getafricanEconomyNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "african-economy" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments();

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getVideoNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "video" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "video" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getPoliticsNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "politics" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "politics" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getGhanaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "ghana" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "ghana" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getSaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "sa" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "sa" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getEthiopiaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "ethiopia" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "ethiopia" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getMorroccoNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "morrocco" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "morrocco" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getKenyaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "kenya" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "kenya" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getEgyptNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "egypt" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "egypt" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getAlgeriaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "algeria" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "algeria" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getAfricaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "africa" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "africa" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getEconomyNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "economy" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "economy" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getEnergyNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "energy" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "energy" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getBusinessNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "business" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "business" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getCryptoNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "crypto" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "crypto" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getGamingNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "gaming" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "gaming" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getFxNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "fx" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "fx" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getTechNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "tech" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "tech" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const getBbNaijaNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const newsData = await News.find({ category: "bb-naija" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({ category: "bb-naija" });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: newsData,
      limit,
    });
  } catch (err) {
    console.error("Error fetching paginated news:", err);
    res.status(500).json({ error: "There was an error fetching news data." });
  }
};

const searchNews = async (req, res) => {
  try {
    const { search } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    if (!search || typeof search !== "string") {
      return res.status(400).json({ message: "Search query is required." });
    }

    const regex = new RegExp(search, "i");
    const skip = (page - 1) * limit;

    const results = await News.find({
      $or: [
        { title: { $regex: regex } },
        { description: { $regex: regex } },
        { author: { $regex: regex } },
      ],
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNewsCount = await News.countDocuments({
      $or: [
        { title: { $regex: regex } },
        { description: { $regex: regex } },
        { author: { $regex: regex } },
      ],
    });

    const totalPages = Math.ceil(totalNewsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: totalNewsCount,
      news: results,
      limit,
    });
  } catch (err) {
    console.error("Search error:", err);
    return res.status(500).json({ message: "Server error during search." });
  }
};

module.exports = {
  getLatestNews,
  getEntertainmentNews,
  getNaijaNews,
  getSportNews,
  getGeneralPoliticsNews,
  getGossipNews,
  getDiasporaNews,
  getVideoNews,
  getafricanEconomyNews,
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
};
