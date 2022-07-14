// 1. Use a factory function to create pet objects. The factory should let us
// create and use pets like this:

// function createPet(animal, name) {
//   return {
//     animal,
//     name,
//     sleep() {
//       console.log("I am sleeping");
//     },
//     wake() {
//       console.log("I am awake");
//     },
//   };
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake(); // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake(); // I am awake

// Use the OLOO pattern to create an object prototype that we can use to create
// pet objects. The prototype should let us create and use pets like this:

/*
let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep() {
    console.log("I am sleeping");
  },

  wake() {
    console.log("I am awake");
  },
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake(); // I am awake
*/

// var Animal = {
//   init: function (type) {
//     this.type = type;
//   },

//   breathe: function () {
//     console.log("I'm breathing");
//   },
// };

// var Dog = Object.create(Animal);
// var Terrier = Object.create(Dog);

// var mammal = Object.create(Animal);
// console.log(mammal.type);
// mammal.init("mammal");
// let reptile = Object.create(Animal);
// reptile.init("reptile");

// console.log(mammal.type); // "mammal"
// mammal.breathe(); // "I'm breathing"
// console.log(reptile.type); // "reptile"
// reptile.breathe(); // "I'm breathing"
