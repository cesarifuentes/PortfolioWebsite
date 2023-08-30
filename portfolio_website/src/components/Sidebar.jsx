import React from "react";
import { socialMedias, resume } from "../constants";
import globe from "../assets/globe.svg";
import barcode from "../assets/barcode.png";
import TypeWriterEffect from "react-typewriter-effect";

// TODO: make div scale

// TODO: make these flex items on opposite sides instead of opposite

const Sidebar = () => {
  return (
    <header className="lg:h-full lg:flex lg:flex-col lg:justify-between">
      {/* Top */}
      <div className="flex flex-col mt-5 gap-7 pb-11 lg:mt-0">
        {/* Logo */}
        <div className="flex flex-col justify-center sm:justify-start sm:flex-row sm:items-center">
          <img
            className="container mx-auto w-[50px] h-[36px] sm:w-[50px] sm:mx-0 sm:mr-3"
            src={globe}
            alt="globe"
          />

          <h4 className="mt-4 text-center uppercase sm:text-left sm:mt-0">
            Hi my name is Cesar <br />
            Welcome to my portfolio
          </h4>
        </div>

        {/* Title */}

        <h1 className="text-center uppercase sm:text-left">
          I create engaging, user-friendly online experiences.
        </h1>

        {/* Buttons */}
        <div className="text-center sm:text-left">
          <div>
            <a href={resume} download>
              <button class="bg-transparent border-2 border-white pt-3 pb-2 px-4 rounded-full uppercase hover:scale-105">
                <h2 className="">Download Resume</h2>
              </button>
            </a>
          </div>
          <div className="mt-4">
            <a href="mailto:fuentesivancesar@gmail.com">
              <button class="bg-transparent border-2 border-white pt-3 pb-2 px-4 rounded-full uppercase max-w-[150px] hover:scale-105">
                <h2 className="">Email Me</h2>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3 ">
        {/* lg:w-[400px] lg:mb-20  */}
        {/* Logos */}
        <div className="flex justify-center gap-3 sm:justify-start">
          {socialMedias.map((socialMedia, index) => (
            <div key={socialMedia.id}>
              <a href={socialMedia.link} target="_blank">
                <img
                  className="w-[25px] h-[25px] hover:scale-105 "
                  src={socialMedia.icon}
                  alt={socialMedia.name}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Text */}
        <h3 className="text-center uppercase sm:text-left">
          Software Developer <br /> Based in Dallas Texas <br /> ©2023 All
          Rights Reserved.{" "}
        </h3>

        {/* Barcode */}
        <img
          className="container mx-auto w-[207px] h-[24px] sm:ml-0"
          src={barcode}
          alt="globe"
        />
      </div>
    </header>
  );
};

export default Sidebar;
