import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              i<span>Aqua</span> Aquatics
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#featured">Featured Fish</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#how-to-order">How to Order</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <h1>Premium Freshwater Fish for Your Aquarium</h1>
        <p>
          Specializing in rare and exotic cichlids, tetras, catfish, and more.
          Directly imported and carefully bred to ensure the highest quality.
        </p>
        <a href="#featured" className="btn">
          Explore Our Collection
        </a>
      </section>

      <section id="featured" className="featured">
        <div className="container">
          <h2 className="section-title">Featured Fish</h2>
          <div className="featured-grid">
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Electric Blue Jack Dempsey" />
              <div className="fish-info">
                <h3 className="fish-name">Electric Blue Jack Dempsey</h3>
                <p className="fish-price">$49.99</p>
                <p className="fish-desc">
                  Vibrant electric blue color. Medium-sized cichlid known for its striking appearance and moderate temperament.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Red Texas Cichlid" />
              <div className="fish-info">
                <h3 className="fish-name">Red Texas Cichlid</h3>
                <p className="fish-price">$89.99</p>
                <p className="fish-desc">
                  Hybrid cichlid with bright red coloration and distinctive pattern. Great centerpiece fish.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Discus - Pigeon Blood" />
              <div className="fish-info">
                <h3 className="fish-name">Discus - Pigeon Blood</h3>
                <p className="fish-price">$79.99</p>
                <p className="fish-desc">
                  Premium grade Pigeon Blood Discus with vibrant red coloration. Captive bred.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="L333 Pleco" />
              <div className="fish-info">
                <h3 className="fish-name">L333 Pleco</h3>
                <p className="fish-price">$39.99</p>
                <p className="fish-desc">
                  Beautiful patterned Pleco that stays relatively small. Great for planted aquariums.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Cardinal Tetra (5 Pack)" />
              <div className="fish-info">
                <h3 className="fish-name">Cardinal Tetra (5 Pack)</h3>
                <p className="fish-price">$24.99</p>
                <p className="fish-desc">
                  Vibrant schooling fish with striking red and blue coloration. Perfect for community tanks.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="German Blue Ram" />
              <div className="fish-info">
                <h3 className="fish-name">German Blue Ram</h3>
                <p className="fish-price">$29.99</p>
                <p className="fish-desc">
                  Peaceful dwarf cichlid with stunning colors. Great for planted community aquariums.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Flowerhorn - Super Red Dragon" />
              <div className="fish-info">
                <h3 className="fish-name">Flowerhorn - Super Red Dragon</h3>
                <p className="fish-price">$149.99</p>
                <p className="fish-desc">
                  Premium grade Flowerhorn with exceptional coloration and kok development. Show quality.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
            
            <div className="fish-card">
              <img src="/api/placeholder/300/200" alt="Koi Angelfish" />
              <div className="fish-info">
                <h3 className="fish-name">Koi Angelfish</h3>
                <p className="fish-price">$34.99</p>
                <p className="fish-desc">
                  Beautiful orange, white and black pattern. Captive bred for color and finnage.
                </p>
                <button className="btn">Contact to Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About iAqua Aquatics</h2>
              <p>
                Welcome to iAqua Aquatics, your premier source for high-quality freshwater fish. We specialize in rare and exotic cichlids, as well as a variety of other freshwater species including tetras, catfish, plecos, and more.
              </p>
              <p>
                With over 15 years of experience in the aquatics hobby, our team is passionate about providing healthy, vibrant fish to hobbyists across the country. We maintain strict quarantine protocols and only ship fish that we would be proud to keep in our own display tanks.
              </p>
              <p>
                Unlike big box stores, we hand-select our fish from trusted breeders and importers, ensuring you receive the healthiest specimens possible. Our small-batch approach allows us to give each fish the attention it deserves before reaching your aquarium.
              </p>
              <p>
                At iAqua Aquatics, we believe in building relationships with our customers. We're always available to provide advice on care, compatibility, and setup to ensure your new fish thrive in their environment.
              </p>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/600/400" alt="iAqua Aquatics Facility" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-order" className="how-to-order">
        <div className="container">
          <h2 className="section-title">How to Order</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Browse Our Collection</h3>
                <p>
                  Explore our featured fish collection on this website. Note down the species you're interested in.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Contact Us</h3>
                <p>
                  Reach out via email, text, or our contact form to inquire about availability, pricing, and shipping options. Let us know which fish you're interested in.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Confirm Your Order</h3>
                <p>
                  We'll confirm availability and provide you with a total price including shipping. Once you approve, we'll arrange payment details.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Secure Payment</h3>
                <p>
                  We accept various payment methods including PayPal, Venmo, and major credit cards. All payments must be received before shipping.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Receive Your Fish</h3>
                <p>
                  We ship every Monday and Tuesday (weather permitting) to ensure your fish arrive safely. All shipments include tracking information and detailed acclimation instructions.
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="contact.html" className="btn">
              Contact Us to Start Your Order
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>iAqua Aquatics</h3>
              <p>
                Providing premium freshwater fish to hobbyists nationwide. Our focus is on quality, health, and exceptional customer service.
              </p>
            </div>
            
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#featured">Featured Fish</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#how-to-order">How to Order</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact Information</h3>
              <ul>
                <li>Email: info@iaquaaquatics.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Hours: Mon-Fri 9am-5pm PST</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 iAqua Aquatics. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
