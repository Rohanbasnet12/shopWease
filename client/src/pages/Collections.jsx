import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import DropDownIcon from "../assets/frontend_assets/dropdown_icon.png";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);
  return (
    <div
      id="collection"
      className="px-3 md:px-8 lg:px-20 mb-16"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div
        id="collection-wrapper"
        className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10"
      >
        {/* Filter Functionality */}
        <div id="collectionFilterSection-wrapper" className="min-w-60">
          <p
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            className="uppercase text-xl flex items-center cursor-pointer gap-2 my-10 "
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
            className={`border border-gray-300 pl-5 py-3 mt-20 ${
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
        {/* Card Section */}
        <div id="collectionCardSection-wrapper" className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title title={"All COLLECTIONS"} />
            {/* Product sort */}
            <select className="border-2 border-gray-300 text-sm px-2 h-10 my-10">
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
