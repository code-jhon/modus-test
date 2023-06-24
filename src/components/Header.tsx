import React from 'react';
import modusLogo from '../assets/tp-logo-modus.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-between">
        <img src={modusLogo} alt="Modus Logo" className="h-8" />
        <input type="text" placeholder='Type your search here' />
        <span className='font-bold'>STORE</span>
      </div>
    </header>
  );
};

export default Header;
