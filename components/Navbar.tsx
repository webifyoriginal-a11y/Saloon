import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoutes } from '../types';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: PageRoutes.HOME },
    { name: 'Services', path: PageRoutes.SERVICES },
    { name: 'Gallery', path: PageRoutes.GALLERY },
    { name: 'About', path: PageRoutes.ABOUT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isMobileMenuOpen
          ? 'bg-transparent border-transparent py-4' // Removing backdrop-blur allows the fixed overlay to cover the full viewport
          : isScrolled
            ? 'bg-stone-950/90 backdrop-blur-md border-white/5 py-4' 
            : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-serif italic text-[#e7c8a0] tracking-tighter z-50 relative">
          Lumière
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                isActive(link.path) ? 'text-[#e7c8a0]' : 'text-stone-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button to={PageRoutes.BOOKING} variant="primary" className="ml-4 py-2 px-6 text-xs">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-stone-100 relative focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}>
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-stone-950 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="flex flex-col space-y-8 text-center p-6 w-full max-w-md">
             {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-3xl font-serif text-stone-300 hover:text-[#e7c8a0] transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 flex justify-center">
               <Button to={PageRoutes.BOOKING} variant="primary" className="text-lg px-10 py-4 w-full md:w-auto">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;