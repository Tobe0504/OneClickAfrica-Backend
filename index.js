const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const news = require("./routes/news");
const comments = require("./routes/comments");

// Mongo DB
mongoose
  .connect(process.env.MONGO_DB_CONNECTION_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();
const PORT = process.env.PORT || 5001;

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/news", news);
app.use("/api/comments", comments);

// Base route
app.get("/", (req, res) => {
  res.send("One Click Africa is Running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
