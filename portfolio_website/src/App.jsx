import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// TODO: make sure text highlighting is nromal
// TODO: fix image fitting for projects
// TODO: footer text
// TODO: fix date text on xperience

// TODO: flex space between 3 things
// TODO: line widths
// TODO: make scroll start early

const App = () => (
  <div className="min-h-screen p-5 sm:p-7 lg:px-10 lg:p-0 lg:container lg:min-h-screen lg:mx-auto">
    {/* md:p-16 lg:py-0 */}
    <div className="lg:flex lg:gap-4 lg:justify-between lg:max-w-[1280px]">
      {/* FIXME: LEFT - HEADER */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2">
        <Sidebar />
      </header>
      {/* FIXME: RIGHT - CONTENT */}
      <div className="pt-20 lg:w-1/3">
        {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
        <About />
        <Projects />
        <Experience />
        <footer className="pb-20">
          <p className="uppercase">
            © Cesar Fuentes 2023. All rights reserved.
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
