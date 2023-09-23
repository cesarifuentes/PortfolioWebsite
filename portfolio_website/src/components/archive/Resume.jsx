import React from "react";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>CF | Resume</title>
        <meta name="title" content="View Full Resume" />
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
      </Helmet>

      <div>Resume</div>
    </>
  );
};

export default Resume;
