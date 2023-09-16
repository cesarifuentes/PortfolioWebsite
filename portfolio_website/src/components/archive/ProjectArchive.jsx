import React from "react";
import { Helmet } from "react-helmet";

import { projects } from "../../constants";
// import recent_tag from "../assets/new.svg";
import Card from "../card/Card";
import CardImage from "../card/Card";
import CardText from "../card/CardText";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import HoverRow from "../elements/HoverRow";

const ProjectArchive = () => {
  return (
    <>
      <Helmet>
        <title>CF | Project Archive</title>
        <meta name="title" content="View Full Project History" />
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
      </Helmet>

      <div className="container mx-auto mt-10 sm:mt-15 lg:mt-0 sm:max-w-full sm:mx-0 xl:px-10 ">
        <div className="mx-8 lg:mx-10 lg:flex lg:flex-row lg:gap-20 lg:justify-between xl:container xl:mx-auto ">
          {/* create a link back */}
          <section className="py-20">
            {/* Title */}
            <Link to={"/"}>
              <h5 className="mb-3 text-center hover:opacity-30">
                (Return Home)
              </h5>
            </Link>
            <h1 className="pb-10 text-center space-btwn-title">
              Projects, <em>Archive</em>
            </h1>

            {/* Table */}
            <table className="mx-auto table-auto">
              <thead>
                <tr className="text-left">
                  <th className="hidden p-cell sm:block">YEAR</th>
                  <th className="p-cell">PROJECT</th>
                  <th className="hidden p-cell md:block">DESCRIPTION</th>
                  <th className=" p-cell">TOOLS</th>
                  <th className="p-cell ">LINK</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <HoverRow image={project.image}>
                    <td className="hidden p-cell sm:block">{project.year}</td>
                    <td className="p-cell">
                      {project.title}
                      {project.isFeatured ? "*" : ""}
                    </td>
                    <td className="hidden p-cell md:block">
                      {project.description}
                    </td>
                    <td className=" p-cell">{project.tools.join(", ")}</td>
                    <td className="p-cell ">
                      <a href={project.link}>{project.link_title}</a>
                    </td>
                  </HoverRow>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectArchive;

// {/* {project.tools[0]} */}
// <div className="md:block">

//   {/* {project.tools.map(
//     (tool, index) => project.tools[index] + " "
//   )} */}
// </div>
