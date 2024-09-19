// JavaScript Maps

// Step 1: Create a new map

let map = new Map();

// Step 2: Add key-value pairs to the map

map.set("Apple", "Fruit");
map.set("Banana", "Fruit");
map.set("Carrot", "Vegetable");

// Step 3: Retrieve values from the map using keys

console.log(map.get("Apple")); // Output: Fruit
console.log(map.get("Banana")); // Output: Fruit
console.log(map.get("Carrot")); // Output: Vegetable

// Step 4: Check if a key exists in the map

console.log(map.has("Apple")); // Output: true
console.log(map.has("Orange")); // Output: false

// Step 5: Iterate through the map using a for...of loop

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Step 6: Remove a key-value pair from the map

map.delete("Carrot");
console.log(map.get("Carrot")); // Output: undefined

// Step 7: Clear all key-value pairs from the map

map.clear();
console.log(map.size); // Output: 0

// Step 8: Convert the map to an array of key-value pairs

let array = Array.from(map);
console.log(array); // Output: [ [ 'Apple', 'Fruit' ], [ 'Banana', 'Fruit' ] ]

// Step 9: Convert the map to an object

let object = Object.fromEntries(map);
console.log(object); // Output: { Apple: 'Fruit', Banana: 'Fruit' }

// Step 10: Check if a map is empty

console.log(map.size === 0); // Output: true

// Step 11: Iterate through the keys of a map

let keys = Array.from(map.keys());
console.log(keys); // Output: [ 'Apple', 'Banana' ]

// Step 12: Iterate through the values of a map

let values = Array.from(map.values());
console.log(values); // Output: [ 'Fruit', 'Fruit' ]

// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:

// Objects:

// - Objects are unordered collections of key-value pairs.

// - Keys must be Strings (or Symbols)

// - Objects are created using curly braces {} and key-value pairs are separated by commas.

// - Objects can have duplicate keys, but only the last occurrence of a key will be kept.

// - Objects are mutable, meaning you can add, remove, or change key-value pairs after creating them.

// - Maps are unordered collections of key-value pairs.

// - Maps can have any data type as keys and values.

// - Maps are created using the Map() constructor or the new Map() keyword.

// - Maps are iterable, meaning you can use a for...of loop to iterate through the key-value pairs.

// JavaScript Map Methods

// Map Methods:

// - set(key, value): Adds a new key-value pair to the map or updates the value associated with an existing key.

// - get(key): Retrieves the value associated with a given key.

// - has(key): Checks if a key exists in the map.

// - delete(key): Removes a key-value pair from the map.

// - clear(): Removes all key-value pairs from the map.

// - forEach(): Iterates through the key-value pairs of the map using a callback function.

// - entries(): Returns a new Iterator object that contains an array of [key, value] for each element in the map.

// - keys(): Returns a new Iterator object that contains the keys for each element in the map.

// - size: Returns the number of key-value pairs in the map.
// Objects as Keys

// JavaScript Objects as keys can be any data type, including functions, arrays, or other objects. However, it's important to note that using objects as keys can lead to some performance issues, as JavaScript needs to convert the object into a string when using it as a key.

// Step 1: Create a new object

let object = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  getFullName() {
    return `${this.name} ${this.age}`;
  },
};

// Step 2: Add an object as a key

let map = new Map();
map.set(object, "Person");

// Step 3: Retrieve the value associated with the object

console.log(map.get(object)); // Output: Person

// Step 4: Iterate through the keys of the map

let keys = Array.from(map.keys());

for (let key of keys) {
  console.log(key.getFullName()); // Output: John 30
}

// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
