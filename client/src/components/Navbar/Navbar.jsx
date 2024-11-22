import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  const menuItems = ["Home", "Collection", "About", "Contact"];

  return (
    <nav className="border-2 w-full py-3 px-4">
      <div
        id="nav-upperSeaction-wrapper"
        className="flex items-center justify-between border-b-2 pb-3"
      >
        <div id="nav-head" style={{ fontFamily: `"Courgette", cursive` }}>
          <h1 className="text-xl font-bold cursor-pointer">
            shopWease<span className="text-orange-600">.</span>
          </h1>
        </div>

        {/* {Seach Bar} */}
        <SearchBar />

        <div id="nav-btn">
          <ProfileCard />
        </div>
      </div>

      <div id="nav-lowerSeaction-wrapper">
        <div id="nav-menu" style={{ fontFamily: `"Roboto", sans-serif` }}>
          <ul className="flex items-center justify-center gap-5">
            {menuItems.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
