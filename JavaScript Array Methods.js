// JavaScript Array Methods

// 1. forEach()

// The forEach() method executes a provided function once for each array element.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

// 2. map()

// The map() method creates a new array with the results of calling a provided function on every element in the array.

let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 3. filter()

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// 4. reduce()

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

// 5. sort()

// The sort() method sorts the elements of an array in place and returns the array.

let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]

// 6. includes()

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(numbers.includes(3)); // Output: true

// 7. find()

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

let firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// 8. every()

// The every() method tests whether all elements in the array pass the test implemented by the provided function.

console.log(numbers.every((number) => number > 0)); // Output: true

// 9. some()

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

console.log(numbers.some((number) => number > 5)); // Output: false

// 10. indexOf()

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(numbers.indexOf(3)); // Output: 2

// 11. lastIndexOf()

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.

console.log(numbers.lastIndexOf(3)); // Output: 2

// 12. join()

// The join() method joins all elements of an array into a string, separated by commas or a specified separator string.

console.log(numbers.join(", ")); // Output: "1, 2, 3, 4, 5"

// 13. slice()

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start (inclusive) to end (exclusive).

let slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]

// 14. splice()

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let modifiedNumbers = numbers.splice(1, 2, 7, 8);

console.log(numbers); // Output: [1, 7, 8, 4, 5]

console.log(modifiedNumbers); // Output: [2, 3]

// 15. concat()

// The concat() method merges two or more arrays, and returns a new array.

let combinedNumbers = numbers.concat(slicedNumbers);
console.log(combinedNumbers); // Output: [1, 7, 8, 2, 3, 4]

// 16. push()

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

numbers.push(9, 10);
console.log(numbers); // Output: [1, 7, 8, 2, 3, 4, 9, 10]

// 17. pop()

// The pop() method removes the last element from an array and returns that element.

let poppedNumber = numbers.pop();
console.log(numbers); // Output: [1, 7, 8, 2, 3, 4, 9]
console.log(poppedNumber); // Output: 10

// 18. unshift()

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

numbers.unshift(0, -1);
console.log(numbers); // Output: [-1, 0, 1, 7, 8, 2, 3, 4, 9]

// 19. shift()

// The shift() method removes the first element from an array and returns that element.

let shiftedNumber = numbers.shift();
console.log(numbers); // Output: [0, 1, 7, 8, 2, 3, 4, 9]
console.log(shiftedNumber); // Output: -1

// 20. reverse()

// The reverse() method reverses the order of the elements in an array.

numbers.reverse();
console.log(numbers); // Output: [9, 4, 3, 2, 8, 7, 1, 0]

// 21. toString()

// The toString() method returns a string representing the array and its elements.

console.log(numbers.toString()); // Output: "9,4,3,2,8,7,1,0"

// 22. toLocaleString()

// The toLocaleString() method returns a string representing the array and its elements, formatted according to the host's locale.

console.log(numbers.toLocaleString()); // Output: "9,4,3,2,8,7,1,0"

// 23. flat()

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let nestedArray = [1, 2, [3, 4, [5, 6]], 7];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// 24. flatMap()

// The flatMap() method applies a given function to each element of an array (including arrays) and returns a new array with the results.

let squaredNumbers = nestedArray.flatMap((number) => [number * number]);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49]

// 25. reduceRight()

// The reduceRight() method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

let sumRight = squaredNumbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumRight); // Output: 156

// 26. entries()

// The entries() method returns a new Iterator object that contains the [index, value] pairs for each index in the array.

let entriesIterator = numbers.entries();
console.log([...entriesIterator]); // Output: [[0, -1], [1, 0], [2, 1], [3, 7], [4, 8], [5, 2], [6, 3], [7, 4], [8, 9]]

// 27. keys()

// The keys() method returns a new Iterator object that contains the indices for each element in the array.

let keysIterator = numbers.keys();
console.log([...keysIterator]); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// 28. values()

// The values() method returns a new Iterator object that contains the values for each element in the array.

let valuesIterator = numbers.values();
console.log([...valuesIterator]); // Output: [-1, 0, 1, 7, 8, 2, 3, 4, 9]

// 29. forEach()

// The forEach() method executes a provided function once for each array element.

numbers.forEach((number, index) =>
  console.log(`Index: ${index}, Value: ${number}`)
);
