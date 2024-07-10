import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex size-10 cursor-pointer flex-col items-center justify-center space-y-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`h-1 w-8 bg-primary transition-transform duration-300 ${
          isOpen ? "translate-y-2 rotate-45 transform" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 bg-primary transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 bg-primary transition-transform duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45 transform" : ""
        }`}
      ></div>
    </div>
  );
}
