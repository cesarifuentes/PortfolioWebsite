import React from "react";
import { paragraphs } from "../../constants";
import { Helmet } from "react-helmet";
// import polaroid from "../assets/polaroid.png";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        {/* Title */}
        <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
          About
        </h4>

        <Card>
          <CardImage
          // image={polaroid}
          // alt={`ID Card Picture of me when I was at ${experience.company}`}
          ></CardImage>

          <CardText>
            <div className="grid content-end paragraph grid-cols">
              {paragraphs.map((paragraph, index) => (
                <div key={paragraph.id} className={`text-center sm:text-left `}>
                  <p>{paragraph.text}</p>
                  <br />
                </div>
              ))}

              <Link to={"/"}>
                <h3 className="link-to-full-display">(Read more)</h3>
              </Link>
            </div>
          </CardText>
        </Card>
      </section>
    </>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
