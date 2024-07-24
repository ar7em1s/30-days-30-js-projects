const questions = [
  {
    question: "John Paul Jones was bassist and keyboardist for what rock band?",
    answers: [
      { text: "Black Sabbath", correct: false },
      { text: "Deep Purple", correct: false },
      { text: "Led Zeppelin", correct: true },
      { text: "The Beatles", correct: false },
    ],
  },
  {
    question: "What is the name of the musician best known for his 1993 song 'What is Love'?",
    answers: [
      { text: "Eminem", correct: false },
      { text: "Haddaway", correct: true },
      { text: "The Beatles", correct: false },
      { text: "Ricky Martin", correct: false },
    ],
  },
  {
    question: "What Creedence Clearwater Revival song became a signature song for Ike & Tina Turner?",
    answers: [
      { text: "Proud Mary", correct: true },
      { text: "Fortunate Son", correct: false },
      { text: "Cotton Fields", correct: false },
      { text: "Someday Never Comes", correct: false },
    ],
  },
  {
    question: "The film 'Casablanca' takes place during which war?",
    answers: [
      { text: "Vietnam War", correct: false },
      { text: "World War II", correct: true },
      { text: "American Civil War", correct: false },
      { text: "World War I", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIdx = 0;
let score = 0;

function startQuiz() {
  currentQuestionIdx = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIdx];
  let questionNo = currentQuestionIdx + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

startQuiz();
