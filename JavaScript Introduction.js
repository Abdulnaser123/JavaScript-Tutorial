// JavaScript is the world's most popular programming language.

// JavaScript is the programming language of the Web.

// JavaScript is easy to learn.

// This tutorial will teach you JavaScript from basic to advanced.

// Why Study JavaScript?

// JavaScript is one of the 3 languages all web developers must learn:

//    1. HTML to define the content of web pages

//    2. CSS to specify the layout of web pages

//    3. JavaScript to program the behavior of web pages

// This tutorial covers every version of JavaScript:
// The Original JavaScript ES1 ES2 ES3 (1997-1999)
// The First Main Revision ES5 (2009)
// The Second Revision ES6 (2015)
// The Yearly Additions (2016, 2017 ... 2023, 2024)

// This file contains some examples of what JavaScript can do.

// JavaScript Can Change HTML Content

document.getElementById("demo").innerHTML = "Hello World!";

// JavaScript Can Change CSS Styles

document.getElementById("demo").style.color = "red";

// JavaScript Can Add Event Listeners

document.getElementById("myButton").addEventListener("click", function () {
  alert("Hello World!");
});

// JavaScript Can Create New Elements

var newDiv = document.createElement("div");
newDiv.innerHTML = "New Div";
document.body.appendChild(newDiv);

// JavaScript Can Change the Attributes of Elements

var myImg = document.getElementById("myImage");
myImg.src = "https://example.com/image.jpg";

// JavaScript Can Remove Elements

var myDiv = document.getElementById("myDiv");
myDiv.parentNode.removeChild(myDiv);

// JavaScript Can Loop Through Elements

var myList = document.getElementById("myList");
var listItems = myList.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "blue";
}

// JavaScript Can Use Functions

function greetUser(name) {
  alert("Hello " + name + "!");
}

greetUser("John Doe");

// JavaScript Can Use Objects

var person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    alert("Hello " + this.name + "!");
  },
};

person.greet();

// JavaScript Can Use Arrays

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert("Sum: " + sum);

// JavaScript Can Use Regular Expressions

var pattern = /hello/i;
var text = "Hello World! Hello Universe!";
var result = text.match(pattern);

if (result) {
  alert("Found: " + result[0]);
} else {
  alert("Not found");
}

// JavaScript accepts both double and single quotes:

var message = "Hello World!";
var message = "Hello World!";

// JavaScript supports template literals:

var name = "John Doe";
var message = `Hello ${name}!`;

// JavaScript supports arrow functions:

var greet = (name) => {
  alert("Hello " + name + "!");
};

greet("John Doe");

// JavaScript supports destructuring assignment:

var person = { name: "John Doe", age: 30 };
var { name, age } = person;
alert("Name: " + name + ", Age: " + age);

// JavaScript supports promises:

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World!");
  }, 1000);
});

promise.then((result) => {
  alert(result);
});

// JavaScript supports async/await:

async function greetAsync() {
  var result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 1000);
  });

  alert(result);
}
// JavaScript can change HTML attribute values.
// In this case JavaScript changes the value of the src (source) attribute of an image.


<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>


