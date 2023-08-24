import React from "react";
import { paragraphs } from "../constants";

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
    </section>
  );
};

export default About;
