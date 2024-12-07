import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import DropDownIcon from "../assets/frontend_assets/dropdown_icon.png";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

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
        className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10"
      >
        {/* Filter Functionality */}
        <div className="min-w-60">
          <p
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            className="uppercase my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            Filter
            <img
              className={`h-3 pl-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={DropDownIcon}
              alt="Drop Down Icon"
            />
          </p>
          {/* Filter Category */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 uppercase text-xs font-medium">Categories</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Men"} />
                Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Women"} />
                Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Kids"} />
                Kids
              </p>
            </div>
          </div>
          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 uppercase text-xs font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Topwear"} />
                Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Bottomwear"} />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Winterwear"} />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
