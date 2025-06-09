// components/Footer.js
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 px-6 bg-slate-900 border-t border-white/10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Praharsha HV
          </div>
        </div>
        <p className="text-white/60 mb-6">React Developer | 6th Semester Student | Web Enthusiast</p>
        
        <div className="flex items-center justify-center space-x-2 text-white/60 mb-6">
          <span>Made with</span>
          <Heart size={16} className="text-red-400 animate-pulse" />
          <span>and</span>
          <Code size={16} className="text-cyan-400" />
          <span>and lots of</span>
          <Coffee size={16} className="text-amber-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
        <p className="text-white/40 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Praharsha HV. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6 text-sm text-white/60">
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-white/5">
        <p className="text-white/40 text-xs">
          Built with React • Styled with Tailwind CSS • Deployed with ❤️
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

