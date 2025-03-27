/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false)


  const handleLogout = () => {
    setLoading(false)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    toast('Logged Out Successfully')
    setLoading(true)
  };

  // Function to Fetch User Details
  const fetchUserDetails = async () => {
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:5000/api/auth/user", {
        headers: { Authorization: `${token}` },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Fetching User Details Failed", error.response.data);
      handleLogout()
    }
  };

  // useEffect(() => {
  //   if (token) fetchUserDetails();
  // }, [token]);


  return (
    <>
      {
        loading ? (
          <div class="text-center">
            <div role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>

        ) : (
          <>
            <div className="flex items-center justify-between absolute top-0 left-0 right-0 container m-auto py-6 px-4">
              <h2 className="text-2xl font-semibold uppercase">Login Auth</h2>
              <button onClick={handleLogout} className="px-8 py-3 text-lg cursor-pointer hover:scale-103 active:scale-105 transition-all duration-300 rounded-lg bg-blue-600 text-white border-0 font-semibold outline-0">Logout</button>
            </div>

            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl text-center"
              >
                {/* Welcome Header */}
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl font-extrabold text-gray-800 mb-4"
                >
                  🎉 Welcome & Thank You!
                </motion.h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  I'm thrilled to have you explore my latest project.
                  Please share your valuable review on my
                  <a
                    href="https://sajeevan-web-dev.web.app/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold underline hover:text-blue-600 transition"
                  >
                    Portfolio Contact Page
                  </a>
                  .
                </p>

                {/* Call to Action Card */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg p-6"
                >
                  <p className="text-lg font-medium">
                    Need a <strong>WordPress Website</strong> or <strong>Freelance Work</strong>?
                    Feel free to reach out to **Sajeevan TechWork**!
                  </p>
                </motion.div>

                {/* Contact Button */}
                <motion.a
                  href="mailto:sajeevantechwork@example.com"
                  className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg 
            hover:bg-blue-700 transition duration-300 hover:-translate-y-1 transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📩 Contact Me
                </motion.a>
              </motion.div>
            </div>
          </>

        )
      }
    </>
  );
};

export default Home;
