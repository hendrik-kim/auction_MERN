class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    console.log(`${this.name}'s age is ${this.age}`);
  }
}

const speech = new Person('hank', 12);
speech.speak();

//getter setter
class User {
  constructor(first, last, age) {
    (this.first = first), (this.last = last), (this.age = age);
  }
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const hank = new User('hank', 'kim', -30);

console.log(hank.age);

// Fileds
class Experiment {
  publicFiled = 2;
  #privateField = 0;
}

const exp = new Experiment();

console.log(exp.publicFiled);
console.log(exp.privateFiled);

//static
class Article {
  static publisher = 'hank kim';
  constructor(arcNum) {
    this.arcNum = arcNum;
  }

  static printPub() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPub();

//Inheritance
class Shape {
  constructor(width, height, color) {
    (this.width = width), (this.height = height), (this.color = color);
  }

  draw() {
    console.log(`${this.width}, ${this.height}, ${this.color}`);
  }

  getArea() {
    return console.log('rectangle : ', this.width * this.height);
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
  }
  getArea() {
    this.draw();
    return console.log('triangle : ', (this.width * this.height) / 2);
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();

rectangle.getArea();
triangle.getArea();

//instanceOf

console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Object); // ture
