const express = require("express");

const path = require("path");

const fs = require("fs");

const app = express();

const localhost = "127.0.0.1";

const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  res.render("restaurants");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);

  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.listen(3000, console.log(`Listening on https://${localhost}:${port}`));
