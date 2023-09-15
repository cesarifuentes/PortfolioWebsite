import React from "react";
import { Helmet } from "react-helmet";
import { paragraphs } from "../../constants";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import HoverText from "../elements/HoverText";
import pomodoro from "../../assets/pomodoro.png";

import huasteca from "../../assets/about/cook.jpg";
import unicef from "../../assets/about/unicef.jpg";
import houston from "../../assets/about/houstonfoodbank.png";

const AboutExtended = () => {
  return (
    <>
      <Helmet>
        <title>CF | About Me</title>
        <meta name="title" content="About Me" />
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
              <h5 className="text-center hover:opacity-30">
                &lt;&lt; Return Home &gt;&gt;
              </h5>
            </Link>
            <h1 className="pb-10 text-center space-btwn-title">
              About <em>Me</em>
            </h1>

            <div className="text-justify ">
              <p className="w-3/4 mx-auto md:w-1/2">
                As someone deeply engaged in various interests, I've always
                dabbled in a wide array of fields, including volunteering,
                graphic design, mathematics, and science. I didn't have a clear
                direction in life until I enrolled in my high school's AP
                Computer Science course. It was during this course that I
                discovered my true passion. My very first coding project was a
                <HoverText text=" pomodoro timer " image={pomodoro}></HoverText>
                app designed to aid students in managing their study time.
                Through this experience, I found a fulfilling path where I could
                assist, enhancing my problem-solving abilities, and create
                solutions that are both functional and visually appealing. To
                this day, I continue to embrace that sentiment, building things
                that are practical, of top-notch quality, and aesthetically
                pleasing.
                <br /> <br />
                My roots trace back to the lush tropical rainforests of
                Veracruz, where my parents hail from. Growing up, I was
                instilled with a profound appreciation for my
                <HoverText text=" Huasteca " image={huasteca}></HoverText>
                culture, which has always been an integral part of my identity.
                I love to make traditional dishes such as tamales and enchiladas
                and partake in festive celebrations such as xantolo.
                <br /> <br />
                As a Mexican-American, I've also been exposed to the
                heart-wrenching challenges that children face daily. Witnessing
                the agonizing separation of children from their families ignited
                my determination to join the
                <HoverText text=" UNICEF " image={unicef}></HoverText>
                chapter at my college. My lifelong aspiration revolves around
                prioritizing the well-being of children, and within UNICEF, I've
                had the opportunity to volunteer for local children and raise
                funds to support children worldwide. I'm consistently advocating
                for others to contribute to these efforts, and I even
                orchestrated an event at the
                <HoverText
                  text=" Houston Food Bank "
                  image={houston}
                ></HoverText>
                during my internship.
              </p>
            </div>

            {/* Table */}
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutExtended;
