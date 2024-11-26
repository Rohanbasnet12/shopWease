import React from "react";
import homeImg from "../assets/homeImg.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen bg-[#B6A28E] pt-10"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="hero-wrapper container mx-auto overflow-hidden relative rounded-3xl">
        {/* {Image} */}
        <div className="img_wrapper h-[80vh] w-full -mt-10 overflow-hidden">
          <img
            src={homeImg}
            alt="Background Home Image"
            className="w-full h-full object-cover scale-x-110"
          />
        </div>

        <div className="info-wrapper w-full lg:px-10 md:p-6 xl:px-12 p-3 flex justify-between items-center absolute bottom-4">
          <div className="flex flex-col w-full gap-3">
            <p className="text-white font-bold text-4xl uppercase">
              shopWease Spring Collections
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="text-xm text-slate-100 font-thin">
                  Find out best spring collection. Offering our best quality
                  production.
                </span>
                <span className="text-xm text-slate-100 font-thin">
                  Only at shopWease
                </span>
              </div>

              <button className="border bg-white rounded-3xl px-6 py-2 text-md font-medium shadow-lg hover:bg-[#E07B39] hover:text-white transition-all">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
