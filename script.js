function getComputerChoice() {
  let computerChoice;
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      computerChoice = "Rock";

      break;

    case 2:
      computerChoice = "Paper";

      break;

    case 3:
      computerChoice = "Scissors";

      break;
  }

  return computerChoice;
}

function playSingleRound(playerSelection, computerSelection) {
  let message;
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection.charAt(0).toUpperCase() === computerSelection.charAt(0)) {
    message = `Draw`;
    // console.log(message);
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Rock" &&
    computerSelection === "Paper"
  ) {
    computerScore += 1;
    //console.log("You Lose! Paper beats Rock");
    message = "You Lose! Paper beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Paper" &&
    computerSelection === "Rock"
  ) {
    playerScore += 1;
    // console.log("You Win! Paper beats Rock");
    message = "You Win! Paper beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Rock" &&
    computerSelection === "Scissors"
  ) {
    playerScore += 1;
    //   console.log("You Win! Rock beats Scissors");
    message = "You Win! Rock beats Scissors";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Scissors" &&
    computerSelection === "Rock"
  ) {
    computerScore += 1;
    // console.log("You Lose! Rock beats Scissors");
    message = "You Lose! Rock beats Scissors";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Paper" &&
    computerSelection === "Scissors"
  ) {
    computerScore += 1;
    //console.log("You Lose! Scissors beats Rock");
    message = "You Lose! Scissors beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Scissors" &&
    computerSelection === "Paper"
  ) {
    playerScore += 1;
    //   console.log("You Win! Scissors beats Rock");
    message = "You Win! Scissors beats Rock";
  }
  return message;
}

console.log(playSingleRound("Rock", getComputerChoice()));

//console.log(getComputerChoice());
