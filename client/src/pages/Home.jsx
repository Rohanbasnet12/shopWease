import React from "react";
import homeImg from "../assets/homeImg.webp";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#B6A28E] pt-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="home-wrapper container mx-auto overflow-hidden relative h-[80vh] rounded-3xl">
        {/* {Image} */}
        <div className="img_wrapper">
          <img
            src={homeImg}
            alt="Background Home Image"
            className="w-full scale-y-150 transform origin-bottom -translate-y-40"
          />
        </div>

        {/* {Button} */}
        <button className="border bg-white rounded-3xl px-6 py-2 text-md font-medium shadow-lg hover:bg-[#E07B39] hover:text-white transition-all absolute bottom-10 right-10">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Home;
