const express = require("express");
const db = require("../models");
const passport = require("../config/passport");

const router = express.Router();

router.get("/api/categories", (req, res) => {
  db.Category.findAll({}).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.post("/api/newScore", (req, res) => {
  db.Score.create(req.body).then(dbScore => {
    res.json(dbScore);
  });
});

router.get("/api/scores", (req, res) => {
  db.Score.findAll({
    include: [db.Category, db.Player]
  }).then(dbScore => {
    res.json(dbScore);
  });
});
g
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});
