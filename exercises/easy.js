// 1.

/*
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
*/

// 2.

/*
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

let square = new Square(5);

console.log(`area of square = ${square.getArea()}`); // area of square = 25
*/

// 3.

/*
class Cat {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return `${this.name} says meoow.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);
console.log(fakeCat.speaks());
*/

// 4.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`;
  }
}

let pudding = new Cat("Pudding", 7, "black and white");
let butterscotch = new Cat("Butterscotch", 10, "tan and white");

console.log(pudding.info());
console.log(butterscotch.info());

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.
