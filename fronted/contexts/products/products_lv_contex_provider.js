import axios from "axios";
import React, { useContext, createContext, useReducer, useState } from "react";

export const ProductsContextLV = createContext();

export const useProductsLV = () => useContext(ProductsContextLV);

const INIT_STATE = {
  filtered_products: [],
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTERED_PRODUCTS":
      return { ...state, filtered_products: action.payload };
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductsContextProviderLV = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const PRODUCTS_API = "http://localhost:8000/products";

  async function getCollectionProducts(collectionName) {
    try {
      const { data } = await axios(
        `${PRODUCTS_API}?collection=${collectionName}`
      );
      const filteredProducts = data.filter(
        (product) => product.collection === collectionName
      );
      const totalProducts = filteredProducts.length;
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const products = filteredProducts.slice(startIndex, endIndex);
      dispatch({
        type: "GET_FILTERED_PRODUCTS",
        payload: products,
      });
      return { totalProducts, totalPages };
    } catch (error) {
      console.error(error);
    }
  }

  async function getProducts(gender) {
    try {
      const { data } = await axios(`${PRODUCTS_API}?gender=${gender}`);
      const allProducts = data.filter((product) => product.gender === gender);
      const totalProducts = allProducts.length;
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const products = allProducts.slice(startIndex, endIndex);
      dispatch({
        type: "GET_PRODUCTS",
        payload: products,
      });
      return { totalProducts, totalPages };
    } catch (error) {
      console.error(error);
    }
  }

  const values = {
    filtered_products: state.filtered_products,
    products: state.products,
    getCollectionProducts,
    getProducts,
    currentPage,
    setCurrentPage,
    productsPerPage,
  };

  return (
    <ProductsContextLV.Provider value={values}>
      {children}
    </ProductsContextLV.Provider>
  );
};

export default ProductsContextProviderLV;
