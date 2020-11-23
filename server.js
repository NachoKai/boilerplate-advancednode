require("dotenv").config();
const express = require("express");
const myDB = require("./connection");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const port = process.env.PORT || 3000;
const app = express();

fccTesting(app);
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.route("/").get((req, res) => {
  res.render("pug/index");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// https://stark-harbor-99507.herokuapp.com/
