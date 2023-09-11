import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative grid gap-4 transition duration-300 sm:grid-rows-1 sm:grid-cols-8 sm:gap-16 md:gap-16 ">
      {children}
    </div>
  );
};

export default Card;
