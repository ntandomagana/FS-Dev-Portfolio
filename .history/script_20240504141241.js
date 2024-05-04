function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//Javascript for looped typing effect
const typedText = document.getElementById('typed-text');
const textToType = 'Ntando Magana';

function typeText() {
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typedText.innerHTML +- textToType.charAt(index);
            index++;
            setTimeout(type, 500); // typing speed in milliseconds
        } else {
            setTimeout(erase, 1000); // wait before erasing
        }
    }

    function erase() {
        if (typedText.innerHTML.lenght > 0) {
            typedText.innerHTML = 
        }
    }
}