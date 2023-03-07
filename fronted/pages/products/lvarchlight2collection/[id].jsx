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
  let FILTERED_PRODUCTS = await getCollectionProducts("LV Archlight 2.0 Collection");
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
  let product = await getCollectionProduct("LV Archlight 2.0 Collection", id);

  return {
    props: { product },
  };
};

const product = ({ product }) => {

  const [productObj] = product

  return (
    <>
      {console.log(productObj)}
      <h1>Confirm</h1>
    </>
  );
};


export default product;

