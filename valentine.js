var noButtonTexts = ["Haha", "Please?", "Feb 14?", ":(", "Yes", "sege na", "apas ta", "Yes, please", "<3" ];
var currentNoTextIndex = 0; // Initialize the current index variable

document.getElementById('no').addEventListener('click', function() {
  // Play the "poop.mp3" audio
  var poopAudio = new Audio('poop.mp3');
  poopAudio.play();

  // Decrease the size of the "No" button
  var noButton = document.getElementById('no');
  var currentWidth = parseFloat(window.getComputedStyle(noButton).getPropertyValue('width'));
  var currentHeight = parseFloat(window.getComputedStyle(noButton).getPropertyValue('height'));
  if (currentWidth > 50 && currentHeight > 20) { // Limit minimum size
    noButton.style.width = (currentWidth - 10) + 'px'; // Decrease width
    noButton.style.height = (currentHeight - 5) + 'px'; // Decrease height
  }

  // Increase the size of the "Yes" button
  var yesButton = document.getElementById('yes');
  var currentYesWidth = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('width'));
  var currentYesHeight = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('height'));
  yesButton.style.width = (currentYesWidth + 10) + 'px'; // Increase width
  yesButton.style.height = (currentYesHeight + 5) + 'px'; // Increase height

  // Increase the font size of the "Yes" button
  var currentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
  yesButton.style.fontSize = (currentFontSize + 2) + 'px'; // Increase font size

  // Change the text of the "No" button
  noButton.innerHTML = noButtonTexts[currentNoTextIndex];
  
  // Increment current index and loop back to 0 if it exceeds the length of the array
  currentNoTextIndex = (currentNoTextIndex + 1) % noButtonTexts.length;

  // Move the "No" button to a random position
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var newX = Math.random() * (bodyWidth - currentWidth);
  var newY = Math.random() * (bodyHeight - currentHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
});

document.getElementById('yes').addEventListener('click', function() {
  // Play the "celebrate.mp3" audio
  var celebrateAudio = new Audio('celebrate.mp3');
  celebrateAudio.play();

  // Show the "uwu2.gif" image and hide the "uwu.gif" image
  var uwu2Image = document.getElementById('uwu2');
  uwu2Image.style.display = 'block';
  
  var uwuImage = document.getElementById('uwu');
  uwuImage.style.display = 'none';
  
  // Reset the display and remove the buttons
  var containerBtn = document.querySelector('.container-btn');
  containerBtn.style.display = 'none';
  
  // Change the text of h1
  var h1Text = document.querySelector('.text h1');
  h1Text.textContent = "Okay Yey!";
});

// Get the GIF element
var uwuImage = document.getElementById('uwu');

// Get the GIF element
var uwuImage = document.getElementById('uwu');

// Add event listener for the 'click' event
uwuImage.addEventListener('click', function() {
    // When the GIF is clicked, reset its src attribute to restart the animation
    var src = this.src;
    this.src = '';
    setTimeout(function() {
        uwuImage.src = src;
    }, 0);
});

// Add event listener for the 'animationend' event
uwuImage.addEventListener('animationend', function() {
    // When the animation ends, reset it by setting src to itself
    this.src = this.src;
});
