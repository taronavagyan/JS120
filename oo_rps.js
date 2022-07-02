const readline = require(`readline-sync`);

const RPSGAME = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Rock, Paper, Scissors. Goodbye!`);
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};

RPSGAME.play();

function createPlayer(playerType) {
  return {
    // possible state: player's name?
    // possible state: player's current move?
    playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log("Please choose rock, paper, or scissors:");
          choice = readline.question();
          if (["rock", "paper", "scissors"].includes(choice)) break;
          console.log("Sorry, invalid choice.");
        }
      } else {
        const choices = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
      // not yet implemented
    },

    isHuman() {
      return this.playerType === "human";
    },
  };
}

function createMove() {
  return {
    // possible state: type of move (rock, paper, or scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}

let compare = function (move1, move2) {
  // not yet implemented
};
