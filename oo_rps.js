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

    choose() {
      // not yet implemented
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
