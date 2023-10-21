import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineRobot } from "react-icons/ai";

export function ChatBubble({ message, response, index }) {
  return (
    <div //Outer box
      key={index}
      className="my-2 p-3 rounded-lg ml-auto bg-gray-100 dark:bg-[#444A4B] text-black shadow-md"
    >
      <div //User input ,no background similar
        className="p-2 mb-2 rounded-lg text-black dark:text-gray-200 flex items-center"
      >
        <BsFillPersonFill size={24} className=" mr-4 dark:text-gray-400" />
        {message.content}
      </div>
      {response && (
        <div className="p-2 rounded-lg bg-white text-black flex items-center dark:bg-[#131314] dark:text-gray-200">
          <AiOutlineRobot size={24} className=" mr-4 dark:text-gray-400" />
          {response.content}
        </div>
      )}
    </div>
  );
}
