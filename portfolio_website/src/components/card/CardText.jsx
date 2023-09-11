import React from "react";

const CardText = ({ children }) => {
  return (
    <>
      <div className="row-span-1 sm:col-span-6">{children}</div>
    </>
  );
};

export default CardText;
