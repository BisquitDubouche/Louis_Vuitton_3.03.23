import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

const PRODUCTS_API = "http://localhost:8000/products";

async function getCollectionProducts(collectionName) {
  const { data } = await axios(`${PRODUCTS_API}?collection=${collectionName}`);
  return data;
}

async function getCollectionProduct(collectionName, id) {
  const { data } = await axios(
    `${PRODUCTS_API}?collection=${collectionName}&id=${id}`
  );
  return data;
}

export const getStaticPaths = async () => {
  let FILTERED_PRODUCTS = await getCollectionProducts("Louis Vuitton x Yayoi Kusama 2023");
  const paths = FILTERED_PRODUCTS.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const product = await getCollectionProduct("Louis Vuitton x Yayoi Kusama 2023", id);

  return {
    props: { product },
  };
};

const product = ({ product }) => {

  const productObj = product[0];

  return (
    <>
      {console.log(productObj)}
      <h1>Confirm</h1>
    </>
  );
};

export default product;
