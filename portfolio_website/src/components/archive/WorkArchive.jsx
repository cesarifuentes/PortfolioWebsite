import React from "react";
import { Helmet } from "react-helmet";

import { experiences } from "../../constants";
import { Link } from "react-router-dom";
import HoverRow from "../elements/HoverRow";

const WorkArchive = () => {
  return (
    <>
      <Helmet>
        <title>View Full Work History</title>
        <meta name="title" content="View Full Work History" />
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
              <h5 className="text-center hover:opacity-30">
                &lt;&lt; Return Home &gt;&gt;
              </h5>
            </Link>
            <h1 className="pb-10 text-center space-btwn-title">
              Work Experience, <br /> <em>Archive</em>
            </h1>

            {/* Table */}
            <table className="mx-auto table-auto">
              <thead>
                <tr className="text-left">
                  <th className="p-cell ">YEAR</th>
                  <th className="p-cell">TITLE</th>
                  <th className="p-cell">COMPANY</th>
                  <th className="hidden p-cell md:block">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((experience) => (
                  <HoverRow image={experience.image}>
                    <td className="p-cell ">{experience.date}</td>
                    <td className="p-cell ">
                      {experience.title}
                      {experience.isFeatured ? "*" : ""}
                    </td>
                    <td className="p-cell">{experience.company}</td>
                    <td className="hidden p-cell md:block">
                      {experience.description}
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

export default WorkArchive;
