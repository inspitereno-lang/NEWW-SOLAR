import React from 'react';

const Products = () => {
  const productList = [
    {
      title: "V-Series Tiles",
      label: "Heritage Line",
      description: "Monocrystalline cells integrated seamlessly into traditional roofing aesthetics.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIjhnEOjMUURqjFDvDEXHkVpLNIhuIGuY7hwlnpUFOjXM1bijGNbmH08EbsdEK_8Ng6gKR2pzbfo7AjC3KSJxfLGa0vgNhr4JgcckpRvD8xqowi06veWR3AVsZlw4G-UBi6Cqp6oKbUFJt2w3WvPfyaQek--Et5XfoZy_XrMgsHQBhC2qRJVo2HKlbyU3Qc9X6-5MLafzs8uEZQUGoXzwFWT_Scgeq_D070kY-VLNz7xwr9n6XYiTq0H4pjPbzrG-KN8cg2PLHmGE"
    },
    {
      title: "Hyper-Flow",
      label: "Thermal Edge",
      description: "Advanced water heating designed for tropical high-humidity performance.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAalgdvFjZI7UIwAF9SKQ_9v8XyDTEBbneYWmuigySlRUczcazdFntH4LeSzAY_CJCHzCMeBp6ggiwKKm3y3SH1Ir6S4Fz-RqIv4uf3aJxQQOA-ZmZbEiQT89jfhBUKHtN8m_jM6CHFvMaBQ9CP0RHQ-beFFssgQ99lKX93PNGXDK5Eg28P3jpnVupu0eIdxOPSWKqT-Ln0SyMljy5roNtA565pwGqJvbouJHWKDHx1jlvEkNeOsLyDdGaX4M5Kz_rCdcUdRv6lgJY"
    },
    {
      title: "Quantum-Core",
      label: "Energy Vault",
      description: "Sophisticated Lithium-Iron-Phosphate storage with AI grid management.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWvqvqTqbmoM7aF88sbdzyTaid-1uqkSyBlm3if7QLORndnTKsSm1_H7oYjtt1Sug-Q2hfqtZ1iumhoWPsXZ_uoW-8IWXNhCQsovgwm7X0_eOqe5TKx2DpcKnkLjIII7MefpGEuIs-QKDgl1xy-GOSVPKpWy9Cx9HAu3BlRqVHyRm-VGleGY-LXm8WMvPfcp04003rpMlWqE4bRJ_CTU5py_DMAs84Gg3jqQeY6z01TeZcG3hSALLoUldVQ4LuMQ4JqAmrttS-Ca0"
    }
  ];

  return (
    <section className="py-40 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8 mb-32">
          <label className="text-[11px] font-extrabold text-secondary uppercase tracking-[0.4em]">Curated Inventory</label>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary tracking-tighter">The Solar Collection.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {productList.map((product, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden editorial-shadow transition-all duration-700 group-hover:scale-[1.02]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={product.title} 
                  src={product.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="pt-10 space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-headline font-bold text-primary tracking-tight">{product.title}</h3>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{product.label}</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed">{product.description}</p>
                <button className="flex items-center gap-3 text-primary text-[11px] font-bold uppercase tracking-widest pt-4 group">
                  Inquire Details <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-1">north_east</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
