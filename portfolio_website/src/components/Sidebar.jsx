import React from "react";
import { socialMedias } from "../constants";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[432px] p-5">
      <h1>
        I build websites to deliver engaging, user-friendly online experiences.
      </h1>

      <div className="absolute bottom-0 left-0 p-5">
        <h2>Cesar Fuentes</h2>
        <h6>Web Developer</h6>
        {/* <br /> */}
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
