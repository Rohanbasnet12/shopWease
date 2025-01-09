import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const deliveryFee = "10";
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (productId, productSize) => {
    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      if (cartData[productId][productSize]) {
        cartData[productId][productSize] += 1;
      } else {
        cartData[productId][productSize] = 1;
      }
    } else {
      cartData[productId] = { [productSize]: 1 };
    }
    setCartItems(cartData);
  };

  useState(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
