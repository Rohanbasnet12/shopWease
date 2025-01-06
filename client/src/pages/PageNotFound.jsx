import React from "react";

const PageNotFound = () => {
  return (
    <div
      id="pageNotFound"
      className="container w-full h-[80vh] m-auto"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="wrapper flex items-center justify-center w-full h-full">
        <h1 className="text-black text-xl font-medium">
          404 <span className="font-normal">| Page not Found</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
