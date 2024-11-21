import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{ fontFamily: `"Courgette", cursive` }}
      className="border-2 w-full"
    >
      <div id="nav-head">
        <h1 className="text-xl font-bold">
          shopWease<span className="text-orange-600">.</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
