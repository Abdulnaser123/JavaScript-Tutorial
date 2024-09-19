// JavaScript Number Methods

// 1. toString() method

let num = 1234567890;
console.log(num.toString()); // Output: "1234567890"

// 2. toLocaleString() method

console.log(num.toLocaleString()); // Output: "1,234,567,890"

// 3. toFixed() method

console.log(num.toFixed(2)); // Output: "1234567890.00"

// 4. toExponential() method

console.log(num.toExponential(2)); // Output: "1.23e+9"

// 5. toPrecision() method

console.log(num.toPrecision(5)); // Output: "123457"

// 6. toBinary() method

console.log(num.toString(2)); // Output: "1000000000000000000000000000000000000000000000000000000000000001"

// 7. toOctal() method

console.log(num.toString(8)); // Output: "1777777770"

// valueOf

console.log(num.valueOf()); // Output: 1234567890

// 8. Math.abs() method

console.log(Math.abs(-123)); // Output: 123

// 9. Math.floor() method

console.log(Math.floor(123.456)); // Output: 123

// 10. Math.ceil() method

console.log(Math.ceil(123.456)); // Output: 124

// 11. Math.round() method

console.log(Math.round(123.456)); // Output: 123

// 12. Math.sqrt() method

console.log(Math.sqrt(144)); // Output: 12

// 13. Math.pow() method

console.log(Math.pow(2, 10)); // Output: 1024

// 14. Math.random() method

console.log(Math.random()); // Output: a random number between 0 and 1 (excluding 1)

// 15. Math.max() method

console.log(Math.max(10, 20, 30, 40)); // Output: 40

// 16. Math.min() method

console.log(Math.min(10, 20, 30, 40)); // Output: 10

// 17. Math.E() property

console.log(Math.E); // Output: 2.718281828459045

// 18. Math.PI property

console.log(Math.PI); // Output: 3.141592653589793

// 19. Math.sin() method

console.log(Math.sin(Math.PI / 2)); // Output: 1

// 20. Math.cos() method

console.log(Math.cos(Math.PI / 2)); // Output: 0

// 21. Math.tan() method

console.log(Math.tan(Math.PI / 4)); // Output: 1

// 22. Math.asin() method

console.log(Math.asin(1)); // Output: 1.5707963267948966

// 23. Math.acos() method

console.log(Math.acos(0)); // Output: 1.5707963267948966

// 24. Math.atan() method

console.log(Math.atan(1)); // Output: 0.7853981633974483

// 25. Math.atan2() method

console.log(Math.atan2(1, 1)); // Output: 0.4636476090008061

// 26. Math.exp() method

console.log(Math.exp(1)); // Output: 2.718281828459045

// 27. Math.log() method

console.log(Math.log(Math.E)); // Output: 1

// 28. Math.log10() method

console.log(Math.log10(1000)); // Output: 3

// 29. Math.pow() method

console.log(Math.pow(2, 10)); // Output: 1024

// 30. Math.sqrt() method

console.log(Math.sqrt(144)); // Output: 12

// 31. Math.cbrt() method

console.log(Math.cbrt(27)); // Output: 3

// 32. Math.hypot() method

console.log(Math.hypot(3, 4, 5)); // Output: 5.196152422706632

// 33. Math.imul() method

console.log(Math.imul(2, 3)); // Output: 6

// 34. Math.fround() method

console.log(Math.fround(123.456)); // Output: 123.456

// 35. Math.trunc() method

console.log(Math.trunc(123.456)); // Output: 123

// 36. Math.sign() method

console.log(Math.sign(-123.456)); // Output: -1

// 37. Math.clz32() method

console.log(Math.clz32(0)); // Output: 32

// 38. Math.cosh() method

console.log(Math.cosh(1)); // Output: 1.5430806348152437

// 39. Math.sinh() method

console.log(Math.sinh(0)); // Output: 0

// 40. Math.tanh() method

console.log(Math.tanh(0)); // Output: 0

// 41. Math.asinh() method

console.log(Math.asinh(1)); // Output: 0.881373587019543

// 42. Math.acosh() method

console.log(Math.acosh(1)); // Output: 0

// 43. Math.atanh() method

console.log(Math.atanh(0)); // Output: 0

// 44. Math.log2() method

console.log(Math.log2(1024)); // Output: 10

// 45. Math.log1p() method

console.log(Math.log1p(0.5)); // Output: 0.6931471805599453

// 46. Math.expm1() method

console.log(Math.expm1(1)); // Output: 2.718281828459045

// 47. Math.log10m1() method

console.log(Math.log10m1(10)); // Output: 0.30103

// Converting Variables to Numbers

// There are 3 JavaScript methods that can be used to convert a variable to a number:

// 1. Number() constructor

console.log(Number("123")); // Output: 123

// 2. parseInt() function

console.log(parseInt("123")); // Output: 123

// 3. parseFloat() function

console.log(parseFloat("123.456")); // Output: 123.456
// Number Object Methods

// A Number object is a global object that represents a number. It has properties and methods that operate on numbers.

// 1. Number.MAX_SAFE_INTEGER property

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

// 2. Number.MIN_SAFE_INTEGER property

console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// 3. Number.POSITIVE_INFINITY property

console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 4. Number.NEGATIVE_INFINITY property

console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 5. Number.NaN property

console.log(Number.NaN); // Output: NaN

// 6. Number.isInteger() method

console.log(Number.isInteger(123)); // Output: true

console.log(Number.isInteger(123.456)); // Output: false

// 7. Number.isSafeInteger() method

console.log(Number.isSafeInteger(123)); // Output: true

console.log(Number.isSafeInteger(9007199254740991)); // Output: true

console.log(Number.isSafeInteger(9007199254740992)); // Output: false

// 8. Number.parseFloat() method

console.log(Number.parseFloat("123.456")); // Output: 123.456

console.log(Number.parseFloat("123abc")); // Output: 123

console.log(Number.parseFloat("abc123")); // Output: NaN

// 9. Number.parseInt() method

console.log(Number.parseInt("123")); // Output: 123

console.log(Number.parseInt("123abc")); // Output: 123

console.log(Number.parseInt("abc123")); // Output: NaN

// 10. Number.isFinite() method

console.log(Number.isFinite(123)); // Output: true

console.log(Number.isFinite(123.456)); // Output: true

console.log(Number.isFinite(Infinity)); // Output: false

console.log(Number.isFinite(-Infinity)); // Output: false

console.log(Number.isFinite(NaN)); // Output: false

// 11. Number.isNaN() method

console.log(Number.isNaN(123)); // Output: false

console.log(Number.isNaN(123.456)); // Output: false

console.log(Number.isNaN(NaN)); // Output: true

console.log(Number.isNaN("123")); // Output: false

// 12. Number.isInteger() method

console.log(Number.isInteger(123)); // Output: true

console.log(Number.isInteger(123.456)); // Output: false

// 13. Number.EPSILON property

console.log(Number.EPSILON); // Output: 2.220446049250313e-16

// 14. Number.MAX_VALUE property

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 15. Number.MIN_VALUE property

console.log(Number.MIN_VALUE); // Output: 5e-324

// 16. Number.NEGATIVE_INFINITY property

console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 17. Number.POSITIVE_INFINITY property

console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 18. Number.NaN property

console.log(Number.NaN); // Output: NaN

// 19. Number.isSafeInteger() method

console.log(Number.isSafeInteger(123)); // Output: true

console.log(Number.isSafeInteger(9007199254740991)); // Output: true

console.log(Number.isSafeInteger(9007199254740992)); // Output: false
