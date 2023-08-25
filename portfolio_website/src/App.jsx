import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// TODO: make sure text highlighting is nromal

const App = () => (
  <div className="p-6 sm:p-12 md:p-16 lg:py-0 lg:min-h-screen">
    <div className="lg:flex lg:gap-4">
      {/* FIXME: LEFT - HEADER */}
      <div className="border border-red-400/20">
        <Sidebar />
      </div>
      {/* FIXME: RIGHT - CONTENT */}
      <div className="border border-blue-400/20">
        <div className="w-full pt-20 mx-auto ">
          {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
          <About />
          <Projects />
          <Experience />
          <footer className="mb-20">
            {/* <p>© Cesar Fuentes 2023. All rights reserved.</p> */}
            <p>
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
              All text is set in the Inter typeface.
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
);

export default App;
