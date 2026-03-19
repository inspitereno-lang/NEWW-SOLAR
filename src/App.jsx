import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Hero from './components/Hero';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="bg-background text-on-background font-body antialiased selection:bg-secondary/30 selection:text-primary">
      <Navbar onCartClick={toggleCart} />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      
      <main>
        <Hero />
        <Products />
        <Philosophy />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
