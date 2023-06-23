import React from 'react';
import modusLogo from '../assets/modus-logo.png';
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 p-4">
      <div className="flex items-center justify-between">
        <img src={modusLogo} alt="Modus Logo" className="h-8" />
      </div>
    </header>
  );
};

export default Header;
