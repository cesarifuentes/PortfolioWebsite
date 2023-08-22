import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";

const App = () => (
  <div>
    <div className="mx-auto min-h-screen max-w-[1328px]">
      {/*  TODO: px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 */}
      container of size 1328
      <div className="bg-lime-400">hellor</div>
    </div>
    <div className="w-50 mx-auto bg-lime-400">container of size 1328</div>

    <Sidebar />
    <About />
    <Projects />
    <Experience />
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
