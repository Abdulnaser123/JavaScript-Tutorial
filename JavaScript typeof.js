//     Primitive Data Types
// In JavaScript, a primitive value is a single value with no properties or methods.

// JavaScript has 7 primitive data types:

// string
// number
// boolean
// bigint
// symbol
// null
// undefined

//     Reference Data Types

// In JavaScript, a reference value is a data type that holds a reference to an object or a function.

// JavaScript has two reference data types:

// object
// function

//     Objects

// Objects are dynamic collections of properties and methods. They are created using object literals, constructors, or by using the Object.create() method.

// Example of an object literal:

let person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Accessing properties and methods of an object:

console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe

// Example of a constructor function:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.displayInfo = function() {
    console.log(`${this.make} ${this.model} (${this.year})`);
  };
}

let myCar = new Car('Toyota', 'Camry', 2022);

// Accessing properties and methods of an object created using a constructor function:

console.log(myCar.make); // Output: Toyota
myCar.displayInfo(); // Output: Toyota Camry (2022)

// Example of using the Object.create() method:

let animal = {
  eat() {
    console.log('Eating...');
  },
  sleep() {
    console.log('Sleeping...');
  }

};

typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined
typeof null            // Returns object
typeof {}             // Returns object
typeof []             // Returns object
typeof new Date()       // Returns object
typeof new RegExp()     // Returns object
typeof new Function()  // Returns function
typeof new Promise()   // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object
typeof new WeakMap()    // Returns object
typeof new WeakSet()     // Returns object
typeof new Error()     // Returns object
typeof new AggregateError() // Returns object
typeof new EvalError()  // Returns object
typeof new RangeError()  // Returns object
typeof new ReferenceError() // Returns object
typeof new SyntaxError() // Returns object
typeof new TypeError()  // Returns object
typeof new URIError()  // Returns object
typeof new BigInt(123)  // Returns bigint
typeof new Symbol('foo') // Returns symbol
typeof new Number(123)  // Returns object
typeof new String('abc')  // Returns object
typeof new Boolean(true) // Returns object
typeof new Date()       // Returns object
typeof new RegExp()     // Returns object
typeof new Function()  // Returns function
typeof new Promise()   // Returns object

// Example of using the instanceof operator:

console.log(person instanceof Object); // Output: true
console.log(myCar instanceof Car); // Output: true
console.log(animal instanceof Object); // Output: true
console.log(animal instanceof Animal); // Output: false

// In JavaScript, null is a primitive value. However, typeof returns "object".

// This is a well-known bug in JavaScript and has historical reasons.

// Complex Data Types

// JavaScript has one complex data type:
// Object
// All other complex types like arrays, functions, sets, and maps are just different types of objects.

// The typeof operator returns only two types:

// object
// function


typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function

// Example of using the instanceof operator:

console.log({name:'John'} instanceof Object); // Output: true
console.log([1,2,3,4] instanceof Array); // Output: true
console.log(new Map() instanceof Map); // Output: true
console.log(new Set() instanceof Set); // Output: true

console.log(function (){} instanceof Function); // Output: true

// Undefined Variables

let x;

console.log(typeof x); // Returns undefined

// Undeclared Variables

console.log(typeof undeclaredVariable); // Returns undefined

// Null
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

// Unfortunately, in JavaScript, the data type of null is an object.

// You can empty an object by setting it to null:

let myObj = {};
myObj = null;

console.log(myObj); // Output: null

// Difference Between Undefined and Null

// undefined is a variable that has been declared but has not been assigned a value.

let myVariable;

console.log(myVariable); // Output: undefined

// Null is a value that represents the absence of a value.

let myNullVariable = null;

console.log(myNullVariable); // Output: null

// In JavaScript, you can assign null to an undefined variable:

let myUndefinedVariable;
myUndefinedVariable = null;

console.log(myUndefinedVariable); // Output: null

