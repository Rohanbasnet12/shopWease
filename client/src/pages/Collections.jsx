import React, { useContext, useEffect, useMemo, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import DropDownIcon from "../assets/frontend_assets/dropdown_icon.png";
import ProductItem from "../components/ProductItem";
import debounce from "lodash.debounce";

const Collections = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  // Debounced filter function
  const debouncedFilter = useMemo(() => {
    return debounce(() => applyFilter(), 400);
  }, [category, subCategory, search, products]);

  const applyFilter = () => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const sortProduct = () => {
    let sorted = [...filteredProducts];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setFilteredProducts(sorted);
  };

  // Apply debounced filter when category, subCategory, or search changes
  useEffect(() => {
    debouncedFilter();
  }, [category, subCategory, search, products, debouncedFilter]);

  // Apply sort when sortType changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div
      id="collection"
      className="px-3 md:px-8 lg:px-20 mb-16 mt-20"
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
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
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
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
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
            <select
              onChange={(e) => {
                setSortType(e.target.value);
              }}
              className="border-2 border-gray-300 text-sm px-2 h-10 my-10"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
            {filteredProducts.map((item, index) => (
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
