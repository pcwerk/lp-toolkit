import React, { useState } from "react";
import { useModal } from "../contexts/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { AISettingsModal } from "./modals/AISettingsModal";
import { Container } from "./Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedModel } = useModal();
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {selectedModel === "OpenAI GPT" && (
        <AISettingsModal isOpen={isOpen} onClose={closeModal} />
      )}
      <header className="w-full bg-gray-300 dark:bg-black shadow-md">
        <nav>
          <div className="flex items-center gap-6 text-center">
            <Container className="relative z-50 flex justify-between py-8 w-full">
              <div className="relative z-50 flex justify-between py-8 w-full">
                {selectedModel === "OpenAI GPT" ? (
                  <button
                    onClick={openModal}
                    className="text-black dark:text-gray-300 focus:outline-none"
                    aria-label="Adjust AI settings"
                  >
                    <FontAwesomeIcon icon={faSliders} className="h-6 w-6" />
                  </button>
                ) : (
                  <div style={{ width: 24 }}></div>
                )}
                <h1 className="text-black dark:text-gray-300 text-xl text-center font-bold">
                  LP-Toolkit
                </h1>
                <div style={{ width: 24 }}></div>
              </div>
            </Container>
          </div>
        </nav>
      </header>
    </>
  );
}
