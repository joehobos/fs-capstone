import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import CartItem from './CartItem'
import { SidebarContext } from "./SidebarContext.jsx";
import { CartContext } from "./CartContext";

export default function Sidebar() {

    const {isOpen, handleClose} = useContext(SidebarContext)
    const {cart} = useContext(CartContext)
    console.log(useContext(CartContext))
    return (
        <>
          <div
            className={`${
              isOpen ? 'right-0' : '-right-full'
            } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
          >
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">Shopping Cart (0)</div>
                <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center item-center">
                    <IoMdArrowForward className="text-2x1" />
                </div>
            </div>
            <div>{cart.map(item => {
                return <CartItem item={item} key={item.id} />
            })}
            </div>
          </div>
        </>
      );

}