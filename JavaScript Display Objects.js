// JavaScript Display Objects
// How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].

// Create an object

let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Display the object

console.log(person); // Outputs: [object Object]

// To display the properties and values of an object, we can use the following methods:

// 1. Object.keys()

console.log(Object.keys(person)); // Outputs: Array(3) ["name", "age", "city"]

// 2. Object.values()

console.log(Object.values(person)); // Outputs: Array(3) ["John Doe", 30, "New York"]

// 3. Object.entries()

console.log(Object.entries(person)); // Outputs: Array(3) [["name", "John Doe"], ["age", 30], ["city", "New York"]]

// 4. for...in loop

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Using Object.entries()

let personEntries = Object.entries(person);

for (let entry of personEntries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// Using JSON.stringify()

console.log(JSON.stringify(person)); // Outputs: {"name":"John Doe","age":30,"city":"New York"}

// Using JSON.parse()

let jsonString = '{"name":"John Doe","age":30,"city":"New York"}';

let parsedPerson = JSON.parse(jsonString);

console.log(parsedPerson); // Outputs: {name: "John Doe", age: 30, city: "New York"}

// Using destructuring assignment

let { name, age, city } = person;

console.log(name, age, city); // Outputs: John Doe 30 New York

// Using template literals

console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Outputs: Name: John Doe, Age: 30, City: New York

// Using arrow functions

let greet = (name) => `Hello, ${name}!`;

console.log(greet("John Doe")); // Outputs: Hello, John Doe!

// Using spread operator

let person2 = { ...person, hobbies: ["reading", "painting"] };

console.log(person2); // Outputs: {name: "John Doe", age: 30, city: "New York", hobbies: Array(2)}

// Using rest parameter

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15
