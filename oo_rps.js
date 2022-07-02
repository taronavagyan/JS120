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
    console.log(`Welcome to Rock, Paper, Scissors!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Rock, Paper, Scissors. Goodbye!`);
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if (WINNING_COMBOS[humanMove].includes(computerMove)) {
      console.log("You win!");
    } else if (humanMove === computerMove) {
      console.log("It's a tie!");
    } else {
      console.log("Computer wins!");
    }
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
      this.displayWinner();
      if (!this.playAgain()) break;
    }

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

    wonGame() {
      this.score += 1;
    },
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log("Please choose rock, paper, or scissors:");
        choice = readline.question();
        if (this.choices.includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
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
