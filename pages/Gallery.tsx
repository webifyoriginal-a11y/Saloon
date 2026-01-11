import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1595476103518-3c180888e70a?q=80&w=600&auto=format&fit=crop', // Blow dry / Hairdresser
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop', // Hair cutting action
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop', // Interior
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop', // Spa
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop', // Portrait
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop', // Makeup/Tools
  'https://images.unsplash.com/photo-1580618671958-5963172908cb?q=80&w=600&auto=format&fit=crop', // Model Portrait
  'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=600&auto=format&fit=crop', // Detail/Texture
];

const Gallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-stone-900/30 backdrop-blur-md py-20 px-6 text-center border-b border-white/5">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 fade-in drop-shadow-lg">The Collection</h1>
        <p className="text-stone-300 max-w-2xl mx-auto text-xl font-light fade-in">A visual journey through our finest work and serene spaces.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group overflow-hidden rounded-lg fade-in shadow-2xl bg-stone-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={src} 
                alt={`Gallery item ${index + 1}`} 
                onError={handleImageError}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-white font-serif italic text-3xl tracking-wide mb-2">
                    Lumière
                  </span>
                  <div className="w-8 h-px bg-[#e7c8a0] mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;