import React from "react";
import { experiences, resume } from "../../constants";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";

const Experience = () => {
  return (
    <section>
      {/* Title */}
      <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
        Experience
      </h4>
      {/* Experiences */}
      {/* TODO: company and date */}
      {experiences.map((experience, index) => (
        <div key={experience.id} className="mb-20 lg:mb-5">
          <Card>
            <CardImage
              image={experience.image}
              alt={`ID Card Picture of me when I was at ${experience.company}`}
            ></CardImage>

            <CardText>
              <h6 className="">{experience.date}</h6>
              <h5 className="mt-2">{experience.title}</h5>
            </CardText>
          </Card>
        </div>
      ))}

      <Link to={"/work_archive"}>
        <h3 className="link-to-full-display">(See Full Work Experience)</h3>
      </Link>
    </section>
  );
};

export default Experience;

// {`${
//   index === experiences.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
// }`}