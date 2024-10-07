import React, { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = ({ orders, onDelete }) => {
    let summa = 0;
    orders.forEach(el => summa += Number.parseFloat(el.price)); 
    return (
        <div className='shop-card'>
            {orders.map(el => (
                <Order onDelete={onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Sum: {summa}$</p>
        </div>
    );
};

const showNothing = () => {
    return (
        <div className='shop-card-empty'>
            <h2>No selected product</h2>
        </div>
    );
};

export default function Header({ orders, onDelete, isLoggedIn, onLogin, onLogout, username }) {
    const [cartOpen, setCartOpen] = useState(false);
    const itemCount = orders.length;

    return (
        <header>
            <div>
                <span className='mylogo'>House stuff</span>

                {/* Відображаємо кнопку залежно від стану логіну */}
                {isLoggedIn ? (
                    <button onClick={onLogout}>Logout ({username})</button>
                ) : (
                    <button onClick={onLogin}>Login</button>
                )}

                <div className="basket-container">
                    <FaBasketShopping 
                        onClick={() => setCartOpen(!cartOpen)} 
                        className={`shop-card-button ${cartOpen && 'active'}`} 
                        style={{ fontSize: '4em' }} // Збільшення розміру іконки
                    />
                    {itemCount > 0 && <span className="item-count">{itemCount}</span>}
                </div>

                {cartOpen && (
                    <div>
                        {orders.length > 0 ? showOrders({ orders, onDelete }) : showNothing()}
                    </div>
                )}

                <ul className='nav'>
                    <li>Account</li>
                    <li>Cabinet</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    );
}
