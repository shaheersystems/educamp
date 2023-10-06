import React, { useState } from "react";

function NotesSlideOverlay({ isOpen }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Note 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Note 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      title: "Note 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      title: "Note 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      title: "Note 6",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      title: "Note 7",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      title: "Note 8",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      title: "Note 9",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      title: "Note 10",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);
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
      <div className="h-[50vh] py-6 overflow-y-scroll">
        <div className="px-3 py-2">
          {notes.map((note, idx) => {
            return (
              <div key={idx} className="">
                <span className="font-semibold text-black">{note.title}:</span>
                <p className="py-2 text-sm text-gray-600">
                  {note.content}
                </p>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sticky bottom-0 w-full px-3 py-4 space-y-4">
        <input
          type="text"
          placeholder="Note title"
          className="w-full px-3 py-2 text-gray-600 border border-gray-600 rounded outline-none resize-none "
        />
        <textarea
          rows={4}
          placeholder="Write a brief note..."
          className="w-full px-3 py-2 text-gray-600 border border-gray-600 rounded outline-none resize-none "
        ></textarea>
        <button className="px-3 py-2 text-xs font-semibold text-left text-gray-100 border border-gray-600 rounded bg-button">
          Add Note
        </button>
      </div>
    </div>
  );
}

export default NotesSlideOverlay;
