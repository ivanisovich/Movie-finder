const express = require("express");
const path = require("path");
const { movieRoutes, searchRoutes, configurationRoutes } = require("./routes");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use("/", [movieRoutes, searchRoutes, configurationRoutes]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("*", function (req, res) {
    res.send("Server is used only as an API server in dev mode.");
  });
}

app.use(errorHandler);

module.exports = app;
