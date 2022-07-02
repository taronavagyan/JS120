const readline = require(`readline-sync`);

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

    if (
      (humanMove === "rock" && computerMove === "scissors") ||
      (humanMove === "paper" && computerMove === "rock") ||
      (humanMove === "scissors" && computerMove === "paper")
    ) {
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

function createPlayer() {
  return {
    move: null,
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
        if (["rock", "paper", "scissors"].includes(choice)) break;
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
      const choices = ["rock", "paper", "scissors"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}
