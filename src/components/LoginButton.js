import React, { useState } from 'react';
import LoginModal from './LoginModal';

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="button-85" onClick={handleOpenModal}>Login</button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
