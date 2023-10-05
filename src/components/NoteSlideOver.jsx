import React from "react";

function NotesSlideOverlay({ isOpen }) {
  return (
    <div
      className={`absolute right-0 z-50 h-screen transition-all shadow w-96 bg-white  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="sticky top-0 w-full px-3 py-[18px] border-b border-gray-600">
        <h2 className="text-xl font-semibold ">
          Your notes for current module
        </h2>
      </div>
      <div className="min-h-[60vh]">
        <div className="px-3 py-2">
          <p className="py-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit qui
            fugiat magni dolorum harum tenetur?
          </p>{" "}
          <p className="py-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit qui
            fugiat magni dolorum harum tenetur?
          </p>{" "}
          <p className="py-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit qui
            fugiat magni dolorum harum tenetur?
          </p>{" "}
        </div>
      </div>
      <div className="sticky bottom-0 w-full px-3 py-4 space-y-4 ">
        <textarea
          rows={4}
          placeholder="Write a brief note..."
          className="w-full px-3 py-2 text-gray-100 border border-gray-600 rounded outline-none resize-none "
        ></textarea>
        <button className="px-3 py-2 text-xs font-semibold text-left text-white border border-gray-600 rounded bg-button">
          Add Note
        </button>
      </div>
    </div>
  );
}

export default NotesSlideOverlay;
