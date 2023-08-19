const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const userGuessInput = document.getElementById("userGuess");
const guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(userGuessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts`;
    message.style.color = "green";
    userGuessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Try a higher number";
    message.style.color = "red";
  } else {
    message.textContent = "Try a lower number";
    message.style.color = "red";
  }
});
