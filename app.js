const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.routes");
var bodyParser = require("body-parser");

// Middleware
app.use(express.json());
app.use(cors());

// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testing API
app.get("/", (req, res) => {
  res.send(`==== Your app is running successfully ====`);
});

// User Route
app.use("/api/v1/user", userRoute);

// Unknown API Handle
app.all("*", (req, res) => {
  res.send(`==== Requested Route Not Found ====`);
});

module.exports = app;
