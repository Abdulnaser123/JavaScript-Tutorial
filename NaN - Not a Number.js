// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

console.log(7 + "abc"); // Outputs: NaN

// NaN is also returned when attempting to compare a non-numeric string with a numeric value:

console.log(7 < "abc"); // Outputs: false

// NaN is also returned when attempting to get the length of a non-numeric string:

console.log("abc".length); // Outputs: NaN

// NaN is also returned when attempting to access a non-existent property on a non-object:

console.log(undefined.property); // Outputs: NaN

// NaN is also returned when attempting to log a non-numeric value:

console.log(Math.log("abc")); // Outputs: NaN

// NaN is also returned when attempting to divide by zero:

console.log(7 / 0); // Outputs: Infinity

// NaN is also returned when attempting to subtract Infinity from Infinity:

console.log(Infinity - Infinity); // Outputs: NaN

// NaN is also returned when attempting to perform any mathematical operation on NaN:

console.log(NaN + 7); // Outputs: NaN
console.log(NaN - 7); // Outputs: NaN
console.log(NaN * 7); // Outputs: NaN
console.log(NaN / 7); // Outputs: NaN
console.log(NaN % 7); // Outputs: NaN

// NaN is also returned when attempting to perform any comparison operation on NaN:

console.log(NaN > 7); // Outputs: false
console.log(NaN < 7); // Outputs: false
console.log(NaN >= 7); // Outputs: false
console.log(NaN <= 7); // Outputs: false
console.log(NaN === 7); // Outputs: false

// NaN is also returned when attempting to use the logical operators "&&" and "||" on NaN:

console.log(NaN && 7); // Outputs: false
console.log(NaN || 7); // Outputs: 7

// NaN is also returned when attempting to use the bitwise operators "&", "|", "^", ">>", ">>>", and "<<" on NaN:

console.log(NaN & 7); // Outputs: NaN
console.log(NaN | 7); // Outputs: 7
console.log(NaN ^ 7); // Outputs: 7
console.log(NaN >> 7); // Outputs: NaN
console.log(NaN >>> 7); // Outputs: 7

console.log(NaN << 7); // Outputs: NaN

// NaN is also returned when attempting to use the increment and decrement operators (++ and --) on NaN:

