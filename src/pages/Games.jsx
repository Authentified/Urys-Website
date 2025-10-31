import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const GameCard = () => {
  const thumbnails = [
    "https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/c9536e3086800229c4bf7d12449fb612.png",
    "https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/d1e8b0d4b10123ebfee48f6f96abbb9c.png",
    "https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/8c3b181e77cc8b275a1b364c547bb4da.png"
  ];

  return (
    <motion.div 
      className="bg-slate-900/50 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-blue-700 hover:shadow-blue-600/30"
      whileHover={{ y: -10 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
        <div className="p-8 flex flex-col justify-between">
          <div>
            <Badge variant="destructive" className="mb-4 text-lg">COMING SOON</Badge>
            <img src="https://horizons-cdn.hostinger.com/876ba29f-1389-4e7c-a5af-fcf70b0be2ed/b1867ce0f6f4e8e63ec0cde13e92c9d2.png" alt="Prison Life Reborn Logo" className="w-full max-w-sm mb-4"/>
            <p className="text-slate-400 text-lg mb-6">
              Experience the definitive prison escape adventure. Reimagined, rebuilt, and reborn. Prepare for an intense and strategic gameplay experience.
            </p>
          </div>
          <a href="https://www.roblox.com/games/124304319066743/Prison-Life-REBORN" target="_blank" rel="noopener noreferrer">
             <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg">
              View on Roblox
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-px">
          {thumbnails.map((src, index) => (
            <img key={index} src={src} alt={`Prison Life Reborn Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};


const Games = () => {
  return (
    <>
      <Helmet>
        <title>Our Games | Urys Network</title>
        <meta name="description" content="Explore the games developed by Urys Network, including the upcoming Prison Life Reborn." />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="py-12 md:py-20"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400">Our Game</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">The flagship title currently under development by the Urys Network team.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <GameCard />
        </div>
      </motion.div>
    </>
  );
};

export default Games;