"use client";
import React, { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML5/CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    title: "Frameworks & Runtimes",
    skills: [
      { name: "Next.js 15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "XGBoost", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "LLM Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Google Gemini", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
    ]
  }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="space-y-4 text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent inline-block">
          Technical Expertise
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          A highly integrated compilation of advanced environments, tools, and paradigms I leverage natively.
        </p>
      </div>

      <div className="space-y-16">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`space-y-6 transition-all duration-1000 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Category Header with Glow Marker */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              <h3 className="text-xl font-bold text-white tracking-wide">
                {category.title}
              </h3>
            </div>

            {/* Immersive Big Animated Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-5 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 overflow-hidden min-h-[140px]"
                >
                  {/* Subtle Background Radial Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none z-0" />
                  
                  {/* Neon Tech Border Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Large Icon Box Frame */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner z-10">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className={`w-full h-full object-contain transition-transform duration-300 ${
                        skill.name === "Next.js 15" || skill.name === "Git & GitHub" ? "invert opacity-90" : ""
                      }`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Sharp Dynamic Bold Label */}
                  <span className="text-sm font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-200 z-10">
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