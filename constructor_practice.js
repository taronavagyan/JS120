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

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function () {
//   console.log(this.weight > 20 ? "Woof!" : "Yip!");
// };

// let maxi = new Dog("Maxi", "German Shepherd", 32);
// maxi.bark();

// let biggie = new Dog("Biggie", "Whippet", 9);
// biggie.bark();

// PP #3

/*
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

let a = new Circle(3);
console.log(a.area().toFixed(2));

let b = new Circle(4);
console.log(b.area().toFixed(2));

console.log(a.hasOwnProperty("area"));
*/

// PP #6

/*
function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
};

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);
console.log(ninjaB.swing().swung);
*/

// PP #7

/*
let ninjaA;

{
  const Ninja = function () {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor); // true
console.log(ninjaB.hasOwnProperty("swung"));
*/

// PP #8

/*
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }
  this.name = first + " " + last;
}

let nameA = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(nameA); // Jane Doe
console.log(user1.name); // John Doe
console.log(user2.name); // John Doe
*/
