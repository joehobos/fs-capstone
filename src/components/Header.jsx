import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from './SidebarContext'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import ComfyCat from '../assets/ComfyCat.png'
import {BsBag} from 'react-icons/bs'


export default function Header() {
  const[isActive, setIsActive] = useState(false)
  const{isOpen, setIsOpen} = useContext(SidebarContext)
  const{itemAmount} = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-blue-200' : 'bg-gray-400'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full '>
      <Link to={'/'}>
          <img className='w-[40px]' src= {ComfyCat} />
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className='text-2x1'/>
        <div className='bg-blue-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}

