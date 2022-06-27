const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/userModel");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "node js mongodb",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//=====================
// ROUTES
//=====================
// Showing home page
app.get("/", function (req, res) {
  res.render("register", {
    title: "Registration Page",
    name: "",
    email: "",
    password: "",
  });
});
// Showing secret page
app.get("/home", isLoggedIn, function (req, res) {
  res.render("home");
});
// Showing register form
app.get("/register", function (req, res) {
  res.render("register", {
    title: "Registration Page",
    name: "",
    email: "",
    password: "",
  });
});
// Handling user signup
app.post("/register", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  User.register(new User({ email: email }), password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function () {
      req.flash("success", "You have logged in");
      res.render("home");
    });
  });
});
//Showing login form
app.get("/login", function (req, res) {
  res.render("login", {
    title: "Login",
    email: "",
    password: "",
  });
});
//Handling user login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);
//Handling user logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
