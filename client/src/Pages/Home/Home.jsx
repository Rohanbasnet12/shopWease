import React from "react";
import homeIMG from "../../assets/homeIMG.jpeg";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#B6A28E]">
      <div className="home-wrapper container mx-auto pt-20">
        <div id="img_wrapper" className="border-2 rounded-xl">
          <img src={homeIMG} alt="Home image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
