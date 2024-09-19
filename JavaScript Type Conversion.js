//JavaScript Type Conversion
// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

// Strings to Numbers

// String that represents a number
let strNum = "123";

// Convert string to number using the Number() constructor

let num1 = Number(strNum);

console.log("String to Number:", num1); // Output: 123

// String that represents a number with a decimal point

let strNumWithDecimal = "123.45";

// Convert string to number using the Number() constructor

let num2 = Number(strNumWithDecimal);

console.log("String with Decimal to Number:", num2); // Output: 123.45

// String that represents a number with scientific notation

let strNumWithScientificNotation = "1.23e+3";

// Convert string to number using the Number() constructor

let num3 = Number(strNumWithScientificNotation);

console.log("String with Scientific Notation to Number:", num3); // Output: 1230

// String that represents a number with leading zeros

let strNumWithLeadingZeros = "00123";

// Convert string to number using the Number() constructor

let num4 = Number(strNumWithLeadingZeros);

console.log("String with Leading Zeros to Number:", num4); // Output: 123

// String that represents a number with a leading negative sign

let strNumWithNegativeSign = "-123";

// Convert string to number using the Number() constructor

let num5 = Number(strNumWithNegativeSign);

console.log("String with Negative Sign to Number:", num5); // Output: -123

// Converting Numbers to Strings

// Number to string using the toString() method

let num6 = 123;

let str6 = num6.toString();

console.log("Number to String:", str6); // Output: "123"

// Number to string using the toString() method with a radix parameter

let num7 = 123;

let str7 = num7.toString(2);

console.log("Number to String with Radix (Binary):", str7); // Output: "1111011"

// Converting Dates to Numbers

// Date object representing a specific date and time

let date = new Date("2022-01-01 12:00:00");

// Convert date to number using the getTime() method

let num8 = date.getTime();

console.log("Date to Number:", num8); // Output: 1640998400000

// Converting Numbers to Dates

// Number to date using the Date() constructor

let num9 = 1640998400000;

let date9 = new Date(num9);

console.log("Number to Date:", date9); // Output: Sun Jan 01 2022 12:00:00 GMT+0000 (Coordinated Universal Time)

// Converting Booleans to Numbers

// Boolean value true

let bool1 = true;

// Convert boolean to number using the Number() constructor

let num10 = Number(bool1);

console.log("Boolean to Number (true):", num10); // Output: 1

// Boolean value false

let bool2 = false;

// Convert boolean to number using the Number() constructor

let num11 = Number(bool2);

console.log("Boolean to Number (false):", num11); // Output: 0

// Converting Numbers to Booleans

// Number value 0

let num12 = 0;

// Convert number to boolean using the Boolean() constructor

let bool3 = Boolean(num12);

console.log("Number to Boolean (0):", bool3); // Output: false

// Number value 1

let num13 = 1;

// Convert number to boolean using the Boolean() constructor

let bool4 = Boolean(num13);

console.log("Number to Boolean (1):", bool4); // Output: true

// Number value -0

let num14 = -0;

// Convert number to boolean using the Boolean() constructor

let bool5 = Boolean(num14);

console.log("Number to Boolean (-0):", bool5); // Output: false

// Number value NaN

let num15 = NaN;

// Convert number to boolean using the Boolean() constructor

let bool6 = Boolean(num15);

console.log("Number to Boolean (NaN):", bool6); // Output: false
