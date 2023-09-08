import React from "react";
import { paragraphs } from "../constants";

const About = () => {
  return (
    <section className="section-mb">
      {/* Title */}
      <h3 className="space-btwn-title">About</h3>
      {/* Paragraphs */}
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
