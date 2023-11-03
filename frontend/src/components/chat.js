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

    // Send the user message to the server and get AI's response
    fetch('/get-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const aiResponseElement = document.createElement("div");
        aiResponseElement.classList.add("ai-response");
        aiResponseElement.textContent = data.message; // AI response
        chatBox.appendChild(aiResponseElement);
    })
    .catch(error => console.error('Error:', error));

    // Clear user input
    document.getElementById("userInput").value = "";
}

function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    const toggleChatBtn = document.getElementById("toggleChatBtn");
    if (chatBox.classList.contains("chat-visible")) {
        chatBox.classList.remove("chat-visible");
        chatBox.classList.add("chat-hidden");
        toggleChatBtn.textContent = "Maximize";
    } else {
        chatBox.classList.remove("chat-hidden");
        chatBox.classList.add("chat-visible");
        toggleChatBtn.textContent = "Minimize";
    }
}

// Add an event listener to the input field to detect the "Enter" key
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
