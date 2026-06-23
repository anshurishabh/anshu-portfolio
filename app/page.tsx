import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import AdvancedTerminal from '@/components/AdvancedTerminal';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    /* FIXED: Removed 'md:cursor-none' from the main className to make your native mouse cursor visible again */
    <main className="min-h-screen bg-[#020005] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      
      <CustomCursor />

      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Cyber Dynamic Background Flare Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute top-[20%] right-[-25%] w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[140px]" />
        <div className="absolute top-[60%] left-[-30%] w-[700px] h-[700px] rounded-full bg-indigo-900/5 blur-[160px]" />
      </div>

      {/* Grid Layout Canvas Component Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 pt-12 pb-16">
        
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Certificates /> 

        {/* Live operational metrics console module */}
        <AdvancedTerminal />
        
        <Contact />
        
      </div>
    </main>
  );
}