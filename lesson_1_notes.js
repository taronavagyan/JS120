// implement a createCar function and make a new car with the following details
/*
Make: Jaguar
Fuel Level: 0.4
Engine Status: off
*/

/*
function createCar(make, fuelLevel, engineOn) {
  // To be implemented by you.
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if (this.fuelLevel + percent / 100 <= 1) {
        this.fuelLEvel += percent / 100;
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let jaguar = createCar("Jaguar", 0.4, false);

console.log(raceCar1.make);
*/

/*
let book = {
  title: "Snow Crash",
  author: "Neal Stephenson",
  getDescription() {
    return self.title + " by " + self.author;
  },
};

// desired return value: 'Snow Crash by Neal Stephenson'
book.getDescription(); // => ReferenceError: title is not defined
*/
