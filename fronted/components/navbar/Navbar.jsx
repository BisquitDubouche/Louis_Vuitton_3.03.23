import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container'>
      <div className='nav-menu-search'>
        <a className='burger-menu'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3917/3917215.png'
            alt='error'
          />
        </a>
        <a className='menu-btn'>Menu
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
        <Link href={"/"}>
          <p id='Logo'>LOUIS VUITTON</p>
        </Link>
      </div>
      <div className='nav-right-panel'>
        <a className='wishlist-btn'>Wishlist</a>
        <a className='account-btn'>MyLV</a>
        <a className='cart-icon'>
          <img
            src='https://toppng.com/uploads/preview/freebag-vector-retail-shopping-cart-bag-icon-11553505193l9s1kngqvt.png'
            alt='error'
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
