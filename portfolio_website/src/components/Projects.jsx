import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      <h3>PROJECTS</h3>
      <br />
      {projects.map((project) => (
        <div key={project.id} className="bg-primary">
          <div>
            <a href={project.link} target="_blank">
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

//     link: "https://www.google.com/",
//     image: space_sim,

export default Projects;
