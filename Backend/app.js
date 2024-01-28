const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routes/user.route");

require("./config/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the base route!");
});

// Invalid route handler (404 Not Found)
app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

module.exports = app;
