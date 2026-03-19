import React from 'react';

const Philosophy = () => {
  const philosophies = [
    {
      icon: "workspace_premium",
      title: "Swiss-Grade Spec",
      description: "Materials sourced from global leaders to endure Kerala's monsoon extremes."
    },
    {
      icon: "eco",
      title: "Ecological Integrity",
      description: "100% recyclable components and ethical supply chain transparency."
    },
    {
      icon: "monitoring",
      title: "Neural Tracking",
      description: "Proprietary dashboard providing millisecond insights into your ecosystem."
    },
    {
      icon: "savings",
      title: "Wealth Retention",
      description: "Strategic installations designed to maximize real estate appraisal value."
    }
  ];

  return (
    <section className="py-40 bg-primary relative overflow-hidden" id="why-us">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-32 space-y-10">
          <label className="text-[11px] font-bold text-secondary uppercase tracking-[0.4em]">Our Philosophy</label>
          <h2 className="text-4xl md:text-7xl font-headline font-light text-white leading-tight">
            Beyond Energy. <br/><span className="font-extrabold italic">Pure Artistry.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed font-light">
            We believe energy should be felt, not seen. Our engineering team merges invisible performance with high-end architectural aesthetics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {philosophies.map((item, idx) => (
            <div key={idx} className="glass-card p-12 rounded-[2.5rem] space-y-12 group hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-5xl text-secondary emerald-glow group-hover:scale-110 transition-transform block">
                {item.icon}
              </span>
              <div className="space-y-4">
                <h4 className="text-xl font-extrabold text-white tracking-tight">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
