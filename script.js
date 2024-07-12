//-------------------------    MAIN   -----------------------
console.log("Game: Rock, Paper, Scissors!");

let humanScore = 0,
  computerScore = 0;

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

// // Play a game of RPS, total of 5 rounds
// function playGame() {
//   let counter = 0;
//   let winner;
//   while (counter < 5) {
//     let humanSelection = getHumanChoice(),
//       computerSelection = getComputerChoice();

//     console.log(`Your choice:\t\t${humanSelection.toUpperCase()}`);
//     console.log(`Computer choice:\t${computerSelection.toUpperCase()}`);

//     playRound(humanSelection, computerSelection);

//     if (counter === 4) {
//       console.log(
//         `\n\tFinal Scores\nUser\t-\tComputer\n\t${humanScore}\t-\t${computerScore}`
//       );
//       announceWinner("PLAYER", "COMPUTER", humanScore, computerScore);
//     }
//     counter++;
//   }
// }

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
