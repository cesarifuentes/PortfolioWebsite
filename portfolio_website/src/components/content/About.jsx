import React from "react";
import { paragraphs } from "../../constants";
import { Helmet } from "react-helmet";
// import polaroid from "../assets/polaroid.png";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import { Link } from "react-router-dom";
import HoverImage from "../elements/HoverImage";
import pomodoro from "../../assets/pomodoro.png";

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
              {/* {paragraphs.map((paragraph, index) => (
                <div key={paragraph.id} className={`text-center sm:text-left `}>
                  <p>{paragraph.text}</p>
                  <br />
                </div>
              ))} */}

              <p>
                As someone deeply engaged in various interests, I've always
                dabbled in a wide array of fields, including volunteering,
                graphic design, mathematics, and science. I didn't have a clear
                direction in life until I enrolled in my high school's AP
                Computer Science course. It was during this course that I
                discovered my true passion. My very first coding project was a
                <HoverImage
                  text=" pomodoro timer "
                  image={pomodoro}
                ></HoverImage>
                app designed to aid students in managing their study time.
                Through this experience, I found a fulfilling path where I could
                assist others while enhancing my problem-solving abilities and
                creating solutions that are both functional and visually
                appealing. To this day, I continue to embrace that sentiment,
                building things that are practical, of top-notch quality, and
                aesthetically pleasing.
              </p>

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
