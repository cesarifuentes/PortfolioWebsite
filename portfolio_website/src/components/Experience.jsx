import React from "react";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section>
      <h3>EXPERIENCE</h3>
      <br />

      {/* company and date */}

      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="bg-primary group relative grid  grid-cols-3 "
        >
          {/* IMAGE */}
          <div className="col-span-1">
            <a href={experience.link} target="_blank">
              <img
                className="object-cover w-[144px] h-[95px] rounded"
                src={experience.image}
                alt={experience.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="col-span-2">
            <h4>{experience.title}</h4>
            <p>{experience.description}</p>
          </div>
          <br />
        </div>
      ))}
    </section>
  );
};

export default Experience;
