import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


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
      <Navbar />
      <div className="details_container">
      <div className="details_leftBlock">
      <img src={productObj.image} alt="" />
      </div>
      <div className="details_rightBlock">
        <div className="details_rightDiv">
          <h2>{productObj.name}</h2>
          <br />
          <h3>price:${productObj.price}</h3>
          <br />
          <select className="details_select">
            <option>Select size</option>
              {productObj.size.map((size) => (
            <option key={size} value={size}>{size}</option>
              ))}
          </select>
          <br />
          <br />
          <button className="details_button">Add to Shopping</button>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default product;
