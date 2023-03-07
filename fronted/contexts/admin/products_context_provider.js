//! THIS CONTEX FOR ADMIN ROOT

import axios from "axios";
import React, {useContext, createContext } from "react";

export const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

const ProductsContextProvider = ({ children }) => {
  
  const PRODUCTS_API = "http://localhost:8000/products";

  const addProduct = (obj) => {
    return axios.post(PRODUCTS_API, obj);
  };

  const values = {
    addProduct,
  };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
