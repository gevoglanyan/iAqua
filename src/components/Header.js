import React from 'react';

const Header = () => (
  <header>
    <div className="container">
      <div className="header-content">
        <div className="logo">
          i<span>Aqua</span> Aquatics
        </div>
        <nav>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#fish">Fish Collection</a></li>
            <li><a href="#plant">Plant Collection</a></li>
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

export default Header;
