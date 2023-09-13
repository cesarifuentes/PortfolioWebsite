import React from "react";

const HoverRow = ({ image, children }) => {
  return (
    <>
      <tr className="hoverable-text ">{children}</tr>
      <img className="appearing-image" src={image} />
    </>
  );
};

export default HoverRow;
