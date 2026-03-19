import React from 'react';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <aside 
      className={`fixed right-0 h-full w-96 z-[60] bg-white shadow-2xl transition-transform duration-700 ease-in-out flex flex-col p-10 font-body ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      id="cart-drawer"
    >
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-2xl font-headline font-light text-primary">Your Selection</h3>
        <button 
          className="material-symbols-outlined text-primary p-2 hover:bg-surface-variant rounded-full transition-all" 
          onClick={onClose}
        >
          close
        </button>
      </div>
      <div className="flex-grow space-y-8 overflow-y-auto">
        <div className="flex gap-4 items-center group cursor-pointer border-b border-outline-variant pb-6">
          <div className="w-16 h-16 bg-surface-variant rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/40">solar_power</span>
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-sm tracking-tight">V-Series Solar Tiles</h4>
            <p className="text-xs text-secondary font-medium">Ultra High Efficiency</p>
          </div>
        </div>
        {/* Placeholder items */}
        <div className="flex gap-4 items-center opacity-40 grayscale pointer-events-none">
          <div className="w-16 h-16 bg-surface-variant rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">battery_charging_full</span>
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-sm tracking-tight">No Items Added</h4>
          </div>
        </div>
      </div>
      <div className="pt-8 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Estimated Offset</span>
          <span className="font-bold text-primary">12.5 kW/day</span>
        </div>
        <button className="w-full bg-primary text-on-primary py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all shadow-xl">
          Request Design Package
        </button>
      </div>
    </aside>
  );
};

export default CartDrawer;
