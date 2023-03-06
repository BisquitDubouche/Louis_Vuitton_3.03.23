import axios from "axios";
import React, { useContext, createContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const REG_API = "http://localhost:8000/api/v1/account/register/";
  const LOG_API = "http://localhost:8000/api/v1/account/login/";
  const TOKEN_API = "http://localhost:8000/api/token/";
  const REFRESH_API = "http://localhost:8000/api/token/refresh/";

  const registerFunc = async (email, password, password2) => {
    try {
      const response = await axios.post(REG_API, JSON.stringify({
        "email": email,
        "password":password,
        "password2": password2,
      }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const loginFunc = async (email, password) => {
    try {
      const response = await axios.post(LOG_API, {
        email,
        password,
      });
      const tokenResponse = await axios.post(TOKEN_API, {
        grant_type: "password",
        username: email,
        password,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      });
      console.log(tokenResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    registerFunc,
    loginFunc,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
