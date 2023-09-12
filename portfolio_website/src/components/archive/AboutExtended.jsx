import React from "react";
import { Helmet } from "react-helmet";
import { paragraphs } from "../../constants";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import HoverImage from "../elements/HoverImage";
import pomodoro from "../../assets/pomodoro.png";

const AboutExtended = () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
      </Helmet>

      <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
        <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto ">
          {/* create a link back */}
          <section className="py-20">
            {/* Title */}
            <Link to={"/"}>
              <h5 className="text-center">&lt;&lt; Return Home &gt;&gt;</h5>
            </Link>
            <h1 className="pb-10 text-center space-btwn-title">
              About <em>Me</em>
            </h1>

            <p className="text-center">
              As someone deeply engaged in various interests, I've always
              dabbled in a wide array of fields, including volunteering, graphic
              design, mathematics, and science. I didn't have a clear direction
              in life until I enrolled in my high school's AP Computer Science
              course. It was during this course that I discovered my true
              passion. My very first coding project was a
              <HoverImage text=" pomodoro timer " image={pomodoro}></HoverImage>
              app designed to aid students in managing their study time. Through
              this experience, I found a fulfilling path where I could assist,
              enhancing my problem-solving abilities, and create solutions that
              are both functional and visually appealing. To this day, I
              continue to embrace that sentiment, building things that are
              practical, of top-notch quality, and aesthetically pleasing.
            </p>

            <br />

            <p className="text-center">Coming soon...</p>

            {/* Table */}
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutExtended;
