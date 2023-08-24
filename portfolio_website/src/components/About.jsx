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

      <h3>things</h3>
      <div className="w-[50px] h-[50px] bg-slate-600 rounded-lg border border-black shadow-inner shadow-2xl">
        b
      </div>
    </section>
  );
};

export default About;
