import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const RobloxIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0L1.706 5.438v13.124L12 24l10.294-5.438V5.438L12 0zm7.13 6.914l-6.315 2.706-6.315-2.706L12 4.208l7.13 2.706zM3.836 7.68l6.315 2.706v8.94l-6.315-3.35V7.68zm16.328 0v8.296l-6.315 3.35v-8.94l6.315-2.706z" />
  </svg>
);


const teamMembers = {
  "Founders": [
    { name: 'OniZox', role: 'Owner', profileUrl: 'https://www.roblox.com/users/719319321/profile' },
    { name: 'VAYRODE', role: 'Owner', profileUrl: 'https://www.roblox.com/users/2415843929/profile' },
  ],
  "Management": [
    { name: 'jbhi', role: 'Manager', profileUrl: 'https://www.roblox.com/users/93453777/profile' },
    { name: 'C0urgi', role: 'Community Manager', profileUrl: 'https://www.roblox.com/users/611496523/profile' },
  ],
  "Development Team": [],
  "Core Assurance": [],
};

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

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MemberCard = ({ name, role, profileUrl }) => (
  <motion.div
    variants={itemVariants}
    className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-2"
  >
    <div className="mb-4">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-lg">
        {name.charAt(0)}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-blue-300 mb-4">{role}</p>
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-600 rounded-md hover:bg-slate-500 transition-colors"
    >
      <RobloxIcon className="w-4 h-4 mr-2" />
      Profile
    </a>
  </motion.div>
);


const Team = () => {
  return (
    <>
      <Helmet>
        <title>The Team | Urys Network</title>
        <meta name="description" content="Meet the talented team behind Urys Network and our games." />
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400">Meet the Team</h1>
          <p className="mt-4 text-lg text-slate-400">The minds behind the operation.</p>
        </div>

        <div className="space-y-16">
          {Object.entries(teamMembers).map(([category, members]) => (
            <section key={category}>
              <h2 className="text-3xl font-bold text-center mb-8 text-white border-b-2 border-blue-500 pb-2 inline-block mx-auto w-full">{category}</h2>
              {members.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {members.map(member => <MemberCard key={member.name} {...member} />)}
                </motion.div>
              ) : (
                <motion.p 
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  className="text-center text-slate-400 italic"
                >
                  This team is currently looking for members.
                </motion.p>
              )}
            </section>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Team;