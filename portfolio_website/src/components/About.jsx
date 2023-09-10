import React from "react";
import { paragraphs } from "../constants";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <section className="section-mb">
        {/* Title */}
        <h4 className="text-center space-btwn-title sm:text-left">About</h4>

        {paragraphs.map((paragraph, index) => (
          <div key={paragraph.id} className={`text-center sm:text-justify`}>
            <p>{paragraph.text}</p>
            <br />
          </div>
        ))}
      </section>
    </>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
