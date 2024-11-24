import React from "react";
import homeImg from "../assets/homeImg.webp";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#B6A28E] pt-10"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="home-wrapper container mx-auto overflow-hidden relative rounded-3xl">
        {/* {Image} */}
        <div className="img_wrapper h-[80vh] w-full -mt-10 overflow-hidden">
          <img
            src={homeImg}
            alt="Background Home Image"
            className="w-full h-full object-cover scale-x-150"
          />
        </div>

        {/* {Button} */}
        <button className="border bg-white rounded-3xl px-6 py-2 text-md font-medium shadow-lg hover:bg-[#E07B39] hover:text-white transition-all absolute bottom-10 right-20">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Home;
