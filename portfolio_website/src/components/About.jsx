import React from "react";
import { paragraphs, skills } from "../constants";

const About = () => {
  return (
    <section>
      <h3 className="gradient_text">ABOUT</h3>
      <br />
      {paragraphs.map((paragraph) => (
        <div key={paragraph.id} className="bg-primary">
          <p>{paragraph.text}</p>
          <br />
        </div>
      ))}

      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="w-[50px] h-[50px] grid place-content-center mr-3 mb-3 rounded-lg border border-black hover:drop-shadow-xl"
            style={{ backgroundColor: "#24292F" }}
          >
            <img src={skill.icon} alt={skill.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
