import React from "react";
import { experiences, resume } from "../constants";

const Experience = () => {
  return (
    <section>
      {/* Title */}
      <h3 className="space-btwn-title">Experience</h3>
      {/* Experiences */}
      {/* TODO: company and date */}
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className={`relative grid gap-4 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4 ${
            index === experiences.length - 1 ? "mb-0" : "mb-6"
          }`}
          // className="mb-6 lg:mb-0"
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2 filter-none">
            <a className="filter-none">
              {/* href={experience.link}  target="_blank"*/}
              <img
                className="object-cover transition duration-300 ease-in-out rounded grayscale hover:scale-105 filter-none"
                src={experience.image}
                alt={experience.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <h4 className="mt-5 mb-2 uppercase">{experience.date}</h4>
            <h2 className="leading-5 uppercase">{experience.title}</h2>
            {/* <p>{experience.description}</p> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
