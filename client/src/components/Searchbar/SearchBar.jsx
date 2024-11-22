import React from "react";

const SearchBar = () => {
  return (
    <div
      id="searchBar"
      className="border border-black w-80 flex items-center justify-center gap-3 px-3 rounded-md"
    >
      <input type="text" className="outline-none w-full py-1" />
      <button
        onClick={() => {
          alert("Searching");
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
