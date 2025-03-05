/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Images from '../assets/lock-icon.svg'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import toast from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

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
                <div className="">
                    <span className='w-[18rem] sm:w-[35rem] md:w-[50rem] h-[18rem] sm:h-[35rem] md:h-[50rem] border-2 border-[#b88ae62e] rounded-full bg-transparent block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white'></span>
                    <span className='w-[12rem] sm:w-[25rem] md:w-[40rem]  h-[12rem] sm:h-[25rem] md:h-[40rem]  rounded-full bg-[#ede6f4] md:block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'></span>
                    <span className='hidden h-[15rem] sm:h-[40rem] w-[15rem] sm:w-[40rem] blur-[10rem] rounded-full bg-[#cea4f7ad] md:block z-10 absolute top-2 left-2  transform -translate-x-1/2 -translate-y-1/2 p-4'></span>


                    <motion.form
                        initial={{
                            y: 30,
                            scale: .95
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                            transition: { duration: .3 }
                        }}
                        onSubmit={handleLogin}
                        action="" className="bg-white h-[calc(100vh)] w-[calc(100%)] sm:w-[25rem] md:w-[28rem] sm:h-[calc(100%-30%)] sm:rounded-2xl flex flex-col justify-center items-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-10 z-50">
                        <img src={Images} className='w-18' alt="icon" />

                        <div className="block text-center" >
                            <h3 className="text-lg font-semibold">Welcome to saferly!</h3>
                            <p className="text-sm pt-1 font-normal text-gray-500">Keep your data safe!</p>
                        </div>

                        <div className="flex flex-col w-full gap-6">
                            <motion.div
                                initial={{
                                    y: 20,
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .3, delay: .1 }
                                }}
                                class="relative w-full">
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label for="email" class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                            </motion.div>

                            <motion.div
                                initial={{
                                    y: 20,
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .3, delay: .2 }
                                }}
                                class="relative w-full">
                                <input type={showPassword ? "text" : "password"} id="passoword" value={password} onChange={(e) => setPassword(e.target.value)} required class="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label for="password" class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-5 cursor-pointer hover:scale-105 transition-all">
                                    {showPassword ? (
                                        <Eye className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <EyeClosed className="w-5 h-5 text-gray-500" />
                                    )}
                                </span>
                            </motion.div>

                            <button type='submit' className='cursor-pointer hover:bg-[#7900fad8] transition-all duration-300 hover:scale-101 active:scale-105 p-4 rounded-lg bg-[#7900fa] text-white text-md'>Login</button>
                        </div>

                        <a href="#" className="text-base font-semibold text-[#965bc3] text-center">Forgot Password?</a>
                        <p className='text-base font-medium text-center text-gray-400'>Don't have an account? <Link to={'/signup'} className='text-[#965bc3]'>Register!</Link></p>
                    </motion.form>
                </div>
            </div>
        </>
    )
}

export default Login
