const express = require("express");

const app = express();

const localhost = "127.0.0.1";

const port = 3000;

const path = require("path");

app.use(express.static("public"));

app.get("/", function (req, res) {
  const htmlPath = path.join(__dirname, "views", "index.ejs");

  res.render(htmlPath);
});

app.listen(3000, console.log(`Listening on https://${localhost}:${port}`));
