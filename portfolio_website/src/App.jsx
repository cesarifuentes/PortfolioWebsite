import React from "react";
import styles from "./styles";
import { Sidebar, About, Projects, Experience } from "./components";
import { Helmet } from "react-helmet";

// FIXME: missing frontend in title
// FIXME: make images not blur
// FIXME: add animation?
// FIXME: font colors?
// FIXME: background >>> bg-[url(./assets/background.jpg)] bg-cover

// TODO: make new page for clicked things
// TODO: make sidebar for sm,md,lg screens take up entire page height and flex justify

const App = () => (
  <div className="">
    <Helmet>
      <title> Cesar Fuentes</title>
      <meta
        name="description"
        content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
      />

      {/* for sharing on other sites */}
      <meta property="og:title" content="Cesar Fuentes" />
      <meta
        property="og:description"
        content="This website is a showcase of my achievements throughout my career as a software developer. It includes work experience, projects, contact information and my resume."
      />
      {/* <meta property="og:image" content="URL of the image you want to use" /> */}
      <meta property="og:url" content="https://cesarfuentes.com/" />
      <meta property="og:type" content="website" />
    </Helmet>

    <div className=""></div>
    <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
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
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  </div>
);

export default App;
