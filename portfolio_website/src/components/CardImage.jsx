import React from "react";

const CardImage = ({ image, alt, link }) => {
  return (
    <>
      <div className="row-span-2 sm:col-span-2 filter-none">
        <a className="filter-none" href={link} target="_blank">
          <img
            className="object-cover ease-in-out rounded card grayscale filter-none"
            src={image}
            alt={alt}
          />
        </a>
      </div>
    </>
  );
};

export default CardImage;
