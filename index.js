// Your code here

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get countSides() {
    return this.arr.length;
  }

  get perimeter() {
    return this.arr.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get isValid() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side1 + this.side3 > this.side2
    );
  }
}

class Square extends Polygon {
  constructor(side1, side2, side3, side4) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  get isValid() {
    return (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side3 === this.side4
    );
  }

  get area() {
    return this.side1 * this.side1;
  }
}

let triangle = new Triangle(5, 5, 5);
console.log(triangle.isValid);

let square = new Square(4, 4, 4, 4);

console.log(square.isValid);
console.log(square.area);
