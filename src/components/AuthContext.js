import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Function to Login
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("Login Failed", error.response.data);
    }
  };

  // Function to Signup
  const signup = async (name, email, password) => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      login(email, password); // Auto login after signup
    } catch (error) {
      console.error("Signup Failed", error.response.data);
    }
  };

  // Function to Logout
  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  // Function to Fetch User Details
  const fetchUserDetails = async () => {
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:5000/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Fetching User Details Failed", error.response.data);
    }
  };

  useEffect(() => {
    if (token) fetchUserDetails();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
