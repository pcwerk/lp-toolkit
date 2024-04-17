import React from "react";
import { Container } from "./Container";
import { useState } from "react";
import { AISettingsModal } from "./modals/AISettingsModal"; // Ensure the path is correct

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
                className="text-black dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Adjust AI settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2.59-13.42L12 8.17 9.41 6.58 8 9.17 10.59 10.76 8 12.35l1.41 2.59L12 13.83l2.59 1.59 1.41-2.59L13.41 12.35 16 10.76l-1.41-2.59z" />
                </svg>
              </button>
              <h2 className="text-black dark:text-gray-300">LP-Toolkit</h2>
              <div style={{ width: 24 }}></div>  
            </Container>
          </div>
        </nav>
      </header>
    </>
  );
}
