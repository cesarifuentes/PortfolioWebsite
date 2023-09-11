import React from "react";
import { Sidebar, About, Projects, Experience } from "../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* TODO: move this into higher file or create new component for after this */}

      <Helmet>
        <title>Cesar Fuentes</title>
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />

        {/* for sharing on other sites */}
        <meta property="og:title" content="Cesar Fuentes" />
        <meta
          property="og:description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
        {/* <meta property="og:image" content="url_to_image" /> */}
        <meta property="og:url" content="https://cesarfuentes.com/" />
        <meta property="og:site_name" content="Cesar Fuentes" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="profile" />
        {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@user" />
      <meta name="twitter:creator" content="@user" /> */}
        <meta name="twitter:title" content="Cesar Fuentes" />
        <meta
          name="twitter:description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
        <meta name="twitter:image" content="url_to_image" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>

      <div className="">
        <div className=""></div>
        <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
          {/* this last xl:px-10 padding bridges the gap between lg and xl */}
          <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto ">
            {/* FIXME: LEFT - HEADER */}
            <div className="lg:sticky lg:top-0 lg:max-h-screen lg:max-w-[300px]">
              <div className="lg:h-screen lg:py-16">
                <Sidebar />
              </div>
            </div>
            {/* FIXME: RIGHT - CONTENT */}
            <div className="pt-40 pb-10 lg:pb-0 lg:min-h-screen lg:pt-0 lg:my-16 lg:w-3/5">
              {/* lg:w-1/2 */}
              {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
              <About />
              <Experience />
              <Projects />
              <p> Designed & Developed by Cesar Fuentes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
