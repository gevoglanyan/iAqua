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
            <li><a href="#disclaimer">Disclaimer</a></li>
            <li><a href="#shipping-policy">Shipping Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Thomas @ iAqua Aquatics</li>
            <br />
            <li>Email: <a href="mailto:iaquaaquatics@gmail.com">iaquaaquatics@gmail.com</a></li>
            <li>Phone: (661) 666 - 2514</li>
            <li>Hours: Everyday from 9:00 AM - 5:00 PM</li>
            <br />
            <br />
            <div className="social-icons" style={{ 
                display: "flex", 
                gap: "15px", 
                alignItems: "center", 
                width: "100%",
                flexWrap: "wrap"
              }}>

              <a href="https://www.facebook.com/iaqua.carbon.9" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/iaquaaquatic/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512">
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm146.4-41.85a17.05,17.05,0,1,0,17,17A17.05,17.05,0,0,0,370.4,160.81ZM448,128V384A128,128,0,0,1,320,512H128A128,128,0,0,1,0,384V128A128,128,0,0,1,128,0H320A128,128,0,0,1,448,128ZM224,152A104,104,0,1,0,328,256,104.12,104.12,0,0,0,224,152Zm0,176A72,72,0,1,1,296,256,72.08,72.08,0,0,1,224,328Z"/>
                </svg>
              </a>
              
              <a href="https://www.tiktok.com/@user65312830385114" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
            </div>
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