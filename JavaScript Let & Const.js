// JavaScript Let

let myVariable = "Hello, World!";
console.log(myVariable);
// info about let
// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

let myVariable = "Hello, World!";

console.log(myVariable);

let myVariable = "Hello, Universe!"; // This will throw a ReferenceError

// Example of using let with a for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // This will throw a ReferenceError

// Example of using let with a function

function myFunction() {
  let myVariable = "Hello, World!";
  console.log(myVariable);
}

myFunction();

console.log(myVariable); // This will throw a ReferenceError

// Example of using let with an if statement

let myVariable = "Hello, World!";

if (true) {
  let myVariable = "Hello, Universe!";
  console.log(myVariable);
}

console.log(myVariable); // This will print "Hello, World!"

// Example of using let with a try-catch statement

try {
  let myVariable = "Hello, World!";
  throw new Error("An error occurred");
} catch (error) {
  console.log(error.message);
  console.log(myVariable); // This will throw a ReferenceError
}

// Example of using let with an arrow function

let myFunction = () => {
  let myVariable = "Hello, World!";
  console.log(myVariable);
};

myFunction();

console.log(myVariable); // This will throw a ReferenceError

// Before ES6 (2015), JavaScript did not have Block Scope.
// JavaScript had Global Scope and Function Scope.
// ES6 introduced the two new JavaScript keywords: let and const.
// These two keywords provided Block Scope in JavaScript:
{
  let x = 2;
}
// x can NOT be used here

// Global Scope
{
  var x = 2;
}
// x CAN be used here

// Cannot be Redeclared
let x = "John Doe";

let x = 0;

var x = 10;
// Here x is 10

{
  var x = 2;
  // Here x is 2
}

// Here x is 2
//     	Scope	Redeclare	Reassign	Hoisted	Binds this
// var	  No	    Yes	     Yes	     Yes  	  Yes
// let    Yes       No       Yes         Yes      Yes
// const  Yes       No       Yes         Yes      Yes

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

var x = 2;
// Now x is 2

var x = 3;
// Now x is 3

var x = 2; // Allowed
let x = 3; // Not allowed

{
  let x = 2; // Allowed
  let x = 3; // Not allowed
}

{
  let x = 2; // Allowed
  var x = 3; // Not allowed
}

// Redeclaring a variable with let, in another block, IS allowed:

let x = 2;

{
  let x = 3; // Allowed
}

// Redeclaring a variable with let, in another block, is not allowed:

let x = 2;

{
  let x = 2; // Not allowed
}

// Redeclaring a variable with const, in another block, is not allowed:

const x = 2;

{
  const x = 2; // Not allowed
}

// Reassigning a variable with let, in another block, is allowed:

let x = 2;

{
  x = 3; // Allowed
}

// Reassigning a variable with const, in another block, is not allowed:

const x = 2;

{
  x = 3; // Not allowed
}

// Reassigning a variable with let, in another block, is allowed:

let x = 2;

{
  let x = 3; // Allowed
}

// Variables defined with var are hoisted to the top and can be initialized at any time

console.log(myVariable); // Output: undefined

var myVariable = "Hello, World!";

carName = "Volvo";
var carName;

console.log(carName); // Output: Volvo

// Variables defined with let are not hoisted and must be declared before use

console.log(myVariable); // Output: ReferenceError

let myVariable = "Hello, World!";

// Variables defined with const are not hoisted and must be declared before use

console.log(myVariable); // Output: ReferenceError

const myVariable = "Hello, World!";

// Variables defined with const are not reassignable

myVariable = "Hello, Universe!"; // Output: TypeError

const myVariable = "Hello, World!";

myVariable = "Hello, Universe!"; // Output: TypeError
