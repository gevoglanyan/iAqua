import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      html.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">iAqua Aquatics</div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>

          <nav>
            <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
              <li><a href="#top" onClick={closeMenu}>Home</a></li>
              <li><a href="#fish" onClick={closeMenu}>Fish </a></li>
              <li><a href="#plant" onClick={closeMenu}>Plant </a></li>
              <li><a href="#carbon" onClick={closeMenu}>Carbon </a></li>
              <li><a href="#about" onClick={closeMenu}>About Us</a></li>
              <li><a href="#how-to-order" onClick={closeMenu}>How to Order</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
