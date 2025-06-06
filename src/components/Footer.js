import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-primary text-white py-20 mt-0">
    <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">iAqua Aquatics</h3>
          <p className="leading-relaxed">
            Providing premium fish to hobbyists nationwide.<br />
            Our focus is on quality, health, and exceptional service.
          </p>
          <p className="mt-8">Have questions? Reach out anytime!</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" state={{ scrollTo: 'top' }} className="hover:text-purple-200">Home</Link></li>
            <li><Link to="/shop" state={{ scrollTo: 'shop' }} className="hover:text-purple-200">Our Shop</Link></li>
            <li><Link to="/fish" state={{ scrollTo: 'fish' }} className="hover:text-purple-200">Fish Collection</Link></li>
            <li><Link to="/plant" state={{ scrollTo: 'plant' }} className="hover:text-purple-200">Plant Collection</Link></li>
            <li><Link to="/how-to-order" className="hover:text-purple-200">How to Order</Link></li>
            <li><Link to="/about" className="hover:text-purple-200">About Us</Link></li>
            <li><Link to="/" state={{ scrollTo: 'contact' }} className="hover:text-purple-200">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li><a href="mailto:iaquaaquatics@gmail.com" className="hover:text-purple-200">iaquaaquatics@gmail.com</a></li>
            <li><a href="tel:16616662514" className="hover:text-purple-200">(661) 666-2514</a></li>
            <br/>
            <li>Monday - Sunday 
                <br/>
                9:00 AM to 5:00 PM</li>
            <br />
            <li>Based in Santa Clarita, California</li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-white/30 pt-6 mt-12 text-sm">
        <p>&copy; {new Date().getFullYear()} iAqua Aquatics. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
