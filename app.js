const express = require("express");

const path = require("path");

const fs = require("fs");

const app = express();

const localhost = "127.0.0.1";

const port = 3000;

const defaultRoutes = require("./routes/defaultRoutes");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/", defaultRoutes);

app.listen(3000, console.log(`Listening on https://${localhost}:${port}`));
