import "./App.css";
import About from "./about/about";
import Experience from "./experience/experience";
import "./index.css";

function App() {
  return (
    <>
      <main className="bg-gray-100">
        <div className="h-screen mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="w-full h-full p-8 shadow-md flex flex-col">
            <div className="flex-grow flex">
              <About></About>
              <Experience></Experience>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-sm text-gray-500 text-center">
          &copy; 2023 Your Name. All rights reserved.
        </footer>
      </main>
    </>
  );
}

export default App;
