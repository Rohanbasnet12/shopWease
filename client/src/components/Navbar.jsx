import React, { useState, useEffect } from "react";
import "../styles/MenuItems.css";
import { Link, NavLink } from "react-router-dom";
import CartImg from "../assets/frontend_assets/cart_icon.png";
import ProfileImg from "../assets/frontend_assets/profile_icon.png";
import SearchImg from "../assets/frontend_assets/search_icon.png";
import hamBtn from "../assets/frontend_assets/menu_icon.png";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const menuItems = ["Home", "Collections", "About", "Contact"];
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <nav className="sticky top-0 left-0 flex items-center justify-between py-6 px-7">
        {/* Nav Header */}
        <div id="nav-head" style={{ fontFamily: "Courgette, cursive" }}>
          <Link to="/">
            <h1 className="text-2xl font-bold cursor-pointer">
              shopWease<span className="text-orange-600">.</span>
            </h1>
          </Link>
        </div>

        {isWideScreen && (
          <div id="nav-searchBar">
            <SearchBar />
          </div>
        )}

        {/* Nav Buttons */}
        <div id="nav-btns" className="flex items-center justify-center gap-6">
          {/* Conditionally render the search icon for narrow screens */}
          {!isWideScreen && (
            <div
              id="search-Btn"
              className="flex flex-col items-center justify-center cursor-pointer group relative"
            >
              <img
                src={SearchImg}
                alt="Search Icon"
                aria-label="Search"
                className="leading-3 group-hover:text-green-500 w-5 h-5"
              />
            </div>
          )}

          {/* Cart Button */}
          <div
            id="cart-Btn"
            className="flex flex-col items-center justify-center cursor-pointer group relative"
          >
            <span className="text-[8px] absolute -top-[4px] -right-[7px] text-white bg-slate-900 flex items-center justify-center rounded-full w-4 h-4">
              10
            </span>
            <img
              src={CartImg}
              alt="Cart Icon"
              aria-label="Cart"
              className="leading-3 group-hover:text-green-500 w-5 h-5"
            />
          </div>

          {/* Profile Button */}
          <div
            id="profile-Btn"
            className="flex flex-col items-center justify-center cursor-pointer group relative"
          >
            <img
              src={ProfileImg}
              alt="Profile Icon"
              aria-label="Profile"
              className="leading-3 group-hover:text-green-500 w-5 h-5"
            />
          </div>

          {/* Hamburger Button */}
          <div className="ham-btn">
            <img
              src={hamBtn}
              alt="Hamburger Icon"
              className="w-5 cursor-pointer"
            />
          </div>
        </div>

        {/* Nav Menu 
        <div
          id="nav-menu"
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="hidden sm:flex lg:flex md:flex xl:flex"
        >
          <ul className="flex items-center justify-center gap-8">
            {menuItems.map((menu, index) => (
              <NavLink
                key={index}
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className="cursor-pointer"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <li className="uppercase">{menu}</li>
              </NavLink>
            ))}
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