console.log(++NaN); // Outputs: NaN
console.log(--NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "delete" operator on NaN:

console.log(delete NaN); // Outputs: false

// NaN is also returned when attempting to use the "in" operator on NaN:

console.log(NaN in {}); // Outputs: false

// NaN is also returned when attempting to use the "instanceof" operator on NaN:

console.log(NaN instanceof Number); // Outputs: false

// NaN is also returned when attempting to use the "toString()" method on NaN:

console.log(NaN.toString()); // Outputs: "NaN"

// NaN is also returned when attempting to use the "toFixed()" method on NaN:

console.log(NaN.toFixed(2)); // Outputs: "NaN"

// NaN is also returned when attempting to use the "toExponential()" method on NaN:

console.log(NaN.toExponential(2)); // Outputs: "NaN"

// NaN is also returned when attempting to use the "toPrecision()" method on NaN:

console.log(NaN.toPrecision(2)); // Outputs: "NaN"

// NaN is also returned when attempting to use the "valueOf()" method on NaN:

console.log(NaN.valueOf()); // Outputs: NaN

// NaN is also returned when attempting to use the "isFinite()" method on NaN:

console.log(isNaN(NaN)); // Outputs: false
console.log(isFinite(NaN)); // Outputs: false

// NaN is also returned when attempting to use the "isNaN()" function on NaN:

console.log(isNaN(NaN)); // Outputs: true
console.log(isNaN("abc")); // Outputs: true

// NaN is also returned when attempting to use the "parseFloat()" function on NaN:

console.log(parseFloat("abc")); // Outputs: NaN

// NaN is also returned when attempting to use the "parseInt()" function on NaN:

console.log(parseInt("abc")); // Outputs: NaN

// NaN is also returned when attempting to use the "Object.is()" method on NaN:

console.log(Object.is(NaN, NaN)); // Outputs: true

// NaN is also returned when attempting to use the "Object.assign()" method on NaN:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
console.log(Object.assign(obj1, NaN)); // Outputs: { a: 1 }

// NaN is also returned when attempting to use the "Object.create()" method on NaN:

console.log(Object.create(NaN)); // Outputs: null

// NaN is also returned when attempting to use the "Object.defineProperty()" method on NaN:

const obj3 = {};
Object.defineProperty(obj3, "a", { value: 1 });
console.log(obj3.a); // Outputs: 1

// NaN is also returned when attempting to use the "Object.freeze()" method on NaN:

Object.freeze(NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "Object.getOwnPropertyDescriptor()" method on NaN:

console.log(Object.getOwnPropertyDescriptor(NaN, "a")); // Outputs: undefined

// NaN is also returned when attempting to use the "Object.getOwnPropertyNames()" method on NaN:

console.log(Object.getOwnPropertyNames(NaN)); // Outputs: []

// NaN is also returned when attempting to use the "Object.keys()" method on NaN:

console.log(Object.keys(NaN)); // Outputs: []

// NaN is also returned when attempting to use the "Object.values()" method on NaN:

console.log(Object.values(NaN)); // Outputs: []

// NaN is also returned when attempting to use the "Object.entries()" method on NaN:

console.log(Object.entries(NaN)); // Outputs: []

// NaN is also returned when attempting to use the "Object.isExtensible()" method on NaN:

console.log(Object.isExtensible(NaN)); // Outputs: false

// NaN is also returned when attempting to use the "Object.preventExtensions()" method on NaN:

Object.preventExtensions(NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "Object.isSealed()" method on NaN:

console.log(Object.isSealed(NaN)); // Outputs: false

// NaN is also returned when attempting to use the "Object.seal()" method on NaN:

Object.seal(NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "Object.isFrozen()" method on NaN:

console.log(Object.isFrozen(NaN)); // Outputs: false

// NaN is also returned when attempting to use the "Object.freeze()" method on NaN:

Object.freeze(NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN:

console.log(Symbol.toPrimitive(NaN)); // Outputs: NaN

// NaN is also returned when attempting to use the "Symbol.toStringTag()" property on NaN:

console.log(NaN[Symbol.toStringTag]); // Outputs: "Symbol(Symbol.toStringTag)"

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "string":

console.log(String(NaN)); // Outputs: "NaN"

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "number":

console.log(Number(NaN)); // Outputs: NaN

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "default":

console.log(Object(NaN)); // Outputs: {}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "object":

console.log([NaN]); // Outputs: [NaN]

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "symbol":

console.log(Symbol(NaN)); // Outputs: Symbol(NaN)

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "boolean":

console.log(Boolean(NaN)); // Outputs: false

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "undefined":

console.log(undefined + NaN); // Outputs: NaN

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "bigint":

console.log(BigInt(NaN)); // Outputs: BigInt(NaN)

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "default" and a replacer function:

const replacer = (key, value) => {
  if (key === "a") {
    return NaN;
  }
  return value;
};

console.log(JSON.stringify({ a: NaN }, replacer)); // Outputs: {"a": NaN}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "string" and a replacer function:

console.log(JSON.stringify({ a: NaN }, replacer, "string")); // Outputs: {"a": "NaN"}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "number" and a replacer function:

console.log(JSON.stringify({ a: NaN }, replacer, 10)); // Outputs: {"a": NaN}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "default" and a replacer function that returns an object:

console.log(JSON.stringify({ a: NaN }, (key, value) => ({ b: value }))); // Outputs: {"b": NaN}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "string" and a replacer function that returns an object:

console.log(
  JSON.stringify({ a: NaN }, (key, value) => ({ b: value }), "string")
); // Outputs: {"b": "NaN"}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "number" and a replacer function that returns an object:

console.log(JSON.stringify({ a: NaN }, (key, value) => ({ b: value }), 10)); // Outputs: {"b": NaN}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "default" and a replacer function that returns a function:

console.log(JSON.stringify({ a: NaN }, (key, value) => () => value)); // Outputs: {"a": NaN}

// NaN is also returned when attempting to use the "Symbol.toPrimitive()" method on NaN with a hint of "string" and a replacer function that returns a function:

console.log(JSON.stringify({ a: NaN }, (key, value) => () => value, "string")); // Outputs: {"a": "NaN"}

let x = NaN;
let y = "5";
let z = x + y;

console.log(z); // Outputs: NaN

let a = NaN;

console.log(a == 0); // Outputs: false

console.log(a === 0); // Outputs: false

console.log(a != 0); // Outputs: true

console.log(a !== 0); // Outputs: true

console.log(a > 0); // Outputs: false

console.log(a >= 0); // Outputs: false

console.log(a < 0); // Outputs: true

console.log(a <= 0); // Outputs: true

console.log(a > 10); // Outputs: false

console.log(a >= 10); // Outputs: false

console.log(a < 10); // Outputs: true

typeof NaN;

// Outputs: "number"

console.log(isNaN(NaN)); // Outputs: true

console.log(isNaN(10)); // Outputs: false

console.log(isNaN("10")); // Outputs: false

console.log(isNaN("ten")); // Outputs: true

console.log(isNaN(true)); // Outputs: false

console.log(isNaN(null)); // Outputs: false

console.log(isNaN(undefined)); // Outputs: true

typeof Infinity;

// Outputs: "number"

console.log(isFinite(Infinity)); // Outputs: false

console.log(isFinite(-Infinity)); // Outputs: false

console.log(isFinite(0)); // Outputs: true

console.log(isFinite(10)); // Outputs: true

console.log(isFinite("10")); // Outputs: true

console.log(isFinite("ten")); // Outputs: false

console.log(isFinite(true)); // Outputs: false

console.log(isFinite(null)); // Outputs: false

console.log(isFinite(undefined)); // Outputs: false

console.log(NaN === NaN); // Outputs: false

console.log(NaN !== NaN); // Outputs: true
