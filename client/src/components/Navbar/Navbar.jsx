import React from "react";

const Navbar = () => {
  const menuItems = ["Home", "Collection", "About", "Contact"];

  return (
    <nav className="border-2 w-full flex items-center justify-between py-3 px-4">
      <div id="nav-head" style={{ fontFamily: `"Courgette", cursive` }}>
        <h1 className="text-xl font-bold cursor-pointer">
          shopWease<span className="text-orange-600">.</span>
        </h1>
      </div>

      <div id="nav-menu" style={{ fontFamily: `"Roboto", sans-serif` }}>
        <ul className="flex items-center justify-center gap-4">
          {menuItems.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

      <div id="nav-btn">
        <button>Admin</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
