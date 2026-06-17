"use client";
import React from 'react';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

const projectsList = [
  {
    title: "CREDO AI",
    subtitle: "Featured Project • Hybrid Microfinance Risk System",
    description: "An advanced machine learning and LLM hybrid architecture engineered to optimize credit scoring risk for microfinance institutions. Combines structured quantitative predictive modeling with automated soft-metric qualitative tracking.",
    longFeatures: [
      "XGBoost Gradient Boosting framework for credit risk data modeling.",
      "Google Gemini API integration to parse qualitative customer background history.",
      "Scalable data tracking layer utilizing structured multi-tenant indexing."
    ],
    tech: ["Python", "XGBoost", "Google Gemini API", "Next.js", "Node.js", "MongoDB"],
    isFeatured: true,
    image: "/credo-1.png",
    github: "https://github.com/anshurishabh"
  },
  {
    title: "AI Drowsiness Detection System",
    subtitle: "Computer Vision & Safety Tech",
    description: "A real-time edge computing application designed to track driver alertness parameters. Employs deep learning computer vision points to calculate physiological indicators and trigger instant micro-alerts.",
    longFeatures: [
      "Facial landmark analysis mapping eye closure velocity ratios.",
      "Real-time processing framework with sub-15ms inference latency.",
      "Modular system triggers and notification logs."
    ],
    tech: ["Python", "OpenCV", "TensorFlow/Keras", "NumPy"],
    isFeatured: false,
    image: "/drowsiness.png",
    github: "https://github.com/anshurishabh"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
          Featured Engineering
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Production-grade codebases, algorithmic implementations, and scalable web solutions.
        </p>
      </div>

      <div className="space-y-12">
        {projectsList.map((project, idx) => (
          <div 
            key={idx} 
            className={`glass-card p-6 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
              project.isFeatured 
                ? 'border-purple-500/20 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent' 
                : 'border-white/5 bg-white/[0.01]'
            }`}
          >
            {project.isFeatured && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                ⭐ Featured Architecture
              </span>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-1">{project.subtitle}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{project.description}</p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                    <Cpu size={14} className="text-purple-400" /> Core Engineering & Architecture:
                  </h4>
                  <ul className="space-y-2">
                    {project.longFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-500 mt-1.5 block min-w-[5px] h-[5px] rounded-full bg-purple-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="font-medium">GitHub Source</span>
                    <ArrowUpRight size={14} className="text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Enhanced Visual Mockup Frame Box with Absolute Fallback */}
              <div className="lg:col-span-5 w-full min-h-[250px] aspect-video rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-white/10 p-2 relative flex items-center justify-center overflow-hidden group/img shadow-xl">
                <div className="absolute inset-0 bg-[#07041a]/60 z-0" />
                
                {/* Fallback Graphic Pattern inside the card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3 z-10 font-mono text-gray-500">
                  <Layers className="text-purple-500 animate-pulse" size={36} />
                  <div>
                    <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">{project.title}</p>
                    <p className="text-[10px] text-gray-400 mt-1">Computer Vision Pipeline Active</p>
                  </div>
                  <div className="flex gap-1 text-[9px] bg-black/40 px-3 py-1 rounded-full border border-white/5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mt-0.5" /> 
                    Live Inference Mode
                  </div>
                </div>

                {/* Main Image Layer */}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full rounded-xl object-cover border border-white/5 z-20 group-hover/img:scale-[1.03] transition-transform duration-500 absolute inset-0" 
                    onError={(e) => {
                      // Silently fall back to our sleek UI placeholder underneath instead of crashing
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}