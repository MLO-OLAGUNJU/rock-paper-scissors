const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = toNormalCase(userChoice);
  })
);

function toNormalCase(userChoice) {
  return `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}`;
}
