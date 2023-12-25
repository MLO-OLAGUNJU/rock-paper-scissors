const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = toNormalCase(userChoice);
    generateComputerChoice();
  })
);

// this function is to capitalize first alphabet of the users choice
const toNormalCase = (userChoice) => {
  return `${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}`;
};

//this function is to generate computer choice ifykyk

const generateComputerChoice = () => {
  // to generate a number from 1 to 3
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  //or
  //const randomNumber = Math.floor(Math.random() * possibleChoices + 1);

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = toNormalCase(computerChoice);
};

// an array for ifykyk
// const computerChoiceList = ["rock", "paper", "scissors"];

// const generateNumber =;

// console.log(generateComputerChoice());
