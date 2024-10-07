import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login:", login);
    console.log("Email:", email);

    // Перевіряємо, чи функція onLogin була передана
    if (typeof onLogin === 'function') {
      // Викликаємо функцію onLogin і передаємо логін користувача
      onLogin(login); 
    }

    // Закриваємо модальне вікно після успішного сабміту
    onClose();
  };

  // Якщо вікно не повинно відображатися, повертаємо null
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className='Lucida'>Enter your data</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input 
              type="text" 
              id="login" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="button-85">Submit</button>
          <button type="button" className="button-85" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}
