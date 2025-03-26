/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Images from '../assets/lock-icon.svg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const API_URL = window.location.hostname === "login-auth-32bdd.web.app"
        ? import.meta.env.VITE_API_URL
        : "http://localhost:5000";

    const API_KEY = import.meta.env.VITE_API_SECRET_KEY;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            console.log(data.token);

            localStorage.setItem("token", data.token)

            if (!res.ok) throw new Error(data.message);

            toast.success("Login successful!", { style: { maxWidth: "800px" } });


            setFormData({ email: "", password: "" });
            navigate("/home"); // Redirect to home page after login
        } catch (error) {
            toast.error(error.message || "Login failed!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="h-screen w-screen bg-[#f8f4fc] flex items-center justify-center">
                {/* Background Design */}
                <span className="absolute w-[18rem] sm:w-[35rem] md:w-[50rem] h-[18rem] sm:h-[35rem] md:h-[50rem] border-2 border-[#b88ae62e] rounded-full bg-transparent"></span>
                <span className="absolute w-[12rem] sm:w-[25rem] md:w-[40rem] h-[12rem] sm:h-[25rem] md:h-[40rem] rounded-full bg-[#ede6f4]"></span>
                <span className='hidden h-[15rem] sm:h-[40rem] w-[15rem] sm:w-[40rem] blur-[10rem] rounded-full bg-[#cea4f7ad] md:block z-10 absolute top-2 left-2  transform -translate-x-1/2 -translate-y-1/2 p-4'></span>

                {/* Login Form */}
                <motion.form
                    autoComplete="off"
                    initial={{ y: 30, scale: 0.95 }}
                    animate={{ y: 0, scale: 1, transition: { duration: 0.3 } }}
                    onSubmit={handleSubmit}
                    className="bg-white h-[calc(100vh)] w-[calc(100%)] sm:w-[25rem] md:w-[28rem] sm:h-[calc(100%-30%)] sm:rounded-2xl flex flex-col justify-center items-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-10 z-50"
                >
                    <img src={Images} className="w-18" alt="icon" />

                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Welcome to Saferly!</h3>
                        <p className="text-sm pt-1 font-normal text-gray-500">Keep your data safe!</p>
                    </div>

                    <div className="flex flex-col w-full gap-6">
                        {/* Email Input */}
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
                            className="relative w-full"
                        >
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                className="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#965bc3] peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Email
                            </label>
                        </motion.div>

                        {/* Password Input */}
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0, transition: { duration: 0.3, delay: 0.2 } }}
                            className="relative w-full"
                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                required
                                className="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#965bc3] peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Password
                            </label>
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-4 right-5 cursor-pointer hover:scale-105 transition-all"
                            >
                                {showPassword ? <Eye className="w-5 h-5 text-gray-500" /> : <EyeClosed className="w-5 h-5 text-gray-500" />}
                            </span>
                        </motion.div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="cursor-pointer hover:bg-[#7900fad8] text-center flex items-center justify-center transition-all duration-300 hover:scale-101 active:scale-105 p-4 rounded-lg bg-[#7900fa] text-white text-md"
                        >
                            {
                                isLoading ?
                                    (
                                        <div role="status">
                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin  fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    )
                                    :
                                    "Login"
                            }
                        </button>
                    </div>

                    <Link to={'/forgot-password'} className="text-base font-semibold text-[#965bc3] text-center">
                        Forgot Password?
                    </Link>
                    <p className="text-base font-medium text-center text-gray-400">
                        Don't have an account? <Link to="/signup" className="text-theme-500 font-bold">Register!</Link>
                    </p>
                </motion.form>
            </div>
        </>
    );
};

export default Login;
