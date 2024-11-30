import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);
  return (
    <div
      id="footer"
      className="flex items-center justify-center mt-14 py-8 px-3 md:px-8 lg:px-12 border-t-2"
    >
      <h1>
        Copyright ©<span> {currentYear} </span>
        Rohan Basnet - All Right Reserved.
      </h1>
    </div>
  );
};

export default Footer;
