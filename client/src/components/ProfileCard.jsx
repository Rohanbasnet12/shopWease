import React from "react";
import "../styles/DropDown.css";

const ProfileCard = () => {
  return (
    <div id="profileCard" className="relative">
      <div className="profileCard_wrapper rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border-black border overflow-hidden cursor-pointer hover:scale-110">
        <img
          src="../src/assets/profile1.webp"
          alt="Profile Picture"
          className="scale-125"
        />
      </div>
      <div
        id="dropDown_wrapper"
        className="absolute mt-4 bg-gray-200 right-0 rounded-md w-40 py-2 px-3 flex flex-col gap-3 z-[99]"
      >
        <h2 className="border-b border-b-gray-950 pb-2 font-medium text-lg">
          TestUser
        </h2>
        <p className="cursor-pointer text-slate-500 hover:text-black flex items-start gap-5">
          <span>
            <i className="fa-regular fa-user"></i>
          </span>
          My Profile
        </p>
        <p className="cursor-pointer text-slate-500 hover:text-black flex items-start gap-5">
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          Orders
        </p>
        <p className="cursor-pointer text-slate-500 hover:text-black flex items-start gap-5">
          <span>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </span>
          Logout
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
