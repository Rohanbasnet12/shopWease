const SearchBar = () => {
  return (
    <div
      id="searchBar"
      className="flex w-80 items-center justify-center gap-3 px-3 rounded-md bg-[#B6A28E]/25 shadow-md border border-[#B6A28E]/80"
    >
      <input
        type="text"
        id="searchBarInput"
        name="searchBarInput"
        className="outline-none w-full py-1 bg-transparent"
      />
      <button
        onClick={() => {
          alert("Searching");
        }}
      >
        <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
      </button>
    </div>
  );
};

export default SearchBar;
