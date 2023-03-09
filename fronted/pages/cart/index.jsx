import { useState, useEffect, useContext } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { MainLayout } from "@/components/main_layout";
import styles from "../../styles/cart/cart.module.scss";
import Link from "next/link";


const MyShopingbag = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };


  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItemsData) {
      setCartItems(cartItemsData);
    }
  }, []);

  return (
    <MainLayout title='My Shoping Bag'>
      <Navbar />
      <div className={styles.cart_container}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>MY SHOPING CART</h1>
            <Link href={"/"}>Continue Shoping</Link>
          </div>
          {cartItems.length === 0 ? (
            <p>Empty</p>
          ) : (
            <div className={styles.product}>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt={item.name} style={{ maxWidth: "100px" }} />
                  <div className={styles.info}>
                    {item.gender === "Male" ? <Link href={`/products/men/${item.id}`}>{item.name}</Link> : <Link href={`/products/women/${item.id}`}>{item.name}</Link> }
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyShopingbag;
