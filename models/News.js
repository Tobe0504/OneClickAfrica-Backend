const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  url: { type: String, required: true, unique: true },
  source: { type: String, required: true },
  publishedAt: { type: String, required: true },
  category: { type: String, default: "latest" },
  image: { type: String },
  slug: { type: String, required: true },
  author: { type: String },
  video: { type: String },
});

module.exports = {
  News: mongoose.model("News", NewsSchema),
};
