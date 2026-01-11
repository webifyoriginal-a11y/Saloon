import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif italic text-[#e7c8a0] block mb-6">Lumière</Link>
            <p className="text-stone-400 leading-relaxed text-sm">
              Redefining luxury beauty services in Dubai. Experience elegance, precision, and tranquility in every visit.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Menu</h4>
            <ul className="space-y-4">
              <li><Link to={PageRoutes.SERVICES} className="text-stone-400 hover:text-[#e7c8a0] text-sm uppercase tracking-wide transition-colors">Services</Link></li>
              <li><Link to={PageRoutes.GALLERY} className="text-stone-400 hover:text-[#e7c8a0] text-sm uppercase tracking-wide transition-colors">Gallery</Link></li>
              <li><Link to={PageRoutes.ABOUT} className="text-stone-400 hover:text-[#e7c8a0] text-sm uppercase tracking-wide transition-colors">About Us</Link></li>
              <li><Link to={PageRoutes.BOOKING} className="text-stone-400 hover:text-[#e7c8a0] text-sm uppercase tracking-wide transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li>Downtown Dubai, Blvd Plaza</li>
              <li>Tower 1, Level 3</li>
              <li>+971 4 123 4567</li>
              <li>concierge@lumieresalon.ae</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Hours</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>10:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 18:00</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Lumière Salon Dubai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-stone-400">Instagram</span>
            <span className="cursor-pointer hover:text-stone-400">Facebook</span>
            <span className="cursor-pointer hover:text-stone-400">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;