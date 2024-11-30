import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);
  return (
    <section id="footer" class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="footer-wraper">
          <h1>Footer</h1>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">
          © Copyright {currentYear}, All Rights Reserved by Rohan Basnet
        </p>
      </div>
    </section>
  );
};

export default Footer;
