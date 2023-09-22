import React, { useState } from "react";
import { Container } from "./Container";
export function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (currentMessage) {
      setMessages([...messages, { type: "user", content: currentMessage }]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="bg-gray-200 flex flex-col h-full">
      <Container className="flex flex-col pb-10 w-full h-full">
        <div className="flex-1 p-4 overflow-y-auto items-center">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 p-3 rounded-lg ${
                message.type === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="p-4 bg-white rounded-md border-t border-gray-300  pb-5">
          <div className="flex ">
            <input
              className="flex-1 p-2 border rounded-md "
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white p-2 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
