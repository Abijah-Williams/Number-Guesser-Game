let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (guess, target) => {
  return Math.abs(target - guess);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your guess is out of range. Please enter a number between 0 and 9.');
    return;
  }

  const humanDifference = getAbsoluteDistance(humanGuess, target);
  const computerDifference = getAbsoluteDistance(computerGuess, target);

  if (humanDifference < computerDifference) {
    return true;
  } else if (computerDifference < humanDifference) {
    return false;
  } else {
    return true;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

// Game logic
const playRound = () => {
  const target = generateTarget();
  const humanGuess = getHumanGuess();
  const computerGuess = getComputerGuess();
  const winner = compareGuesses(humanGuess, computerGuess, target);
  updateScore(winner);
  advanceRound();
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  displayFinalScores();
};
