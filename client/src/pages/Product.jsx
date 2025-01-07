import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import starIcon from "../assets/frontend_assets/star_icon.png";
import starDullIcon from "../assets/frontend_assets/star_dull_icon.png";

const Product = () => {
  // Fetching productID
  const { productId } = useParams();

  // Fetching all the products from shopContext
  const { products, currency } = useContext(ShopContext);

  // UseState
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

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
            <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
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
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
