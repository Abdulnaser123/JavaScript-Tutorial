// JavaScript Arrays

// Create an array with 5 strings

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];

// Accessing elements using array index

console.log(myArray[0]); // Output: apple
console.log(myArray[4]); // Output: elderberry

// Modifying elements using array index

myArray[0] = "grape";
console.log(myArray[0]); // Output: grape

// Adding elements to the end of the array using the push() method

myArray.push("fig");
console.log(myArray); // Output: ["grape", "banana", "cherry", "date", "elderberry", "fig"]

// Removing elements from the end of the array using the pop() method

myArray.pop();
console.log(myArray); // Output: ["grape", "banana", "cherry", "date", "elderberry"]

// Adding elements to the beginning of the array using theunshift() method

myArray.unshift("watermelon");
console.log(myArray); // Output: ["watermelon", "grape", "banana", "cherry", "date", "elderberry"]

// Removing elements from the beginning of the array using the shift() method

myArray.shift();
console.log(myArray); // Output: ["grape", "banana", "cherry", "date", "elderberry"]

// Concatenating arrays using the concat() method

let secondArray = ["kiwi", "lemon"];
let combinedArray = myArray.concat(secondArray);
console.log(combinedArray); // Output: ["grape", "banana", "cherry", "date", "elderberry", "kiwi", "lemon"]

// Splicing elements from an array using the splice() method

myArray.splice(2, 1); // Remove "cherry"
console.log(myArray); // Output: ["grape", "banana", "date", "elderberry", "kiwi", "lemon"]

myArray.splice(1, 0, "orange", "mango"); // Insert "orange" and "mango" at index 1
console.log(myArray); // Output: ["grape", "orange", "banana", "date", "elderberry", "kiwi", "lemon"]

// Searching for an element in an array using the indexOf() method

console.log(myArray.indexOf("banana")); // Output: 1

// Sorting an array in ascending order using the sort() method

myArray.sort();
console.log(myArray); // Output: ["apple", "banana", "date", "elderberry", "fig", "grape", "kiwi", "lemon", "mango", "orange", "watermelon"]

// Sorting an array in descending order using the reverse() method

myArray.reverse();
console.log(myArray); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]

// Checking if an array contains a specific element using the includes() method

console.log(myArray.includes("banana")); // Output: true

// Finding the length of an array using the length property

console.log(myArray.length); // Output: 11

// Checking if an array is empty using the length property

console.log(myArray.length === 0); // Output: false

// Iterating through an array using a for loop

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Iterating through an array using a for...of loop

for (let element of myArray) {
  console.log(element);
}

// Iterating through an array using a forEach() method

myArray.forEach(function (element) {
  console.log(element);
});

// Creating a new array from an existing array using the slice() method

let subArray = myArray.slice(2, 5);
console.log(subArray); // Output: ["date", "elderberry", "kiwi"]

// Creating a new array from an existing array using the spread operator

let copiedArray = [...myArray];
console.log(copiedArray); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]

// Creating a new array from an existing array using the Array.from() method

let convertedArray = Array.from(myArray);
console.log(convertedArray); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]

// Creating a new array from an existing array using the map() method

let squaredArray = myArray.map(function (element) {
  return element * element;
});
console.log(squaredArray); // Output: [153, 25, 64, 1296, 9, 361, 49, 1849, 16, 25, 1]

// Creating a new array from an existing array using the filter() method

let filteredArray = myArray.filter(function (element) {
  return element.startsWith("a");
});
console.log(filteredArray); // Output: ["apple", "apple"]

// Creating a new array from an existing array using the reduce() method

let sumArray = myArray.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.length;
}, 0);
console.log(sumArray); // Output: 55

// Creating a new array from an existing array using the reduceRight() method

let reversedArray = myArray.reduceRight(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
console.log(reversedArray); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]

// Creating a new array from an existing array using the Set data structure

let uniqueArray = [...new Set(myArray)];
console.log(uniqueArray); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]

// Creating a new array from an existing array using the Array.from() method and a Set data structure

let uniqueArray2 = Array.from(new Set(myArray));
console.log(uniqueArray2); // Output: ["watermelon", "orange", "mango", "lemon", "kiwi", "grape", "fig", "elderberry", "date", "banana", "apple"]
// Adding elements with high indexes can create undefined "holes" in an array:

let myArrayWithHoles = ["apple", "banana", "cherry", undefined, "elderberry"];

console.log(myArrayWithHoles[3]); // Output: undefined

// To avoid this, you can use the Array.prototype.fill() method to fill all elements in an array with a specific value:

myArrayWithHoles.fill("grape", 3);

console.log(myArrayWithHoles); // Output: ["apple", "banana", "cherry", "grape", "grape", "elderberry"]

// You can also use the Array.prototype.copyWithin() method to copy elements within an array:

myArrayWithHoles.copyWithin(3, 0);

console.log(myArrayWithHoles); // Output: ["apple", "banana", "cherry", "apple", "banana", "elderberry"]

// You can also use the Array.prototype.find() method to find the first element that satisfies a condition:

