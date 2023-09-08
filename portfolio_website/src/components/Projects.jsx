import React from "react";
import { projects } from "../constants";
import recent_tag from "../assets/new.svg";

const Projects = () => {
  return (
    <section>
      {/* Title */}
      <h3 className="text-center space-btwn-title sm:text-left">Projects</h3>
      {/* Projects */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`relative grid gap-4 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4 ${
            index === projects.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
          }`}

          // group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50
        >
          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2">
            <a href={project.link} target="_blank">
              <img
                className="object-cover transition duration-300 ease-in-out rounded project hover:scale-105 "
                src={project.image}
                alt={project.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            {project.isNew ? <img src={recent_tag} alt="new-project" /> : null}
            <h2 className="mt-5 mb-2 uppercase">{project.title}</h2>
            <p className="uppercase">{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
