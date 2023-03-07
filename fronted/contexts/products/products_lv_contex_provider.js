import axios from "axios";
import React, { useContext, createContext, useReducer } from "react";

export const ProductsContextLV = createContext();

export const useProductsLV = () => useContext(ProductsContextLV);

const INIT_STATE = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductsContextProviderLV = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const PRODUCTS_API = "http://localhost:8000/products";

  async function getCollectionProducts(collectionName) {
    try {
      const { data } = await axios(
        `${PRODUCTS_API}?collection=${collectionName}`
      );
      const filteredProducts = data.filter(
        (product) => product.collection === collectionName
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: filteredProducts,
      });
    } catch (error) {
      console.error(error);
    }
  }



  const values = {
    products: state.products,

    getCollectionProducts,
  };
  return (
    <ProductsContextLV.Provider value={values}>
      {children}
    </ProductsContextLV.Provider>
  );
};
export default ProductsContextProviderLV;