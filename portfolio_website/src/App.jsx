import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// FIXME: missing frontend in title
// FIXME: margins again

// TODO: make sure text highlighting is nromal
// TODO: make scroll start early
// TODO: resume button can press anywhere in div
// https://placekitten.com/1400
// TODO: background >>> bg-[url(./assets/background.jpg)] bg-cover

const App = () => (
  <div className="container mx-auto">
    {/* sm:p-7 lg:px-0 lg:p-0 lg:container lg:min-h-screen  */}
    {/* md:p-16 lg:py-0 */}
    <div className="mx-8 ">
      {/* lg:flex lg:gap-4 lg:justify-between lg:max-w-[1280px] */}
      {/* FIXME: LEFT - HEADER */}
      <header className="">
        {/* lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 */}
        <Sidebar />
      </header>
      {/* FIXME: RIGHT - CONTENT */}
      <div className="pt-20">
        {/* lg:w-2/5 */}
        {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  </div>
);

export default App;
