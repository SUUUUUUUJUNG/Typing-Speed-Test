const promptElement = document.getElementById("prompt");
const typingArea = document.getElementById("typingArea");
const startButton = document.getElementById("startButton");
const resultElement = document.getElementById("result");

let startTime;
let promptText = "The quick brown fox jumps over the lazy dog.";

startButton.addEventListener("click", () => {
    // Reset the test
    typingArea.value = "";
    typingArea.disabled = false;
    resultElement.textContent = "";
    typingArea.focus();
    promptElement.textContent = promptText;

    // Start the timer
    startTime = new Date().getTime();

    // Enable typing area and start monitoring
    typingArea.addEventListener("input", checkTyping);
});

function checkTyping() {
    const typedText = typingArea.value;

    // Check if typed text matches the prompt
    if (typedText === promptText) {
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;
        const wordsPerMinute = (promptText.split(" ").length / timeTaken) * 60;

        resultElement.textContent = `Well done! Your typing speed is ${wordsPerMinute.toFixed(2)} words per minute.`;
        typingArea.disabled = true;
        typingArea.removeEventListener("input", checkTyping);
    }
}
