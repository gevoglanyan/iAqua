import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Fish from './components/Fish';
import Plant from './components/Plant';
import About from './components/About';
import HowToOrder from './components/HowToOrder';
import Disclaimer from './components/Disclaimer';
import ShippingPolicy from './components/ShippingPolicy';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Success from './components/Success';

import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Analytics />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Shop />} />
              <Route path="/fish" element={<Fish />} />
              <Route path="/plant" element={<Plant />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-to-order" element={<HowToOrder />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
