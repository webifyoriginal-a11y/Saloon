import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative text-stone-100 selection:bg-[#e7c8a0] selection:text-stone-900">
      <AmbientBackground />
      <Navbar />
      <main className="flex-grow z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;