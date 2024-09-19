// Asynchronous JavaScript
// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// Function to log a message after 3 seconds

function logAfterThreeSeconds(message) {
  setTimeout(() => {
    console.log(message);
  }, 3000);
}

// Call the function with a message
// because setTimeout it's an asyncrounus function,
//  it will continue after this line the callback the setTimeout function

logAfterThreeSeconds("Hello, World!");

function myDisplayer(something) {
  console.log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
