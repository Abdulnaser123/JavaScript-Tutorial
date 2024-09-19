// JavaScript syntax is the set of rules, how JavaScript programs are constructed:
// How to create variables:

let myName;
let myAge;
let isMarried;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// How to create arrays:

let myArray = ["apple", "banana", "cherry"]; // Array

// How to use arrays:

console.log(myArray[0]); // Output: apple
myArray.push("orange"); // Add an element to the end of the array
console.log(myArray); // Output: ["apple", "banana", "cherry", "orange"]

// How to create objects:

let myObject = {
  name: "John Doe",
  age: 30,
  isMarried: true,
}; // Object

// How to use objects:

console.log(myObject.name); // Output: John Doe
myObject.address = "123 Main St"; // Add a new property to the object
console.log(myObject); // Output: {name: "John Doe", age: 30, isMarried: true, address: "123 Main St"}

// How to create functions:

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// How to use functions:

greet("John Doe"); // Output: Hello, John Doe!

// How to create loops:

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// How to create conditional statements:

if (myAge >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");

  if (isMarried) {
    console.log("You are married");
  } else {
    console.log("You are not married");
  }
}

// How to create recursive functions:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// How to create arrow functions:

const greetArrow = (name) => {
  console.log(`Hello, ${name}!`);
};

greetArrow("John Doe"); // Output: Hello, John Doe!

// How to create promises:

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// How to create async/await:

async function asyncGreet(name) {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncGreet("John Doe"); // Output: Success!

// How to create classes:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const john = new Person("John Doe", 30);

john.greet(); // Output: Hello, my name is John Doe!

// How to create inheritance:

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  greet() {
    super.greet();
    console.log(`I am an employee with the position of ${this.position}.`);
  }
}

const jane = new Employee("Jane Doe", 25, "Manager");

jane.greet(); // Output: Hello, my name is Jane Doe! I am an employee with the position of Manager.

// JavaScript Values
// The JavaScript syntax defines two types of values:

// Fixed values
// Variable values
// Fixed values are called Literals.

// Variable values are called Variables.

// Primitive data types

// Number: 123, 4.5, -6.7, Infinity, -Infinity, NaN

// String: "Hello, World!", 'Single quote', `Backticks`

// Boolean: true, false

// Symbol: Symbol("Symbol 1"), Symbol("Symbol 2")

// Non-primitive data types

// Object: {name: "John Doe", age: 30}

// Array: ["apple", "banana", "cherry"]

// Function: function greet(name) { console.log(`Hello, ${name}!`); }

// Special values

// undefined: A variable that has not been assigned a value.

// null: A variable that has been assigned the value null.

// JavaScript Operators

// Arithmetic operators

// +: Addition

// -: Subtraction

// *: Multiplication

// /: Division

// %: Modulus

// Exponentiation operator: **

// Assignment operators

// =: Assignment

// +=: Addition and assignment

// -=: Subtraction and assignment

// *=: Multiplication and assignment

// /=: Division and assignment

// %=: Modulus and assignment

// Comparison operators

// ==: Equal to

// ===: Strict equal to

// !=: Not equal to

// !==: Strict not equal to

// >: Greater than

// <: Less than

// >=: Greater than or equal to

// <=: Less than or equal to

// Logical operators

// &&: Logical AND

// ||: Logical OR

// !: Logical NOT

// Conditional (ternary) operator

//?: Conditional operator

// JavaScript Control Structures

// if...else: Conditional statement

// switch...case: Conditional statement

// for...of: Loop statement

// for...in: Loop statement

// while: Loop statement

// do...while: Loop statement

// break: Exit loop statement

// continue: Skip iteration statement

// JavaScript Functions

// function: Function declaration

// function*: Generator function

// async function: Async function

// Arrow function: Arrow function

// Rest parameters

//...: Rest parameter

// Spread operator

//...: Spread operator
