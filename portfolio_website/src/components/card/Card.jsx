import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ children }) => {
  AOS.init();

  return (
    <div
      className="relative grid gap-4 transition duration-300 sm:grid-rows-1 sm:grid-cols-8 sm:gap-16 md:gap-16 "
      data-aos="fade-left"
      data-aos-duration="600"
    >
      {children}
    </div>
  );
};

export default Card;
