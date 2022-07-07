// NOTE: Run this code from a file; don't use the REPL

// bar();
// function bar() {
//   console.log("this is bar");
// }

// foo();
// const foo = function () {
//   console.log("this is foo");
// };

// Take a look at the following code snippet. Use call to invoke the add method
// but with foo as execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: "abc",
  b: "def",
  add: function () {
    return this.a + this.b;
  },
};

console.log(bar.add.call(foo));
