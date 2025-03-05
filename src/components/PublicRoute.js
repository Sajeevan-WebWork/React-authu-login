import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home"); // Redirect authenticated users to home
    }
  }, [navigate]);

  return children; // Render the page if not authenticated
};

export default PublicRoute;
