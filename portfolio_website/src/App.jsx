import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// TODO: make sure text highlighting is nromal
// TODO: fix image fitting for projects
// TODO: footer text
// TODO: fix date text on xperience

const App = () => (
  <div className="p-5 lg:container sm:p-12 lg:min-h-screen lg:mx-auto">
    {/* md:p-16 lg:py-0 */}
    <div className="lg:flex lg:gap-4 lg:justify-between lg:max-w-[1280px]">
      {/* FIXME: LEFT - HEADER */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2">
        <Sidebar />
      </header>
      {/* FIXME: RIGHT - CONTENT */}
      <div className="pt-20 lg:w-1/2">
        {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
        <About />
        <Projects />
        <Experience />
        <footer className="pb-20">
          {/* <p>© Cesar Fuentes 2023. All rights reserved.</p> */}
          <p>
            © Cesar Fuentes 2023. All rights reserved.
            {/* Loosely designed in Figma and coded in Visual Studio Code by yours
            truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            All text is set in the Inter typeface. */}
          </p>
        </footer>
      </div>
    </div>
  </div>
);

export default App;

{
  /* Download Link */
}
// <a href={resume[0].file} download>
//   <p className="underline underline-offset-4 ">
//     Download resume (PDF 896kb)
//   </p>
// </a>
