import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsEyeFill, BsPlus} from 'react-icons/bs'
import { CartContext } from './CartContext'

export default function Products({product}) {
  const{ addToCart } = useContext(CartContext)
  const {id, image, category, title, price} = product
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-500' src={image} alt=''/>
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 bg-blue-500/40 p-2 flex-flex-col items-center justify-center  opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-blue-500'>
              <BsPlus className='text-3x1' />
            </div>
          </button>
          <Link to={`/products/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill /></Link>
        </div>
      </div>
      <div>
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
          <Link to={`/products/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
          </Link>
          <div className='font-semibold'>${price}</div>
        </div>
      </div>
    </div>
  )
}
