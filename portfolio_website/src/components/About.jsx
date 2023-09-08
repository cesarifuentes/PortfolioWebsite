import React from "react";

const About = () => {
  return (
    <section className="section-mb">
      {/* Title */}
      <h3 className="space-btwn-title">About Me</h3>
      {/* opacity-100 */}
      {/* Paragraphs */}

      <div className="text-center sm:text-justify">
        <p>
          This website serves as a curated showcase of my achievements
          throughout my career as a software developer. Each project represents
          a meaningful milestone in my professional journey. These endeavors are
          meticulously crafted, resembling finely crafted pieces of art in their
          attention to detail and aesthetic quality.
        </p>
        <br />
      </div>
      <div className="text-center sm:text-justify">
        <p>
          My foray into the realm of art commenced during my high school years,
          during which I pursued courses in{" "}
          <span className="!opacity-100">art</span> and{" "}
          <span className="!opacity-100">graphic design</span>, providing me
          with a strong foundation in artistic expression. Subsequently, I
          pursued a{" "}
          <span className="opacity-100">
            Bachelor's degree in Computer Science
          </span>{" "}
          at Texas A&M University, where I had the opportunity to delve into the
          worlds of <span className="opacity-100">software development</span>{" "}
          and <span className="opacity-100">3D graphics</span>.
        </p>
        <br />
      </div>
      <div className="text-center sm:text-justify">
        <p>
          Whether I am engaged in coding, design work, or the conceptualization
          of creative solutions, I infuse each undertaking with a discernible
          artistic sensibility. When I’m not furiously typing at my computer,
          you’ll find me playing Dead by Daylight, dedicating time to volunteer
          for the youth in my community, and creating art.
        </p>
      </div>
    </section>
  );
};

export default About;

// ${index === 0 ? "" : "hidden"}
