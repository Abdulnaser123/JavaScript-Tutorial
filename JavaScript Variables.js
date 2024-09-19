// JavaScript Variables

var name = "John Doe";
var age = 30;
var isMarried = false;
var hobbies = ["reading", "painting", "cooking"];
var address = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
};

// Printing the values

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Married: " + isMarried);
console.log("Hobbies: " + hobbies.join(", "));
console.log("Address:");

for (var key in address) {
  console.log(key + ": " + address[key]);
}

// Adding a new hobby

hobbies.push("gardening");

// Updating the address

address.street = "456 Elm St";

// Printing the updated address

console.log("Updated Address:");

for (var key in address) {
  console.log(key + ": " + address[key]);
}

// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// Example:

var myVariable; // Automatically declared and initialized to undefined

var myVariable = "Hello World!"; // Automatically declared and initialized to "Hello World!"

let myVariable2; // Automatically declared and initialized to undefined

let myVariable2 = "Hello World!"; // Automatically declared and initialized to "Hello World!"

const myVariable3 = "Hello World!"; // Automatically declared and initialized to "Hello World!"

// In this first example, x, y, and z are undeclared variables

let x;
let y;
let z;

// In this second example, x, y, and z are declared but not initialized

let x;
let y;
let z;

x = 10; // Assigning a value to x

y = "Hello"; // Assigning a value to y

z = true; // Assigning a value to z

// JavaScript Variables can be reassigned

let myVariable4 = "Hello";

myVariable4 = "World!";

console.log(myVariable4); // Output: World!

// JavaScript Variables can be declared and initialized in the same line

let myVariable5 = "Hello",
  myVariable6 = "World!";

console.log(myVariable5); // Output: Hello

console.log(myVariable6); // Output: World!

// JavaScript Variables can have different data types

let myVariable7 = 10; // Integer

let myVariable8 = "Hello"; // String

let myVariable9 = true; // Boolean

let myVariable10 = [1, 2, 3]; // Array

let myVariable11 = { name: "John Doe" }; // Object

let myVariable12 = function () {
  console.log("Hello");
}; // Function

// JavaScript Variables cannot be redeclared

let myVariable13 = "Hello";

let myVariable13 = "World!"; // This will throw a SyntaxError

// JavaScript Variables cannot be overwritten

let myVariable14 = "Hello";

myVariable14 = "World!";

console.log(myVariable14); // Output: World!

// JavaScript Variables cannot be deleted

let myVariable15 = "Hello";

delete myVariable15;

console.log(myVariable15); // Output: undefined

// JavaScript Variables are case-sensitive

let myVariable = "Hello";

let myVariable2 = "hello";

console.log(myVariable === myVariable2); // Output: false

// JavaScript Variables have a maximum length

let myVariable16 = "a".repeat(1000000); // This will not throw an error

console.log(myVariable16.length); // Output: 1000000

// JavaScript Variables can be used as identifiers

let 123myVariable = "Hello"; // This will throw a SyntaxError

let my-variable = "Hello"; // This will throw a SyntaxError

let myVariable$ = "Hello"; // This will throw a SyntaxError

// JavaScript Variables can be used as keywords

let let = "Hello"; // This will throw a SyntaxError

let return = "Hello"; // This will throw a SyntaxError

let break = "Hello"; // This will throw a SyntaxError

let continue = "Hello"; // This will throw a SyntaxError

let function = "Hello"; // This will throw a SyntaxError

let class = "Hello"; // This will throw a SyntaxError

let interface = "Hello"; // This will throw a SyntaxError

let package = "Hello"; // This will throw a SyntaxError

let private = "Hello"; // This will throw a SyntaxError

// It is considered good programming practice to always declare variables before use.

let myVariable17 = "Hello";

console.log(myVariable17); // Output: Hello

// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

// Example using let
let x = 5;
let y = 6;
let z = x + y;

console.log(z); // Output: 11

// Example using const

const PI = 3.14159;

console.log(PI); // Output: 3.14159

// The const keyword should be used when you want to declare a constant value.



// Mixed Example

let myVariable18 = "Hello";
let myVariable19 = 10;

