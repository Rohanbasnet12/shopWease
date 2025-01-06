import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  // Fetching productID
  const { productId } = useParams();

  // Fetching all the products from shopContext
  const { products } = useContext(ShopContext);

  // UseState
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

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
