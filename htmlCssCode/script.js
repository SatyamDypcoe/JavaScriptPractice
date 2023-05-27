// Questions data
const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", options: [1, 2, 3, 4, 5] },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", options: [1, 2, 3, 4, 5] },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", options: [1, 2, 3, 4, 5] },
  { id: 4, text: "On a scale of 1-10, how would you recommend us to your friends and family?", type: "rating", options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 5, text: "What could we do to improve our service?", type: "text", options: [] }
];

// Current survey state
let currentQuestionIndex = 0;
let answers = [];

// Elements
const welcomeScreen = document.getElementById("welcome-screen");
const startButton = document.getElementById("start-btn");
const surveyScreen = document.getElementById("survey-screen");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const ratingContainer = document.getElementById("rating-container");
const textAnswer = document.getElementById("text-answer");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const skipButton = document.getElementById("skip-btn");
const completionScreen = document.getElementById("completion-screen");

// Display the current question
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionNumber.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  questionText.textContent = question.text;

  if (question.type === "rating") {
    ratingContainer.style.display = "block";
    textAnswer.style.display = "none";
    prevButton.style.display = currentQuestionIndex === 0 ? "none" : "inline";
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
    skipButton.style.display = "none";
  } else if (question.type === "text") {
    ratingContainer.style.display = "none";
    textAnswer.style.display = "block";
    prevButton.style.display = currentQuestionIndex === 0 ? "none" : "inline";
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
    skipButton.style.display = "inline";
  }
}

// Save the answer in the answers array
function saveAnswer() {
  const question = questions[currentQuestionIndex];
  let answer;
  
  if (question.type === "rating") {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
      answer = parseInt(selectedRating.value);
    }
  } else if (question.type === "text") {
    answer = textAnswer.value;
  }

  answers.push({ questionId: question.id, answer });
}

// Handle the "Next" button click
function nextQuestion() {
  saveAnswer();
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    surveyScreen.style.display = "none";
    completionScreen.style.display = "block";
    // Save answers to the database or local storage here
  }
}

// Handle the "Previous" button click
function previousQuestion() {
  saveAnswer();
  currentQuestionIndex--;
  displayQuestion();
}

// Handle the "Skip" button click
function skipQuestion() {
  saveAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    surveyScreen.style.display = "none";
    completionScreen.style.display = "block";
    // Save answers to the database or local storage here
  }
}

// Event listeners
startButton.addEventListener("click", function () {
  welcomeScreen.style.display = "none";
  surveyScreen.style.display = "block";
  displayQuestion();
});

nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", previousQuestion);
skipButton.addEventListener("click", skipQuestion);
