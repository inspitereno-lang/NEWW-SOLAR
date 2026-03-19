import React from 'react';

const Contact = () => {
  return (
    <section className="py-40 bg-white relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]"></div>
          </div>
          <div className="lg:w-5/12 p-16 md:p-24 text-white relative z-10 space-y-16">
            <div className="space-y-6">
              <label className="text-[11px] font-bold text-secondary uppercase tracking-[0.4em]">Get in Touch</label>
              <h2 className="text-4xl font-headline font-extrabold tracking-tight leading-tight">Let's craft your <br/>energy legacy.</h2>
            </div>
            <div className="space-y-10">
              <div className="flex items-center gap-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                  <span className="material-symbols-outlined">explore</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest mb-1">Atelier</h4>
                  <p className="text-lg font-light">Vyttila Experience Center, Kochi</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold opacity-40 uppercase tracking-widest mb-1">Concierge</h4>
                  <p className="text-lg font-light">+91 98460 XXXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 p-16 md:p-24 bg-white/5 backdrop-blur-sm relative z-10">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative border-b border-white/10 pb-4">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Name</label>
                  <input className="w-full bg-transparent border-none p-0 text-white focus:ring-0 text-lg placeholder-white/20 font-light" placeholder="Anjali Menon" type="text"/>
                </div>
                <div className="relative border-b border-white/10 pb-4">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Contact</label>
                  <input className="w-full bg-transparent border-none p-0 text-white focus:ring-0 text-lg placeholder-white/20 font-light" placeholder="+91 00000 00000" type="tel"/>
                </div>
              </div>
              <div className="relative border-b border-white/10 pb-4">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Project Brief</label>
                <textarea className="w-full bg-transparent border-none p-0 text-white focus:ring-0 text-lg placeholder-white/20 font-light resize-none" placeholder="Share your vision..." rows="3"></textarea>
              </div>
              <button className="w-full py-6 bg-secondary text-white rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-primary transition-all shadow-xl" type="submit">
                Send Project Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
