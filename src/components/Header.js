import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">iAqua Aquatics</div>

          {/* Hamburger Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation Menu */}
          <nav>
            <ul className={`nav-links ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}>
              <li><a href="#top">Home</a></li>
              <li><a href="#featured">Fish Collection</a></li>
              <li><a href="#plant">Plant Collection</a></li>
              <li><a href="#carbon">Carbon Collection</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-to-order">How to Order</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#shipping-policy">Shipping Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;