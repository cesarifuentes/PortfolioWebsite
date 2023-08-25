import React from "react";
import { experiences, resume } from "../constants";

const Experience = () => {
  return (
    <section>
      <h3 className="gradient_text">EXPERIENCE</h3>
      <br />
      {/* company and date */}
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="relative grid gap-4 mb-12 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2">
            <a href={experience.link} target="_blank">
              <img
                className="object-cover rounded"
                src={experience.image}
                alt={experience.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <h4 className="text-white">{experience.title}</h4>
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
      {/* Download Link */}
      <a href={resume[0].file} download>
        <p className="underline underline-offset-4 ">
          Download resume (PDF 896kb)
        </p>
      </a>
    </section>
  );
};

export default Experience;
