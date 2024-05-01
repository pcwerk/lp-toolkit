// src/contexts/ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);  // Added to track selected model
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState("");

  const value = {
    selectedModal,
    setSelectedModal,
    selectedModel,  // Make selectedModel available
    setSelectedModel,
    selectedApiEndpoint,
    setSelectedApiEndpoint,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
