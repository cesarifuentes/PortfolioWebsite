import React from "react";
import { projects } from "../../constants";
import recent_tag from "../../assets/new.svg";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";

const Projects = () => {
  return (
    <section>
      {/* Title */}
      <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
        Projects
      </h4>
      {/* Projects */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="mb-20 lg:mb-5"

          // group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50
        >
          <Card>
            <CardImage
              image={project.image}
              alt={`${project.alt}`}
              link={project.link}
            ></CardImage>

            <CardText>
              {project.isNew ? (
                <img
                  src={recent_tag}
                  alt="Icon to indicate this is a newer project"
                />
              ) : null}
              <h5 className="mt-5 mb-2 uppercase">{project.title}</h5>
              <p className="uppercase">{project.description}</p>
            </CardText>
          </Card>
        </div>
      ))}

      <Link to={"/project_archive"}>
        <h3 className="link-to-full-display">(See Full Project List)</h3>
      </Link>
    </section>
  );
};

export default Projects;
// className={`${
//   index === projects.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
// }`}
