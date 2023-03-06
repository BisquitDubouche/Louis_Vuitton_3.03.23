import Link from "next/link";
import React, { useState } from "react";

const MainNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='nav-container'>
        <div className='nav-menu-search'>
          <a
            className={`burger-menu ${isSidebarOpen ? "close" : ""}`}
            onClick={handleSidebarToggle}
          >
            <img
              src={
                isSidebarOpen
                  ? "https://icons.veryicon.com/png/o/miscellaneous/kqt/close-116.png"
                  : "https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
              }
              alt='error'
            />
          </a>
          <a
            className={`menu-btn ${isSidebarOpen ? "close" : ""}`}
            onClick={handleSidebarToggle}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </a>
          <a className='search-icon-btn'>
            <img
              src='https://static.thenounproject.com/png/1016966-200.png'
              alt='error'
            />
          </a>
          <a className='search-btn'>Search</a>
        </div>
        <div className='nav-logo'>
          <a>LOUIS VUITTON</a>
        </div>
        <div className='nav-right-panel'>
          <a className='account-btn'>Wishlist</a>
          <Link href={"/mylv/registration"}>MyLV</Link>
          <a className='cart-icon'>
            <img
              src='https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png'
              alt='error'
            />
          </a>
        </div>
      </div>
      <div className={`${isSidebarOpen ? "sidebar" : "sidebar-closed"}`}>
        <Link href={'/lv'}>LV Archlight 2.0 Collection</Link>
        <Link href={"/products/lvarchlight2collection"}>Louis Vuitton x Yayoi Kusama</Link>
        <Link href={"/"}>Gifts</Link>
        <Link href={"/"}>New</Link>
        <Link href={"/products/for_him/bags"}>Bags</Link>
        <Link href={"/"}>Women</Link>
        <Link href={"/"}>Men</Link>
        <Link href={"/"}>Jewerly</Link>
        <Link href={"/"}>Watches</Link>
        <Link href={"/"}>Fragrances</Link>
        <Link href={"/"}>Art of Living</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>World of Louis Vuitton</Link>
        <Link href={"/admin"}>Admin Root</Link>

        <footer className='footer'>
          <Link href={"/"}>Sustainability</Link>
          <Link href={"/"}>Stores</Link>
          <Link href={"/"}>Ship to: United States</Link>
          <Link href={"/"}>Can we help you?</Link>
          <Link href={"/"} className='last-child'>
            +1.866.VUITTON
          </Link>
        </footer>
      </div>
    </>
  );
};

export default MainNavbar;
