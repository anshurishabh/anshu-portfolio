"use client";
import React, { useEffect, useState } from 'react';

const skillCategoriesVertical = [
  {
    title: "SYSTEM_LANGUAGES // CORE_LOGIC",
    skills: [
      { name: "Java Runtime Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", code: "0x7F0A1" },
      { name: "Python Core Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", code: "0x7F0B2" },
      { name: "C++ Native Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", code: "0x7F0C3" },
      { name: "SQL Database Kernel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", code: "0x7F0D4" },
      { name: "TypeScript Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", code: "0x7F0E5" }
    ]
  },
  {
    title: "WEB_ENGINES // RUNTIMES_CLUSTER",
    skills: [
      { name: "Next.JS Framework V15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", code: "0x8A10F" },
      { name: "React Ecosystem V19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", code: "0x8A11A" },
      { name: "Node.js Server Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", code: "0x8A12B" },
      { name: "Tailwind CSS Style Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", code: "0x8A13C" }
    ]
  },
  {
    title: "INTELLIGENCE_MODULES // DATA_AI",
    skills: [
      { name: "XGBoost Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", code: "0x9E301" },
      { name: "Google Gemini Neural API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", code: "0x9E312" },
      { name: "Git Version Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", code: "0x9E323" }
    ]
  }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const playHackerPing = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'square'; // Asymmetric vintage hardware tone
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
      gain.gain.setValueAtTime(0.006, audioCtx.currentTime); // Low non-intrusive sound
      gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}
  };

  return (
    <section id="skills" className="py-24 relative bg-[#020005] font-mono overflow-hidden">
      
      {/* 🟢 Advanced Cyber Laser Scanner and Hologram Animation Styles */}
      <style jsx global>{`
        @keyframes cyberScanLine {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes advanced3DOrbit {
          0% { transform: perspective(500px) rotateY(0deg) rotateX(10deg); }
          50% { transform: perspective(500px) rotateY(180deg) rotateX(-10deg); }
          100% { transform: perspective(500px) rotateY(360deg) rotateX(10deg); }
        }
        .animate-scan-line {
          animation: cyberScanLine 2.5s linear infinite;
        }
        .animate-hacker-orbit {
          animation: advanced3DOrbit 12s linear infinite !important;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Cyber Noise Background Grid Layout */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.02),transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-4 text-center mb-24 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block tracking-widest filter drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          [ SUBSYSTEM_EXPERTISE_CORE ]
        </h2>
        <p className="text-cyan-400/70 max-w-2xl mx-auto text-[11px] tracking-widest uppercase">
          &gt; EXECUTING DEEP LOGIC ANALYSIS ARCHITECTURE ON FIXED VERTICAL ALIGNMENT...
        </p>
      </div>

      {/* Clean Single Vertical Stack Container */}
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center space-y-24 relative z-10">
        
        {skillCategoriesVertical.map((category, catIdx) => (
          <div key={catIdx} className="w-full flex flex-col items-center space-y-12">
            
            {/* Hologram Section Header Line */}
            <div className="w-full text-center border-b border-cyan-500/10 pb-2 relative group">
              <span className="absolute left-0 text-cyan-500 text-[10px] tracking-widest opacity-40">SYS_MOD_0{catIdx+1}</span>
              <h3 className="text-xs font-bold tracking-[0.25em] text-purple-400 uppercase drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                // {category.title}
              </h3>
              <span className="absolute right-0 text-cyan-500 text-[10px] tracking-widest opacity-40">READY</span>
            </div>

            {/* Vertically Aligned Big Icon Lists */}
            <div className="w-full flex flex-col items-center space-y-14">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  onMouseEnter={playHackerPing}
                  className="flex flex-col items-center justify-center text-center group relative w-full max-w-sm p-4 rounded border border-white/5 bg-black/40 hover:border-cyan-400/40 hover:bg-cyan-950/5 transition-all duration-300 shadow-md"
                >
                  
                  {/* Digital Target Blueprint Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500/40 group-hover:border-cyan-400" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/40 group-hover:border-cyan-400" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500/40 group-hover:border-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500/40 group-hover:border-cyan-400" />

                  {/* Laser Moving Target Scan Line */}
                  <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan-line pointer-events-none z-20" />

                  {/* 🌌 KING SIZED 3D MATRIX ORBIT BOX (w-24 h-24) */}
                  <div className="w-24 h-24 border border-purple-500/20 bg-[#04010a] p-4 flex items-center justify-center rounded-sm shadow-[0_0_25px_rgba(168,85,247,0.03)] group-hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 animate-hacker-orbit relative overflow-hidden">
                    {/* Embedded micro grid overlay inside logo */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:100%_6px] pointer-events-none" />
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] ${skill.name.includes("Next") ? "invert" : ""}`} 
                    />
                  </div>

                  {/* Glitch Vibe Description Rows */}
                  <div className="mt-4 space-y-1">
                    <h4 className="text-xs font-black tracking-[0.15em] text-white group-hover:text-cyan-400 transition-colors duration-200 uppercase font-mono">
                      {skill.name}
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-[9px] text-gray-500 font-mono tracking-widest">
                      <span>HEX: <span className="text-purple-400 font-semibold">{skill.code}</span></span>
                      <span>•</span>
                      <span>SYS: <span className="text-emerald-500 font-semibold animate-pulse">ACTIVE_OK</span></span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}