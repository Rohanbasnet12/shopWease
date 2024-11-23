import React from "react";

const ProfileCard = () => {
  return (
    <div id="profileCard">
      <div className="profileCard_wrapper rounded-full w-10 h-10 flex items-center justify-center border-black border overflow-hidden cursor-pointer hover:scale-110">
        <img
          src="../src/assets/profile1.webp"
          alt="Profile Picture"
          className="scale-125"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
