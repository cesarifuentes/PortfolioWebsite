import React from "react";

const CardText = ({ children }) => {
  return (
    <>
      <div className="row-span-1 text-left sm:col-span-5 place-self-center-start">
        {children}
      </div>
    </>
  );
};

export default CardText;
