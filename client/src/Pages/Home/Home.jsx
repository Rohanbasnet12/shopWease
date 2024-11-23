import React from "react";
import homeIMG from "../../assets/homeIMG.jpeg";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#B6A28E]"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="home-wrapper container mx-auto pt-20">
        <div id="img_wrapper" className="border-2 rounded-xl">
          <img src={homeIMG} alt="Home image" />
        </div>
        {/* Button */}
        <button className="border bg-white rounded-3xl px-6 py-2 text-md font-medium shadow-lg hover:bg-[#E07B39] hover:text-white transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Home;
