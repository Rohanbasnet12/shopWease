import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch } = useContext(ShopContext);
  const [isClear, setIsClear] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Show or hide the clear button based on input length
    setIsClear(value.length > 0);

    // Redirect to /collection if not already there
    if (location.pathname !== "/collections") {
      navigate(`/collections?search=${encodeURIComponent(value)}`);
    }
  };

  const clearInput = () => {
    setSearch("");
    setIsClear(false); // Hide the clear button
  };

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
          className="outline-none w-full py-1 pl-2 bg-transparent border-l border-[#B6A28E]/80"
          placeholder="search..."
          value={search}
          onChange={handleInputChange}
        />
        {isClear && (
          <i
            className="fa-solid fa-xmark text-slate-800 cursor-pointer"
            onClick={clearInput}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
