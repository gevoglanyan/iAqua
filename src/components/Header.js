import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">iAqua Aquatics</div>

          {isMobile && (
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          )}

          <nav>
            <ul className={menuOpen || !isMobile ? "show" : ""}>
              <li><a href="#top">Home</a></li>
              <li><a href="#fish">Fish</a></li>
              <li><a href="#plant">Plant</a></li>
              <li><a href="#carbon">Carbon</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-to-order">How to Order</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#shipping-policy">Shipping</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
