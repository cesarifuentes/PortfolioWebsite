import React from "react";
import { socialMedias } from "../constants";

const Sidebar = () => {
  return (
    <div className="lg:min-h-screen w-[432px] lg:p-5 mx-auto lg:ml-0 bg-red-400">
      <h1 className="pb-11 lg:pb-0">
        I build websites to deliver engaging, user-friendly online experiences.
      </h1>
      <div className="lg:p-5 lg:absolute lg:bottom-0 lg:left-0 ">
        <h2>Cesar Fuentes</h2>
        <h6>Web Developer</h6>
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
