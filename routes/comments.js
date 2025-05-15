const express = require("express");
const { addComment, getComments } = require("../controllers/comment");

const router = express.Router();

router.post("/comments", addComment);
router.get("/comments/:id", getComments);

module.exports = router;
