// ChatBubble.js
import React from "react";

export function ChatBubble({ message, index }) {
  return (
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
  );
}
