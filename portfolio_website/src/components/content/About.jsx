import React from "react";
import { paragraphs } from "../../constants";
import { Helmet } from "react-helmet";
// import polaroid from "../assets/polaroid.png";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import { Link } from "react-router-dom";
import HoverText from "../elements/HoverText";
import pomodoro from "../../assets/pomodoro.png";

const About = () => {
  return (
    <>
      <section className="home-section">
        {/* Title */}
        <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
          About Me
        </h4>

        <div className="grid content-end paragraph grid-cols">
          <Card>
            <CardImage></CardImage>

            <CardText>
              <p>
                As someone deeply engaged in various interests, I've always
                dabbled in a wide array of fields, including volunteering,
                graphic design, mathematics, and science. I didn't have a clear
                direction in life until I enrolled in my high school's AP
                Computer Science course. It was during this course that I
                discovered my true passion. My very first coding project was a
                <HoverText text=" pomodoro timer " image={pomodoro} />
                app designed to aid students in managing their study time.
                Through this experience, I found a fulfilling path where I could
                assist others, enhancing my problem-solving abilities, and
                create solutions that are both functional and visually
                appealing. To this day, I continue to embrace that sentiment,
                building things that are practical, of top-notch quality, and
                aesthetically pleasing.
              </p>
            </CardText>
          </Card>

          <Card>
            <CardImage></CardImage>
            <CardText>
              <Link to={"/about_extended"}>
                <h3 className="link-to-full-display hover:opacity-30">
                  (Read more)
                </h3>
              </Link>
            </CardText>
          </Card>
        </div>
      </section>
    </>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
