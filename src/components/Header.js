// components/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Praharsha HV
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="relative text-white/80 hover:text-cyan-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="relative text-white/80 hover:text-cyan-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <a href="#about" className="text-white/80 hover:text-cyan-400 transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-white/10">
                About
              </a>
              <a href="#projects" className="text-white/80 hover:text-purple-400 transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-white/10">
                Projects
              </a>
              <a href="#contact" className="text-white/80 hover:text-cyan-400 transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-white/10">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
