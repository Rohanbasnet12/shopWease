import React from "react";
import Title from "../components/Title";

const Collections = () => {
  return (
    <div
      id="collection"
      className="px-6 md:px-14 lg:px-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <Title
        title={"LATEST COLLECTIONS"}
        description={
          "Discover our latest collections featuring trendy designs, quality craftsmanship, and timeless styles to elevate your wardrobe effortlessly."
        }
      />
      <div
        id="collection-wrapper"
        className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t"
      ></div>
    </div>
  );
};

export default Collections;
