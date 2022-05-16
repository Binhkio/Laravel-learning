import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiURL, TOKEN_NAME } from "./constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  const loadUser = async () => {
    if (localStorage[TOKEN_NAME]) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage[TOKEN_NAME]}`;
    } else {
      setAuthState({
        authLoading: false,
        isAuthenticated: false,
        user: null,
      });
      return;
    }

    try {
      const response = await axios.get(`${apiURL}/auth`);
      if (response.data.status === 200) {
        setAuthState({
          authLoading: false,
          isAuthenticated: true,
          user: response.data.user,
        });
      } else {
        setAuthState({
          authLoading: false,
          isAuthenticated: false,
          user: null,
        });
      }
    } catch (err) {
      localStorage.removeItem(TOKEN_NAME);
      delete axios.defaults.headers.common["Authorization"];
      setAuthState({
        authLoading: false,
        isAuthenticated: false,
        user: null,
      });
    }
  };

  const loginUser = async (loginForm) => {
    try {
      const response = await axios.post(`${apiURL}/login`, loginForm);
      if (response.data.status === 200)
        localStorage.setItem(TOKEN_NAME, response.data.token);

      await loadUser();
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(`${apiURL}/register`, registerForm);
      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  const logoutUser = async () => {
    const response = await axios.get(`${apiURL}/logout`);
    if (response.data.status === 200) {
      localStorage.removeItem(TOKEN_NAME);
      setAuthState({
        ...authState,
        isAuthenticated: false,
        user: null,
      });
    } else {
      alert(response.data);
    }
  };

  useEffect(() => loadUser(), []);

  const authContextData = {
    loadUser,
    loginUser,
    registerUser,
    logoutUser,
    authState,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;