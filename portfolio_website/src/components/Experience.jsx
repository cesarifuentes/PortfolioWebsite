import React from "react";
import { experiences, resume } from "../constants";

const Experience = () => {
  return (
    <section>
      {/* TODO: company and date */}
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="relative grid gap-4 mb-6 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2">
            <a href={experience.link} target="_blank">
              <img
                className="object-cover rounded grayscale"
                src={experience.image}
                alt={experience.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <h4 className="uppercase">{experience.date}</h4>
            <p className="uppercase">{experience.title}</p>
            {/* <p>{experience.description}</p> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
