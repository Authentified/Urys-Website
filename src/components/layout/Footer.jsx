import React from 'react';
import { NavLink } from 'react-router-dom';

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

const DiscordIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.22,2.008A12.7,12.7,0,0,0,15.65,0H15.6C15.05,0.58,14.53,1.14,14,1.69a10.2,10.2,0,0,0-8,0C5.47,1.14,4.95,0.58,4.4,0H4.35A12.7,12.7,0,0,0,0,5.47V18.1a3.06,3.06,0,0,0,3.13,3.09H5.75l0.4-1.57a8.45,8.45,0,0,1-1.6-1.42,1.1,1.1,0,0,1-.13-1.5,1,1,0,0,1,1.44-.19,9.15,9.15,0,0,0,3.47,2.1,11,11,0,0,0,10.12,0,9.15,9.15,0,0,0,3.47-2.1,1,1,0,0,1,1.44.19,1.1,1.1,0,0,1-.13,1.5,8.45,8.45,0,0,1-1.6,1.42l0.4,1.57H20.87A3.06,3.06,0,0,0,24,18.1V5.47A12.45,12.45,0,0,0,20.22,2.008ZM8,13.83a2.33,2.33,0,0,1-2.43-2.44A2.33,2.33,0,0,1,8,8.95a2.33,2.33,0,0,1,2.43,2.44A2.33,2.33,0,0,1,8,13.83Zm8,0a2.33,2.33,0,0,1-2.43-2.44A2.33,2.33,0,0,1,16,8.95a2.33,2.33,0,0,1,2.43,2.44A2.33,2.33,0,0,1,16,13.83Z" />
  </svg>
);

const socialLinks = [
  {
    name: 'Discord',
    icon: DiscordIcon,
    href: 'https://discord.gg/y8aFXXsN',
  },
  {
    name: 'Roblox',
    icon: RobloxIcon,
    href: 'https://www.roblox.com/communities/4131683/urys-cc#!/about',
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-gray-800 z-10 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
             <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Urys Network. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <social.icon className="h-7 w-7" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end">
            <NavLink to="/terms-of-service" className="text-sm text-gray-400 hover:text-white hover:underline">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;