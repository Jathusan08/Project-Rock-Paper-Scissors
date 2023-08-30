// game and weapon result
const gameResult = document.querySelector(".game-instructions h2");
const weaponResult = document.querySelector(".game-instructions h3");

// Player and computer seletions
const playerChoice = document.querySelector(".player-option");
const computerChoice = document.querySelector(".computer-option");

// player and computer Score board
const playerScore = document.querySelector(".Player-Score-Card");
const computerScore = document.querySelector(".Computer-Score-Card");

// player selection buttons
const playerSelectionBtn = document.querySelectorAll(".player-options button");

const overallResult = document.querySelector(".game-Result");

const playAgainbtn = document.querySelector(".playAgainbtn");

playerSelectionBtn.forEach((selection) => {
  selection.addEventListener("click", () => {
    playerChoice.textContent = selection.textContent;
    showSelection(playerChoice);
    computerChoice.textContent = getComputerChoice();

    getResults(selection, computerChoice.textContent);
    showSelection(computerChoice);
    fifthRound(results);
  });
});

//             P  C
let results = [0, 0];

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      return "✊";

    case 2:
      return "🖐️";

    case 3:
      return "✌️";
  }
}

const getResults = (playerSelection, computerSelection) => {
  if (playerSelection.textContent === computerSelection) {
    gameResult.textContent = `It's a tie!`;
    weaponResult.textContent = `${
      playerSelection.className.charAt(0).toUpperCase() +
      playerSelection.className.slice(1)
    } ties with ${playerSelection.className} `;
    playerScore.textContent = results[0];
    computerScore.textContent = results[1];
  } else if (
    playerSelection.textContent === "✊" &&
    computerSelection === "🖐️"
  ) {
    gameResult.textContent = `You Lost!`;
    weaponResult.textContent = `Rock beaten by paper`;
    results[1] += 1;
    computerScore.textContent = results[1];
  } else if (
    playerSelection.textContent === "✊" &&
    computerSelection === "✌️"
  ) {
    gameResult.textContent = `You Won!`;
    weaponResult.textContent = `Rock beats scissor`;
    results[0] += 1;
    playerScore.textContent = results[0];
  } else if (
    playerSelection.textContent === "🖐️" &&
    computerSelection === "✊"
  ) {
    gameResult.textContent = `You Won!`;
    weaponResult.textContent = `Paper beats rock`;
    results[0] += 1;
    playerScore.textContent = results[0];
  } else if (
    playerSelection.textContent === "🖐️" &&
    computerSelection === "✌️"
  ) {
    gameResult.textContent = `You Lost!`;
    weaponResult.textContent = `Paper beaten by scissor`;
    results[1] += 1;
    computerScore.textContent = results[1];
  } else if (
    playerSelection.textContent === "✌️" &&
    computerSelection === "🖐️"
  ) {
    gameResult.textContent = `You Won!`;
    weaponResult.textContent = `Scissor beats paper`;
    results[0] += 1;
    playerScore.textContent = results[0];
  } else if (
    playerSelection.textContent === "✌️" &&
    computerSelection === "✊"
  ) {
    gameResult.textContent = `You Lost!`;
    weaponResult.textContent = `Scissor beaten by rock`;
    results[1] += 1;
    computerScore.textContent = results[1];
  }
};

function fifthRound(gameResults) {
  if (gameResults[0] === 5 && gameResults[1] < 5) {
    showOrHideComponenet(".visible-Componenet", "none");
    document.querySelector(".game-Result h1").textContent = "You Won!";
    document.querySelector(".game-Result h2").textContent = "🏆";

    showOrHideComponenet(".game-Result", "block");
  } else if (gameResults[1] === 5 && gameResults[0] < 5) {
    showOrHideComponenet(".visible-Componenet", "none");
    document.querySelector(".game-Result h1").textContent = "You Lost!";
    document.querySelector(".game-Result h2").textContent = "❌";

    showOrHideComponenet(".game-Result", "block");
  }
}

function showSelection(selection) {
  selection.setAttribute("style", "font-size: 75px;");
}

function showOrHideComponenet(element, displayMode) {
  document
    .querySelector(element)
    .setAttribute("style", `display: ${displayMode};`);
}

playAgainbtn.addEventListener("click", () => {
  console.log("restart button pressed");
  results[0] = 0;
  results[1] = 0;
  playerChoice.textContent = "?";
  gameResult.textContent = "Choose Your Weapon";
  weaponResult.textContent = "First to Score 5 points wins the game";
  playerChoice.setAttribute(
    "style",
    "color: #faf0e6;   font-size: 130px;  width: 150px;  height: 150px;"
  );
  computerChoice.textContent = "?";
  computerChoice.setAttribute(
    "style",
    "color: #faf0e6;   font-size: 130px;  width: 150px;  height: 150px;"
  );
  playerScore.textContent = results[0];
  computerScore.textContent = results[1];
  showOrHideComponenet(".game-Result", "none");
  showOrHideComponenet(".visible-Componenet", "block");
});
