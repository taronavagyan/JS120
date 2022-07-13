/*
let civicArgs = {
  make: "Honda",
  model: "Civic",
  year: 2016,
  color: "black",
  passengers: 5,
  convertible: false,
  mileage: 16000,
};

function Car(args) {
  Object.assign(this, args);

  this.drive = function () {
    this.started = true;
  };
}

let civic = new Car(civicArgs);

if (civic instanceof Car) console.log("I'm a car!");

// function Lizard() {
//   this.scamper = function () {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?
*/

//
// Constructor Prototypes
//

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? "Woof!" : "Yip!");
  },
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

let maxi = new Dog("Maxi", "German Shepherd", 32);
let dexter = new Dog("Dexter", "Rottweiler", 50);
let biggie = new Dog("Biggie", "Whippet", 9);

maxi.bark();
