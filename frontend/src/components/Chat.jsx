import React, { useState } from "react";
import { Container } from "./Container";
import { ChatBubble } from "./ChatBubble";
import axios from "axios";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentTimeStamp, setCurrentTimeStamp] = useState("");

  const fetchTimestamp = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/serverHealthRoutes/timestamp"
      );
      setCurrentTimeStamp(response.data.localTimeStamp); // Set the single message with the timestamp
    } catch (error) {
      console.error("Failed to fetch timestamp:", error);
      setCurrentTimeStamp("Failed to fetch timestamp");
    }
  };

  const sendMessage = () => {
    if (currentMessage) {
      fetchTimestamp();
      let timestamp = currentTimeStamp;
      // After sending a user message, hardcode a response for demonstration purposes
      setMessages([
        ...messages,
        { type: "user", content: currentMessage },
        {
          type: "response",
          content: timestamp,
        },
      ]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col h-full">
      <Container className="flex flex-col pb-10 w-full h-full">
        <div className="flex-1 p-4 overflow-y-auto items-center">
          {messages.map((message, index) => {
            // Check if the message type is 'user', then render ChatBubble with response
            if (message.type === "user") {
              return (
                <ChatBubble
                  key={index}
                  message={message}
                  response={messages[index + 1]} // This assumes there is always a response after a user message
                  index={index}
                />
              );
            } else {
              return null; // Do not render a separate ChatBubble for responses
            }
          })}
        </div>
      </Container>
      //CHAT FOOTER
      <div className="fixed bottom-0  w-full pb-4 items-center   bg-gradient-to-b from-white to-gray-200 dark:bg-gradient-to-b dark:from-black dark:to-black">
        <Container className="flex bg-white shadow-md dark:shadow-none rounded-md p-2 shadow-gray-400 dark:bg-[#444A4B]">
          <input
            className="flex-1 p-2  rounded-md dark:bg-[#131314] dark:border dark:border-gray-500 dark:text-white"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-500 text-white p-2 rounded-md dark:bg-transparent dark:border dark:border-gray-400 dark:text-gray-300"
          >
            Send
          </button>
        </Container>
      </div>
    </div>
  );
}
