import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div>
      <Title
        title={"LATEST COLLECTIONS"}
        description={
          "Discover our latest collections featuring trendy designs, quality craftsmanship, and timeless styles to elevate your wardrobe effortlessly."
        }
      />
    </div>
  );
};

export default LatestCollection;
