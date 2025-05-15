const { default: mongoose } = require("mongoose");

const Comments = mongoose.Schema(
  {
    comment: { type: String, required: false },
    newsId: { type: String, required: false },
    name: { type: String, required: false },
    isActive: { type: Boolean, required: true, default: true },
    userIp: { type: String, required: true },
  },
  { timeStamp: true }
);

module.exports = {
  Comments: mongoose.model("Comments", Comments),
};
