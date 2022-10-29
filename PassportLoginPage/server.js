const express = require("express");
const app = express();
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const User = require("./utils/User");
const UserControl = new User();
require("./utils/PassportConfig")(passport);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  if (req.isAuthenticated()) return res.render("user", req.user);
  res.render("home", {
    errors: []
  });
});

app.post("/register", (req, res) => {
  UserControl.addUser(req.body);
  res.redirect("/");
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(user);
    if (!user) 
      return res.redirect("/");
  else {
    req.logIn(user, err => {
      if(err) throw err;
      res.redirect("/");
    });
  }
  })(req, res, next);
});

app.post("/logout", (req, res) => {
  req.logOut(err => {
    if(err) throw err;
    res.redirect("/");
  });
});

app.listen(80, () => console.log("Server listening..."));
