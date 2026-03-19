import React from 'react';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full border border-black/5 shadow-lg pointer-events-auto">
        <div className="text-xl font-extrabold tracking-tighter text-primary font-headline">
          Sans <span className="font-light text-secondary">Madathil</span>
        </div>
        <div className="hidden md:flex items-center space-x-12 tracking-tight text-[13px] font-bold uppercase tracking-widest">
          <a className="text-primary/60 hover:text-primary transition-all duration-300" href="#products">Collection</a>
          <a className="text-primary/60 hover:text-primary transition-all duration-300" href="#services">Experience</a>
          <a className="text-primary/60 hover:text-primary transition-all duration-300" href="#why-us">Philosophy</a>
        </div>
        <div className="flex items-center gap-6">
          <button 
            className="material-symbols-outlined text-primary hover:text-secondary transition-colors text-2xl" 
            id="cart-trigger"
            onClick={onCartClick}
          >
            shopping_bag
          </button>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-secondary transition-all hover:-translate-y-0.5 shadow-md">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
