import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function AISettingsModal({ isOpen, onClose }) {
  const [temperature, setTemperature] = useState(0.7);
  const [tokenLimit, setTokenLimit] = useState(100);
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleTokenLimitChange = (e) => {
    setTokenLimit(e.target.value);
  };

  const handleSave = () => {
    console.log("Saving settings:", { temperature, tokenLimit });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md" />
      <div className="fixed inset-0 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-5xl mx-auto rounded-lg bg-white p-12 shadow-xl">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-700 hover:text-gray-900"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mt-4">
                  <Dialog.Title className="text-3xl font-bold text-gray-900 lg:text-4xl">
                    AI Settings
                  </Dialog.Title>
                </div>
                <hr className="my-2" />

                {/* Temperature Slider */}
                <div className="mb-6">
                  <label
                    htmlFor="temperature-slider"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Temperature
                  </label>
                  <input
                    type="range"
                    id="temperature-slider"
                    name="temperature"
                    min="0"
                    max="1"
                    step="0.01"
                    value={temperature}
                    onChange={handleTemperatureChange}
                    className="w-full h-2 bg-gray-200 rounded-lg  appearance-none cursor-pointer"
                  />
                  <div className="text-right text-sm text-gray-600">
                    {temperature}
                  </div>
                </div>

                {/* Token Limit Input */}
                <div className="mb-6">
                  <label
                    htmlFor="token-limit"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Token Limit
                  </label>
                  <input
                    type="number"
                    id="token-limit"
                    name="token-limit"
                    min="1"
                    max="512"
                    value={tokenLimit}
                    onChange={handleTokenLimitChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  onClick={handleSave}
                  className="mt-4 w-full text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
