import React from "react";
import { MainLayout } from "@/components/main_layout";
import Link from "next/link";

const registration = () => {
  return (
    <MainLayout title='Create myLV account | LOUIS VUITTON'>
      <div className='nav-container-reg'>
        <Link href={"/"}>LOUIS VUITTON</Link>
        <div></div>
        <span>ACCOUNT CREATION</span>
      </div>
      <div className='reg-container'>
        <div className='form-container'>
          <h1>CREATE A NEW ACCOUNT</h1>
          <form>
            <span>LOGIN INFORMATION</span>
            <div>
              <label aria-required>EMAIL</label>
              <br />
              <input type='email' placeholder='name@expamle.com' />
              <br />
            </div>
            <div>
              <label aria-aria-required>EMAIL CONFIRMATION</label>
              <br />
              <input type='email' placeholder='name@expamle.com' />
              <br />
            </div>
            <div>
              <label>PASSWORD</label>
              <br />
              <input type='password' placeholder='password' />
              <br />
            </div>
            <div>
              <label>PASSWORD CONFIRMATION</label>
              <br />
              <input type='password' placeholder='password' />
              <br />
            </div>
            <button>Confirm</button>
          </form>
        </div>
        <div>
          <h6>CALL US</h6>
          <button>+1.866.VUITTON</button>
          <button></button>
          <div>
            <h2>WHAT YOU'LL FIND IN YOUR LV ACCOUNT</h2>
            <span>Access your order history</span>
            <span>Manage your personal information</span>
            <span>Receive Louis Vuitton's digital communications</span>
            <span>Register your wishlist</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default registration;
