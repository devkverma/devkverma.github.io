const texts = [
    "Hello, I'm typing...",
    "Welcome to my website!",
    "Enjoy your stay!",
    "Feel free to explore!"
];
let index = 0;

function changeText() {
    index = (index + 1) % texts.length; // Loop through the texts
    const typingText = document.getElementById("typingText");
    typingText.textContent = texts[index];
}

// Change text every loop (adjust timing as needed)
setInterval(changeText, 3000); // 4s typing + 4s pause (total 8s)
