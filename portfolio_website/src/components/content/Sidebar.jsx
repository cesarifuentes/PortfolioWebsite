import React from "react";
import { socialMedias, resume } from "../../constants";
// import globe from "../../assets/globe.svg";
import barcode from "../../assets/barcode.png";
import TypeWriterEffect from "react-typewriter-effect";
import Button from "../elements/Button";

const Sidebar = () => {
  return (
    <header className="lg:h-full lg:flex lg:flex-col lg:justify-between">
      {/* Top */}
      <div className="flex flex-col mt-5 gap-7 pb-11 lg:mt-0">
        {/* Logo */}

        {/* <div className="flex flex-col justify-center sm:justify-start sm:flex-row sm:items-center">
          <img
            className="container mx-auto w-[50px] h-[36px] sm:w-[50px] sm:mx-0 sm:mr-3"
            src={globe}
            alt="Futuristic globe vector"
          />

          <h6 className="mt-4 text-center uppercase sm:text-left sm:mt-0">
            Hi my name is Cesar <br />
            Welcome to my portfolio
          </h6>
        </div> */}

        {/* Title */}

        <div>
          {/* <h3 className="mb-4 text-center uppercase sm:w-2/3 lg:w-full sm:text-left">
            Hello, my name is
          </h3> */}
          <h1 className="text-center sm:w-2/3 lg:w-full sm:text-left">
            Cesar Fuentes
          </h1>
          {/* <h3 className="text-center uppercase sm:w-2/3 lg:w-full sm:text-left">
            I create engaging, user-friendly online experiences.
          </h3> */}
          <h4 className="mt-4 text-center sm:w-2/3 lg:w-full sm:text-left">
            Dallas-based software developer that creates engaging &
            user-friendly online experiences.
          </h4>
        </div>

        {/* Buttons */}
        <div className="text-center sm:text-left">
          <Button text="Download Resume" href_={resume}></Button>
          <div className="mt-4">
            <Button
              text="Email Me"
              href_="mailto:fuentesivancesar@gmail.com"
            ></Button>
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
                  alt={`${socialMedia.name} Icon Link`}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Text */}
        <h4 className="text-center uppercase sm:text-left">
          Software Developer <br /> Based in Dallas Texas <br /> ©2023 All
          Rights Reserved.{" "}
        </h4>

        {/* Barcode */}
        <img
          className="container mx-auto w-[207px] h-[24px] sm:ml-0"
          src={barcode}
          alt="Barcode lines for artistic effect"
        />
      </div>
    </header>
  );
};

export default Sidebar;
