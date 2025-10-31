import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Gamepad2, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
  };

  return (
    <>
      <Helmet>
        <title>Urys Network | Home</title>
        <meta name="description" content="Welcome to Urys Network, the home of innovative Roblox experiences like Prison Life Reborn." />
      </Helmet>
      <motion.div
        className="min-h-[calc(100vh-150px)] flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <img src="https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/de74cc6a55543e67b44ed86a33a4a014.png" className="h-24 w-24 drop-shadow-[0_0_15px_rgba(74,144,226,0.5)]" alt="Urys Network Logo" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400"
          >
            Urys Network
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300"
          >
            Crafting the next generation of Roblox experiences. Dive into our world and discover what's next.
          </motion.p>

          <motion.div variants={itemVariants}>
            <NavLink
              to="/games"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Gamepad2 className="w-6 h-6 mr-3" />
              Explore Our Game
              <ArrowRight className="w-5 h-5 ml-2" />
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;