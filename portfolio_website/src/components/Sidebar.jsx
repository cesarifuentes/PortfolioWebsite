import React from "react";
import { socialMedias, resume } from "../constants";
import globe from "../assets/globe.svg";
import barcode from "../assets/barcode.png";

const Sidebar = () => {
  return (
    <div className="max-w-[500px] ml-0 lg:min-h-screen lg:mt-20">
      {/*  w-full lg:w-[432px]   */}
      {/* TODO: medium ish */}
      {/* mx-auto lg:ml-0 */}

      {/* Top */}
      <div className="flex flex-col gap-3 mt-5 lg:mt-0 pb-11 lg:pb-0">
        {/* Logo */}
        <div className="flex align-middle">
          <img className="w-[50px] h-[36px] " src={globe} alt="globe" />

          <h4 className="p-1 ml-2 uppercase">
            Hi my name is Cesar <br />
            Welcome to my portfolio
          </h4>
        </div>

        <h1 className="uppercase">
          I create engaging, user-friendly online experiences.
        </h1>

        <a href={resume} download>
          <button class="bg-transparent border-2 border-white py-2 px-5 rounded-full uppercase max-w-[300px]">
            <h2 className="">Download Resume</h2>
          </button>
        </a>

        <button class="bg-transparent border-2 border-white py-2 px-5 rounded-full uppercase max-w-[300px]">
          <h2 className="">Email Me</h2>
        </button>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3 mb-0 lg:w-[400px] lg:mb-20 lg:absolute lg:bottom-0 lg:left-0 ">
        <div className="uppercase">
          <div className="flex">
            {socialMedias.map((socialMedia, index) => (
              <div
                key={socialMedia.id}
                className={`${index === 0 ? "ml-0" : "ml-3"}`}
              >
                <a href={socialMedia.link} target="_blank">
                  <img
                    className="w-[25px] h-[25px]"
                    src={socialMedia.icon}
                    alt={socialMedia.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <h3 className="uppercase">
          Software Developer <br /> Based in Dallas Texas <br /> ©2023 All
          Rights Reserved.{" "}
        </h3>

        <img className="w-[207px] h-[24px]" src={barcode} alt="globe" />

        {/* <h2 className="mb-1 text-white">Cesar Fuentes</h2>
        <h6 className="mb-3 text-white">Web Developer</h6> */}
      </div>
    </div>
  );
};

export default Sidebar;
