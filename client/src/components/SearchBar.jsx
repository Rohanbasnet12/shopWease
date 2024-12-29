import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useState(ShopContext);

  const [searchInput, setSearchInput] = useState("");
  const [isClosed, setIsClosed] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(e.target.value);

    setIsClosed(value.length > 0);
  };

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
          value={searchInput}
          onChange={handleInputChange}
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
    </>
  ) : null;
};

export default SearchBar;
