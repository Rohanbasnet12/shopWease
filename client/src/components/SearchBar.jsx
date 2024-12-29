import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [isClosed, setIsClosed] = useState(false);

  const handleSubmit = () => {};

  const clearInput = () => {
    setSearchInput("");
    setIsClosed(false);
  };

  return showSearch ? (
    <>
      <div
        id="searchBar"
        className="flex w-[70vw] sm:w-[400px] lg:w-[500px] xl:w-[500px] items-center justify-center gap-3 px-3 rounded-lg bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80"
      >
        <i className="fa-solid fa-magnifying-glass text-slate-800"></i>
        <input
          type="text"
          id="searchBarInput"
          name="searchBarInput"
          className="outline-none w-full py-1 bg-transparent"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={() => setIsClosed(true)}
        />
        <button
          onClick={clearInput}
          className={`${
            isClosed ? "flex" : "hidden"
          } items-center justify-center`}
        >
          <i className="fa-solid fa-xmark text-slate-500"></i>
        </button>
      </div>
      <div className="closeSearch-btn flex items-center justify-center rounded-full bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80 ml-4 w-10 h-10 transition-all ease-linear hover:scale-110 cursor-pointer">
        <i className="fa-solid fa-xmark text-xl font-bold" />
      </div>
    </>
  ) : null;
};

export default SearchBar;
