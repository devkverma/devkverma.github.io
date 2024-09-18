const texts = [
    "a Data Enthusiast",
    "a Data Scientist",
    "a ML Engineer",
    "an AI Engineer",
    "a Frontend Developer",
    "a Mathematics Enthusiat"
];

let index = 0;
const typingText = document.getElementById("typingText");
const typingSpeed = 100; // Typing speed in milliseconds
const erasingSpeed = 50; // Erasing speed in milliseconds
const pauseBetweenTexts = 500; // Pause before the next text

function typeEffect(text, i = 0) {
    if (i < text.length) {
        typingText.textContent = text.substring(0, i + 1);
        setTimeout(() => typeEffect(text, i + 1), typingSpeed);
    } else {
        setTimeout(() => eraseEffect(text), pauseBetweenTexts);
    }
}

function eraseEffect(text, i = text.length) {
    if (i >= 0) {
        typingText.textContent = text.substring(0, i);
        setTimeout(() => eraseEffect(text, i - 1), erasingSpeed);
    } else {
        index = (index + 1) % texts.length; // Loop through the texts
        setTimeout(() => typeEffect(texts[index]), pauseBetweenTexts); // Pause before typing next text
    }
}

// Start the typing effect with the first text
typeEffect(texts[index]);
