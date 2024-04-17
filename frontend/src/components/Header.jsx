import React from "react";
import { Container } from "./Container";
import { useState } from "react";
import { AISettingsModal } from "./modals/AISettingsModal"; // Ensure the path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true); // Actually set the modal to open
    console.log("Open modal for AI settings.");
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AISettingsModal isOpen={isOpen} onClose={closeModal} />
      <header className="w-full bg-gray-300 dark:bg-black shadow-md">
        <nav>
          <div className="flex items-center gap-6 text-center">
            <Container className="relative z-50 flex justify-between py-8 w-full">
              <button
                onClick={openModal} // Use openModal directly
                className="text-black dark:text-gray-300 focus:outline-none"
                aria-label="Adjust AI settings"
              >
                <FontAwesomeIcon icon={faSliders} className="h-6 w-6" />
              </button>
              <h1 className="text-black dark:text-gray-300 text-xl font-bold">
                LP-Toolkit
              </h1>
              <div style={{ width: 24 }}></div>
            </Container>
          </div>
        </nav>
      </header>
    </>
  );
}
