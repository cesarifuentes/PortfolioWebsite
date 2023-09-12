import React from "react";

const HoverImage = ({ text, image }) => {
  return (
    <>
      <span className="font-bold hoverable-text">{text}</span>
      <img className="appearing-image" src={image} />
    </>
  );
};

export default HoverImage;
