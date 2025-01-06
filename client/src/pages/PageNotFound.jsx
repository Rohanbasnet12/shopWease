import React from "react";
import pageNotFound from "../assets/pageNotFound.png";

const PageNotFound = () => {
  return (
    <div
      id="pageNotFound"
      className="container w-full h-[80vh] m-auto"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="wrapper flex flex-col items-center justify-center w-full h-full">
        <div className="pageNoteFoundImgWrapper">
          <img src={pageNotFound} alt="Page Not Found" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
