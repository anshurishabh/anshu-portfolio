"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" }, // Smooth scroll integration
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#030014]/80 backdrop-blur-md border-white/5 py-4' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout Matrix - Matching image_963ac7.png */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          
          {/* Left Column: Social Text Anchors */}
          <div className="flex items-center space-x-6 justify-start text-xs font-medium tracking-wide">
            <a 
              href="https://github.com/anshurishabh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>

          {/* Center Column: Highlighted Brand Title */}
          <div className="flex justify-center">
            <a href="#" className="text-xl font-black tracking-wider text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              ANSHU.DEV
            </a>
          </div>

          {/* Right Column: Menu Links Group */}
          <div className="flex items-center space-x-6 lg:space-x-8 justify-end text-sm font-medium">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs lg:text-sm whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Mobile View Container - Clean Minimal Support */}
        <div className="flex md:hidden items-center justify-between w-full">
          <a href="#" className="text-lg font-black tracking-wider text-purple-400">
            ANSHU.DEV
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Sidebar Dropdown Expansion */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#030014]/95 border-b border-white/5 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/5 text-xs">
              <a href="https://github.com/anshurishabh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}