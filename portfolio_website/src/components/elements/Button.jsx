import React from "react";

const Button = ({ text, href_ }) => {
  return (
    <>
      <div>
        <a href={href_} download>
          <button class="bg-transparent border-2 border-color pt-3 pb-2 px-4 rounded-full uppercase hover:scale-105">
            <h5 className="">{text}</h5>
          </button>
        </a>
      </div>
    </>
  );
};

export default Button;
