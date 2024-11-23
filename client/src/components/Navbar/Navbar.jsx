import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./menuItems.css";

const Navbar = () => {
  const menuItems = ["Home", "Collection", "About", "Contact"];

  return (
    <nav className="w-full py-3 px-4 sticky top-0 left-0 z-50 bg-[#B6A28E]/20 shadow-xl">
      <div
        id="nav-upperSeaction-wrapper"
        className="flex items-center justify-between pb-3"
      >
        <div id="nav-head" style={{ fontFamily: `"Courgette", cursive` }}>
          <h1 className="text-xl font-bold cursor-pointer">
            shopWease<span className="text-orange-600">.</span>
          </h1>
        </div>

        {/* {Seach Bar} */}
        <SearchBar />

        <div id="nav-btn" className="flex items-center justify-center gap-8">
          <div
            id="cart-Btn"
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            <i className="fa-regular fa-envelope text-lg leading-3 group-hover:text-green-500"></i>
            <span className="text-xs text-slate-700">Cart</span>
          </div>
          <div
            id="favourite-Btn"
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            <i className="fa-regular fa-heart text-lg leading-3 group-hover:text-red-500"></i>
            <span className="text-xs text-slate-700">Favourite</span>
          </div>

          <ProfileCard />
        </div>
      </div>

      <div
        id="nav-lowerSeaction-wrapper"
        className="w-full flex items-center justify-start pb-3"
      >
        <div id="nav-menu" style={{ fontFamily: `"Roboto", sans-serif` }}>
          <ul className="flex items-center justify-center gap-8">
            {menuItems.map((menu, index) => (
              <li key={index} className="cursor-pointer">
                {menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
