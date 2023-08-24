import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

const App = () => (
  <div>
    <div className="flex flex-col lg:flex-row lg:max-w-[1328px] lg:mx-auto mx-5">
      {/* LEFT - HEADER */}
      <div className="lg:sticky lg:top-0 lg:max-h-screen lg:w-5/12  bg-amber-400 ">
        <Sidebar />
      </div>
      <br />
      {/* RIGHT - CONTENT */}
      <div className="lg:w-7/12 bg-teal-400">
        <div className="max-w-[544px]">
          <About />
          <Projects />
          <Experience />
        </div>
      </div>
    </div>
  </div>
);

export default App;

{
  /*  min-h-screen  */
}
{
  /*  TODO: px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 */
}
{
  /* TODO: pt-24 lg:w-1/2 lg:py-24 */
}
