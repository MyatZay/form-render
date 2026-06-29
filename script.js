var targetNumber = 0;
var attempt = 0;
var maxAttempt = 5;

var guessValue = document.getElementById("guess-value");
var guessButton = document.getElementById("guess-btn");
var restartButton = document.getElementById("restart-btn");
var attemptText = document.getElementById("attempt");
var resultText = document.getElementById("result");

function isNumeric(value) {
  return value !== "" && !isNaN(value);
}

function showRestartOnly() {
  guessValue.value = "";
  attemptText.innerHTML = "0";
  resultText.innerHTML = "";
  guessButton.style.display = "none";
  restartButton.style.display = "inline-block";
}

function restartGame() {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  attempt = 0;

  guessValue.value = "";
  attemptText.innerHTML = attempt;
  resultText.innerHTML = "";
  restartButton.style.display = "none";
  guessButton.style.display = "inline-block";
  guessValue.focus();
}

function finishGame(message) {
  resultText.innerHTML = message;
  guessButton.style.display = "none";
  restartButton.style.display = "inline-block";
}

function makeGuess() {
  var inputValue = guessValue.value;

  if (!isNumeric(inputValue)) {
    return;
  }

  inputValue = Number(inputValue);
  attempt = attempt + 1;
  attemptText.innerHTML = attempt;

  if (inputValue > targetNumber) {
    resultText.innerHTML = inputValue + " is too high";
  } else if (inputValue < targetNumber) {
    resultText.innerHTML = inputValue + " is too low";
  } else {
    finishGame("You WIN");
  }

  if (inputValue !== targetNumber && attempt >= maxAttempt) {
    finishGame("You LOSE");
  }

  guessValue.value = 0;
  guessValue.focus();
}

restartButton.addEventListener("click", restartGame);
guessButton.addEventListener("click", makeGuess);

showRestartOnly();
