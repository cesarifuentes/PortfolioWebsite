import React from "react";
import { experiences, resume } from "../constants";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section className="section-mb">
      {/* Title */}
      <h4 className="text-center space-btwn-title sm:text-left">Experience</h4>
      {/* Experiences */}
      {/* TODO: company and date */}
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className={`relative grid gap-4 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4 ${
            index === experiences.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
          }`}
          // className="mb-6 lg:mb-0"
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2 filter-none">
            <a className="filter-none">
              {/* href={experience.link}  target="_blank"*/}
              <img
                className="object-cover transition duration-300 ease-in-out rounded card grayscale hover:scale-105 filter-none"
                src={experience.image}
                alt={`ID Card Picture of me when I was at ${experience.company}`}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <h6 className="mt-5 mb-2 uppercase">{experience.date}</h6>
            <h5 className="leading-5 uppercase">{experience.title}</h5>
            {/* <p>{experience.description}</p> */}
          </div>
        </div>
      ))}

      <Link to={"/work_archive"}>
        <h5 className="link-to-full-display">See Full Work Experience</h5>
      </Link>
    </section>
  );
};

export default Experience;
