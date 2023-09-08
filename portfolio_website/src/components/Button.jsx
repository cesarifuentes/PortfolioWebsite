import React from "react";

const Button = ({ text, href_ }) => {
  return (
    <>
      <div>
        <a href={href_} download>
          <button class="bg-transparent border-2 border-black pt-3 pb-2 px-4 rounded-full uppercase hover:scale-105">
            <h2 className="">{text}</h2>
          </button>
        </a>
      </div>
    </>
  );
};

export default Button;
