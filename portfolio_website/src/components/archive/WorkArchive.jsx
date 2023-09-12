import React from "react";
import { Helmet } from "react-helmet";

import { experiences } from "../../constants";
import { Link } from "react-router-dom";

const WorkArchive = () => {
  return (
    <>
      <Helmet>
        <title>View Full Work History</title>
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
              <h5 className="text-center">&lt;&lt; Return Home &gt;&gt;</h5>
            </Link>
            <h1 className="pb-20 text-center space-btwn-title">
              Work Experience, <em>Archive</em>
            </h1>

            {/* Table */}
            <table className="mx-auto table-auto">
              <thead>
                <tr className="text-left">
                  <th className="px-6 py-3 ">YEAR</th>
                  <th className="px-6 py-3">TITLE</th>
                  <th className="px-6 py-3">COMPANY</th>
                  <th className="px-6 py-3 ">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                {experiences.map((experience) => (
                  <tr>
                    <td className="px-6 py-4 ">{experience.date}</td>
                    <td className="px-6 py-4 ">{experience.title}</td>
                    <td className="px-6 py-4">{experience.company}</td>
                    <td className="px-6 py-4">{experience.description}</td>
                  </tr>
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
