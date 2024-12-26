import React, { useState } from "react";
import "../styles/MenuItems.css";
import { Link, NavLink } from "react-router-dom";
import CartImg from "../assets/frontend_assets/cart_icon.png";
import SearchImg from "../assets/frontend_assets/search_icon.png";
import ProfileImg from "../assets/frontend_assets/profile_icon.png";
import hamBtn from "../assets/frontend_assets/menu_icon.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const menuItems = ["Home", "Collections", "About", "Contact"];
  const [visible, setVisible] = useState(false);

  const handleSearch = () => {
    alert("Searching...");
  };

  return (
    <header>
      <nav className="w-full sticky top-0 left-0 py-7 px-4 sm:px-10 z-[100] flex items-center justify-between">
        <div id="nav-head" style={{ fontFamily: "Courgette, cursive" }}>
          <Link to="/">
            <h1 className="text-2xl font-bold cursor-pointer">
              shopWease<span className="text-orange-600">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav Menu  */}
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
        </div>

        {/* Nav Buttons */}
        <div className="flex gap-4 items-center justify-center">
          <div id="nav-btn" className="flex items-center justify-center gap-6">
            {/* Search Button */}
            <div
              id="search-Btn"
              className="flex flex-col items-center justify-center cursor-pointer group relative"
              onClick={() => handleSearch()}
            >
              <img
                src={SearchImg}
                alt="Search Image"
                aria-label="Search"
                className="leading-3 group-hover:text-green-500 w-5 h-5"
              />
            </div>
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
                alt="Card Image"
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
                alt="profile Image"
                aria-label="Profile"
                className="leading-3 group-hover:text-green-500 w-5 h-5"
              />
            </div>
          </div>

          <div className="ham-btn sm:hidden">
            <img
              src={hamBtn}
              alt="ham burger icon"
              className="w-5 cursor-pointer"
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>

          {/* Side bar for smaller screens */}
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
                    to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                    className="cursor-pointer m-4"
                    onClick={() => setVisible(false)} // Close sidebar on navigation
                  >
                    <li className="uppercase">{menu}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
