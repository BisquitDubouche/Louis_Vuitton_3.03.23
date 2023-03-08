import { createContext, useState, useEffect, initialState, useContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems !== initialState) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (productObj) => {
    setCartItems([...cartItems, productObj]);
  };

    const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const values = {
    cartItems,

    addToCart,
    removeFromCart
  }
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
