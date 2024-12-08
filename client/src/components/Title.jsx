import React from "react";

const Title = ({ title, description }) => {
  return (
    <div
      id="title"
      className="my-10"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <h1
        className="uppercase text-center text-lg sm:text-2xl font-bold flex items-center justify-center gap-3"
        style={{ color: "#E07B39" }}
      >
        {title}{" "}
        <span
          className="w-[30px] sm:w-[60px] h-[2px] inline-block"
          style={{ background: "#B6A28E" }}
        ></span>
      </h1>
      <p className="text-center text-xs font-normal text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default Title;
