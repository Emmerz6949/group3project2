// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const axios = require("axios");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index");
  });

  app.get("/quiz/:id", (req, res) => {
    const quizURL = `https://opentdb.com/api.php?amount=10&category=${req.params.id}&difficulty=easy&type=multiple`;

    axios.get(quizURL).then(results => {
      /*  console.log("results: ", results.data.results); */

      const trivia = { results: results.data.results };

      const formattedTrivia = results.data.results.map(data => {
        return escapeHtml(data.question);
        //return data;
      });

      console.log("formattedTrivia: ", formattedTrivia);
      /* 
      console.log("results.data.results.length: ", results.data.results.length); */

      /* 
      for (i = 0; i < results.data.results.length; i++) {
        let formQuest = escapeHtml(results.data.results[i].question);
        trivia.push(formQuest);
      } */

      function escapeHtml(text) {
        return text
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'");
      }

      //console.log("trivia: ", formattedTrivia);

      res.render("quiz", formattedTrivia);
    });
  });

  /*  //added 3:10pm 9/5 MS
   app.get("/quiz", (req, res) => 
   {
    // let variable = //axios to get all the questions
       res.render("quiz");
   }); */

  app.get("/score", (req, res) => {
    res.render("score");
  });

  //todo: update "sendFile" to res.render("handlebar page") equivelent to the html page
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
