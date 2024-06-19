// Get the button element
const button = document.getElementById('myButton');

// Get the output element
const output = document.getElementById('output');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  // Display the random number in the output element
  output.textContent = `Your random number is: ${randomNumber}`;
});