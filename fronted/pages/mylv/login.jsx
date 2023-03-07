import React, { useState } from "react";
import { MainLayout } from "@/components/main_layout";
import { useAuth } from "../../contexts/auth/auth_context_provider";

const Login = () => {
  const { logIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout title="Login in myLV account | LOUIS VUITTON">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </MainLayout>
  );
};

export default Login;