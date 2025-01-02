import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import homeImg from "../assets/homeImg.png";
import { Link } from "react-router-dom";
import "../styles/Responsive.css";

const Hero = () => {
  const descriptionRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline for staggered animations
    const tl = gsap.timeline();

    tl.from(descriptionRef.current, {
      x: -200, // Move from left
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(
        subTextRef.current,
        {
          x: -200, // Move from left
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1" // Overlap the animation by 1 second
      )
      .from(
        buttonRef.current,
        {
          x: 0, // Move from left
          opacity: 0, // Start with invisible
          duration: 1, // Duration of animation
          ease: "power2.out", // Smooth easing
          onStart: () => {
            buttonRef.current.style.opacity = 0; // Ensure it starts at opacity 0
          },
          onComplete: () => {
            buttonRef.current.style.opacity = 1; // Ensure it ends at full opacity
          },
        },
        "-=1" // Overlap the animation by 0.8 seconds
      );
  }, []);

  return (
    <div
      id="hero"
      className="w-full h-screen bg-[#B6A28E] pt-10 mt-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="hero-wrapper container mx-auto overflow-hidden relative sm:rounded-3xl lg:rounded-3xl xl:rounded-3xl">
        {/* {Image} */}
        <div className="img_wrapper h-[80vh] w-full -mt-10 overflow-hidden relative z-10">
          <img
            src={homeImg}
            alt="Background Home Image"
            className="w-full h-full object-cover scale-x-110"
          />
        </div>

        <div className="info-wrapper w-full lg:px-10 md:p-6 xl:px-12 p-3 flex justify-between items-center absolute bottom-4 z-20">
          <div className="w-full flex flex-col items-start gap-4 justify-between sm:flex-row sm:items-end">
            <div
              className="shop-description-wrapper"
              ref={descriptionRef} // Attach ref to animate this text
            >
              <p className="text-white font-bold text-2xl sm:text-4xl uppercase">
                shopWease Spring Collections
              </p>

              <div
                className="flex items-center justify-between"
                ref={subTextRef} // Attach ref to animate the subtext
              >
                <div className="flex flex-col items-start">
                  <span className="text-xs sm:text-base text-slate-100 font-thin">
                    Find out best spring collection. Offering our best quality
                    production.
                  </span>
                  <span className="text-xs sm:text-base text-slate-100 font-thin">
                    Only at shopWease
                  </span>
                </div>
              </div>
            </div>
            <Link
              to="/collections"
              className="w-[120px] border bg-white rounded-3xl py-2 text-md font-medium shadow-lg hover:bg-[#E07B39] hover:text-white transition-all flex items-center justify-center"
              ref={buttonRef} // Attach ref to animate the button
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
