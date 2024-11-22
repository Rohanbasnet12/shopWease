import React from "react";

const ProfileCard = () => {
  return (
    <div id="profileCard">
      <div className="profileCard_wrapper rounded-full w-10 h-10 flex items-center justify-center border-black border overflow-hidden">
        <img src="../src/assets/profile1.webp" alt="Profile Picture" />
      </div>
    </div>
  );
};

export default ProfileCard;
