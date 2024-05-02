function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JavaScript for looped typing effect
const typedText = document.getElementById("typed-text");
const textToType = "Charles Mbonani";

function typeText() {
  let index = 0;

  function type() {
    if (index < textToType.length) {
      typedText.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(type, 500); // Adjust typing speed (milliseconds)
    } else {
      setTimeout(erase, 1000); // Wait before erasing
    }
  }

  function erase() {
    if (typedText.innerHTML.length > 0) {
      typedText.innerHTML = typedText.innerHTML.slice(0, -1);
      setTimeout(erase, 500); // Adjust erasing speed (milliseconds)
    } else {
      index = 0; // Reset index for the next typing cycle
      setTimeout(type, 500); // Wait before typing again
    }
  }

  type(); // Start typing
}

// Call the typing function when the page loads
window.onload = typeText;
