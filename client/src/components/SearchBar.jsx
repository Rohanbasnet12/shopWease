import { useState } from "react";

const SearchBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      id="searchBar"
      className="flex w-[70vw] sm:w-[400px] lg:w-[500px] xl:w-[500px] items-center justify-center gap-3 px-3 rounded-md bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80"
    >
      <i className="fa-solid fa-magnifying-glass text-slate-800"></i>
      <input
        type="text"
        id="searchBarInput"
        name="searchBarInput"
        className="outline-none w-full py-1 bg-transparent"
        onKeyDown={() => setIsClosed(true)}
      />
      <button
        onClick={() => {
          alert("Searching");
        }}
      >
        <i
          className={`fa-solid fa-xmark text-slate-500 ${
            isClosed ? "flex" : "hidden"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default SearchBar;
