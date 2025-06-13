let secretNumber;
let game;


// This fn is the loigc , that  i have developed 
function createGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  return function guess(userGuess) {
    if (userGuess === secretNumber) {
      document.getElementById("secretNumberDisplay").textContent =
        " Correct! The secret number was: " + secretNumber;
      return "You guessed it!";
    } else if (userGuess > secretNumber) {
      return "Too high!";
    } else {
      return "Too low!";
    }
  };
}


// this fn is for the submit buttoon
function submitGuess() {
  const input = document.getElementById("guessInput");
  const guessValue = parseInt(input.value);
  const result = game(guessValue);
  document.getElementById("resultText").textContent = result;
  input.value = "";
}

// i used this fn for resering the game 
function resetGame() {
  game = createGame();
  document.getElementById("resultText").textContent = "";
  document.getElementById("secretNumberDisplay").textContent = "";
  document.getElementById("guessInput").value = "";
}

//i have  enabled guessing with Enter key by using even listener from friday clas 
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("guessInput");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitGuess();
    }
  });

  resetGame();
});
