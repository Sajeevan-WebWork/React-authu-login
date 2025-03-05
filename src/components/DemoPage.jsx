import React from 'react'
import loginAsse from '../assets/lock-icon.svg'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"


const DemoPage = () => {
    return (
        <>
            <div className="h-screen w-screen bg-[#f8f4fc]">
                <div className="">
                    <span className='w-[18rem] sm:w-[35rem] md:w-[45rem] h-[18rem] sm:h-[35rem] md:h-[45rem] border-2 border-[#b88ae62e] rounded-full bg-transparent block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white'></span>
                    <span className='w-[12rem] sm:w-[25rem] md:w-[35rem]  h-[12rem] sm:h-[25rem] md:h-[35rem]  rounded-full bg-[#ede6f4] md:block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'></span>
                    <span className='hidden h-[15rem] sm:h-[40rem] w-[15rem] sm:w-[40rem] blur-[10rem] rounded-full bg-[#cea4f7ad] md:block z-10 absolute top-2 left-2  transform -translate-x-1/2 -translate-y-1/2 p-4'></span>


                    <motion.form
                    initial = {{
                        y: 30,
                        scale: .95
                    }}
                    animate = {{
                        y: 0,
                        scale: 1,
                        transition: {duration: .3}
                    }}
                    action="" className="bg-white h-[calc(100vh)] w-[calc(100%)] sm:w-[25rem] md:w-[25rem] sm:h-[calc(100%-30%)] sm:rounded-2xl flex flex-col justify-center items-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-10 z-50">
                        <img src={loginAsse} className='w-18' alt="icon" />

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
                                <input type="text" id="name" class="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label for="name" class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
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
                                <input type="text" id="password" class="block px-3 pb-3 pt-3 w-full text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#965bc3] peer" placeholder=" " />
                                <label for="password" class="absolute text-base text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#965bc3]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
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

export default DemoPage