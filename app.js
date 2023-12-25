const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", () => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);

const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
