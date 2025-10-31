import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// HOW TO EDIT THIS PAGE:
// This page is built with sections. Each section has a `title` and `content`.
// To change the text, simply edit the strings inside the `sections` array below.
// You can add new sections by copying the format.
// `content` can be a simple string or a JSX element for more complex formatting like lists.

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Urys Network website (the "Service"), or any games and services provided by Urys Network, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.`
  },
  {
    title: "2. Changes to Terms",
    content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`
  },
  {
    title: "3. User Conduct",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>You agree not to use the Service to engage in any illegal, abusive, or disruptive behavior.</li>
        <li>You are responsible for any content you create or share within our services.</li>
        <li>Exploiting, cheating, or using unauthorized third-party software in our games is strictly prohibited.</li>
        <li>Harassment, hate speech, and any form of toxicity towards other players or staff will not be tolerated.</li>
      </ul>
    )
  },
  {
    title: "4. Intellectual Property",
    content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Urys Network and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Urys Network.`
  },
  {
    title: "5. Termination",
    content: `We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.`
  },
  {
    title: "6. Disclaimer",
    content: `Our Service is provided on an "AS IS" and "AS AVAILABLE" basis. Urys Network makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.`
  },
  {
    title: "7. Governing Law",
    content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Urys Network operates, without regard to its conflict of law provisions.`
  },
  {
    title: "8. Contact Us",
    content: `If you have any questions about these Terms, please contact us through our official Discord server.`
  }
];

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

const ToS = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Urys Network</title>
        <meta name="description" content="Terms of Service for Urys Network and its associated games and services." />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="py-12 md:py-20"
      >
        <div className="max-w-4xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-lg border border-slate-800 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400">Terms of Service</h1>
            <p className="mt-4 text-lg text-slate-400">Last updated: October 31, 2025</p>
          </div>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-blue-300 mb-3">{section.title}</h2>
                <div className="text-slate-300 leading-relaxed">{section.content}</div>
              </motion.section>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ToS;