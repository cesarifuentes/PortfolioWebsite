import React from "react";

const CardImage = ({ image, alt, link }) => {
  return (
    <>
      <div className="row-span-2 sm:col-span-3 md:row-span-1 filter-none">
        <a className="filter-none" href={link} target="_blank">
          <img
            className="object-cover duration-300 ease-in-out rounded card grayscale filter-none hover:scale-105"
            src={image}
            alt={alt}
          />
        </a>
      </div>
    </>
  );
};

export default CardImage;
