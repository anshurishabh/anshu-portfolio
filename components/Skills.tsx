"use client";
import React, { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: "SYSTEM_LANGUAGES // CORE",
    skills: [
      { name: "Java_Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python_Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C_Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL_DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "TS_Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    title: "WEB_ENGINES // RUNTIMES",
    skills: [
      { name: "Next.JS_15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React_V19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node_Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind_CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    title: "INTELLIGENCE_MODULES // AI",
    skills: [
      { name: "XGBoost_ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Gemini_API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Git_Version", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="py-20 relative bg-[#010003]">
      
      {/* Structural Global Animations Style Injection */}
      <style jsx global>{`
        @keyframes cyberHologram {
          0% { transform: perspective(500px) translateY(0px) rotateX(0deg) rotateY(0deg); filter: drop-shadow(0 0 5px rgba(168,85,247,0.2)); }
          50% { transform: perspective(500px) translateY(-6px) rotateX(4deg) rotateY(4deg); filter: drop-shadow(0 0 15px rgba(34,211,238,0.4)); }
          100% { transform: perspective(500px) translateY(0px) rotateX(0deg) rotateY(0deg); filter: drop-shadow(0 0 5px rgba(168,85,247,0.2)); }
        }
        .animate-hologram-3d {
          animation: cyberHologram 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        /* Staggered animation delay for organic random flow */
        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }
        .delay-4 { animation-delay: 2s; }
      `}</style>

      <div className="space-y-4 text-center mb-20 font-mono">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          [ TECHNICAL_EXPERTISE ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; All subsystems initialized. Diagnostics streaming in fixed grid matrix...
        </p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto px-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-6 font-mono">
            {/* Category Title Header Line */}
            <div className="flex items-center gap-2 border-b border-purple-500/10 pb-2">
              <span className="text-cyan-400 animate-ping text-xs">●</span>
              <h3 className="text-sm font-bold tracking-widest text-white uppercase">{category.title}</h3>
            </div>

            {/* List-wise layout grid where everything is visible simultaneously */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="group relative border border-purple-500/10 bg-gradient-to-b from-purple-950/5 to-black p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-cyan-400 rounded-md overflow-hidden"
                >
                  
                  {/* Absolute subtle grid background effect on hover */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Massive 3D Floating Cyber Logo */}
                  <div className={`w-20 h-20 border border-purple-500/10 p-3.5 flex items-center justify-center bg-black/60 group-hover:border-cyan-400/50 transition-all duration-300 relative rounded-md shadow-lg animate-hologram-3d delay-${sIdx % 5}`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${skill.name.includes("Next") ? "invert" : ""}`} 
                    />
                  </div>

                  {/* Underneath Name Tag */}
                  <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 mt-2 uppercase">
                    {skill.name.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}