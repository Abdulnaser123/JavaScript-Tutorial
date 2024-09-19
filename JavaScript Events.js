// HTML events are "things" that happen to HTML elements.

// Here, we listen for a click event on the 'submit' button.

// When the button is clicked, the function 'handleSubmit' is executed.

document.getElementById('submit-button').addEventListener('click', handleSubmit);

// The function 'handleSubmit' is defined below.

function handleSubmit(event) {
  // Prevent the form from submitting normally (which would refresh the page).
  event.preventDefault();

  // Get the value of the input field.
  var inputValue = document.getElementById('input-field').value;

  // Check if the input field is empty.
  if (inputValue.trim() === '') {
    alert('Input field cannot be empty.');
    return; // Exit the function early if the input field is empty.
  }

  // Convert the input value to uppercase.
  var uppercaseValue = inputValue.toUpperCase();

  // Replace all occurrences of 'A' with '4' in the uppercase value.
  var aReplacedValue = uppercaseValue.replace(/A/g, '4');

  // Display the modified value in an alert box.
  alert('Modified value: ' + aReplacedValue);
}

// The HTML code for the form is provided below.

<form id="input-form">
  <label for="input-field">Enter a string:</label>
  <input type="text" id="input-field" required>
  <button type="submit" id="submit-button">Submit</button>

</form>
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

<p id="demo"></p>

// The JavaScript code for the current time is provided below.

<script>
  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);

    document.getElementById('demo').innerHTML = h + ":" + m + ":" + s;

    setTimeout(showTime, 1000);
  }
  
  function formatTime(i) {
    return i < 10 ? "0" + i : i;
  }
  
  showTime();
  
</script>

// The JavaScript code for the button to display the current time is provided below.

<script>
  function displayTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);

    document.getElementById('demo').innerHTML = h + ":" + m + ":" + s;

    setTimeout(displayTime, 1000);
  }
  
  function formatTime(i) {
    return i < 10 ? "0" + i : i;
  }
  
  displayTime();
  
</script>
