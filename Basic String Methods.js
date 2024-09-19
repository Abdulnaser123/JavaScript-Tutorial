// Basic String Methods

// String concatenation

let string1 = "Hello";
let string2 = " World";

let concatenatedString = string1 + " " + string2;
console.log(concatenatedString); // Output: Hello World

// String length

let string3 = "Hello, World!";
console.log(string3.length); // Output: 13

// String toUpperCase

let string4 = "hello, world!";
console.log(string4.toUpperCase()); // Output: HELLO, WORLD!

// String toLowerCase

let string5 = "HELLO, WORLD!";
console.log(string5.toLowerCase()); // Output: hello, world!

// Searching for a substring

let string6 = "Hello, World!";
let substring = "lo";

console.log(string6.indexOf(substring)); // Output: 2

console.log(string6.lastIndexOf(substring)); // Output: 10

// Replacing a substring

let string7 = "Hello, World!";
let oldSubstring = "lo";
let newSubstring = "bye";

console.log(string7.replace(oldSubstring, newSubstring)); // Output: Hello, bye World!

// Splitting a string into an array

let string8 = "Hello, World!";
let delimiter = ",";

console.log(string8.split(delimiter)); // Output: ["Hello", " World!"]

// Joining an array into a string

let array = ["Hello", " ", "World!"];
let separator = ",";

console.log(array.join(separator)); // Output: Hello, World!

// Trim leading and trailing whitespace

let string9 = "  Hello, World!  ";

console.log(string9.trim()); // Output: Hello, World!

// Check if a string starts with a given substring

let string10 = "Hello, World!";
let substring1 = "Hello";

console.log(string10.startsWith(substring1)); // Output: true

// Check if a string ends with a given substring

let string11 = "Hello, World!";
let substring2 = "World!";

console.log(string11.endsWith(substring2)); // Output: true

// Check if a string contains a given substring

let string12 = "Hello, World!";
let substring3 = "lo";

console.log(string12.includes(substring3)); // Output: true

// Check if a string is a palindrome

let string13 = "racecar";

console.log(string13.split("").reverse().join("") === string13); // Output: true

// Check if a string is a valid email address

let string14 = "example@example.com";

console.log(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(string14)); // Output: true

// Check if a string is a valid URL

// Note: This solution assumes that URLs are well-formed and do not require additional validation.

let string15 = "https://example.com";

console.log(string15.startsWith("http://") || string15.startsWith("https://")); // Output: true

// Check if a string is a valid IP address

let string16 = "192.168.0.1";

console.log(
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    string16
  )
); // Output: true

// Check if a string is a valid hexadecimal color code

let string17 = "#FF0000";

console.log(/^#([0-9A-Fa-f]{3}){1,2}$/.test(string17)); // Output: true

// Check if a string is a valid RGB color code

let string18 = "rgb(255, 0, 0)";

console.log(
  /^rgb\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?), (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?), (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/.test(
    string18
  )
); // Output: true

// Check if a string is a valid CMYK color code

let string19 = "cmyk(0, 1, 0, 0)";

console.log(
  /^cmyk\((100|[0-9]{1,2})%, (100|[0-9]{1,2})%, (100|[0-9]{1,2})%, (100|[0-9]{1,2})?\)$/.test(
    string19
  )
); // Output: true

// Check if a string is a valid HSL color code

let string20 = "hsl(0, 100%, 50%)";

console.log(
  /^hsl\((360|[0-9]{1,3}), (100|[0-9]{1,2})%, (100|[0-9]{1,2})%\)$/.test(
    string20
  )
); // Output: true

// Check if a string is a valid HSLA color code

let string21 = "hsla(0, 100%, 50%, 0.5)";

console.log(
  /^hsla\((360|[0-9]{1,3}), (100|[0-9]{1,2})%, (100|[0-9]{1,2})%, (100|[0-9]{1,2})?\)$/.test(
    string21
  )
); // Output: true

// Check if a string is a valid CSS color name

let string22 = "red";

console.log(
  /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)$/.test(
    string22
  )
); // Output: true

// Check if a string is a valid CSS shorthand color

let string23 = "rgba(255, 0, 0, 0.5)";

