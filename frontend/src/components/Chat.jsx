import React, { useState } from "react";
import { Container } from "./Container";
import { ChatBubble } from "./ChatBubble";
import axios from "axios";
import { ChatOption } from "./chatOption";
import openAIIcon from "../images/logos/openai.svg";
import huggingfaceIcon from "../images/logos/HuggingFace.svg";

const chatOptionsData = [
  {
    title: "OpenAI GPT",
    message: "Use OpenAI's GPT models to answer your questions.",
    image: openAIIcon,
    apiEndpoint: "http://localhost:5050/langchainCallRoute/ask",
  },
  {
    title: "Hugging Face",
    message: "Leverage Hugging Face models for diverse AI tasks.",
    image: huggingfaceIcon,
    apiEndpoint: "http://localhost:5050/huggingFaceCallRoute/ask", // Placeholder endpoint
  },
];

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState("");

  const fetchTimestamp = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/serverHealthRoutes/timestamp"
      );
      return response.data.localTimeStamp;
    } catch (error) {
      console.error("Failed to fetch timestamp:", error);
      return "Failed to fetch timestamp";
    }
  };

  // Define function for sendingUserMessage with input data
  const sendUserMessage = (message) => {
    const endpoint =
      selectedApiEndpoint || "http://localhost:5050/defaultCallRoute/ask";
    return axios.post(endpoint, {
      data: message,
    });
  };

  const sendMessage = async () => {
    if (currentMessage) {
      //timestamp
      let timestamp = await fetchTimestamp();
      //add user message to chat
      setMessages([...messages, { type: "user", content: currentMessage }]);
      //try to send user message to express route
      try {
        const response = await sendUserMessage(currentMessage);
        //add response from express route to chat
        setMessages([
          ...messages,
          { type: "user", content: currentMessage },
          { type: "response", content: response.data.dataFromFastapi.output },
          {
            type: "response",
            content: timestamp,
          },
        ]);
      } catch (error) {
        console.log("Failed to send user message: ", error);
      }

      //clear message input
      setCurrentMessage("");
    }
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col h-full">
      <Container className="flex flex-col pb-10 w-full h-full">
        <div className="flex-1 p-4 overflow-y-auto items-center">
          <div className="flex flex-wrap justify-center gap-4 my-12">
            {chatOptionsData.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedModel((prevModel) =>
                    prevModel === option.title ? null : option.title
                  );
                  setSelectedApiEndpoint((prevEndpoint) =>
                    prevEndpoint === option.apiEndpoint
                      ? ""
                      : option.apiEndpoint
                  );
                }}
                className="cursor-pointer"
              >
                <ChatOption
                  title={option.title}
                  message={option.message}
                  image={option.image}
                  selected={selectedModel === option.title}
                />
              </div>
            ))}
          </div>

          {messages.map((message, index) => {
            {
              /*  Check if the message type is 'user', then render ChatBubble with response*/
            }
            if (message.type === "user") {
              return (
                <ChatBubble
                  key={index}
                  message={message}
                  response={messages[index + 1]}
                  index={index}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </Container>

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
