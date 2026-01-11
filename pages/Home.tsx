import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { PageRoutes, Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Sarah Al-Maktoum", role: "VIP Client", text: "The most exquisite salon experience in Dubai. The attention to detail is unmatched.", rating: 5 },
  { id: 2, name: "Jessica Wright", role: "Fashion Editor", text: "Lumière isn't just a salon, it's a sanctuary. My hair has never looked better.", rating: 5 },
  { id: 3, name: "Nour El-Sherif", role: "Actress", text: "Professional, private, and absolutely perfect. The nail technicians are true artists.", rating: 5 },
];

const heroImages = [
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1920&auto=format&fit=crop", // Stylist working (Dark/Moody)
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop", // Salon Interior (Classic Luxury)
  "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=1920&auto=format&fit=crop", // Elegant Portrait (Dark Background)
];

const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-950">
        {/* Animated Slideshow Background */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentHeroIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            <div className={`w-full h-full bg-stone-950 ${index === currentHeroIndex ? 'animate-kenburns' : ''}`}>
               <img 
                src={src} 
                alt="Luxury Salon Ambience" 
                className="w-full h-full object-cover filter brightness-[0.4]"
                onError={handleImageError}
              />
            </div>
          </div>
        ))}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-[#1c1917]/60 z-1 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto fade-in">
          <h2 className="text-[#e7c8a0] text-xs md:text-sm uppercase tracking-[0.4em] mb-8 animate-pulse">Welcome to Lumière</h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
            Your Beauty, <br/>
            <span className="italic font-light text-white/90">Our Passion</span>
          </h1>
          <p className="text-stone-200 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Luxury hair, nails & beauty services tailored for the modern woman in an elegant, calm sanctuary.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button to={PageRoutes.BOOKING} variant="primary" className="shadow-2xl shadow-[#e7c8a0]/20">Book Appointment</Button>
            <Button to={PageRoutes.SERVICES} variant="outline" className="backdrop-blur-sm">View Services</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-white/5 relative bg-stone-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="text-5xl md:text-6xl font-serif text-[#e7c8a0] mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-glow">3,500+</div>
            <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Happy Clients</div>
          </div>
          <div className="group">
            <div className="text-5xl md:text-6xl font-serif text-[#e7c8a0] mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-glow">15+</div>
            <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Master Stylists</div>
          </div>
          <div className="group">
            <div className="text-5xl md:text-6xl font-serif text-[#e7c8a0] mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-glow">4.9</div>
            <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Average Rating</div>
          </div>
        </div>
      </section>

      {/* Intro Feature */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-full h-full border border-[#e7c8a0]/20 rounded-lg transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative overflow-hidden rounded-lg bg-stone-800">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" 
                  alt="Salon Detail - Scissors and Comb" 
                  className="relative rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="text-[#e7c8a0] text-sm uppercase tracking-widest mb-4">The Experience</h3>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Elevated Beauty in <br/>Every Detail</h2>
              <p className="text-stone-300 mb-6 leading-relaxed text-lg font-light">
                Step into a world where time slows down. At Lumière, we combine advanced beauty techniques with time-honored traditions to provide an experience that is as rejuvenating as it is beautifying.
              </p>
              <p className="text-stone-400 mb-10 leading-relaxed font-light">
                Our flagship salon in Dubai offers a private retreat for those who seek the exceptional. From our signature hair treatments to our bespoke nail artistry, perfection is our only standard.
              </p>
              <Button to={PageRoutes.ABOUT} variant="outline">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle dark backdrop for readability */}
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Client Love</h2>
            <div className="w-24 h-1 bg-[#e7c8a0] mx-auto rounded-full opacity-60"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="glass-card p-10 rounded-2xl hover:transform hover:-translate-y-2 transition-transform duration-500 group">
                <div className="flex mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#e7c8a0] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-200 mb-8 italic leading-relaxed text-lg font-light">"{review.text}"</p>
                <div>
                  <h4 className="text-white font-serif text-xl">{review.name}</h4>
                  <p className="text-[#e7c8a0] text-xs uppercase tracking-wider mt-1 font-bold opacity-80">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden border-t border-white/5 bg-stone-900">
        {/* Animated Background for CTA */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1920&auto=format&fit=crop" 
            alt="Abstract Gold Texture Background" 
            className="w-full h-full object-cover opacity-20 animate-pulse" 
            style={{ animationDuration: '8s' }} 
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-lg">Ready to Glow?</h2>
          <p className="text-stone-300 text-xl mb-12 max-w-xl mx-auto font-light">Book your appointment today and let our experts take care of the rest.</p>
          <Button to={PageRoutes.BOOKING} variant="primary" className="text-lg px-14 py-5 shadow-[0_0_30px_rgba(231,200,160,0.3)]">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;