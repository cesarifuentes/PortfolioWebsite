import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section>
      <h3 className="gradient_text">PROJECTS</h3>
      <br />

      {projects.map((project) => (
        <div
          key={project.id}
          className="relative grid gap-4 mb-12 sm:grid-rows-1 sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          {/*  border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 */}

          {/* IMAGE */}
          <div className="row-span-2 sm:col-span-2">
            <a href={project.link} target="_blank">
              <img
                className="object-cover rounded "
                src={project.image}
                alt={project.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="row-span-1 sm:col-span-6">
            <h4 className="text-white">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

//     link: "https://www.google.com/",
//     image: space_sim,

export default Projects;
