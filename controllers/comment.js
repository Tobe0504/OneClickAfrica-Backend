const { Comments } = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    const { newsId, name, comment } = req.body;
    const userIp = req.ip;

    if (!newsId || !name || !comment) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingComments = await Comments.countDocuments({
      newsId,
      name,
      userIp,
    });

    if (existingComments >= 2) {
      return res
        .status(403)
        .json({ message: "Comments limit reached for this news item." });
    }

    const newComment = await Comments.create({
      newsId,
      name,
      userIp,
      comment,
      isActive: true,
    });

    return res.status(201).json({
      message: "Comment submitted successfully",
      comement: newComment,
    });
  } catch (error) {
    console.error("Add comment error:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

const getComments = async (req, res) => {
  try {
    const { id } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    if (!id) {
      return res.status(400).json({ message: "Missing required comment id" });
    }

    const comments = await Comments.find({ newsId: id }).sort({
      createdAt: -1,
    });

    const commentsCount = await Comments.countDocuments({ newsId: id });
    const totalPages = Math.ceil(commentsCount / limit);

    return res.status(200).json({
      page,
      totalPages,
      totalItems: commentsCount,
      comments,
      limit,
    });
  } catch (error) {
    console.error("Add comment error:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

module.exports = { addComment, getComments };
