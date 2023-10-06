import React from "react";
import { useState } from "react";
import Overlay from "./Overlay";
import NotesSlideOverlay from "./NoteSlideOver";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0">
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <NotesSlideOverlay isOpen={isOpen} />
      <div class="flex  border-gray-600 border-b bg-white items-center justify-between px-6 py-2">
        <div className="flex items-center gap-2 text-3xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-indigo-600"
          >
            <path
              fillRule="evenodd"
              d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="">Devpen.</span>
        </div>
        <div class="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            class="rounded-full transition-all p-2 hover:bg-button hover:text-white"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 8.1C6 5.39752 8.10634 3 10.9701 3H18.5138C20.0891 3 21.685 3.58771 22.8906 4.78627L22.9051 4.80075L28.3298 10.3441C29.5325 11.5447 30.1434 13.3035 29.9714 14.9357V27.9C29.9714 30.6025 27.8651 33 25.0013 33H10.9701C8.10634 33 6 30.6025 6 27.9V8.1ZM10.9701 6C9.91113 6 9 6.90248 9 8.1V27.9C9 29.0975 9.91113 30 10.9701 30H25.0013C26.0603 30 26.9714 29.0975 26.9714 27.9V14.85C26.9714 14.7874 26.9753 14.7249 26.9831 14.6629C27.0757 13.9268 26.7845 13.038 26.2068 12.4637L26.1923 12.4492L20.7689 6.90724C20.1646 6.31004 19.3494 6 18.5138 6H10.9701Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 20.1716 12.6716 19.5 13.5 19.5H22.5C23.3284 19.5 24 20.1716 24 21C24 21.8284 23.3284 22.5 22.5 22.5H13.5C12.6716 22.5 12 21.8284 12 21Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 25.5C12 24.6716 12.6716 24 13.5 24H18C18.8284 24 19.5 24.6716 19.5 25.5C19.5 26.3284 18.8284 27 18 27H13.5C12.6716 27 12 26.3284 12 25.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button class="rounded-full transition-all p-2 hover:bg-button hover:text-white">
            <svg
              width="25"
              height="25"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3194 3.69401C16.9421 2.76866 18.9229 2.76866 20.5456 3.69401C20.5578 3.70095 20.5699 3.70808 20.5818 3.71541L28.9352 8.83224C30.5835 9.78156 31.5 11.4968 31.5 13.358V22.7806C31.5 24.5802 30.6295 26.3431 29.0478 27.1815L20.7168 32.2846C20.7049 32.2919 20.6928 32.2991 20.6806 32.306C19.0579 33.2313 17.0771 33.2313 15.4544 32.306C15.4422 32.2991 15.4301 32.2919 15.4182 32.2846L7.06478 27.1677C5.41643 26.2184 4.5 24.5032 4.5 22.642V13.358C4.5 11.4985 5.41476 9.78472 7.06027 8.83486L15.2749 3.72054C15.2895 3.71141 15.3044 3.70256 15.3194 3.69401ZM16.6509 6.10519L8.44013 11.2171C8.42546 11.2262 8.41062 11.2351 8.39562 11.2436C7.6263 11.6823 7.2 12.4551 7.2 13.358V22.642C7.2 23.5449 7.6263 24.3177 8.39562 24.7564C8.40779 24.7633 8.41986 24.7704 8.43182 24.7778L16.7821 29.8927C17.5808 30.3406 18.5542 30.3406 19.3529 29.8927L27.7032 24.7778C27.7319 24.7602 27.7613 24.7436 27.7913 24.7283C28.3386 24.4474 28.8 23.7338 28.8 22.7806V13.358C28.8 12.4551 28.3737 11.6823 27.6044 11.2436C27.5922 11.2367 27.5801 11.2296 27.5682 11.2222L19.218 6.10733C18.4205 5.66009 17.4489 5.65938 16.6509 6.10519ZM18 15.1594C16.4343 15.1594 15.165 16.4622 15.165 18.0693C15.165 19.6764 16.4343 20.9792 18 20.9792C19.5657 20.9792 20.835 19.6764 20.835 18.0693C20.835 16.4622 19.5657 15.1594 18 15.1594ZM12.465 18.0693C12.465 14.9316 14.9431 12.388 18 12.388C21.0569 12.388 23.535 14.9316 23.535 18.0693C23.535 21.207 21.0569 23.7506 18 23.7506C14.9431 23.7506 12.465 21.207 12.465 18.0693Z"
                fill="currentcolor"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
