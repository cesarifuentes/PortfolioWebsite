import React from "react";
import { paragraphs } from "../constants";
import { Helmet } from "react-helmet";
import polaroid from "../assets/polaroid.png";

import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";

const About = () => {
  return (
    <>
      <section>
        {/* Title */}
        <h4 className="text-center space-btwn-title sm:text-left">About</h4>

        <Card>
          <CardImage
            image={polaroid}
            // alt={`ID Card Picture of me when I was at ${experience.company}`}
          ></CardImage>

          <CardText>
            {paragraphs.map((paragraph, index) => (
              <div key={paragraph.id} className={`text-center sm:text-justify`}>
                <p>{paragraph.text}</p>
                <br />
              </div>
            ))}
          </CardText>
        </Card>
      </section>
    </>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
