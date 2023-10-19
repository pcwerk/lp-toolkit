// ... Rest of your code

function sendMessage() {
    // ... Your existing code up to the setTimeout

    // Get AI's response from the server
    setTimeout(() => {
        fetch('http://localhost:3000/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: userInput })
        })
        .then(response => response.json())
        .then(data => {
            const aiResponseElement = document.createElement("div");
            aiResponseElement.classList.add("ai-response");
            aiResponseElement.textContent = data.message;
            chatBox.appendChild(aiResponseElement);
        })
        .catch(error => {
            console.error('Error fetching AI response:', error);
        });
    }, 1000);

    // Clear user input
    document.getElementById("userInput").value = "";
}
