import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import "../styles/MenuItems.css";
import { NavLink } from "react-router-dom";
import CartImg from "../assets/frontend_assets/cart_icon.png";
import hamBtn from "../assets/frontend_assets/menu_icon.png";

const Navbar = () => {
  const menuItems = ["Home", "Collections", "About", "Contact"];
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <nav className="w-full sticky top-0 left-0 py-3 px-4 z-[100] bg-[#B6A28E]/10 shadow-xl">
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
              <span className="text-xs text-slate-700">Cart</span>
            </div>

            <ProfileCard />
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
        </div>

        <div
          id="nav-lowerSeaction-wrapper"
          className="w-full flex items-center justify-start pb-3"
        >
          <div id="nav-menu" style={{ fontFamily: `"Roboto", sans-serif` }}>
            <ul className="flex items-center justify-center gap-8">
              {menuItems.map((menu, index) => (
                <NavLink
                  key={index}
                  to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                  className="cursor-pointer"
                >
                  <li className="uppercase">{menu}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Side bar for smaller screens  */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          {/* <div className="close-btn">
            <span>
              <i
                className="fa-solid fa-chevron-up -rotate-90 text-xl text-slate-500 rounded-full flex items-center justify-center m-4 hover:text-slate-950 cursor-pointer"
                onClick={() => {
                  setVisible(false);
                }}
              />
              Back
            </span>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
