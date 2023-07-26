import React from 'react'
import toast from 'react-hot-toast'
import {RiDeleteBin7Fill} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../redux/slices/CartSlice'



const CartItem = ({cartItem,cartItemIndex}) => {


  const  cart  = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(removeItemFromCart(cartItem.id));
    toast.error("Item removed from cart!")
  }

  return (

    <div className={`${ !(cartItemIndex===cart.length-1) && "border-b-[2px] border-gray-700" } flex flex-col items-center md:items-start md:flex-row gap-y-8 md:gap-x-14 justify-center py-6 px-10`}>

      
      <img src={cartItem.image} className="w-[180px] " alt="" />
   

      <div className='flex flex-col gap-y-4'>
          <h2 className='font-bold text-gray-700 text-lg text-left'>{cartItem.title}</h2>

          <p className='text-left'>{cartItem.description.split(" ").splice(0,10).join(" ") + "..."}</p>

          <div className='flex justify-between items-center'>
            <p className='text-green-600 font-bold text-xl'>${cartItem.price}</p>

            <button
            onClick={removeFromCart}
            className="flex items-center justify-center"
            >
                <RiDeleteBin7Fill className='font-[2rem] text-red-700 rounded-full w-8 h-8 py-1 px-2 bg-red-200' />
            </button>

          </div>
      </div>
    </div>
  )
}

export default CartItem