import React from "react";
import { experiences, resume } from "../../constants";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";

const Experience = () => {
  return (
    <section className="home-section">
      {/* Title */}
      <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
        Experience
      </h4>
      {/* Experiences */}
      {/* TODO: company and date */}
      {experiences.map((experience, index) => (
        <div key={experience.id} className="mb-20 lg:mb-10">
          {experience.isFeatured ? (
            <Card>
              <CardImage
                image={experience.image}
                alt={`ID Card Picture of me when I was at ${experience.company}`}
              ></CardImage>

              <CardText>
                <p className="">{experience.date}</p>
                <h5 className="mt-2">{experience.title}</h5>
                <p className="mt-2">{experience.description}</p>
              </CardText>
            </Card>
          ) : null}{" "}
        </div>
      ))}

      <Card>
        <CardImage></CardImage>
        <CardText>
          <Link to={"/work_archive"}>
            <h3 className="link-to-full-display hover:opacity-30">
              (Full Employment History)
            </h3>
          </Link>
        </CardText>
      </Card>
    </section>
  );
};

export default Experience;

// {`${
//   index === experiences.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
// }`}
