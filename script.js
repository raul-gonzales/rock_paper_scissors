//-------------------------    MAIN   -----------------------
console.log("Game: Rock, Paper, Scissors!");

let humanScore = 0,
  computerScore = 0;

playGame();

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

// Get human choice by prompt
function getHumanChoice() {
  let humanChoice = prompt("Type 'Rock', 'Paper', or 'Scissors'");
  return humanChoice;
}

// Play a round of RPS
function playRound(humanChoice, computerChoice) {
  let humanSelection = humanChoice.toUpperCase(),
    computerSelection = computerChoice;
  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
    return;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "PAPER") ||
    (humanSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (humanSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    computerScore++;
  } else if (
    (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (humanSelection === "PAPER" && computerSelection === "ROCK") ||
    (humanSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    humanScore++;
  } else {
    console.log(`ERROR: Invalid choice!`);
  }
}

// Play a game of RPS, total of 5 rounds
function playGame() {
  let counter = 0;
  let winner;
  while (counter < 5) {
    let humanSelection = getHumanChoice(),
      computerSelection = getComputerChoice();

    console.log(`Your choice:\t\t${humanSelection.toUpperCase()}`);
    console.log(`Computer choice:\t${computerSelection.toUpperCase()}`);

    playRound(humanSelection, computerSelection);

    if (counter === 4) {
      console.log(
        `\n\tFinal Scores\nUser\t-\tComputer\n\t${humanScore}\t-\t${computerScore}`
      );
      announceWinner("PLAYER", "COMPUTER", humanScore, computerScore);
    }
    counter++;
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
