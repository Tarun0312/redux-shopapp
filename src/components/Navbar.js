import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa"
import {  useSelector } from 'react-redux';
import logo from "../logo.png";

const Navbar = () => {

    const cart  = useSelector((state) => state.cart);

    return (
        <nav className='w-full bg-slate-900 py-3'>

            <div className='w-11/12 max-w-6xl mx-auto flex flex-row justify-between items-center text-white'>
                <div>
                    <NavLink to="/">
                        <img src={logo} loading='lazy' className='h-14' alt="Logo"
                        />
                    </NavLink>

                </div>

                <div className='flex flex-row gap-x-6 items-center'>
                    <NavLink to="/" ><p className='text-[18px] font-medium hover:text-green-600 transition-colors duration-300'>Home</p></NavLink>

                    <NavLink to="/cart" >

                        <div className="relative">
                            <FaShoppingCart className='text-2xl hover:text-green-600 transition-colors duration-300' />
                            {
                                cart.length > 0 &&
                                <span className='absolute top-[-25%] right-[-25%] rounded-full w-5 h-5  bg-green-600 flex justify-center items-center text-sm animate-bounce'>{cart.length}</span>
                            }
                        </div>

                    </NavLink>

                </div>
            </div>

        </nav>

    )
}

export default Navbar