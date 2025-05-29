import React from 'react';

const Footer = () => (
  <footer>
    <div id="contact" className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>iAqua Aquatics</h3>
          <p>Providing premium fish to hobbyists nationwide.</p>
          <p>Our focus is on quality, health, and exceptional service.</p>
          <br />
          <p>Feel free to reach out to us if you have any questions.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#fish">Fish Collection</a></li>
            <li><a href="#plant">Plant Collection</a></li>
            <li><a href="#carbon">Carbon Collection</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Thomas @ iAqua Aquatics</li>
            <br />
            <li>Email: <a href="mailto:iaquaaquatics@gmail.com">iaquaaquatics@gmail.com</a></li>
            <li>
              Phone: <a href="tel:16616662514">(661) 666 - 2514</a>
            </li>
            <li>Hours: Everyday from 9:00 AM - 5:00 PM</li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 iAqua Aquatics. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;