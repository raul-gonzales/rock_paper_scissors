//-------------------------    MAIN   -----------------------

// Set initial scores
let humanScore = 0,
  computerScore = 0;

// DOM variables
// Get container for buttons and result display
const buttonsContainer = document.querySelector("#buttons-container");
const resultDisplay = document.querySelector(".result-display");

// Initialize result display content
const result = document.createElement("div");

// Initialize score content
const scores = document.querySelector(".scores");
let scoresText = document.createElement("p");

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
    // Display score
    displayScores(humanScore, computerScore);
    // Select winner after 5 wins, then reset score
    checkWinner(humanScore, computerScore);
  });
});

//----------------------    FUNCTIONS   --------------------

// Get computer choice using a random number generator
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

  if (humanScore === 0 && computerScore === 0) {
    result.innerText = "";
  }

  if (humanSelection === computerSelection) {
    result.classList.add("result");
    result.innerText += "It's a tie!\n";
    resultDisplay.appendChild(result);
    return;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "PAPER") ||
    (humanSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (humanSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    result.classList.add("result");
    result.innerText += `You lose! ${computerSelection} beats ${humanSelection}\n`;
    resultDisplay.appendChild(result);
    computerScore++;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK") ||
    (humanSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result.classList.add("result");
    result.innerText += `You win! ${humanSelection} beats ${computerSelection}\n`;
    resultDisplay.appendChild(result);
    humanScore++;
  } else {
    result.classList.add("result");
    result.innerText += `ERROR: Invalid choice!\n`;
    resultDisplay.appendChild(result);
  }
}

function checkWinner(humanScore, computerScore) {
  if (computerScore === 5) {
    result.classList.add("winner-result");
    result.innerText = "YOU LOSE!\n";
    resultDisplay.appendChild(result);
    resetScores();
  } else if (humanScore === 5) {
    result.classList.add("winner-result");
    result.innerText = "YOU WIN!\n";
    resultDisplay.appendChild(result);
    resetScores();
  }
}

function displayScores(humanScore, computerScore) {
  scoresText.classList.add("score-display");
  scoresText.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
  scores.appendChild(scoresText);
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}
