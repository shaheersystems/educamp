import "./App.css";
import Header from "./components/Header";
import LearnLayout from "./layouts/LearnLayout";
function App() {
  return (
    <>
      <div>
        <Header />
        <LearnLayout>
          <div className="p-4 space-y-4 font-sans text-black">
            <h1 className="text-6xl">Introduction</h1>
            <p className="text-lg">
              Learn how data structures are important to improve our quality of
              life.
            </p>
            <p className="text-lg">
              Every computer science curriculum in the world includes a course
              on data structures and algorithms. Data structures are that
              important; they improve our quality of life and even save lives on
              a regular basis. Many multi-million and several multi-billion
              dollar companies have been built around data structures. The
              course contains executable programs in Python comprising classes,
              and sample libraries to demonstrate the working of each data
              structure and related methods.
            </p>
            <h1 className="text-4xl">Prerequisites</h1>
            <p>
              This is not a beginner-level course. It won’t explain the basic
              syntax of the programming language used in the course. If you see
              a piece of code that works but doesn’t look familiar, please
              consider it an opportunity to learn something new by utilizing
              your ability to explore.
            </p>
          </div>
          <div className="flex items-center justify-between p-4 text-black">
            <button className="flex items-center gap-2 px-6 py-2 border rounded hover:text-white border-dark2 hover:bg-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Previous
            </button>
            <button className="flex items-center gap-2 px-6 py-2 border rounded hover:text-white border-dark2 hover:bg-button">
              Next
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
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </LearnLayout>
      </div>
    </>
  );
}

export default App;
