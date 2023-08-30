import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// FIXME: missing frontend in title
// FIXME: make scroll start early

// TODO: background >>> bg-[url(./assets/background.jpg)] bg-cover
// TODO: fix padding top in earlier stages

const App = () => (
  <div className="container mx-auto sm:max-w-full sm:mx-0 xl:px-10">
    {/* this last xl:px-10 padding bridges the gap between lg and xl */}
    <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto">
      {/* FIXME: LEFT - HEADER */}
      <div className="lg:sticky lg:top-0 lg:max-h-screen lg:max-w-[400px]">
        <div className="lg:h-screen lg:py-16">
          <Sidebar />
        </div>
      </div>
      {/* FIXME: RIGHT - CONTENT */}
      <div className="pt-40 pb-10 lg:pb-0 lg:min-h-screen lg:pt-0 lg:my-16 lg:w-1/2 ">
        {/* lg:w-1/2 */}
        {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  </div>
);

export default App;