let foundElement = myArrayWithHoles.find(function (element) {
  return element === "banana";
});

console.log(foundElement); // Output: "banana"

// You can also use the Array.prototype.findIndex() method to find the index of the first element that satisfies a condition:

let foundIndex = myArrayWithHoles.findIndex(function (element) {
  return element === "banana";
});

console.log(foundIndex); // Output: 1

// You can also use the Array.prototype.some() method to check if at least one element satisfies a condition:

let hasBanana = myArrayWithHoles.some(function (element) {
  return element === "banana";
});

console.log(hasBanana); // Output: true

// You can also use the Array.prototype.every() method to check if all elements satisfy a condition:

let allElementsAreApples = myArrayWithHoles.every(function (element) {
  return element === "apple";
});

console.log(allElementsAreApples); // Output: false

// You can also use the Array.prototype.flatMap() method to transform an array into a new array by applying a function to each element and combining the results:

let transformedArray = myArrayWithHoles.flatMap(function (element) {
  return element.split("");
});

console.log(transformedArray); // Output: ["a", "p", "p", "l", "e", "a", "b", "a", "n", "a", "c", "h", "e", "r", "y"]

// You can also use the Array.prototype.reduceRight() method to apply a function to each element in reverse order and reduce the array to a single value:

let reducedValue = myArrayWithHoles.reduceRight(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.length;
},
0);

console.log(reducedValue); // Output: 55

// You can also use the Array.prototype.sort() method with a custom comparator function to sort an array in a specific order:

let sortedArray = myArrayWithHoles.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(sortedArray); // Output: ["apple", "banana", "cherry", undefined, "elderberry"]

// You can also use the Array.prototype.reverse() method to reverse the order of elements in an array:

let reversedArray2 = myArrayWithHoles.reverse();

console.log(reversedArray2); // Output: ["elderberry", undefined, "cherry", "banana", "apple"]

// You can also use the Array.prototype.splice() method to insert or remove elements from an array:

myArrayWithHoles.splice(2, 0, "date");

console.log(myArrayWithHoles); // Output: ["apple", "banana", "date", "cherry", undefined, "elderberry"]

myArrayWithHoles.splice(2, 1);

console.log(myArrayWithHoles); // Output: ["apple", "banana", "cherry", undefined, "elderberry"]

myArrayWithHoles.splice(2, 0, "fig", "grape");

console.log(myArrayWithHoles); // Output: ["apple", "banana", "fig", "grape", "cherry", undefined, "elderberry"]

myArrayWithHoles.splice(2, 2);

console.log(myArrayWithHoles); // Output: ["apple", "banana", "elderberry"]
// Arrays are a special kind of objects, with numbered indexes.

// Each index in an array has a unique value, and the values can be of any data type.

let myArray = ["apple", 2, true, { name: "John Doe" }, [1, 2, 3]];

console.log(myArray[0]); // Output: "apple"
console.log(myArray[1]); // Output: 2
console.log(myArray[2]); // Output: true

myArray[2] = false;

console.log(myArray[2]); // Output: false

myArray[4][1] = 4;

console.log(myArray[4]); // Output: [1, 4, 3]

// You can also use negative indexes to access elements from the end of the array:

console.log(myArray[-1]); // Output: [1, 4, 3]
console.log(myArray[-2]); // Output: 4

// You can also use the Array.prototype.push() method to add elements to the end of an array:

myArray.push("kiwi", "grape");

console.log(myArray); // Output: ["apple", 2, false, { name: "John Doe" }, [1, 4, 3], "kiwi", "grape"]

// You can also use the Array.prototype.pop() method to remove the last element from an array:

myArray.pop();

console.log(myArray); // Output: ["apple", 2, false, { name: "John Doe" }, [1, 4, 3]

// How to Recognize an Array

// An array is an ordered collection of elements. To recognize an array, check if the following conditions are met:

// 1. The variable is defined.
// 2. The variable is assigned an array value.
// 3. The variable has a numbered index.
// 4. The variable has a property named "length" with a value greater than 0.

let myArray = ["apple", 2, true, { name: "John Doe" }, [1, 2, 3]];

console.log(Array.isArray(myArray)); // Output: true

// How to Check if an Element is an Array

// To check if an element is an array, use the Array.isArray() method:

let myArray = ["apple", 2, true, { name: "John Doe" }, [1, 2, 3]];

console.log(Array.isArray(myArray[0])); // Output: true
console.log(Array.isArray(myArray[1])); // Output: false

const fruits = ["Banana", "Orange", "Apple"];

fruits instanceof Array;

// Output: true

// Nested Arrays and Objects

let nestedArray = ["apple", 2, true, { name: "John Doe" }, [1, 2, 3]];

console.log(nestedArray[4][1]); // Output: 4

let nestedObject = {
  fruits: ["Banana", "Orange", "Apple"],
  vegetables: ["Tomato", "Cucumber", "Carrot"],
};

console.log(nestedObject.fruits[1]); // Output: "Orange"
