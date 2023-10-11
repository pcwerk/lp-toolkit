function sendMessage() {
    // Get user input
    const userInput = document.getElementById("userInput").value;

    // Check if the input is not empty
    if (userInput.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Append user message to chatBox
    const chatBox = document.getElementById("chatBox");
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = "You: " + userInput;
    chatBox.appendChild(userMessageElement);

    // Append AI's response to chatBox after a slight delay to simulate thinking
    setTimeout(() => {
        const aiResponseElement = document.createElement("div");
        aiResponseElement.classList.add("ai-response");
        aiResponseElement.textContent = "AI: Thanks for the message!"; // Replace this with a dynamic response if needed.
        chatBox.appendChild(aiResponseElement);
    }, 1000);

    // Clear user input
    document.getElementById("userInput").value = "";
}
