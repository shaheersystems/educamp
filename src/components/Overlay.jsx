import React from "react";

function Overlay({ isOpen, setIsOpen }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`absolute z-10 w-full h-screen bg-black/10 overlay ${
        isOpen ? "block" : "hidden"
      }`}
    ></div>
  );
}

export default Overlay;