console.log(/^rgba\((255, 0, 0), (100|[0-9]{1,2})%\)$/.test(string23)); // Output: true

// Check if a string is a valid CSS custom property

let string24 = "--custom-color: red";

console.log(/^--[a-zA-Z0-9_-]+$/.test(string24)); // Output: true

// Check if a string is a valid CSS variable

let string25 = "var(--custom-color)";

console.log(/^var\(--[a-zA-Z0-9_-]+\)$/.test(string25)); // Output: true

// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

let string26 = "Hello, World!";
let substring4 = "lo";

console.log(string26.replace(substring4, "bye")); // Output: Hello, bye World!
console.log(string26); // Output: Hello, World!

// The original string remains unchanged.

// In JavaScript, strings are also objects and support additional methods and properties. For example, you can access the characters in a string using indexing and iterate over each character using a loop.

let string27 = "Hello, World!";

console.log(string27[0]); // Output: H
console.log(string27[string27.length - 1]); // Output:!

for (let i = 0; i < string27.length; i++) {
  console.log(string27[i]);
}

// The above code will output each character of the string "Hello, World!" on a new line.

// To convert a string to uppercase, you can use the toUpperCase() method.

let string28 = "hello, world!";
console.log(string28.toUpperCase()); // Output: HELLO, WORLD!

// To convert a string to lowercase, you can use the toLowerCase() method.

let string29 = "HELLO, WORLD!";
console.log(string29.toLowerCase()); // Output: hello, world!

// To check if a string contains only alphabetic characters, you can use the isAlpha() method.

let string30 = "hello, world!";
console.log(string30.isAlpha()); // Output: true

// To check if a string contains only numeric characters, you can use the isNumeric() method.

let string31 = "12345";
console.log(string31.isNumeric()); // Output: true

// To check if a string contains only alphanumeric characters (including underscores), you can use the isAlphanumeric() method.

let string32 = "hello_world";
console.log(string32.isAlphanumeric()); // Output: true

// To check if a string contains only whitespace characters, you can use the isWhitespace() method.

let string33 = "   ";
console.log(string33.isWhitespace()); // Output: true

// To check if a string contains only printable characters (excluding whitespace), you can use the isPrintable() method.

let string34 = "Hello, World!";
console.log(string34.isPrintable()); // Output: true

// To check if a string starts with a given substring, you can use the startsWith() method.

let string35 = "Hello, World!";
let substring5 = "Hello";
console.log(string35.startsWith(substring5)); // Output: true

// To check if a string ends with a given substring, you can use the endsWith() method.

let string36 = "Hello, World!";
let substring6 = "World!";
console.log(string36.endsWith(substring6)); // Output: true

// To check if a string contains a given substring, you can use the includes() method.

let string37 = "Hello, World!";
let substring7 = "lo";
console.log(string37.includes(substring7)); // Output: true

// To replace a substring in a string, you can use the replace() method.

let string38 = "Hello, World!";
let substring8 = "World";
let replacement = "Universe";
console.log(string38.replace(substring8, replacement)); // Output: Hello, Universe!

// To split a string into an array of substrings, you can use the split() method.

let string39 = "Hello, World!";
let delimiter = ", ";
console.log(string39.split(delimiter)); // Output: ["Hello", " World!"]

// To join an array of substrings into a single string, you can use the join() method.

let array4 = ["Hello", " ", "World!"];
let separator = ",";
console.log(array4.join(separator)); // Output: Hello, World!

// To trim leading and trailing whitespace from a string, you can use the trim() method.

let string40 = "   Hello, World!   ";
console.log(string40.trim()); // Output: Hello, World!

// To remove all whitespace characters from a string, you can use the replace() method with a regular expression.

let string41 = "   Hello, World!   ";
let regex4 = /\s+/g;
console.log(string41.replace(regex4, "")); // Output: Hello,World!

// To convert a string to camelCase, you can use the following steps:

1. Split the string into an array of words using the split() method with a space as the delimiter.
2. Convert the first word to lowercase using the toLowerCase() method.
3. Iterate over the remaining words and capitalize the first letter of each word using the slice() method and the toUpperCase() method.
4. Join the array of words back into a single string using the join() method with an empty string as the delimiter.

