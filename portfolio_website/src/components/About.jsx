import React from "react";
import { paragraphs } from "../constants";

const About = () => {
  return (
    <section>
      {paragraphs.map((paragraph, index) => (
        <div
          key={paragraph.id}
          className={`text-center ${index === 0 ? "" : "hidden"}`}
        >
          <p>{paragraph.text}</p>
          <br />
        </div>
      ))}
    </section>
  );
};

export default About;
