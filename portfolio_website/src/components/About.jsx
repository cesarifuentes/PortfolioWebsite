import React from "react";
import { paragraphs } from "../constants";

const About = () => {
  return (
    <section id="section-custom">
      {paragraphs.map((paragraph, index) => (
        <div key={paragraph.id} className={`text-center sm:text-justify`}>
          <p>{paragraph.text}</p>
          <br />
        </div>
      ))}
    </section>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
