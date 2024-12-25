import React, { useState, useEffect } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Order from './Order';
import useLogState from '../hooks/useLogState'; // Власний хук для логування стану

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

export default function Header({ orders, onDelete, isLoggedIn: initialLoggedIn, onLogin, onLogout, username }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn); // Локальний стан для логіну
    const itemCount = orders.length;

    // Логування стану кошика
    useLogState(orders);

    // useEffect із залежністю для відстеження кількості замовлень
    useEffect(() => {
        console.log(`Кількість товарів у кошику: ${itemCount}`);
    }, [itemCount]);

    const handleLogin = () => {
        setIsLoggedIn(true); 
        if (onLogin) onLogin(); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false); 
        if (onLogout) onLogout(); 
    };

    return (
        <header>
            <div>
                <span className='mylogo'>House stuff</span>

                {/* Відображаємо кнопку залежно від стану логіну */}
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout {username}</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}

                <div className="basket-container">
                    <FaBasketShopping 
                        onClick={() => setCartOpen(!cartOpen)} 
                        className={`shop-card-button ${cartOpen && 'active'}`} 
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
