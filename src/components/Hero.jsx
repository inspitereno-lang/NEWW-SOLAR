import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-primary pt-20">
      <div className="absolute inset-0 z-0 scale-105">
        <img
          className="w-full h-full object-cover opacity-70"
          alt="Cinematic luxury Kerala home with integrated solar roof tiles in misty morning lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8DTt1FMneC7ntKHHCboiV1H0ZREJ4eA8crlL1_vdlVFbud_Xkku8QpnWPu6IHa0bWIJhzP69S9v76Rvry2Kxyv0qZiDbO2fVIfa73ls3Foi1SO9uJe3fpIyYrhrC3Gz3dVOPw05emuwx9zGRNDnyobZPksd2yfjq_DaMhaHWHybKk1hQPTTxPbndMahHpmMz6tc3wezlmDBmsiifs0VwxGvpKcGxo9G8GCRRSjuYGxw6cUaOniShJaM9s9Hp0nnfM6-tpEoHc8g4"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="inline-flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-secondary"></div>
            <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.3em]">The Architecture of Light</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-light text-white leading-[1.05] tracking-tighter">
            Precision <br className="hidden md:block" />
            <span className="hidden md:inline font-extrabold">Sustainability</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light tracking-wide">
            Refining the Kerala energy landscape through sophisticated solar integration. We don't just install panels; we design ecosystems for the modern visionary home.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <button className="px-12 py-5 bg-white text-primary rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all shadow-2xl">
              Begin Consultation
            </button>
            <button className="px-8 py-5 flex items-center gap-4 text-white text-xs font-bold uppercase tracking-[0.2em] group">
              Explore Gallery <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-2">trending_flat</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-end">
          <div className="glass-card p-12 rounded-[4rem] w-full max-w-sm relative">
            <div className="space-y-10">
              <div className="flex items-end justify-between">
                <span className="text-4xl font-headline font-extrabold text-white">98<span className="text-secondary text-2xl">%</span></span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Efficiency</span>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-headline font-extrabold text-white">25<span className="text-secondary text-2xl">Y</span></span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Guaranteed</span>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-headline font-extrabold text-white">0.0<span className="text-secondary text-2xl">CO2</span></span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
