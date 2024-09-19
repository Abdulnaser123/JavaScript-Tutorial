// JavaScript Callbacks

// Define a callback function

function myCallbackFunction() {
  console.log("Callback function called");
}

// Use the callback function as a parameter

// Example 1: Passing the function as a parameter to another function
function myFunction(callback) {
  console.log("Function called");
  callback();
}

myFunction(myCallbackFunction);

// a callback function passed as an argument to another function
