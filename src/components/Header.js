import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
    <header className="bg-primary text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="md:hidden flex justify-between items-center w-full">
          <button
            className="text-4xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>

          <Link
            to="/checkout"
            className="flex items-center gap-2 text-2xl font-bold hover:text-purple-200"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-white text-primary rounded-full text-sm font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-center mx-auto">
          <li><Link to="/" state={{ scrollTo: 'top' }} className="hover:text-purple-200">Home</Link></li>
          <li><Link to="/shop" className="hover:text-purple-200">Our Shop</Link></li>
          <li><Link to="/fish" className="hover:text-purple-200">Fish Collection</Link></li>
          <li><Link to="/plant" className="hover:text-purple-200">Plant Collection</Link></li>
          <li><Link to="/how-to-order" className="hover:text-purple-200">How to Order</Link></li>
          <li><Link to="/disclaimer" className="hover:text-purple-200">Disclaimer</Link></li>
          <li><Link to="/shipping-policy" className="hover:text-purple-200">Shipping Policy</Link></li>
          <li><Link to="/about" className="hover:text-purple-200">About Us</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/checkout"
            className="flex items-center gap-2 text-2xl font-bold hover:text-purple-200"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-white text-primary rounded-full text-sm font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {isOpen && (
        <nav className="fixed inset-0 bg-primary text-white flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            X
          </button>

          <ul className="flex flex-col gap-6 text-lg font-medium text-center">
            <li><Link to="/" state={{ scrollTo: 'top' }} onClick={closeMenu} className="hover:text-purple-200">Home</Link></li>
            <li><Link to="/shop" onClick={closeMenu} className="hover:text-purple-200">Our Shop</Link></li>
            <li><Link to="/fish" onClick={closeMenu} className="hover:text-purple-200">Fish Collection</Link></li>
            <li><Link to="/plant" onClick={closeMenu} className="hover:text-purple-200">Plant Collection</Link></li>
            <li><Link to="/how-to-order" onClick={closeMenu} className="hover:text-purple-200">How to Order</Link></li>
            <li><Link to="/disclaimer" onClick={closeMenu} className="hover:text-purple-200">Disclaimer</Link></li>
            <li><Link to="/shipping-policy" onClick={closeMenu} className="hover:text-purple-200">Shipping Policy</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="hover:text-purple-200">About Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
