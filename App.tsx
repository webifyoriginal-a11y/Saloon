import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Booking from './pages/Booking';
import { PageRoutes } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={PageRoutes.HOME} element={<Home />} />
          <Route path={PageRoutes.SERVICES} element={<Services />} />
          <Route path={PageRoutes.GALLERY} element={<Gallery />} />
          <Route path={PageRoutes.ABOUT} element={<About />} />
          <Route path={PageRoutes.BOOKING} element={<Booking />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;