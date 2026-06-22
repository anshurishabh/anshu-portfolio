"use client";
import React, { useEffect, useState } from 'react';

const allSkills = [
  { name: "Java_Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python_Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C_Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL_DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "TS_Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.JS_15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React_V19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node_Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind_CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "XGBoost_ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Gemini_API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Git_Version", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="py-20 relative bg-[#010003] overflow-hidden">
      
      {/* Heavy CSS Inject Engine for Infinity Vertical Marquee */}
      <style jsx global>{`
        @keyframes verticalMarqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes verticalMarqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: verticalMarqueeUp 25s linear infinite;
        }
        .animate-marquee-down {
          animation: verticalMarqueeDown 25s linear infinite;
        }
        .marquee-container:hover .animate-marquee-up,
        .marquee-container:hover .animate-marquee-down {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-4 text-center mb-16 font-mono">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          [ CORE_TECH_MATRIX ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Streamlining architecture nodes into parallel vertical tracks...
        </p>
      </div>

      {/* Main Structural Wrapper for Columns */}
      <div className="max-w-5xl mx-auto px-4 marquee-container grid grid-cols-2 sm:grid-cols-3 gap-8 h-[550px] relative overflow-hidden rounded-lg border border-purple-500/10 bg-black/20 p-6 backdrop-blur-sm">
        
        {/* Ambient Neon Top & Bottom Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#010003] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#010003] to-transparent z-20 pointer-events-none" />

        {/* 📈 COLUMN 1: Upward Endless Stream */}
        <div className="flex flex-col overflow-hidden relative border-r border-purple-500/5 pr-4">
          <div className="space-y-6 animate-marquee-up flex flex-col">
            {[...allSkills, ...allSkills].map((skill, sIdx) => (
              <div key={`up-${sIdx}`} className="group relative border border-purple-500/20 bg-purple-950/5 p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] rounded-md">
                
                {/* Ultra Sized 3D Scaled Logo Container */}
                <div className="w-20 h-20 border border-purple-500/10 p-3 flex items-center justify-center bg-black/50 rounded-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain ${skill.name.includes("Next") ? "invert" : ""}`} 
                  />
                </div>

                <span className="text-[12px] font-mono font-bold tracking-widest text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                  {skill.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 📉 COLUMN 2: Downward Endless Stream */}
        <div className="flex flex-col overflow-hidden relative border-r border-purple-500/5 px-2">
          <div className="space-y-6 animate-marquee-down flex flex-col">
            {[...allSkills.reverse(), ...allSkills].map((skill, sIdx) => (
              <div key={`down-${sIdx}`} className="group relative border border-cyan-500/10 bg-cyan-950/5 p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] rounded-md">
                
                {/* Ultra Sized 3D Scaled Logo Container */}
                <div className="w-20 h-20 border border-cyan-500/10 p-3 flex items-center justify-center bg-black/50 rounded-md group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-md">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain ${skill.name.includes("Next") ? "invert" : ""}`} 
                  />
                </div>

                <span className="text-[12px] font-mono font-bold tracking-widest text-gray-400 group-hover:text-purple-400 transition-colors duration-200">
                  {skill.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 📈 COLUMN 3: Upward Endless Stream (Hidden on super small phones, beautiful on desktops) */}
        <div className="hidden sm:flex flex-col overflow-hidden relative pl-4">
          <div className="space-y-6 animate-marquee-up flex flex-col">
            {[...allSkills, ...allSkills].map((skill, sIdx) => (
              <div key={`up2-${sIdx}`} className="group relative border border-purple-500/20 bg-purple-950/5 p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] rounded-md">
                
                <div className="w-20 h-20 border border-purple-500/10 p-3 flex items-center justify-center bg-black/50 rounded-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain ${skill.name.includes("Next") ? "invert" : ""}`} 
                  />
                </div>

                <span className="text-[12px] font-mono font-bold tracking-widest text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                  {skill.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}