let string42 = "Hello, World!";

let words = string42.split(" ");

words[0] = words[0].toLowerCase();

for (let i = 1; i < words.length; i++) {
  words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

let camelCaseString = words.join("");

console.log(camelCaseString); // Output: helloWorld

// To convert a string to snake_case, you can use the following steps:

1. Split the string into an array of words using the split() method with a space as the delimiter.
2. Iterate over the array of words and convert each word to lowercase using the toLowerCase() method.
3. Replace spaces with underscores using the replace() method with a regular expression.
4. Join the array of words back into a single string using the join() method with an empty string as the delimiter.

let string43 = "Hello, World!";

let words2 = string43.split(" ");

for (let i = 0; i < words2.length; i++) {
  words2[i] = words2[i].toLowerCase();
}

let snakeCaseString = words2.join("_");

console.log(snakeCaseString); // Output: hello_world

// String slice()

let string44 = "Hello, World!";

console.log(string44.slice(0, 5)); // Output: Hello
console.log(string44.slice(6)); // Output: World!
console.log(string44.slice(3, 7)); // Output: lo,

// String substring()

let string45 = "Hello, World!";

console.log(string45.substring(0, 5)); // Output: Hello
console.log(string45.substring(6)); // Output: World!
console.log(string45.substring(3, 7)); // Output: lo,

// String toUpperCase()

let string46 = "hello, world!";
console.log(string46.toUpperCase()); // Output: HELLO, WORLD!

// String toLowerCase()

let string47 = "HELLO, WORLD!";
console.log(string47.toLowerCase()); // Output: hello, world!

// String toLocaleUpperCase()

let string48 = "hello, world!";
console.log(string48.toLocaleUpperCase()); // Output: HELLO, WORLD!

// String toLocaleLowerCase()

let string49 = "HELLO, WORLD!";
console.log(string49.toLocaleLowerCase()); // Output: hello, world!

// String trim()

let string50 = "   Hello, World!   ";
console.log(string50.trim()); // Output: Hello, World!

// String replace()

let string51 = "Hello, World!";
let regex5 = /l/g;
console.log(string51.replace(regex5, "#")); // Output: He#o, Wor#d!

// String match()

let string52 = "Hello, World!";
let regex6 = /l/g;
console.log(string52.match(regex6)); // Output: [ 'l', 'l' ]

// String search()

let string53 = "Hello, World!";
let regex7 = /l/g;
console.log(string53.search(regex7)); // Output: 2

// String split()

let string54 = "Hello, World!";
let delimiter = ", ";
console.log(string54.split(delimiter)); // Output: [ 'Hello', 'World!' ]

// String join()

let array5 = [ "Hello", " ", "World!" ];
let separator = ",";
console.log(array5.join(separator)); // Output: Hello, World!

// String repeat()

let string55 = "Hello, ";
console.log(string55.repeat(3)); // Output: Hello, Hello, Hello,
// String Search Methods

// String.prototype.search()

let string56 = "Hello, World!";
let regex8 = /l/g;
console.log(string56.search(regex8)); // Output: 2

// String.prototype.match()

let string57 = "Hello, World!";
let regex9 = /l/g;
console.log(string57.match(regex9)); // Output: [ 'l', 'l' ]

// String.prototype.replace()

let string58 = "Hello, World!";
let regex10 = /l/g;
console.log(string58.replace(regex10, "#")); // Output: He#o, Wor#d!

// String indexOf()

let string59 = "Hello, World!";
let substring9 = "lo";
console.log(string59.indexOf(substring9)); // Output: 3

// String lastIndexOf()

let string60 = "Hello, World!";
let substring10 = "lo";
console.log(string60.lastIndexOf(substring10)); // Output: 7

// String slice()

let string61 = "Hello, World!";
console.log(string61.slice(0, 5)); // Output: Hello
console.log(string61.slice(6)); // Output: World!
console.log(string61.slice(3, 7)); // Output: lo,

// String substring()

let string62 = "Hello, World!";
console.log(string62.substring(0, 5)); // Output: Hello
console.log(string62.substring(6)); // Output: World!
console.log(string62.substring(3, 7)); // Output: lo,

