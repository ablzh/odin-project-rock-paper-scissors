let currentRound = 1;
const MAX_ROUND = 10;
let userScore = 0;
let computerScore = 0;

function userMove() {
  let userFigure = "";
  while (
    userFigure != "rock" &&
    userFigure != "paper" &&
    userFigure != "scissors"
  ) {
    userFigure = prompt("Pick a figure. Enter: rock, paper, or scissors");
    userFigure = userFigure.toLowerCase();
  }
  return userFigure;
}

function computerMove() {
  const figures = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * figures.length);
  const computerFigure = figures[randomIndex];
  return computerFigure;
}

function getWinner(userFigure, computerFigure) {
  let winner = "";
  const beats = { rock: "scissors", scissors: "paper", paper: "rock" };
  if (userFigure === computerFigure) winner = "draw";
  else if (beats[userFigure] === computerFigure) winner = "user";
  else winner = "computer";
  return winner;
}

while (currentRound <= MAX_ROUND) {
  let roundWinner = getWinner(userMove(), computerMove());

  let whoWonMessage =
    roundWinner === "draw"
      ? "There are no winners - it's a draw!"
      : `The winner of the current round is ${roundWinner}`;

  switch (roundWinner) {
    case "user":
      userScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
  console.log(`Round: ${currentRound}`);
  console.log(whoWonMessage);
  console.log(`User: ${userScore}, Computer: ${computerScore}`);
  console.log();

  currentRound += 1;
}
console.log("The end! Game over.");
if (userScore === computerScore) console.log("Draw!");
else if (userScore > computerScore) console.log("User won!");
else {
  console.log("Computer won!");
}
