const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/categories", (req, res) => {
    db.Category.findAll({}).then(dbCategory => {
      res.json(dbCategory);
    });
  });

  app.post("/api/newScore", (req, res) => {
    db.Score.create(req.body).then(dbScore => {
      res.json(dbScore);
    });
  });

  app.get("/api/scores", (req, res) => {
    db.Score.findAll({
      include: [db.Category, db.User]
    }).then(dbScore => {
      res.json(dbScore);
    });
  });

  app.post("/api/signup", (req, res) => {
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

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
