import React from "react";
import { Sidebar, About, Projects, Experience, Footer } from "../components";
import { Helmet } from "react-helmet";
import MainTags from "../components/tags/MainTags";

const Home = () => {
  return (
    <div className="bkgd">
      <MainTags></MainTags>
      <div className="">
        <div className=""></div>
        <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
          {/* this last xl:px-10 padding bridges the gap between lg and xl */}
          <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto ">
            {/* FIXME: LEFT - HEADER */}
            <div className="lg:sticky lg:top-0 lg:max-h-screen lg:max-w-[300px] ">
              <div className="lg:h-screen lg:py-16">
                <Sidebar />
              </div>
            </div>
            {/* FIXME: RIGHT - CONTENT */}
            <div className="pt-40 pb-10 lg:pb-0 lg:min-h-screen lg:pt-0 lg:my-16 lg:w-3/5 ">
              {/* lg:w-1/2 */}
              {/* TODO: class="pt-24 lg:w-1/2 lg:py-24" */}
              <About />
              <Projects />
              <Experience />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
