import React from "react";
import { Container } from "./Container";
//Make Header Dark Mode for user settings
export function Header() {
  return (
    <header className="w-full bg-gray-300 dark:bg-black shadow-md">
      <nav>
        <div className="flex items-center gap-6 text-center">
          <Container className="relative z-50 flex justify-between py-8">
            <h2 className=" text-black dark:text-gray-300">LP-Toolkit</h2>
          </Container>
        </div>
      </nav>
    </header>
  );
}
