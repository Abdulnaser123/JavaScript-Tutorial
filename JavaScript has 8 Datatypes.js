// JavaScript has 8 Datatypes

// 1. Number: It can be either integer or decimal.

let num1 = 10; // Integer
let num2 = 3.14; // Decimal

// 2. String: It represents a sequence of characters enclosed in double quotes or single quotes.

let str1 = "Hello";
let str2 = "World";

// 3. Boolean: It can be either true or false.

let bool1 = true;
let bool2 = false;

// 4. Undefined: It represents a variable that has not been assigned a value.

let und;

// 5. Null: It represents a value that is intentionally empty or non-existent.

let nul = null;

// 6. Symbol: It is a unique, immutable, and unique value.

let sym1 = Symbol("Greetings");
let sym2 = Symbol("Greetings");

// 7. BigInt: It represents an integer value that can be arbitrarily large.

let bigInt = BigInt(1000000000000000000000000000000);

// 8. Object: It is a collection of key-value pairs.

let obj = { name: "John", age: 30 };

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:

let date = new Date(); // Date object
let array = []; // Array object
let map = new Map(); // Map object
let set = new Set(); // Set object
let weakSet = new WeakSet(); // WeakSet object

// User-defined object types can be:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("John", 30);

let x = 16 + 4 + "Volvo";

console.log(x); // Output: "20Volvo"

// Exponential Notation

let y = 10 ** 2;

console.log(y); // Output: 100

let x = 123e5;

console.log(x); // Output: 12300000

let z = 0.1e2;

console.log(z); // Output: 10

let z = 123e-5;

console.log(z); // Output: 0.00123

// Type Conversion

let a = 10;
let b = "20";

let sum = a + b;

console.log(sum); // Output: "1020"

let a = 10;

let b = "20";

let sum = a + parseInt(b);

console.log(sum); // Output: 30

let a = "10";

let b = 20;

let sum = parseInt(a) + b;

console.log(sum); // Output: 30

let a = "10";

let b = "20";

let sum = parseFloat(a) + b;

console.log(sum); // Output: 30

let a = "10";

let b = "20";

let sum = Number(a) + b;

console.log(sum); // Output: 30

// Type Coercion

let a = 10;
let b = "20";

let sum = a + b;

console.log(sum); // Output: "1020"

// JavaScript BigInt

let a = BigInt(10);
let b = BigInt(20);

let sum = a + b;

console.log(sum); // Output: 30n

let a = BigInt(10);

let b = "20";

let sum = a + BigInt(b);

console.log(sum); // Output: 30n
