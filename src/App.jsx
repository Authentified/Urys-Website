import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Games from '@/pages/Games';
import Team from '@/pages/Team';
import ToS from '@/pages/ToS';

const Background = () => {
  useEffect(() => {
    const backgroundWrap = document.getElementById('background-wrap');
    if (!backgroundWrap) return;

    // Clear existing bubbles to avoid duplication on re-renders
    while (backgroundWrap.firstChild) {
      backgroundWrap.removeChild(backgroundWrap.firstChild);
    }

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const size = Math.random() * 60 + 20 + 'px';
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.animationDuration = Math.random() * 8 + 7 + 's';
      bubble.style.animationDelay = Math.random() * 5 + 's';
      backgroundWrap.appendChild(bubble);
    }
  }, []);

  return <div id="background-wrap"></div>;
};

function App() {
  const location = useLocation();

  return (
    <div className="dark min-h-screen flex flex-col text-slate-100 relative">
      <Background />
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms-of-service" element={<ToS />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;