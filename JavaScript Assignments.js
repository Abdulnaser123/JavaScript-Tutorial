// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Shift Assignment Operators

// The left shift operator (<<) shifts the bits of the left operand to the left by the number of bits specified by the right operand.

let x = 10;
x <<= 2; // x is now 40

// The right shift operator (>>) shifts the bits of the left operand to the right by the number of bits specified by the right operand.

let y = 40;
y >>= 2; // y is now 10

// The zero fill right shift operator (>>>) shifts the bits of the left operand to the right by the number of bits specified by the right operand, filling the vacated bits with zeros.

let z = 40;
z >>>= 2; // z is now 10

// Bitwise Assignment Operators

// The AND assignment operator (&=) performs a bitwise AND operation between the left operand and the right operand, and then assigns the result to the left operand.

let a = 10;
a &= 5; // a is now 0

// The OR assignment operator (|=) performs a bitwise OR operation between the left operand and the right operand, and then assigns the result to the left operand.

let b = 10;
b |= 5; // b is now 15

// The XOR assignment operator (^=) performs a bitwise XOR operation between the left operand and the right operand, and then assigns the result to the left operand.

let c = 10;
c ^= 5; // c is now 15

// Logical Assignment Operators

// The AND logical operator (&&=) performs a logical AND operation between the left operand and the right operand, and then assigns the result to the left operand.

let d = true;
d &&= false; // d is now false

// The OR logical operator (||=) performs a logical OR operation between the left operand and the right operand, and then assigns the result to the left operand.

let e = true;
e ||= false; // e is still true
e ||= false; // e is now true

// The **= Operator;

let f = 2;

// The **= operator is a right-associative operator, meaning it evaluates from right to left.

f **= 3; // f is now 8

// The ||= Operator;

let g = 2;

// The ||= operator is a right-associative operator, meaning it evaluates from right to left.

g ||= 3; // g is now 2
// The ??= Operator

let h = 2;

// The ??= operator is a right-associative operator, meaning it evaluates from right to left.

h ??= 3; // h is still 2
h ??= 4; // h is now 4
// delete object prop

let i = { a: 1, b: 2 };

// The delete operator is used to remove a property from an object.

delete i.a; // i is now { b: 2 }
