import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ShopContext);

  return (
    <>
      <div
        id="searchBar"
        className="flex w-[60vw] sm:w-[300px] lg:w-[400px] xl:w-[500px] items-center justify-center gap-3 px-3 rounded-lg bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80"
      >
        <input
          type="text"
          id="searchBarInput"
          name="searchBarInput"
          className="outline-none w-full py-1 bg-transparent"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass text-slate-800"></i>
      </div>
    </>
  );
};

export default SearchBar;
