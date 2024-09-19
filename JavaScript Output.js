// JavaScript Display Possibilities JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

// Example 1: Writing into an HTML element using innerHTML

// Create a new paragraph element

let paragraph = document.createElement("p");

// Create a new text node with the desired content

let text = document.createTextNode("This is an example paragraph.");

// Append the text node to the paragraph element

paragraph.appendChild(text);

// Select the HTML element where the paragraph should be displayed

let element = document.getElementById("example");

// Replace the current content of the element with the new paragraph

element.innerHTML = "";

// Append the new paragraph to the element

element.appendChild(paragraph);

// Example 2: Writing into the HTML output using document.write()

// Create a new paragraph element

let paragraph2 = document.createElement("p");

// Create a new text node with the desired content

let text2 = document.createTextNode(
  "This is an example paragraph using document.write()."
);

// Append the text node to the paragraph element

paragraph2.appendChild(text2);

// Append the new paragraph to the HTML output

document.write(paragraph2.innerHTML);

// Example 3: Writing into an alert box using window.alert()

let alertMessage = "This is an example alert message.";

// Display the alert

window.alert(alertMessage);

// Example 4: Writing into the browser console using console.log()

let logMessage = "This is an example log message.";

// Log the message to the browser console

console.log(logMessage);

// Note: In a browser environment, the console.log() function will display the message in the browser's developer tools console.
//  In a Node.js environment, the console.log() function will print the message to the terminal.
// Using document.write() after an HTML document is loaded, will delete all ex

// In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:

// Example:

let x = 10; // This variable belongs to the window object

function displayX() {
  console.log(x); // This will log the value of x
}
