import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-600 cursor-pointer border-2 border-rose-400/40 shadow-lg shadow-rose-400/20 rounded-xl p-2"
    >
      <div className="overflow-hidden">
        {/* Image */}
        <img
          src={image[0]}
          alt={`${image} image`}
          className="hover:scale-110 transition ease-out rounded-tl-md rounded-tr-md"
        />
      </div>
      {/* Product Description */}
      <div id="product-description" className="flex flex-col items-start pt-4">
        <p className="text-md font-bold leading-4">{name}</p>
        <span className="pt-2 text-sm font-medium">
          {currency} {price}
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
