import Navbar from "@/components/navbar/Navbar";
import { MainLayout } from "@/components/main_layout";
import styles from "../../styles/cart/cart.module.scss";
import Link from "next/link";

const MyShopingbag = () => {
  return (
    <MainLayout title='My Shoping Bag'>
      <Navbar />
      <div className={styles.cart_container}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>MY SHOPING CART</h1>
            <Link href={"/"}>Continue Shoping</Link>
          </div>
          <div className={styles.product}>
            <div>image</div>
            <div className={styles.info}>
            <Link href={"/"}></Link>
            <p>Color</p>
            <p>Material</p>
            <input list='num' />
            <datalist id='num'>
              <option value='1'></option>
              <option value='2'></option>
            </datalist>
            </div>
          </div>
        </div>
        <div>
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Tax</p>
          <label>Will be calculated according to your delivery address</label>
          <strong>Total</strong>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyShopingbag;
