let showComputerChoice = document.querySelector(".showComputerChoice");
let buttons = document.querySelectorAll("button");
let score = document.getElementById("score");
let result = document.getElementById("result");
let container = document.querySelector(".container");
let winnerScore = [0, 0]; //Right Num Is Player Score & Left Num Is Computer Score//
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  let playerChoice = e.target.innerHTML;
  let computerChoice = Math.random();
  console.log(playerChoice);
  if (computerChoice < 0.34) {
    showComputerChoice.classList.add("fa-hand-back-fist");
    showComputerChoice.classList.remove("fa-hand");
    showComputerChoice.classList.remove("fa-hand-scissors");
    showComputerChoice.classList.remove("fa-computer-classic");
    setTimeout(() => {
      showComputerChoice.classList.remove("fa-hand-back-fist");
      showComputerChoice.classList.add("fa-computer-classic");
    }, 550);
    computerChoice = "<p>rock</p>";
  } else if (computerChoice < 0.68) {
    showComputerChoice.classList.remove("fa-hand-back-fist");
    showComputerChoice.classList.add("fa-hand");
    showComputerChoice.classList.remove("fa-hand-scissors");
    showComputerChoice.classList.remove("fa-computer-classic");
    setTimeout(() => {
      showComputerChoice.classList.remove("fa-hand");
      showComputerChoice.classList.add("fa-computer-classic");
    }, 550);
    computerChoice = "<p>paper</p>";
  } else {
    showComputerChoice.classList.remove("fa-hand-back-fist");
    showComputerChoice.classList.remove("fa-hand");
    showComputerChoice.classList.add("fa-hand-scissors");
    showComputerChoice.classList.remove("fa-computer-classic");
    setTimeout(() => {
      showComputerChoice.classList.remove("fa-hand-scissors");
      showComputerChoice.classList.add("fa-computer-classic");
    }, 550);
    computerChoice = "<p>scissors</p>";
  }

  let resultText = checkWinner(playerChoice, computerChoice);

  if (resultText === "equal") {
    setTimeout(() => {
      container.classList.add("playerEqual");
    }, 0);
    setTimeout(() => {
      container.classList.remove("playerEqual");
    }, 400);
    result.textContent = "Ah Shit, Here We Go Again!!!";
  } else if (resultText === "player win") {
    setTimeout(() => {
      container.classList.add("playerWin");
    }, 0);
    setTimeout(() => {
      container.classList.remove("playerWin");
    }, 400);
    result.textContent = "You Win Champ!";
    winnerScore[0]++;
  } else if (resultText === "computer win") {
    setTimeout(() => {
      container.classList.add("playerLose");
    }, 0);
    setTimeout(() => {
      container.classList.remove("playerLose");
    }, 400);
    result.textContent = "Nigga! You Lose";
    winnerScore[1]++;
  }

  score.textContent = ` ${winnerScore[1]} : ${winnerScore[0]}`;
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "equal";
  }

  if (player === "<p>scissors</p>") {
    if (computer === "<p>rock</p>") {
      return "computer win";
    } else {
      return "player win";
    }
  }

  if (player === "<p>rock</p>") {
    if (computer === "<p>paper</p>") {
      return "computer win";
    } else {
      return "player win";
    }
  }

  if (player === "<p>paper</p>") {
    if (computer === "<p>scissors</p>") {
      return "computer win";
    } else {
      return "player win";
    }
  }
}
