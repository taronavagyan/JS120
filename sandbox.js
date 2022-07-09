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

/*
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
*/

/*
global.foo = 5;
if (isFinite(foo)) {
  let bar = 3;
  xyz = 5;
  console.log(bar);
}

console.log(Object.getOwnPropertyNames(global));
*/

/*
global.a = 3;
let foo = {
  a: 0,
  incrementA: function () {
    function increment() {
      this.a += 1;
    }

    increment();
  }.bind(global),
};

foo.incrementA();
console.log(foo.a);
console.log(global.a);
*/

/*
function foo() {
  return this;
}

console.log(foo());
*/

/*
let obj = {
  foo() {
    return this;
  },
};

console.log(obj.foo());
*/

/*
let obj = {
  foo() {
    return this;
  },
};

let foo = obj.foo;
console.log(foo());
*/

/*
function bar() {
  console.log("good morning");
}

global.inner = {
  bar() {
    console.log("good afternoon");
  },
};

let obj = {
  inner: {
    bar() {
      console.log("good night");
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log("wake up");
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

obj.foo();
*/

/*
function bar() {
  console.log("good morning");
}

global.inner = {
  bar() {
    console.log("good afternoon");
  },
};

let obj = {
  inner: {
    bar() {
      console.log("good night");
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log("wake up");
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

let foo = function () {
  console.log("go to sleep");
};

function go(foo) {
  foo();
}

go(obj.foo);
*/

/*
let cat = {
  name: "Pudding",
  colors: "black and white",
  identify() {
    let that = this;
    let report = function () {
      console.log(`${that.name} is a ${that.colors} cat.`);
    };
    report();
  },
};

cat.identify();
// Expected output: Pudding is a black and white cat.
*/

/*
let logResult = function (func) {
  let result = func();
  console.log(result);
  return result;
};

let foo = function () {
  let sue = {
    name: "Sue Perkins",
    age: 37,
    myAge() {
      return `${this.name} is ${this.age} years old`;
    },
  };
  logResult(sue.myAge.bind(sue));
};

foo();
// Expected output: Sue Perkins is 37 years old.
*/

/*
let cats = {
  names: ["Butterscotch", "Pudding", "Fluffy"],
  foo() {
    [1, 2, 3].forEach(function (number) {
      console.log(`${number}: ${this.names[number - 1]}`);
    }, this);
  },
};

cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy
*/
