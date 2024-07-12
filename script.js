//-------------------------    MAIN   -----------------------
console.log("Game: Rock, Paper, Scissors!");

let humanScore = 0,
  computerScore = 0;

// Get container divs from document
const buttonsContainer = document.querySelector("#buttons-container");
const resultDisplay = document.querySelector(".result-display");
const result = document.createElement("p");

// Get node list of all rps buttons using rps-button class
const rpsButtons = document.querySelectorAll(".rps-button");

// Using forEach, iterate through each rps button
rpsButtons.forEach((button) => {
  // Add 'click' event listener to each button
  button.addEventListener("click", () => {
    // Set human choice based on the button id
    humanChoice = button.id.toUpperCase();
    // Play a round when a button is clicked
    playRound(humanChoice, getComputerChoice());
    if (computerScore === 5) {
      result.classList.add("winner-result");
      result.textContent = "Computer Wins!";
      resultDisplay.appendChild(result);
    } else if (humanScore === 5) {
      result.classList.add("winner-result");
      result.textContent = "You Win!";
      resultDisplay.appendChild(result);
    }
  });
});

//----------------------    FUNCTIONS   --------------------

// Get computer choice using random number generator
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "ROCK";
  } else if (computerChoice === 1) {
    computerChoice = "PAPER";
  } else if (computerChoice === 2) {
    computerChoice = "SCISSORS";
  }
  return computerChoice;
}

// Play a round of RPS using buttons
function playRound(humanChoice, computerChoice) {
  let humanSelection = humanChoice,
    computerSelection = computerChoice;

  if (humanSelection === computerSelection) {
    result.classList.add("result");
    result.textContent = "It's a tie!";
    resultDisplay.appendChild(result);
    // console.log("It's a tie!");
    return;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "PAPER") ||
    (humanSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (humanSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    result.classList.add("result");
    result.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
    resultDisplay.appendChild(result);
    // console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    computerScore++;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK") ||
    (humanSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result.classList.add("result");
    result.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
    resultDisplay.appendChild(result);
    // console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    humanScore++;
  } else {
    result.classList.add("result");
    result.textContent = `ERROR: Invalid choice!`;
    resultDisplay.appendChild(result);
    // console.log(`ERROR: Invalid choice!`);
  }
}

// Function to announce the winner, set the names and input the final scores
function announceWinner(name1, name2, score1, score2) {
  if (score1 === score2) {
    console.log(`It's a TIE!`);
  } else if (score1 > score2) {
    console.log(`${name1} WINS!`);
  } else {
    console.log(`${name2} WINS!`);
  }
}
