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
