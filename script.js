//              P C D
let results = [0, 0, 0];

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
  if (playerSelection.charAt(0).toUpperCase() === computerSelection.charAt(0)) {
    console.log(`Draw`);
    results[2] += 1;
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Rock" &&
    computerSelection === "Paper"
  ) {
    console.log("You Lose! Paper beats Rock");
    results[1] += 1;
    //  message = "You Lose! Paper beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Paper" &&
    computerSelection === "Rock"
  ) {
    results[0] += 1;
    console.log("You Win! Paper beats Rock");
    //message = "You Win! Paper beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Rock" &&
    computerSelection === "Scissors"
  ) {
    results[0] += 1;
    console.log("You Win! Rock beats Scissors");
    // message = "You Win! Rock beats Scissors";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Scissors" &&
    computerSelection === "Rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
    results[1] += 1;
    // message = "You Lose! Rock beats Scissors";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Paper" &&
    computerSelection === "Scissors"
  ) {
    console.log("You Lose! Scissors beats Rock");
    results[1] += 1;
    // message = "You Lose! Scissors beats Rock";
  } else if (
    playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase() ===
      "Scissors" &&
    computerSelection === "Paper"
  ) {
    results[0] += 1;
    console.log("You Win! Scissors beats Rock");
    // message = "You Win! Scissors beats Rock";
  }
}

//console.log(playSingleRound("Rock", getComputerChoice()));

//console.log(getComputerChoice());

// play 5th round

function play5Rounds() {
  for (let i = 1; i < 6; i++) {
    let input = prompt("Please choose Rock or Paper Or Scissors");

    playSingleRound(input, getComputerChoice());
  }

  if (results[0] === results[1]) {
    console.log(`It is a Draw game`);
  } else if (results[0] > results[1]) {
    console.log(`Player won and defeated Computer by ${results[0]} points`);
  } else {
    console.log(`Computer won and defeated Player by ${results[1]} points`);
  }
}

play5Rounds();

