let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

async function getQuestions() {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`
    );
    const loadedQuestions = await res.json();
   
    });
    startGame();
  } catch (error) {
    alert(error);
  }
}

getQuestions();

const startGame = () => {
  questionCounter = 0;
  score = 0;
 };

const getNewQuestion = () => {
 
  }
  questionCounter++;


const increment_score = num => {
  score += num;
  scoreText.innerText = score;
};
