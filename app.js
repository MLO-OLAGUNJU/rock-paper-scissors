const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;

// let userName = prompt("Enter your name for this game");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = toNormalCase(userChoice);
    generateComputerChoice();
    getResult();
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

  /* if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  } */

  // or you can tenary operators
  randomNumber === 1
    ? (computerChoice = "rock")
    : randomNumber === 2
    ? (computerChoice = "paper")
    : randomNumber === 3
    ? (computerChoice = "scissors")
    : (computerChoice = "");

  computerChoiceDisplay.innerHTML = toNormalCase(computerChoice);
};

getResult = () => {
  computerChoice === userChoice
    ? (result = "It's draw game!")
    : computerChoice === "rock" && userChoice === "paper"
    ? (result = "You win!")
    : computerChoice === "rock" && userChoice === "scissors"
    ? (result = "You lost!")
    : computerChoice === "paper" && userChoice === "scissors"
    ? (result = "You win!")
    : computerChoice === "paper" && userChoice === "rock"
    ? (result = "You lose!")
    : computerChoice === "scissors" && userChoice === "rock"
    ? (result = "You win!")
    : computerChoice === "scissors" && userChoice === "paper"
    ? (result = "You lose!")
    : (result = "");
  resultDisplay.innerHTML = toNormalCase(result);
};
