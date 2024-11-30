import React from "react";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div
      id="ourpolicy"
      className="overflow-hidden py-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <Title
        title={"Our Policy"}
        description={
          "At shopWease, we are committed to transparency, privacy, and security."
        }
      />
      <div
        id="ourpolicy-wrapper"
        className=" w-[113%] h-[80vh] px-16 transform -translate-x-8 sm:-translate-x-10 -rotate-6 flex items-center justify-center"
        style={{ background: "#B6A28E" }}
      >
        <div id="service-wrapper" className="w-full rotate-6 grid grid-cols-3">
          <div className="box1">hello</div>
          <div className="box2">hello</div>
          <div className="box3">hello</div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
