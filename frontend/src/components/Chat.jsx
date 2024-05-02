import React, { useState } from "react";
import { Container } from "./Container";
import { ChatBubble } from "./ChatBubble";
import axios from "axios";
import { ChatOption } from "./chatOption";
import { useModal } from "../contexts/ModalContext"; // Import the useModal hook
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
    apiEndpoint: "http://localhost:5050/langchainCallRoute/askhf",
  },
];

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const {
    selectedModel,
    setSelectedModel,
    selectedApiEndpoint,
    setSelectedApiEndpoint,
  } = useModal();

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

  const sendUserMessage = async (message) => {
    const endpoint =
      selectedApiEndpoint || "http://localhost:5050/defaultCallRoute/ask";
    try {
      return await axios.post(endpoint, { data: message });
    } catch (error) {
      console.error("Failed to send user message:", error);
      throw error;
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;
    let timestamp = await fetchTimestamp();
    const newMessages = [
      ...messages,
      { type: "user", content: currentMessage },
    ];

    try {
      const response = await sendUserMessage(currentMessage);
      newMessages.push({
        type: "response",
        content: response.data.dataFromFastapi.output,
      });
      newMessages.push({ type: "response", content: timestamp });
    } catch (error) {
      console.error("Failed to send user message:", error);
    }

    setMessages(newMessages);
    setCurrentMessage("");
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
                  setSelectedModel(option.title);
                  setSelectedApiEndpoint(option.apiEndpoint);
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
          {messages.map((message, index) =>
            message.type === "user" ? (
              <ChatBubble
                key={index}
                message={message}
                response={messages[index + 1]}
                index={index}
              />
            ) : null
          )}
        </div>
      </Container>
      <div className="fixed bottom-0 w-full pb-4 bg-gradient-to-b from-white to-gray-200 dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
        <Container className="flex bg-white shadow-md rounded-md p-2 shadow-gray-400 dark:bg-[#444A4B]">
          <input
            className="flex-1 p-2 rounded-md dark:bg-[#131314] dark:border dark:border-gray-500 dark:text-white"
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
