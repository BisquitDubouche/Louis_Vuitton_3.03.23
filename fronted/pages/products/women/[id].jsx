import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const PRODUCTS_API = "http://localhost:8000/products";

// async function getCollectionProducts(collectionName) {
//   const { data } = await axios(`${PRODUCTS_API}?collection=${collectionName}`);
//   return data;
// }

// async function getCollectionProduct(collectionName, id) {
//   const { data } = await axios(
//     `${PRODUCTS_API}?collection=${collectionName}&id=${id}`
//   );
//   return data;
// }

async function getProducts(gender) {
  const { data } = await axios(`${PRODUCTS_API}?gender=${gender}`);
  return data;
}

async function getOneProduct(gender, id) {
  const { data } = await axios(`${PRODUCTS_API}?gender=${gender}&id=${id}`);
  return data;
}

export const getStaticPaths = async () => {
  let PRODUCTS = await getProducts("Female");
  const paths = PRODUCTS.map((product) => {
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
  const product = await getOneProduct("Female", id);

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
      {console.log(productObj)}
      <div className="details_container">
      <div className="details_leftBlock">
      <img src={productObj.image} alt="" />
      </div>
      <div className="details_rightBlock">
        <div className="details_rigthDiv">
          <h2>{productObj.name}</h2>
          <br />
          {/* <h3>{productObj.details}</h3> */}
          <br />
          <h3>price:${productObj.price}</h3>
          <br />
          <h3>size:{productObj.size}</h3>
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
