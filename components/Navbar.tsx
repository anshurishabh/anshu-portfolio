"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "// ABOUT", href: "#about" },
    { name: "// SKILLS", href: "#skills" },
    { name: "// PROJECTS", href: "#projects" },
    { name: "// CERTIFICATES", href: "#certificates" },
    { name: "// CONTACT", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#02000a]/90 backdrop-blur-md border-purple-500/20 py-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid grid-cols-3 items-center w-full">
          
          <div className="flex items-center space-x-6 justify-start text-[11px] font-mono tracking-widest">
            <a href="https://github.com/anshurishabh" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
              <span className="text-cyan-500">&gt;</span> GITHUB
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
              <span className="text-cyan-500">&gt;</span> LINKEDIN
            </a>
          </div>

          <div className="flex justify-center">
            <a href="#" className="text-xl font-black tracking-widest text-cyan-400 font-mono filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse">
              ANSHU<span className="text-purple-500">_CORE.EXE</span>
            </a>
          </div>

          <div className="flex items-center space-x-6 justify-end text-xs font-mono tracking-wider">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-gray-400 hover:text-cyan-400 transition-all duration-200 relative group py-1">
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_8px_#22d3ee]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <a href="#" className="text-lg font-mono font-bold text-cyan-400">ANSHU_CORE</a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 focus:outline-none">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}