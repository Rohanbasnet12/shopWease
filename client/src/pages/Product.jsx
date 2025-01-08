import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import starIcon from "../assets/frontend_assets/star_icon.png";
import starDullIcon from "../assets/frontend_assets/star_dull_icon.png";
import "../styles/Product.css";

const Product = () => {
  // Fetching productID
  const { productId } = useParams();

  // Fetching all the products from shopContext
  const { products, currency } = useContext(ShopContext);

  // UseState
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div
      id="product"
      className="px-3 md:px-8 lg:px-20 mb-16 mt-24"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <div
        id="product-wrapper"
        className="pt-10 transition-opacity ease-in duration-500 opacity-100"
      >
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => {
                return (
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    key={index}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                    alt="Product Image"
                  />
                );
              })}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={starIcon} alt="Start Icon" className="w-3 5" />
              <img src={starIcon} alt="Start Icon" className="w-3 5" />
              <img src={starIcon} alt="Start Icon" className="w-3 5" />
              <img src={starIcon} alt="Start Icon" className="w-3 5" />
              <img src={starDullIcon} alt="Start Dull Icon" className="w-3 5" />
              <p className="pl-2">(212)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border rounded-md py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button className="uppercase bg-black text-white py-3 px-8 rounded-sm text-sm active:bg-gray-700">
              Add to cart
            </button>
            <hr className="mt-6 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Description review section */}
        <div className="mt-20">
          <div className="flex">
            <p className="border px-5 py-3 text-sm">Description</p>
            <p className="border px-5 py-3 text-sm">Reviews (149)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
