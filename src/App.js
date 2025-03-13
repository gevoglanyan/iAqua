import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Fish from './components/Fish';
import Plant from './components/Plant';
import Carbon from "./components/Carbon"
import About from './components/About';
import HowToOrder from './components/HowToOrder';
import Disclaimer from './components/Disclaimer';
import ShippingPolicy from './components/ShippingPolicy';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="links"></div>
      <Header />
      <Hero />
      <main>
        <Fish />
        <Plant />
        <Carbon />
        <About />
        <HowToOrder />
        <Disclaimer />
        <ShippingPolicy />
      </main>
      <Footer />
    </>
  );
}

export default App;