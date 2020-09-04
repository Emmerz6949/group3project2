const db = require("../models");

module.exports = function(app) {
    app.get("/api/categories", function(req, res) {
        db.Category.findAll({}).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.post("/api/newScore", function(req, res) {
        db.Score.create(req.body).then(function(dbScore) {
            res.json(dbScore);
        });
    });

    app.get("/api/scores", function(req, res) {
        db.Score.findAll({
            include: [db.Category, db.Player]
        }).then(function(dbScore) {
            res.json(dbScore);
        });
    });

    app.post("/api/newPlayer", function(req, res) {
        db.Player.create(req.body).then(function(dbPlayer) {
            res.json(dbPlayer);
        });
    });
};
