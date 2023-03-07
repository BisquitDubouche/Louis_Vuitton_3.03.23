import React, { useState } from "react";
import { MainLayout } from "@/components/main_layout";
import Link from "next/link";
import { useAuth } from "../../contexts/auth/auth_context_provider";

const Registration = () => {
  const { registerFunc } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) =>
    setPasswordConfirmation(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerFunc(email, password, passwordConfirmation);
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <span>LOGIN INFORMATION</span>
            <div>
              <label aria-required>EMAIL</label>
              <br />
              <input
                type='email'
                placeholder='name@expamle.com'
                value={email}
                onChange={handleEmailChange}
                required
              />
              <br />
            </div>
            <div>
              <label>PASSWORD</label>
              <br />
              <input
                type='password'
                placeholder='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <br />
            </div>
            <div>
              <label>PASSWORD CONFIRMATION</label>
              <br />
              <input
                type='password'
                placeholder='password'
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
                required
              />
              <br />
            </div>
            <button type="submit">Confirm</button>
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

export default Registration;
