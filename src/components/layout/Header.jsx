import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/de74cc6a55543e67b44ed86a33a4a014.png" className="h-10" alt="Urys Network Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Urys Network</span>
  </NavLink>
);

const NavLinks = ({ isMobile, closeMenu }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Team', path: '/team' },
  ];

  const linkClass = 'block py-2 px-3 text-gray-300 rounded hover:bg-gray-700/50 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300';
  const activeLinkClass = 'text-white bg-blue-600 md:bg-transparent md:text-blue-500';

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const navClass = isMobile ? 'flex flex-col items-center space-y-4 mt-8' : 'font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800/50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent backdrop-blur-sm';

  return (
    <ul className={navClass}>
      {links.map((link, i) => (
        <motion.li key={link.name} custom={i} variants={linkVariants} initial="hidden" animate="visible" onClick={isMobile ? closeMenu : undefined}>
          <NavLink to={link.path} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`} end>
            {link.name}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <NavLinks />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl pb-8"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLinks isMobile={true} closeMenu={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;