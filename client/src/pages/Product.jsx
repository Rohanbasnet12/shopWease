import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Fetching productID
  const { productId } = useParams();
  console.log("Product ID:", productId);

  return (
    <div
      id="product"
      className="px-3 md:px-8 lg:px-20 mb-16 mt-20"
      style={{ fontFamily: `"Roboto", sans-serif` }}
    >
      <h1>Product</h1>
    </div>
  );
};

export default Product;
