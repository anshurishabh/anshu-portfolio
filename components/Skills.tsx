"use client";
import React, { useEffect, useState } from 'react';

const skillCategoriesVertical = [
  {
    title: "SYSTEM_LANGUAGES // CORE",
    skills: [ // FIXED: Changed = to : here
      { name: "Java Runtime Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python Core Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++ Native Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL Database Kernel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "TypeScript Compiler", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    title: "WEB_ENGINES // RUNTIMES",
    skills: [ // FIXED: Changed = to : here
      { name: "Next.JS Framework V15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React Ecosystem V19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js Server Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind CSS Style Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    title: "INTELLIGENCE_MODULES // AI",
    skills: [ // FIXED: Changed = to : here
      { name: "XGBoost Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Google Gemini Neural API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Git Version Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="py-24 relative bg-[#010003] font-mono">
      
      {/* Absolute Non-Stop Infinite 360 Y-Axis Rotation Styles */}
      <style jsx global>{`
        @keyframes nonstopCyberSpin {
          0% { transform: perspective(600px) rotateY(0deg); }
          100% { transform: perspective(600px) rotateY(360deg); }
        }
        .animate-nonstop-360 {
          animation: nonstopCyberSpin 10s linear infinite !important;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Title Header */}
      <div className="space-y-4 text-center mb-24">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block tracking-widest">
          [ TECHNICAL_EXPERTISE_TREE ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Non-stop 360 database streams compiled vertically...
        </p>
      </div>

      {/* Main Container - Completely Centered Content */}
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center space-y-20 relative">
        
        {skillCategoriesVertical.map((category, catIdx) => (
          <div key={catIdx} className="w-full flex flex-col items-center space-y-10">
            
            {/* List Category Vibe Section Bar */}
            <div className="text-center border-b border-purple-500/20 pb-2 px-6 w-full max-w-md">
              <h3 className="text-xs font-black tracking-[0.2em] text-cyan-400 uppercase">
                // {category.title}
              </h3>
            </div>

            {/* List item arrays stacked cleanly in middle */}
            <div className="w-full flex flex-col items-center space-y-12">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex flex-col items-center justify-center text-center group relative max-w-xs w-full transition-transform duration-300 hover:scale-105"
                >
                  
                  {/* KING SIZED HOLO CONTAINER (w-24 h-24) */}
                  <div className="w-24 h-24 border border-purple-500/20 bg-black/70 p-4 flex items-center justify-center rounded-md shadow-[0_0_20px_rgba(168,85,247,0.05)] group-hover:border-cyan-400/80 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-colors duration-300 animate-nonstop-360">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain ${skill.name.includes("Next") ? "invert" : ""}`} 
                    />
                  </div>

                  {/* Centered Name Metrics */}
                  <div className="mt-4 space-y-1 flex flex-col items-center">
                    <h4 className="text-xs font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors duration-200 uppercase">
                      {skill.name}
                    </h4>
                    <span className="text-[9px] text-gray-500 tracking-wider font-mono">
                      CORE_NODE_INDEX // [0x0{catIdx}{sIdx}]
                    </span>
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