import React, { useContext } from 'react'
import SidebarProvider, { SidebarContext } from './SidebarContext'
import {BsBag} from 'react-icons/bs'


export default function Header() {
  const{isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='bg-blue-200'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2x1'/>
      </div>
    </header>
  )
}

