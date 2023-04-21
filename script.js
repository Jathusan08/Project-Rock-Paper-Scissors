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

console.log(getComputerChoice());
