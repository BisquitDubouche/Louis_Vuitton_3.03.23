import axios from "axios";
import React, { useContext, createContext, useReducer } from "react";

export const ProductsContextLV = createContext();

export const useProductsLV = () => useContext(ProductsContextLV);

const INIT_STATE = {
  filtered_products: [],
  products: []
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
        type: "GET_FILTERED_PRODUCTS",
        payload: filteredProducts,
      });
      return { totalProducts: filteredProducts.length, totalPages: 1 };
    } catch (error) {
      console.error(error);
    }
  }

  async function getFilteredProducts(category, collection, color) {
    try {
      let url = `${PRODUCTS_API}?`;
  
      if (category) {
        url += `sub_category=${category}&`;
      }
  
      if (collection) {
        url += `collection=${collection}&`;
      }
  
      if (color) {
        url += `color=${color}&`;
      }
  
      const { data } = await axios(url);
  
      dispatch({
        type: "GET_FILTERED_PRODUCTS",
        payload: data,
      });
  
      return { totalProducts: data.length, totalPages: 1 };
    } catch (error) {
      console.error(error);
    }
  }
  

  async function getProducts(gender) {
    try {
      const { data } = await axios(`${PRODUCTS_API}?gender=${gender}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
      return { totalProducts: data.length, totalPages: 1 };
    } catch (error) {
      console.error(error);
    }
  }

  const values = {
    filtered_products: state.filtered_products,
    products: state.products,
    getCollectionProducts,
    getProducts,
    getFilteredProducts
  };

  return (
    <ProductsContextLV.Provider value={values}>
      {children}
    </ProductsContextLV.Provider>
  );
};

export default ProductsContextProviderLV;
