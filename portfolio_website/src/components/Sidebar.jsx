import React from "react";
import { socialMedias } from "../constants";

const Sidebar = () => {
  return (
    <div className="max-w-[300px] ml-0 lg:min-h-screen  w-full lg:w-[432px]  ">
      {/* TODO: medium ish */}
      {/* mx-auto lg:ml-0 */}
      {/* Title */}
      <h1 className="mt-5 lg:mt-20 pb-11 lg:pb-0 text-white">
        I build websites to deliver engaging, user-friendly{" "}
        <span className="gradient_text">online </span>
        <span className="gradient_text">experiences</span>.
      </h1>
      {/* Signature */}
      <div className="mb-0 lg:mb-20 lg:absolute lg:bottom-0 lg:left-0 ">
        <h2 className="mb-1 text-white">Cesar Fuentes</h2>
        <h6 className="mb-3 text-white">Web Developer</h6>
        <div className="flex">
          {socialMedias.map((socialMedia, index) => (
            <div
              key={socialMedia.id}
              className={`${index === 0 ? "ml-0" : "ml-2"}`}
            >
              <a href={socialMedia.link} target="_blank">
                <img src={socialMedia.icon} alt={socialMedia.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
