import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineRobot } from "react-icons/ai";

export function ChatBubble({ message, response, index }) {
  return (
    <div //Outer box
      key={index}
      className="my-2 p-3 rounded-lg ml-auto bg-gray-100 text-black shadow-md"
    >
      <div //User input
        className="p-2 mb-2 rounded-lg bg-gray-100 text-black flex items-center"
      >
        <BsFillPersonFill size={22} className=" mr-4" />
        {message.content}
      </div>
      {response && (
        <div className="p-2 rounded-lg bg-white text-black flex items-center">
          <AiOutlineRobot size={22} className=" mr-4" />
          {response.content}
        </div>
      )}
    </div>
  );
}
