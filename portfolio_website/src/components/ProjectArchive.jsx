import React from "react";
import { Helmet } from "react-helmet";

import { projects } from "../constants";
import recent_tag from "../assets/new.svg";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import { Link } from "react-router-dom";

const ProjectArchive = () => {
  return (
    <>
      <Helmet>
        <title>View Full Project History</title>
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
      </Helmet>

      <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
        <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto ">
          {/* create a link back */}
          <section className="py-20">
            <Link to={"/"}>
              <h5 className="text-center link-to-full-display">
                WWW.CESARFUENTES.COM
              </h5>
            </Link>

            {/* Title */}
            <h4 className="pb-20 text-center space-btwn-title">Projects</h4>
            {/* Projects */}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="mb-20 lg:mb-12"

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
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectArchive;
