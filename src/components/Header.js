import React, {useState} from 'react'
import { FaBasketShopping } from "react-icons/fa6";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='mylogo'>House stuff</span>
            <FaBasketShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`} />
            
            {cartOpen && (
                <div className='shop-card'></div>
            )}
            <ul className='nav'>
                <li>Account</li>
                <li>Cabinet</li>
                <li>About us</li>
            </ul>
            
        </div>
        <div className='presentation'></div>
    </header>
  )
}
