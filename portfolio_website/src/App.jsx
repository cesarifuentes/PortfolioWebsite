import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

const App = () => (
  <div>
    <div className="mx-5 sm:mx-30 overflow-x-hidden flex flex-col md:flex-row md:max-w-[1328px] md:mx-auto ">
      {/* LEFT - HEADER */}
      <div className="mt-5 md:mt-20 lg:mt-0 lg:sticky lg:top-0 lg:max-h-screen lg:w-5/12 ">
        {/*  bg-amber-400 */}
        <Sidebar />
      </div>
      {/* <br /> */}
      {/* RIGHT - CONTENT */}
      <div className="lg:w-7/12 ">
        {/* bg-teal-400 */}
        <div className="w-full  mx-auto  mt-20 ">
          <About />
          <Projects />
          <Experience />
          <section>
            <p>© Cesar Fuentes 2023. All rights reserved.</p>
          </section>
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
