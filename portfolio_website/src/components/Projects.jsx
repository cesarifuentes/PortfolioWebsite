import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section>
      <h3>PROJECTS</h3>
      <br />

      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-primary group relative grid  grid-cols-3 "
        >
          {/* IMAGE */}
          <div className="col-span-1">
            <a href={project.link} target="_blank">
              <img
                className="object-cover w-[144px] h-[95px] rounded"
                src={project.image}
                alt={project.title}
              />
            </a>
          </div>
          {/* TEXT */}
          <div className="col-span-2">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
          <br />
        </div>
      ))}
    </section>
  );
};

//     link: "https://www.google.com/",
//     image: space_sim,

export default Projects;
