import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div
      id="newsletter"
      className="w-full pt-10 px-6 md:px-14 lg:px-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div className="newsLetter-wrapper flex flex-col items-center justify-center">
        <h1 className="text-gray-800 text-2xl font-medium text-center">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-400 leading-10 text-center">
          Subscribe us to get the latest collection, get a chance to claim huge
          discount!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full sm:w-3/4 flex items-center gap-3 mx-auto my-6 border pl-6"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 outline-none"
            required
          />
          <button
            className="bg-black text-white uppercase text-xs py-4 px-10 font-medium transition hover:scale-105"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
