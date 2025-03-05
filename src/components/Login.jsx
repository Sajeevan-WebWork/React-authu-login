/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Images from '../assets/lock-icon.svg'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import toast from "react-hot-toast";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            const user = JSON.stringify(response.data.user);
            localStorage.setItem('user', user)
            console.log(response);
            toast.success('Login successfully');
            navigate('/home')
        } catch (error) {
            toast.error(error.response?.data?.message || "Login Failed");
            
        }
    }
    return (
        <>
            <div className="h-screen w-screen bg-[#f8f4fc]">
                <span className='rotating__bordor h-[50rem] border-2 w-[50rem]  border-[#dcbff947] rounded-full bg-transparent block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white'></span>
                <span className='h-[25rem] md:h-[40rem] w-[25rem] md:w-[40rem] rounded-full bg-[#ede6f4] block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'></span>
                <span className='h-[15rem] md:h-[40rem] w-[15rem] md:w-[40rem] blur-[10rem] rounded-full bg-[#cea4f7ad] block z-10 absolute top-2 left-2  transform -translate-x-1/2 -translate-y-1/2 p-4'></span>

                <div className="block z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white'">
                    <motion.div
                        initial={{
                            y: 30,
                            scale: .95
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                            transition: { duration: .3 }
                        }}
                        className="flex flex-col items-center px-6 justify-center py-10 gap-6 bg-white w-1xl h-[40rem] rounded-3xl">
                        <img src={Images} alt="app lock" className="flex  items-center-justify-center w-[5rem]" />
                        <div className="">
                            <h3 className="text-2xl font-semibold">Welcome to Saferly!</h3>
                            <p className='text-sm text-center font-normal text-gray-400'>Keep your data safe!</p>
                        </div>

                        <form autoComplete="off"  autoFocus="off" action="" onSubmit={handleLogin} className='relative w-100 flex flex-col gap-8'>
                            <motion.div
                                initial={{
                                    y: 20,
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .3, delay: .1 }
                                }}
                                className="relative w-100 ">
                                <input type="text" id="name" value={email} onChange={(e) => setEmail(e.target.value)} required className="block px-3 pb-3 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label htmlFor="name" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                            </motion.div>

                            <motion.div
                                initial={{
                                    y: 20,
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .3, delay: .2 }
                                }}
                                className="relative w-100 ">
                                <input type="password" id="passoword" value={password} onChange={(e) => setPassword(e.target.value)} required className="block px-3 pb-3 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label htmlFor="passoword" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Passwords</label>
                            </motion.div>

                            <button type='submit' className='cursor-pointer hover:bg-[#7900fad8] transition-all duration-300 hover:scale-101 active:scale-105 p-4 rounded-lg bg-[#7900fa] text-white text-lg'>Login</button>

                            <a href="#" className="text-lg font-semibold text-[#965bc3] text-center">Forgot Password?</a>

                            <p className='text-lg font-medium text-center text-gray-400'>Don't have an account? <Link to={'/signup'} className='text-[#965bc3]'>Register!</Link></p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Login
