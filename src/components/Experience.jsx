import React from 'react';

const Experience = () => {
  return (
    <section className="py-40 bg-surface-variant/30" id="services">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <label className="text-[11px] font-bold text-secondary uppercase tracking-[0.4em]">The Experience</label>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter">Your transition, <br/>seamlessly curated.</h2>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            From structural harmonics to digital grid orchestration, our concierge service ensures your journey to sustainable luxury is effortless.
          </p>
          <div className="space-y-10 pt-8">
            <div className="flex gap-8 group">
              <div className="w-14 h-14 shrink-0 rounded-full border border-secondary/30 flex items-center justify-center text-secondary font-extrabold text-sm group-hover:bg-secondary group-hover:text-white transition-all">01</div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-primary">Architectural Alignment</h4>
                <p className="text-sm text-on-surface-variant font-light">We collaborate with your architects to ensure solar integration enhances structural beauty.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-14 h-14 shrink-0 rounded-full border border-secondary/30 flex items-center justify-center text-secondary font-extrabold text-sm group-hover:bg-secondary group-hover:text-white transition-all">02</div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-primary">Regulatory Stewardship</h4>
                <p className="text-sm text-on-surface-variant font-light">End-to-end management of KSEB grid approvals and luxury government incentives.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-[4rem] shadow-2xl overflow-hidden relative group">
            <img 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              alt="Technical solar installation detail" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8XeMXNBp9kPBqDRGat094vikcroae7lxVu1DVKKsvmgZOgIQg8TX2FFWXFZKwAWlHrpS0VSeZbJcxfuchjoKd8t1hS-a7D-SvazaH3gkiDXPRAhZ7ALFzJxwAm_DGSq2-N_nBrClzOIyTegnN7gB5RSh3tCZ-SDhacSCnUQdnK1xGtcqYNasSnEGToA7i1S4CWcXAT7tfWXmaYr3SUapAluxLFS2wxbKqDWC7qszHAZRUMf662HUNHW6Q-0dpctA2s7w_-85qGlU"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-12 left-12 right-12 glass-card-light p-10 rounded-3xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-extrabold text-secondary mb-1">Watch</p>
                  <p className="text-lg font-bold text-primary leading-tight">The Installation Artistry</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 border-[1px] border-secondary/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
