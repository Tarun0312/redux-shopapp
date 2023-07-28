import React from 'react'
import toast from 'react-hot-toast'
import {  useDispatch, useSelector } from 'react-redux'
import { addItemInCart ,removeItemFromCart} from '../redux/slices/CartSlice'



const Product = ({productItem}) => {


  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  
  const addToCart = () => {
    dispatch(addItemInCart(productItem));
    toast.success("Item added to Cart!");
  }

  const removeFromCart = () => {
    dispatch(removeItemFromCart(productItem.id));
    toast.error("Item removed from Cart!");
  }

  return (
    <div className='flex flex-col items-center justify-between gap-y-6 p-4 mt-14 ml-5 border  rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all hover:scale-110 duration-300 ease-in group hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>

        <h2 className='font-bold text-gray-700 text-left text-xl'>{productItem.title.substring(0,14)+"..."}</h2>

        <p className='w-40 text-[10px] text-left text-slate-400'>{`${productItem.description.split(" ").slice(0,10).join(" ")}...`}</p>

        <div className='h-[180px]'>
          <img src={productItem.image} className="h-full w-full" alt={productItem.title}/>
        </div>


        <div className='flex justify-between items-center w-full'>
            <p className='text-green-600 font-semibold '>${productItem.price}</p>
            {
              cart.some( item => item.id === productItem.id) ?
              (<button 
              className='text-gray-700 rounded-full border-2 uppercase border-gray-700 font-bold group-hover:text-white group-hover:bg-gray-700 text-center text-xs p-1 px-3 transition-all duration-300 ease-in'
              onClick={removeFromCart}
              >Remove Item</button>) :
              (<button
              className='text-gray-700 rounded-full border-2 uppercase border-gray-700 font-bold group-hover:text-white group-hover:bg-gray-700 p-1 px-3 text-xs text-center transition-all duration-300 ease-in'
              onClick={addToCart}
              >Add to Cart</button>)
            }
        </div>
    </div>
  )
}

export default Product