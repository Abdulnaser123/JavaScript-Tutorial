// JavaScript Set Methods

// Set is a collection of unique values in JavaScript.

// Creating a new Set

let mySet = new Set();

// Adding elements to the Set

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // Output: Set { 1, 2, 3 }

// Checking if an element exists in the Set

console.log(mySet.has(1)); // Output: true

console.log(mySet.has(4)); // Output: false

// Removing elements from the Set

mySet.delete(2);

console.log(mySet); // Output: Set { 1, 3 }

// Clearing the Set

mySet.clear();

console.log(mySet); // Output: Set {}

// Converting a Set to an Array

let myArray = Array.from(mySet);

console.log(myArray); // Output: [ 1, 3 ]

// Iterating over a Set

for (let value of mySet) {
  console.log(value); // Output: 1, 3
}

// Checking the size of the Set

console.log(mySet.size); // Output: 2

// Checking if the Set is empty

console.log(mySet.isEmpty()); // Output: false

// Merging two Sets

let otherSet = new Set([4, 5, 6]);

let mergedSet = new Set([...mySet, ...otherSet]);

console.log(mergedSet); // Output: Set { 1, 3, 4, 5, 6 }

// Checking the intersection of two Sets

let intersectionSet = new Set(
  [...mySet].filter((value) => otherSet.has(value))
);

console.log(intersectionSet); // Output: Set { 1, 3 }

// Checking the difference between two Sets

let differenceSet = new Set([...mySet].filter((value) => !otherSet.has(value)));

console.log(differenceSet); // Output: Set { 4, 5, 6 }

// Checking the symmetric difference between two Sets

let symmetricDifferenceSet = new Set(
  [...mySet].filter((value) => !otherSet.has(value) || !mySet.has(value))
);

console.log(symmetricDifferenceSet); // Output: Set { 4, 5, 6 }

// Converting a Set to a String

console.log(mySet.toString()); // Output: Set { 1, 3 }

// Converting a Set to a JSON string

console.log(JSON.stringify(mySet)); // Output: "[1,3]"

// Converting a Set to a Map

let myMap = new Map([...mySet].map((value) => [value, value * 2]));

console.log(myMap); // Output: Map { 1 => 2, 3 => 6 }

// Converting a Set to a WeakSet

let myWeakSet = new WeakSet([...mySet]);

console.log(myWeakSet); // Output: WeakSet { 1, 3 }

// The forEach() Method

mySet.forEach((value) => console.log(value * 3)); // Output: 3, 9

// The map() Method

let mappedSet = new Set([...mySet].map((value) => value * 3));

console.log(mappedSet); // Output: Set { 3, 9 }

// The filter() Method

let filteredSet = new Set([...mySet].filter((value) => value % 2 === 0));

console.log(filteredSet); // Output: Set { 2 }

// The values() Method

let valuesArray = [...mySet.values()];

console.log(valuesArray); // Output: [ 1, 3 ]

// The keys() Method

let keysArray = [...mySet.keys()];

console.log(keysArray); // Output: [ 1, 3 ]

// The entries() Method

let entriesArray = [...mySet.entries()];

console.log(entriesArray); // Output: [ [ 1, 1 ], [ 3, 3 ] ]
