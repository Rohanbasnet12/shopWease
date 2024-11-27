import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

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
