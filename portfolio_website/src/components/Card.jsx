import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative grid gap-4 sm:grid-rows-1 sm:grid-cols-8 sm:gap-16 md:gap-4 hover:bg-[#ffffff] p-7 rounded-lg hover:scale-105 transition duration-300">
      {children}
    </div>
  );
};

export default Card;
