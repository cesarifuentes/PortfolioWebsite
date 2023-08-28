import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section>
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative grid gap-4 mb-6 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2">
            <a href={project.link} target="_blank">
              <img
                className="object-cover border rounded grayscale"
                src={project.image}
                alt={project.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <p className="uppercase">{project.title}</p>
            <h4 className="">{project.description}</h4>
          </div>
        </div>
      ))}
    </section>
  );
};

//     link: "https://www.google.com/",
//     image: space_sim,

export default Projects;
