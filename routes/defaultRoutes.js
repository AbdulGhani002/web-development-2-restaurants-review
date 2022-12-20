const express = require("express");

const router = express.Router();

const fs = require("fs");

const path = require("path");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "..", "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);

  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.get("/about", function (req, res) {
  res.render("about");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const filePath = path.join(__dirname, "..", "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);

  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

module.exports = router;
