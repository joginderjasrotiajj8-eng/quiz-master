const questions = [
  {
    question: "Which is the capital of India?",
    options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: 2
  },
  {
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Which is the largest ocean?",
    options: ["Indian", "Atlantic", "Arctic", "Pacific"],
    answer: 3
  },
  {
    question: "What is 5 × 5?",
    options: ["10", "15", "20", "25"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("home").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  document.getElementById("question").textContent = q.question;
  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    options.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("finalScore").textContent =
    `${score} / ${questions.length}`;
}
