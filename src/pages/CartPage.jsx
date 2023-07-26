import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem";

const CartPage = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((accumulator,currentValue) => accumulator+currentValue.price ,0))
  },[cart])
  

  return (
    <div className='w-11/12 max-w-6xl mx-auto py-2'>
      {
        cart.length === 0 ?
          (<div className='w-screen h-[80vh] flex flex-col justify-center items-center gap-y-4'>
            <h2 className='font-bold text-2xl'>Your Cart is empty!</h2>
            <NavLink to="/"><button className='uppercase text-lg font-bold text-center text-white bg-green-600 px-12 py-4 rounded-lg hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600 transition-all  duration-800'>Shop Now</button></NavLink>
          </div>) :

          (<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[15rem] justify-center'>
            <div className='w-full lg:w-[37rem] flex flex-col  gap-y-6 items-center'>
              {
                cart.map((cartItem,index) => (<CartItem key={cartItem.id} cartItem={cartItem} cartItemIndex={index} />))
              }
            </div>

            <div className='flex flex-col md:justify-between py-[4rem] items-stretch'>

              <div className='flex flex-col'>
                  <h2 className='text-green-700 font-bold text-xl'>YOUR CART</h2>
                  <h1 className='uppercase text-green-700 font-bold text-5xl'>Summary</h1>
                  <p className='text-gray-700 font-bold text-xl mt-3'>Total Items :{cart.length}</p>
              </div>
           

                <div className='flex flex-col gap-y-4'>
                    <p className='text-gray-700 font-bold text-xl'>Total Amount : <span>${totalAmount}</span></p>
                    <button className='text-center font-bold bg-green-600 rounded-md py-3 px-2 text-white text-2xl hover:bg-white  hover:border-2 hover:border-green-600  hover:text-green-600 transition-colors duration-300 ease-in'>Checkout Now</button>
                </div>
            
            </div>

          </div>
          )

      }
    </div>
  )
}

export default CartPage