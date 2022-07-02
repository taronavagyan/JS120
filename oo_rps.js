const readline = require(`readline-sync`);

const WINNING_COMBOS = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

const RPSGAME = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors, Lizard, Spock! Have fun!`);
  },

  displayGoodbyeMessage() {
    console.log(
      `Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!`
    );
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let humanWon = WINNING_COMBOS[humanMove].includes(computerMove);
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if (humanWon) {
      this.human.score += 1;
      console.log("You win!");
    } else if (humanMove === computerMove) {
      this.computer.score += 1;
      console.log("It's a tie!");
    } else {
      console.log("Computer wins!");
    }
  },

  displayScore() {
    console.log("Scoreboard");
    console.log("------");
    console.log(`You: ${this.human.score} Computer: ${this.computer.score}`);
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      console.clear();
      this.displayWinner();
      this.displayScore();
      if (!this.playAgain()) break;
    }

    console.log(this.human.moveHistory);
    this.displayGoodbyeMessage();
  },
};

RPSGAME.play();

//

function createPlayer() {
  return {
    move: null,
    score: 0,
    choices: Object.keys(WINNING_COMBOS),

    countWin() {
      this.score += 1;
    },
  };
}

// eslint-disable-next-line max-lines-per-function
function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    moveHistory: [],

    choose() {
      let choice;

      while (true) {
        console.log("Please choose rock, paper, scissors, lizard, or spock:");
        choice = readline.question();
        if (this.choices.includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
      this.updateMoveHistory(choice);
    },

    updateMoveHistory(move) {
      this.moveHistory.push(move);
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

/*
function createScoreTracker() {
  const WINNING_COMBOS = {
    rock: ['lizard', 'scissors'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };
}
*/
