// JavaScript Use Strict

// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// In strict mode, the following changes are made:

// 1. Variables must be declared with "var", "let", or "const". If not, a TypeError is thrown.

// 2. Function parameters cannot be declared with the same name as a variable in the function's scope.

function strictFunction() {
  "use strict";
  var x = 10;
  let x = 20; // Throws a TypeError
}

// 3. Trying to delete a non-configurable property (like a property added to the Object.prototype) throws a TypeError.

Object.defineProperty(Object.prototype, "nonConfigurableProperty", {
  value: "nonConfigurableValue",
  configurable: false,
});

delete Object.prototype.nonConfigurableProperty; // Throws a TypeError

// 4. Assignment to non-writable properties throws a TypeError.

const nonWritableProperty = {
  value: "nonWritableValue",
  writable: false,
};

nonWritableProperty.value = "updatedValue"; // Throws a TypeError

// 5. Trying to use "eval" or "with" statements throws a SyntaxError.

eval("var x = 10;"); // Throws a SyntaxError

with ({ x: 10 }) {
  var x = 20; // Throws a SyntaxError
}

// 6. Trying to use "arguments.callee" or "arguments.caller" throws a TypeError.

function callerFunction() {
  console.log(arguments.callee); // Throws a TypeError
}

callerFunction();

// 7. Trying to use "this" before it's assigned a value throws a ReferenceError.

console.log(this.nonDeclaredVariable); // Throws a ReferenceError

// 8. Trying to use "super" in a constructor or a method without using "new" throws a ReferenceError.

class Parent {
  constructor() {
    console.log(super.nonDeclaredProperty); // Throws a ReferenceError
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log(super.nonDeclaredProperty); // Throws a ReferenceError
  }

  static method() {
    console.log(super.nonDeclaredProperty); // Throws a ReferenceError
  }
}

Child.method(); // Throws a ReferenceError
