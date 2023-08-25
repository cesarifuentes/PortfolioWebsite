import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

// FIXME: make sure text highlighting is nromal

// class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
{
  /* sm:px-12 sm:py-20 */
}

{
  /* flex flex-col */
}
{
  /* w-max sm:mx-0 sm:px-96 sm:bg-lime-400 */
}
{
  /* add thus md:flex-row md:max-w-[1328px] md:mx-auto overflow-x-hidden */
}
{
  /* mt-5 md:mt-20 lg:mt-0 lg:sticky lg:top-0 lg:max-h-screen lg:w-5/12 bg-blue-400/20 */
}
{
  /*  bg-amber-400 */
}

{
  /* pt-24 */
}
{
  /* lg:w-1/2 lg:py-24  */
}
{
  /* lg:w-7/12 */
}
{
  /* bg-teal-400 */
}

const App = () => (
  <div className="p-6 sm:p-10">
    {/* FIXME: LEFT - HEADER */}
    <div className="border border-red-400/20">
      <Sidebar />
    </div>
    {/* FIXME: RIGHT - CONTENT */}
    <div className="border border-blue-400/20">
      <div className="w-full pt-20 mx-auto ">
        <About />
        <Projects />
        <Experience />
        <footer className="">
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
);

export default App;
