import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(ShopContext);
  const [isClear, setIsClear] = useState(false);

  return (
    <>
      <div
        id="searchBar"
        className="flex w-[65vw] sm:w-[300px] lg:w-[400px] xl:w-[500px] items-center justify-center gap-3 px-3 rounded-lg bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80"
      >
        <i className="fa-solid fa-magnifying-glass text-slate-800"></i>
        <input
          type="text"
          id="searchBarInput"
          name="searchBarInput"
          className="outline-none w-full py-1 pl-2 bg-transparent border-l-2 border-[#B6A28E]/80"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isClear && <i className="fa-solid fa-xmark text-slate-800" />}
      </div>
    </>
  );
};

export default SearchBar;
