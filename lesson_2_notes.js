// Practice Problems: Object Prototypes

// 5.

// Write a function that searches the prototype chain of an object for a given
// property and assigns it a new value. If the property does not exist in any of
// the prototype objects, the function should do nothing. The following code
// should work as shown:

/*
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

function assignProperty(obj, prop, value) {
  while (Object.getPrototypeOf(obj) !== null) {
    obj = Object.getPrototypeOf(obj);
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = value;
      break;
    }
  }
}
*/

/*
let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);
*/

/*
const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ": " + title);
    });
  },
};

TESgames.listGames();
*/

let foo = {
  a: 0,
  incrementA: function () {
    let self = this;
    function increment() {
      self.a += 1;
    }

    increment();
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);
