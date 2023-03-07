import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className='nav-container2'>
        <div className='nav-menu-search2'>
          <a
            className={`burger-menu2 ${isSidebarOpen ? "close2" : ""}`}
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
            className={`menu-btn2 ${isSidebarOpen ? "close2" : ""}`}
            onClick={handleSidebarToggle}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </a>
          <a className='search-icon-btn2' onClick={handleSearchToggle}>
            <img
              src='https://static.thenounproject.com/png/1016966-200.png'
              alt='error'
            />
          </a>
          <a className='search-btn2' onClick={handleSearchToggle}>
            Search
          </a>
        </div>
        <div className='nav-logo2'>
          {isSearchOpen ? (
            <input
              type='text'
              placeholder='Search for products'
              className='search'
            />
          ) : (
            <Link href={"/"}>LOUIS VUITTON</Link>
          )}
        </div>

        <div className='nav-right-panel2'>
          <a className='wishlist-btn2'>Wishlist</a>
          <Link href={"/mylv/registration"}>MyLV</Link>

          <Link href={"/cart"} className='cart-icon2'>
            <img
              src='https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png'
              alt='error'
            />
          </Link>
        </div>
      </div>
      <div className={`${isSidebarOpen ? "sidebar2" : "sidebar-closed2"}`}>
        <Link href={"/products/louisvuittonxyayoikusama"}>
          Louis Vuitton x Yayoi Kusama
        </Link>
        <Link href={"/products/lvarchlight2collection"}>
          LV Archlight 2.0 Collection
        </Link>
        <Link href={"/products/women/"}>Women</Link>
        <Link href={"/products/men/"}>Men</Link>
        <Link href={"/"}>World of Louis Vuitton</Link>
        <Link href={"/admin"}>Admin Root</Link>

        <footer className='footer2'>
          <Link href={"/"}>Sustainability</Link>
          <Link href={"/"}>Stores</Link>
          <Link href={"/"}>Ship to: United States</Link>
          <Link href={"/"}>Can we help you?</Link>
          <Link href={"/"} className='last-child2'>
            +1.866.VUITTON
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
