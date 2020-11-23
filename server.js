require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const port = process.env.PORT || 3000;
const app = express();

fccTesting(app);
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.route("/").get((req, res) => {
  res.render(process.cwd() + "/views/pug/index", {
    title: "Hello",
    message: "Please login",
  });
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// https://stark-harbor-99507.herokuapp.com/
