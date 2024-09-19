// JavaScript Sets
// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values

// Create a Set from an array

const mySet = new Set([1, 2, 3, 4, 4, 5]);

// Create an empty Set

const myEmptySet = new Set();

// Add values to the Set

mySet.add(6);
mySet.add("hello");
mySet.add(true);

// Create a Set and add variables:

const numSet = new Set([1, 2, 3, 4, 5]);

const strSet = new Set(["apple", "banana", "cherry"]);

// Check if a value exists in a Set

console.log(mySet.has(3)); // true

console.log(mySet.has(6)); // false

// Get the size of a Set

console.log(mySet.size); // 5

// Remove a value from a Set

mySet.delete(3);

console.log(mySet.size); // 4

// Iterate over a Set

for (const value of mySet) {
  console.log(value);
}

// Convert a Set to an array

const myArray = [...mySet];

console.log(myArray); // [ 1, 2, 4, 5, 6, "apple", "banana", "cherry", true ]

// Convert an array to a Set

const myNewSet = new Set([1, 2, 3, 4, 5]);

const myOtherArray = [6, 7, 8, 9, 10];

myNewSet.add(...myOtherArray);

console.log(myNewSet); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Check if a Set is empty

console.log(myNewSet.isEmpty()); // false

// Clear a Set

myNewSet.clear();

console.log(myNewSet.size); // 0

// Check if a Set contains all values of another Set

const otherSet = new Set([6, 7, 8, 9, 10]);

console.log(myNewSet.hasAll(otherSet)); // true

console.log(myNewSet.hasAll(new Set([1, 2, 3, 4, 5]))); // true

console.log(myNewSet.hasAll(new Set([6, 7, 8, 9, 11]))); // false
// Sets are Objects

// JavaScript Set objects are similar to arrays, but they have the following differences:

// 1. They are unordered (unlike arrays)

// 2. They only allow unique values (unlike arrays which can have duplicate values)

// 3. They are created using the new Set() constructor or by passing an array to the constructor

// You can iterate over a Set using a for...of loop or the forEach() method.

const letters = new Set(["a", "b", "c"]);

typeof letters; // Returns object

letters instanceof Set; // Returns true
