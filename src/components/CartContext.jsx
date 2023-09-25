import React, {createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}){
    const [cart, setCart] = useState([])
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1}
        console.log(newItem)
        const cartItem = cart.find((item) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([... cart, newItem])
        }
        console.log(cart)
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        })
        setCart(newCart)
    }

    return (
      <CartContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
    )
  
}