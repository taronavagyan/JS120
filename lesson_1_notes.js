// implement a createCar function and make a new car with the following details
/*
Make: Jaguar
Fuel Level: 0.4
Engine Status: off
*/

function createCar(make, fuelLevel, engineOn) {
  // To be implemented by you.
  let raceCar = {
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
  return raceCar;
}

let raceCar1 = createCar("Jaguar", 0.4, false);
