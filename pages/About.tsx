import React from 'react';
import Button from '../components/Button';
import { PageRoutes } from '../types';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-24 fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-lg">Our Philosophy</h1>
          <div className="w-px h-24 bg-gradient-to-b from-[#e7c8a0] to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-stone-200 font-light max-w-4xl mx-auto italic leading-relaxed">
            "Beauty is not just about how you look, but how you feel in the moment."
          </p>
        </div>

        {/* Story Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 glass-panel p-8 md:p-12 rounded-3xl">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Beginning</h2>
            <p className="text-stone-300 leading-loose mb-6 font-light text-lg">
              Founded in 2018 in the heart of Dubai, Lumière was born from a desire to create a sanctuary amidst the city's bustle. We envisioned a space that felt less like a salon and more like a private retreat—a place where modern luxury meets timeless grace.
            </p>
            <p className="text-stone-300 leading-loose font-light text-lg">
              Every curve of our architecture, every texture in our interior, and every product on our shelves has been curated to provide an unparalleled sense of calm and exclusivity.
            </p>
          </div>
          <div className="relative fade-in delay-100 group">
             <div className="absolute -inset-4 border border-white/10 rounded-lg transform rotate-2 transition-transform duration-700 group-hover:rotate-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&w=800&auto=format&fit=crop" 
              alt="Salon Interior with Chairs" 
              onError={handleImageError}
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl w-full bg-stone-800 min-h-[300px]" 
            />
          </div>
        </div>

        {/* Story Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
           <div className="relative order-2 md:order-1 fade-in group">
             <div className="absolute -inset-4 border border-[#e7c8a0]/20 rounded-lg transform -rotate-2 transition-transform duration-700 group-hover:rotate-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop" 
              alt="Premium Beauty Products Texture" 
              onError={handleImageError}
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl w-full bg-stone-800 min-h-[300px]" 
            />
          </div>
          <div className="order-1 md:order-2 fade-in delay-100 pl-0 md:pl-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Mastery & Care</h2>
            <p className="text-stone-300 leading-loose mb-6 font-light text-lg">
              Our team is a collective of international artists, each a master of their craft. From Parisian hair sculpting techniques to precision nail artistry, we bring global expertise to our local clientele.
            </p>
            <p className="text-stone-300 leading-loose mb-10 font-light text-lg">
              We believe in sustainable luxury. All our products are ethically sourced, cruelty-free, and chosen for their superior performance and gentleness on your body.
            </p>
            <Button to={PageRoutes.BOOKING} variant="primary" className="text-lg px-10">Meet Our Stylists</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;