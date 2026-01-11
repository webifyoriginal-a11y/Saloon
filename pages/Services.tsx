import React, { useState } from 'react';
import { ServiceCategory } from '../types';

const serviceData: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', // Stylist working
    items: [
      { id: 'h1', name: 'Signature Cut & Blowdry', price: '350', description: 'Precision cutting tailored to your face shape, finished with a luxury blowout.' },
      { id: 'h2', name: 'Balayage & Color Correction', price: '850', description: 'Hand-painted highlights for a natural, sun-kissed look or expert color correction.' },
      { id: 'h3', name: 'Royal Hair Treatment', price: '450', description: 'Deep conditioning caviar treatment to restore shine and vitality.' },
    ]
  },
  {
    id: 'nails',
    title: 'Nail Couture',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop', // Manicure close-up
    items: [
      { id: 'n1', name: 'Gel Manicure', price: '180', description: 'Long-lasting gel polish with cuticle care and hand massage.' },
      { id: 'n2', name: 'Luxury Spa Pedicure', price: '250', description: 'Exfoliation, mask, hot towel wrap, and prolonged massage.' },
      { id: 'n3', name: 'Nail Art Extensions', price: '400', description: 'Bespoke designs and sculpting for length and strength.' },
    ]
  },
  {
    id: 'spa',
    title: 'Spa & Treatments',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', // Spa massage
    items: [
      { id: 's1', name: 'Deep Tissue Massage', price: '400', description: 'Relieve tension and stress with our therapeutic deep tissue techniques.' },
      { id: 's2', name: 'Gold Radiance Facial', price: '650', description: '24k gold infused facial for immediate glow and anti-aging benefits.' },
    ]
  }
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('hair');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-stone-900/30 backdrop-blur-md py-20 px-6 text-center border-b border-white/5">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 fade-in drop-shadow-lg">Our Services</h1>
        <p className="text-stone-300 max-w-2xl mx-auto text-xl font-light fade-in">Explore our menu of luxury treatments designed to rejuvenate your body and spirit.</p>
      </div>

      {/* Tabs / Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in">
          {serviceData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#e7c8a0] text-stone-900 shadow-[0_0_20px_rgba(231,200,160,0.3)] scale-105'
                  : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white backdrop-blur-sm'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start fade-in">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group bg-stone-800">
            <div className="absolute inset-0 border border-white/10 z-10 rounded-2xl pointer-events-none"></div>
            {serviceData.map((cat) => (
              <img
                key={cat.id}
                src={cat.image}
                alt={cat.title}
                onError={handleImageError}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${
                  activeCategory === cat.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none"></div>
          </div>

          {/* List Side */}
          <div className="space-y-6">
            {serviceData.find(c => c.id === activeCategory)?.items.map((item, idx) => (
              <div 
                key={item.id} 
                className="glass-card p-8 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-pointer group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#e7c8a0] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[#e7c8a0] font-bold whitespace-nowrap ml-4 text-lg">AED {item.price}+</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;