import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 border-b border-white/5 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-8">
          <div className="text-2xl font-extrabold tracking-tighter text-white font-headline">
            Sans <span className="font-light text-secondary">Madathil</span>
          </div>
          <p className="text-white/40 leading-relaxed font-light max-w-sm">
            Kerala's premier curators of solar architecture. Merging the power of the sun with the elegance of modern living.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Discovery</h5>
            <ul className="space-y-3">
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">The Collection</a></li>
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">Project Gallery</a></li>
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">Case Studies</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Company</h5>
            <ul className="space-y-3">
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">Atelier Locations</a></li>
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">Philosophy</a></li>
              <li><a className="text-white/40 hover:text-secondary text-sm transition-colors font-light" href="#">Careers</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Newsletter</h5>
            <div className="flex border-b border-white/10 pb-2">
              <input className="bg-transparent border-none text-sm text-white focus:ring-0 p-0 placeholder-white/20 w-full" placeholder="Email Address" type="email"/>
              <button className="material-symbols-outlined text-secondary text-xl">arrow_right_alt</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/20 text-xs font-light">© 2024 Sans Madathil Solar. Handcrafted for Kerala.</p>
        <div className="flex gap-12">
          <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Heritage Verified
          </span>
          <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Zero Emission
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
