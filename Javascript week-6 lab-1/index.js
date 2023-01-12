const questionAnswer = [
  {
    question: "What is type of Array?",
    answer1: "Array",
    answer2: "Object",
    answer3: "Number",
    answer4: "custom",
    correctAnswer: "Object",
  },
  {
    question: "Evaluate 6/0 ?",
    answer1: "0",
    answer2: "Infinity",
    answer3: "-Infinity",
    answer4: "NaN",
    correctAnswer: "Infinity",
  },
  {
    question: "How to prevent callback hell ?",
    answer1: "Using Promise",
    answer2: "Using class and methods",
    answer3: "Using setTimeOut",
    answer4: "Using setInterval",
    correctAnswer: "Using Promise",
  },
  {
    question: "Which method of class called on instantiation ?",
    answer1: "Constructor",
    answer2: "Get",
    answer3: "Set",
    answer4: "Initialize",
    correctAnswer: "Constructor",
  },
];

const questionElement = document.getElementById("question");
const progressElement = document.getElementById("progress");
const choice0 = document.getElementById("choice0");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const quiz = document.getElementById("quiz");
const markScore = document.getElementById("score");

let counter = 0;

function displayQuestionAnswer(counter) {
  questionElement.innerHTML = questionAnswer[counter].question;
  choice0.innerHTML = questionAnswer[counter].answer1;
  choice1.innerHTML = questionAnswer[counter].answer2;
  choice2.innerHTML = questionAnswer[counter].answer3;
  choice3.innerHTML = questionAnswer[counter].answer4;
  progressElement.innerHTML = `Question ${counter + 1} of ${
    questionAnswer.length
  }`;
}

displayQuestionAnswer(counter);

const markForEachQuestion = 10;
const totalMark = questionAnswer.length * markForEachQuestion;
let markSecured = 0;

function answerClick(choice) {
  if (
    document.getElementById(choice).innerHTML ===
      questionAnswer[counter].correctAnswer &&
    counter < questionAnswer.length
  ) {
    markSecured += markForEachQuestion;
  }
  counter++;
  if (counter < questionAnswer.length) {
    displayQuestionAnswer(counter);
  } else {
    quiz.style.display = "none";
    markScore.innerHTML = `Congratulation you secured ${markSecured} marks.<br/>Your pass percentage ${
      (markSecured / totalMark) * 100
    }%`;
  }
}
