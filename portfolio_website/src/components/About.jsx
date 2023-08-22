import React from "react";
import { paragraphs } from "../constants";

const About = () => {
  return (
    <div>
      About
      {paragraphs.map((paragraph) => (
        <div key={paragraph.id} className="bg-primary">
          <h1>{paragraph.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default About;
