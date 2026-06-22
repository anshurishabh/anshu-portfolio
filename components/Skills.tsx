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
        @keyframes cyberSpin3D {
          0% { transform: perspective(400px) rotateY(0deg); }
          100% { transform: perspective(400px) rotateY(360deg); }
        }
        .animate-cyber-3d {
          animation: cyberSpin3D 8s linear infinite;
          transform-style: preserve-3d;
        }
        .group:hover .animate-cyber-3d {
          animation-play-state: paused;
          transform: perspective(400px) rotateY(0deg) scale(1.1);
          transition: transform 0.4s ease-out;
        }
      `}</style>

      <div className="space-y-4 text-center mb-20 font-mono">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          [ TECHNICAL_EXPERTISE ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Scanning compiled environments and operational modules...
        </p>
      </div>

      <div className="space-y-14 max-w-6xl mx-auto px-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-6 font-mono">
            <div className="flex items-center gap-2 border-b border-purple-500/10 pb-2">
              <span className="text-cyan-400 animate-ping text-xs">●</span>
              <h3 className="text-sm font-bold tracking-widest text-white">{category.title}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group relative border border-purple-500/20 bg-purple-950/5 p-5 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] rounded-md overflow-hidden">
                  
                  {/* The 3D Rotating Logo Frame */}
                  <div className="w-14 h-14 border border-purple-500/10 p-2.5 flex items-center justify-center bg-black/40 group-hover:border-cyan-400 transition-all duration-300 relative rounded animate-cyber-3d">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain backface-visible ${skill.name.includes("Next") ? "invert" : ""}`} 
                    />
                  </div>

                  <span className="text-[11px] font-bold tracking-wider text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                    {skill.name}
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