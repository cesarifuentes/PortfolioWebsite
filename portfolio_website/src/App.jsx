import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

const App = () => (
  <div>
    <div className="mx-auto min-h-screen max-w-[1328px] bg-slate-400">
      {/*  TODO: px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 */}
      <div className="flex justify-between">
        {/* TODO: lg:flex lg:justify-between lg:gap-4 */}
        {/* LEFT - HEADER */}
        <div className="w-5/12 min-h-screen flex-col sticky bg-amber-400">
          {/* TODO: lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 */}
          <Sidebar />
        </div>
        {/* RIGHT - CONTENT */}
        <div className="w-7/12 bg-teal-400">
          {/* TODO: pt-24 lg:w-1/2 lg:py-24 */}
          <div className="max-w-[544px]">
            <About />
            <Projects />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;

//  `${styles.boxWidth}`

// import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// // import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
//         </a>
//         <a href="https://react.dev" target="_blank">
//           {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