console.log(myVariable18 + myVariable19); // Output: Hello10

// JavaScript Variables can be declared with a default value

let myVariable20 = "Hello";

console.log(myVariable20); // Output: Hello

myVariable20 = undefined;

console.log(myVariable20); // Output: undefined

myVariable20 = null;

console.log(myVariable20); // Output: null

myVariable20 = 0;

console.log(myVariable20); // Output: 0

myVariable20 = false;

console.log(myVariable20); // Output: false

myVariable20 = "";

console.log(myVariable20); // Output: ""

// JavaScript Variables can be declared with a default value using the = operator

let myVariable21 = "Hello";

console.log(myVariable21); // Output: Hello

myVariable21 = myVariable21 || "World!";

console.log(myVariable21); // Output: Hello

myVariable21 = null;

console.log(myVariable21); // Output: World!


const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log(total); // Output: 11

// JavaScript Variables can be declared with a default value using the = operator

const myVariable22 = "Hello";

console.log(myVariable22); // Output: Hello

myVariable22 = myVariable22 || "World!";

// When to Use var, let, or const?

// Use var when you want to create a variable that can be accessed outside of a function.

var myVariable23 = "Hello";

function myFunction() {
  console.log(myVariable23); // Output: Hello
}

myFunction();

// Use let when you want to create a variable that can be reassigned and accessed outside of a function.

let myVariable24 = "Hello";

function myFunction2() {
  myVariable24 = "World!";
  console.log(myVariable24); // Output: World!
}

myFunction2();

// Use const when you want to create a variable that cannot be reassigned and accessed outside of a function.

const myVariable25 = "Hello";

function myFunction3() {
  // myVariable25 = "World!"; // This will throw a TypeError
}   

myFunction3();

// In summary:

// - Use var when you want to create a variable that can be accessed outside of a function.

// - Use let when you want to create a variable that can be reassigned and accessed outside of a function.

// - Use const when you want to create a variable that cannot be reassigned and accessed outside of a function.

// - Always declare variables before use.

// - Use let and const instead of var when possible.

// - Mixed Example: Use let and const when you want to declare a variable with a default value using the = operator.

// - When to Use var, let, or const? Use var when you want to create a variable that can be accessed outside of a function. Use let when you want to create a variable that can be reassigned and accessed outside of a function. Use const when you want to create a variable that cannot be reassigned and accessed outside of a function. Always declare variables before use. Use let and const instead of var when possible. Mixed Example: Use let and const when you want to



// Note
// It's a good programming practice to declare all variables at the beginning of a script.

// One Statement, Many Variables
// You can declare many variables in one statement.

// Start the statement with let and separate the variables by comma:

let person = "John Doe", carName = "Volvo", price = 200;

console.log(person, carName, price); // Output: John Doe Volvo 200

// Re-Declaring JavaScript Variables
// If you re-declare a JavaScript variable declared with var, it will not lose its value.

// The variable carName will still have the value "Volvo" after the execution of these statements:

var carName = "Volvo";
var carName;
console.log(carName); // Output: Volvo

// You cannot re-declare a variable declared with let or const.


// SyntaxError: Identifier 'carName' has already been declared

let carName = "Volvo";
let carName = "BMW"; // This will throw a SyntaxError

// You cannot re-declare a variable declared with let or const.

const carName = "Volvo";
const carName = "BMW"; // This will throw a SyntaxError

// JavaScript Arithmetic
let x = "5" + 2 + 3;

console.log(x); // Output: 553

let y = "5" * 2 + 3;

console.log(y); // Output: 13

let z = 5 + 2 * "3";

console.log(z); // Output: 11

let z = 5 + 2 + "3";

console.log(z); // Output: 73

// JavaScript String Concatenation

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: John Doe

let age = 30;

let message = "Your age is " + age;

console.log(message); // Output: Your age is 30

let message = "Your age is " + age + " years old";

console.log(message); // Output: Your age is 30 years old

// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

let $age = 30;

console.log($age); // Output: 30
let $ = "Hello World";

console.log($); // Output: Hello World

// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

let _age = 30;

console.log(_age); // Output: 30


