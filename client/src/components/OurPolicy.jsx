import React from "react";
import Title from "./Title";
import QualityIcon from "../assets/frontend_assets/quality_icon.png";
import SupportIcon from "../assets/frontend_assets/support_img.png";
import ExchangeIcon from "../assets/frontend_assets/exchange_icon.png";

const OurPolicy = () => {
  return (
    <div
      id="ourpolicy"
      className="overflow-hidden py-32"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div
        id="service-wrapper"
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-10"
      >
        <div className="box1 flex flex-col items-center justify-center">
          <img
            src={ExchangeIcon}
            alt="Quality icon"
            className="w-10 h-10 mb-3"
          />
          <h2 className="text-lg font-medium text-slate-800">
            Easy Exchange Policy
          </h2>
          <p className="text-sm text-gray-400">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="box2 flex flex-col items-center justify-center">
          <img
            src={QualityIcon}
            alt="Quality icon"
            className="w-10 h-10 mb-3"
          />
          <h2 className="text-lg font-medium text-slate-800">
            7 Days Return Policy
          </h2>
          <p className="text-sm text-gray-400">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="box3 flex flex-col items-center justify-center">
          <img
            src={SupportIcon}
            alt="Quality icon"
            className="w-10 h-10 mb-3"
          />
          <h2 className="text-lg font-medium text-slate-800">
            Best customer support
          </h2>
          <p className="text-sm text-gray-400">
            we provide 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
