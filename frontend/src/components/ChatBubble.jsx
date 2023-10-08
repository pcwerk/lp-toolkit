import React from "react";

export function ChatBubble({ message, response, index }) {
  return (
    <div //Outer box
      key={index}
      className="my-2 p-3 rounded-lg ml-auto bg-gray-100 text-black shadow-md"
    >
      <div //User input
      className="p-2 mb-2 rounded-lg bg-gray-100 text-black ">
        {message.content}
      </div>
      {response && (
        <div className="p-2 rounded-lg bg-white text-black">
          {response.content}
        </div>
      )}
    </div>
  );
}
