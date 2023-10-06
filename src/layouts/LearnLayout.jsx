import React from "react";
import { Disclosure } from "@headlessui/react";

const LearnLayout = ({ children }) => {
  const course = {
    id: 1,
    name: "Data Structures with Generic Types in Python",
    progress: "40%",
    sections: [
      {
        id: 1,
        name: "Overview",
        modules: [
          {
            id: 1,
            name: "Introduction to Data Structures",
            completed: true,
          },
          {
            id: 2,
            name: "The need for efficiency",
            completed: true,
          },
          {
            id: 3,
            name: "Interfaces",
            completed: true,
          },
          {
            id: 4,
            name: "Mathamatical Background",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        name: "Array-based List",
        modules: [
          {
            id: 1,
            name: "Array implementation of stack",
            completed: true,
          },
          {
            id: 2,
            name: "ArrayQueue: an array-based queue",
            completed: false,
          },
          {
            id: 3,
            name: "ArrayDeque: an array-based deque",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        name: "LinkedLists",
        modules: [
          {
            id: 1,
            name: "SLList: A singly-Linked List",
            completed: false,
          },
          {
            id: 2,
            name: "DLList: A doubly-Linked List",
            completed: false,
          },
          {
            id: 3,
            name: "Circularly-Linked List",
            completed: false,
          },
        ],
      },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" text-black min-h-[91vh] bg-white border-r border-gray-600 md:w-1/4">
        <div className="px-4 py-6 bg-white border-b border-gray-600 ">
          <a
            href="/"
            class=" flex items-center gap-4 hover:text-button font-semibold text-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Back to Course home</span>
          </a>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 ">
          <h2 className="text-2xl font-bold text-black cursor-pointer hover:text-button">
            {course.name}
          </h2>
          <span className="">{course.progress} completed</span>
          <div className="h-3 bg-gray-200 rounded-full ">
            <div
              className="h-full rounded-full bg-button"
              style={{ width: course.progress }}
            ></div>
          </div>
          <div className="py-4">
            <input
              type="text"
              placeholder="Search for lesson"
              className="w-full px-3 py-3 text-black bg-white border border-gray-600 outline-none "
            />
          </div>
          <div className="py-4">
            <div className="py-2">
              <h2 className="font-serif text-2xl font-semibold text-black">
                Sections
              </h2>
            </div>
            <div className="py-2">
              {course.sections.map((section, idx) => {
                return (
                  <Disclosure key={idx}>
                    <Disclosure.Button className="w-full py-2">
                      <div className="flex items-center justify-between group">
                        <h3 className="py-2 text-xl font-semibold text-black">
                          {section.name}
                        </h3>
                        <span className="p-2 transition-all scale-0 bg-white rounded-full group-hover:scale-100 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    </Disclosure.Button>
                    {section.modules.map((module, idx) => {
                      return (
                        <Disclosure.Panel
                          key={idx}
                          className="text-black hover:text-indigo-600"
                        >
                          <a href="#">
                            <div className="flex items-center gap-4 py-2">
                              <div
                                className={`p-2 border-2 rounded-full border-gray-600 ${
                                  module.completed ? "bg-white " : ""
                                }`}
                              ></div>
                              <div>
                                <h2>{module.name}</h2>
                              </div>
                            </div>
                          </a>
                        </Disclosure.Panel>
                      );
                    })}
                  </Disclosure>
                );
              })}
            </div>
            <div className="py-2">
              <button className="flex items-center gap-2 px-6 py-2 transition-all ease-out border border-gray-600 rounded hover:text-white hover:bg-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span>Get certificate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 md:flex-1">{children}</div>
    </div>
  );
};

export default LearnLayout;
