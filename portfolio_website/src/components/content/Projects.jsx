import React from "react";
import { projects } from "../../constants";
import recent_tag from "../../assets/new.svg";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";

import ProjectLink from "../elements/ProjectLink";

const Projects = () => {
  return (
    <section className="home-section">
      {/* Title */}
      <h4 className="text-center space-btwn-title sm:text-left lg:hidden">
        Featured Projects
      </h4>
      {/* Projects */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="mb-20 lg:mb-10"
          // group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50
        >
          {project.isFeatured ? (
            <Card>
              <CardImage
                image={project.image}
                alt={`${project.alt}`}
              ></CardImage>

              <CardText>
                <h5 className="">{project.title}</h5>
                <p className="mt-2">{project.description}</p>

                <ProjectLink
                  link={project.link}
                  title={project.link_title}
                ></ProjectLink>
              </CardText>
            </Card>
          ) : null}{" "}
        </div>
      ))}

      <Card>
        <CardImage></CardImage>
        <CardText>
          <Link to={"/project_archive"}>
            <h3 className="link-to-full-display hover:opacity-30">
              (All Projects)
            </h3>
          </Link>
        </CardText>
      </Card>
    </section>
  );
};

export default Projects;
// className={`${
//   index === projects.length - 1 ? "mb-0" : "mb-20 lg:mb-6"
// }`}
{
  /* {project.isNew ? (
                <img
                  src={recent_tag}
                  alt="Icon to indicate this is a newer project"
                />
              ) : null} */
}
