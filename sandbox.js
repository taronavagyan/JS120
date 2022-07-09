/*
let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux();
*/

/*
let abc = { foo: 1, bar: 2 };
let pqr = Object.create(abc);
pqr.qux = 3;
pqr.bar = 4;

console.log(abc.hasOwnProperty("foo"));
console.log(abc.hasOwnProperty("bar"));
console.log(abc.hasOwnProperty("qux"));
console.log(pqr.hasOwnProperty("foo"));
console.log(pqr.hasOwnProperty("bar"));
console.log(pqr.hasOwnProperty("qux"));
*/

/*
let xyz = {};

console.log(Object.getPrototypeOf(xyz));
*/

/*
console.log(Object.getPrototypeOf({}));
console.log(Object.prototype);
console.log(Object.getPrototypeOf({ a: 1, b: 2 }));
*/

/*
let foo = { bar: 1, xyz: 3 };
let baz = Object.create(foo);
baz.qux = "Why not?";

console.log(Object.keys(baz).toString());

for (let prop in baz) {
  if (baz.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

Object.keys(baz).forEach((prop) => console.log(prop));

Object.keys(baz).forEach((prop) => {
  if (baz.hasOwnProperty(prop)) {
    console.log(prop);
  }
});
*/

const OPERATIONS = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
};

let getOperation = (operation) => OPERATIONS[operation];

let compute = function (operation, num1, num2) {
  return operation(num1, num2);
};

console.log(compute(getOperation("/", 18, 6)) === 3);
// console.log(compute("*", 2, 8) === 16);
console.log(compute(getOperation("+"), 5, 9) === 14);
console.log(compute(getOperation("%"), 9, 4) === 5);
