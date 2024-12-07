import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);
  return (
    <section
      id="footer"
      class="py-10 bg-gray-50 sm:pt-16 lg:pt-24"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="footer-wraper">
          <div
            id="footer-top"
            className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14"
          >
            <div style={{ fontFamily: "Courgette, cursive" }}>
              <Link to="/">
                <h1 className="text-2xl font-bold cursor-pointer pb-6">
                  shopWease<span className="text-orange-600">.</span>
                </h1>
              </Link>
              <p
                className="text-sm text-gray-600 md:w-2/3"
                style={{ fontFamily: `"Roboto", sans-serif` }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <h2 className="uppercase text-slate-950 text-extrabold text-2xl pb-6">
                company
              </h2>
              <li className="flex flex-col items-start list-none text-sm gap-1 text-gray-500">
                <span>Home</span>
                <span>About us</span>
                <span>Delivery</span>
                <span>Privacy policy</span>
              </li>
            </div>
            <div>
              <h2 className="uppercase text-slate-950 text-extrabold text-2xl pb-6">
                Get in touch
              </h2>
              <li className="flex flex-col items-start list-none text-sm gap-1 text-gray-500">
                <span>+1-000-000-0000</span>
                <Link
                  to="https://mail.google.com/mail/u/0/"
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <p>email</p>
                </Link>
                <Link
                  to="https://www.instagram.com/r__basnet/"
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                  <p>instagram</p>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/rohan-basnet-131841121/"
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <p>LinkedIn</p>
                </Link>
              </li>
            </div>
          </div>
          <div id="footer-bottom">
            <hr class="mt-16 mb-10 border-gray-200" />

            <p class="text-sm text-center text-gray-600">
              © Copyright {currentYear}, All Rights Reserved by Rohan Basnet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
