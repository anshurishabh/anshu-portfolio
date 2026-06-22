"use client";
import React, { useEffect, useState } from 'react';

const allSkillsOrdered = [
  // CATEGORY 1: SYSTEM CORE
  { name: "Java Runtime Environment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "SYSTEM_CORE // MODULE_01" },
  { name: "Python Core Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "SYSTEM_CORE // MODULE_01" },
  { name: "C++ Native Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "SYSTEM_CORE // MODULE_01" },
  { name: "SQL Database Kernel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "SYSTEM_CORE // MODULE_01" },
  { name: "TypeScript Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "SYSTEM_CORE // MODULE_01" },
  
  // CATEGORY 2: WEB RUNTIMES
  { name: "Next.JS Framework V15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "WEB_ENGINES // MODULE_02" },
  { name: "React Ecosystem V19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "WEB_ENGINES // MODULE_02" },
  { name: "Node.js Server Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "WEB_ENGINES // MODULE_02" },
  { name: "Tailwind CSS Style Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "WEB_ENGINES // MODULE_02" },
  
  // CATEGORY 3: INTELLIGENCE
  { name: "XGBoost Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", category: "INTELLIGENCE // MODULE_03" },
  { name: "Google Gemini Neural API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", category: "INTELLIGENCE // MODULE_03" },
  { name: "Git Version Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "INTELLIGENCE // MODULE_03" }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="py-24 relative bg-[#010003] font-mono">
      
      {/* Dynamic Pure Hardware CSS Keyframe Injection */}
      <style jsx global>{`
        @keyframes cyberPulseVertical {
          0%, 100% { border-color: rgba(168, 85, 247, 0.2); box-shadow: 0 0 5px rgba(168, 85, 247, 0.05); }
          50% { border-color: rgba(34, 211, 238, 0.5); box-shadow: 0 0 20px rgba(34, 211, 238, 0.15); }
        }
        .animate-vertical-pulse {
          animation: cyberPulseVertical 3s ease-in-out infinite;
        }
      `}</style>

      {/* Main Structural Header */}
      <div className="space-y-4 text-center mb-24">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block tracking-widest">
          [ TECHNICAL_EXPERTISE_TREE ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Linear environment diagnostics. Expanding single-axis vertical stack logs...
        </p>
      </div>

      {/* Container holding the central pipeline track */}
      <div className="max-w-3xl mx-auto px-4 relative">
        
        {/* ⚡ THE CYBER GLOWING VERTICAL AXIS LINE */}
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-0" />

        {/* Endless List Module (One item below another) */}
        <div className="space-y-12 relative z-10">
          {allSkillsOrdered.map((skill, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group relative w-full"
            >
              
              {/* 🟢 Left/Center Timeline Intersection Node */}
              <div className="absolute left-[30px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] z-20" />

              {/* Layout Alignment Logic for perfect symmetry */}
              <div className="flex items-center gap-6 pl-14 sm:pl-0 w-full sm:justify-start group-hover:translate-x-2 transition-transform duration-300">
                
                {/* Ultra-Sized Holographic Tech Icon Container */}
                <div className="w-20 h-20 shrink-0 border bg-black/60 rounded-md p-3.5 flex items-center justify-center transition-all duration-300 group-hover:rotate-6 border-purple-500/10 group-hover:border-cyan-400/80 animate-vertical-pulse shadow-xl relative">
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded transition-colors pointer-events-none" />
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain ${skill.name.includes("Next") ? "invert" : ""}`} 
                  />
                </div>

                {/* Meta Information Container (List-wise description text) */}
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-purple-400 tracking-widest font-bold uppercase bg-purple-950/20 border border-purple-500/10 px-2 py-0.5 rounded inline-block">
                    {skill.category}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase group-hover:text-cyan-400 transition-colors duration-200 block">
                    {skill.name}
                  </h3>
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider">
                    SYSTEM_NODE_STATUS // <span className="text-emerald-500 font-semibold">LOADED_OK</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}