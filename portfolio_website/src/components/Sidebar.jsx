import React from "react";
import { socialMedias, resume } from "../constants";

const Sidebar = () => {
  return (
    <div className="max-w-[500px] ml-0 lg:min-h-screen ">
      {/*  w-full lg:w-[432px]   */}
      {/* TODO: medium ish */}
      {/* mx-auto lg:ml-0 */}

      {/* Title */}
      <div className="flex flex-col gap-3 mt-5 lg:mt-20 pb-11 lg:pb-0">
        <p className="uppercase">Welcome to my</p>
        <h1>Front-End Developer Portfolio.</h1>
        <p className="uppercase">
          I build things on the web to deliver engaging, user-friendly online
          experiences.
        </p>
        <a href={resume} download>
          <button class="bg-transparent border border-white py-2 px-4 rounded-full uppercase max-w-[100px]">
            Resume
          </button>
        </a>
      </div>

      {/* Signature */}
      <div className="flex flex-col gap-3 mb-0 lg:mb-20 lg:absolute lg:bottom-0 lg:left-0 ">
        <div className="line"></div>

        <div className="uppercase">
          <h4>Location</h4>
          <p className="">Dallas, Texas</p>
        </div>
        <div className="line"></div>

        <div className="uppercase">
          <h4>Contact</h4>
          <p className="">fuentesivancesar@gmail.com</p>
        </div>

        <div className="line"></div>

        <div className="uppercase">
          <h4>Socials</h4>
          <div className="flex">
            {socialMedias.map((socialMedia, index) => (
              <div
                key={socialMedia.id}
                className={`${index === 0 ? "ml-0" : "ml-5"}`}
              >
                <a href={socialMedia.link} target="_blank">
                  <p className="uppercase">{socialMedia.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="line"></div>

        {/* <h2 className="mb-1 text-white">Cesar Fuentes</h2>
        <h6 className="mb-3 text-white">Web Developer</h6> */}
      </div>
    </div>
  );
};

export default Sidebar;
