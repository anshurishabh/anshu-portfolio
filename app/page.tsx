import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor'; // <-- Imported New Cursor Module

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020005] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative md:cursor-none">
      
      {/* Injected Custom Laser Trailing Grid Cursor */}
      <CustomCursor />

      {/* Absolute Header Inject Layer */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Global Ambient Glow Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute top-[20%] right-[-25%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[140px]" />
        <div className="absolute top-[60%] left-[-30%] w-[700px] h-[700px] rounded-full bg-indigo-900/5 blur-[160px]" />
      </div>

      {/* Main Content Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 pt-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates /> 
        <Contact />
      </div>
    </main>
  );
}