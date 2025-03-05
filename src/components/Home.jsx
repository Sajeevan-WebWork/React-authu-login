import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    toast('Logged Out Successfully')
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
    <>
      <div className="flex items-center justify-between container m-auto py-6">
      <h2>Welcome {user ? user.name : "Guest"}</h2>
      <button onClick={handleLogout} className="px-8 py-3 text-lg cursor-pointer hover:scale-103 active:scale-105 transition-all duration-300 rounded-lg bg-[#965bc3] text-white border-0 outline-0">Logout</button>
      </div>
    </>
  );
};

export default Home;
