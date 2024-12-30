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

  const [isSearch, setIsSearch] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSearchBarVisibility = () => {
    setIsSearch(true);
  };

  const handleSearchBarVisibilityClose = () => {
    setIsSearch(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 645);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuVisibilty = () => {};

  return (
    <header className="overflow-hidden">
      {isSearch ? (
        <div className="searchBar-wrapper py-6 px-7 flex items-center justify-between transition-all duration-700 ease-out relative ">
          <button
            id="goBack"
            onClick={() => handleSearchBarVisibilityClose()}
            className="hover:scale-125"
          >
            <i className="fa-solid fa-arrow-left font-bold text-xl"></i>
          </button>
          <SearchBar />
        </div>
      ) : (
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
                onClick={() => handleSearchBarVisibility()}
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

          {/* Nav Menu  */}
          <div
            id="mobile-view-menu"
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ease-out ${
              visible ? "w-full h-[100vh]" : "w-0"
            }`}
          >
            <div className="close-btn">
              <span
                className="inline-block m-4 cursor-pointer text-xl font-medium text-slate-600 hover:text-slate-950"
                onClick={() => {
                  setVisible(false);
                }}
              >
                <i className="fa-solid fa-chevron-up -rotate-90 px-3" />
                Back
              </span>
            </div>

            <div className="menu-items-smallerWidth">
              <ul className="flex flex-col items-start gap-4">
                {menuItems.map((menu, index) => (
                  <NavLink
                    key={index}
                    to={`menu === "Home" ? "/" : /${menu.toLowerCase()}`}
                    className="cursor-pointer m-4"
                    onClick={() => setVisible(false)} // Close sidebar on navigation
                  >
                    <li className="uppercase">{menu}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
