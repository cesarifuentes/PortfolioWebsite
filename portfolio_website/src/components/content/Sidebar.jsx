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
        {/* Logos */}
        <div className="flex justify-center gap-3 sm:justify-start">
          {socialMedias.map((socialMedia, index) => (
            <div key={socialMedia.id}>
              <a href={socialMedia.link} target="_blank">
                <img
                  className="w-[25px] h-[25px] hover:scale-105 white-filter"
                  src={socialMedia.icon}
                  alt={`${socialMedia.name} Icon Link`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-3 ">
        {/* lg:w-[400px] lg:mb-20  */}

        <div>
          <h1 className="text-center sm:w-2/3 lg:w-full sm:text-left">
            Cesar Fuentes
          </h1>
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
    </header>
  );
};

export default Sidebar;
