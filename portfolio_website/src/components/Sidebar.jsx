import React from "react";
import { socialMedias, resume } from "../constants";
import globe from "../assets/globe.svg";
import barcode from "../assets/barcode.png";

const Sidebar = () => {
  return (
    <div className="mx-8 mt-16">
      {/* Top */}
      <div className="flex flex-col mt-5 gap-7 pb-11 ">
        {/* Logo */}
        <div className="flex flex-col justify-center mg:flex mg:align-middle">
          <img
            className="container mx-auto w-[50px] h-[36px]"
            src={globe}
            alt="globe"
          />

          <h4 className="mt-4 text-center uppercase sm:p-1 sm:ml-2">
            Hi my name is Cesar <br />
            Welcome to my portfolio
          </h4>
        </div>

        {/* Title */}
        <h1 className="text-center uppercase">
          I create engaging, user-friendly online experiences.
        </h1>

        {/* Buttons */}
        <div className="text-center">
          <div>
            <a href={resume} download>
              <button class="bg-transparent border-2 border-white pt-3 pb-2 px-4 rounded-full uppercase ">
                <h2 className="">Download Resume</h2>
              </button>
            </a>
          </div>
          <div className="mt-4">
            <button class="bg-transparent border-2 border-white pt-3 pb-2 px-4 rounded-full uppercase max-w-[150px]">
              <h2 className="">Email Me</h2>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3">
        {/* lg:w-[400px] lg:mb-20 lg:absolute lg:bottom-0 lg:left-0  */}
        {/* Logos */}
        <div className="flex justify-center gap-3">
          {socialMedias.map((socialMedia, index) => (
            <div key={socialMedia.id}>
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

        {/* Text */}
        <h3 className="text-center uppercase">
          Software Developer <br /> Based in Dallas Texas <br /> ©2023 All
          Rights Reserved.{" "}
        </h3>

        {/* Barcode */}
        <img
          className="container mx-auto w-[207px] h-[24px]"
          src={barcode}
          alt="globe"
        />
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* lg:min-h-screen lg:mt-20 */
}
{
  /*  w-full lg:w-[432px]   */
}
{
  /* TODO: medium ish */
}
{
  /* mx-auto lg:ml-0 */
}
{
  /* lg:pb-0 lg:mt-0 */
}
