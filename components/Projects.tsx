"use client";
import React from 'react';
import { Terminal } from 'lucide-react'; // Kept only verified core packages
import TiltCard from '@/components/TiltCard'; 

const projectsList = [
  {
    title: "CREDO AI // HYBRID_LOAN_RISK_ENGINE",
    subtitle: "Microfinance Risk Analytics Infrastructure",
    description: "An advanced, high-performance hybrid loan risk prediction system architected specifically for microfinance institutions. The engine executes heavy hyperparameter-optimized XGBoost mathematical models alongside deep neural learning logic to process credit scores. It dynamically links with custom Google Gemini API automated pipelines to generate real-time, comprehensive qualitative risk profiling diagnostics and cross-verify borrower authenticity.",
    tags: ["Python Core", "XGBoost", "Google Gemini API", "Next.js 15", "MongoDB"],
    image: "/project-credo.jpg", 
    gitLink: "https://github.com/anshurishabh",
    liveLink: "#"
  },
  {
    title: "NODE_CLUSTER // ADVANCED_CYBER_CORE",
    subtitle: "High-Performance Interactive Environment",
    description: "A production-grade, asynchronous single-page deployment environment engineered using server-side structural layer injection. The platform integrates a zero-lag GPU-accelerated canvas graphics matrix mapping coordinate telemetry dynamically beneath the pointer tip. Built with optimization algorithms to manage active visual buffers, custom multi-tone Web Audio API sound pipelines, and fully sandboxed background diagnostics consoles.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "Node.js"],
    image: "/project-portfolio.jpg", 
    gitLink: "https://github.com/anshurishabh",
    liveLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative font-mono">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          [ MANIFESTED_PRODUCTION_LOGS ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Querying local engineering kernels and deployment nodes...
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 sm:px-6">
        {projectsList.map((proj, idx) => (
          <TiltCard key={idx} className="w-full">
            <div className="group relative rounded-md border border-purple-500/20 bg-black/50 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)] hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
              
              <div>
                {/* Image Grid Frame */}
                <div className="relative w-full h-48 sm:h-56 bg-zinc-950 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
                  />
                  
                  <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded bg-black/80 border border-cyan-500/30 text-[9px] text-cyan-400 font-bold uppercase tracking-widest">
                    SYS_BUILD_V1.0.{idx}
                  </div>
                </div>

                {/* Main Description Logic */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between border-b border-white/5 pb-3 gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Terminal size={14} className="text-cyan-400" />
                        <h3 className="text-sm font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-[10px] text-purple-400 uppercase tracking-widest pl-5 font-semibold">
                        {proj.subtitle}
                      </p>
                    </div>

                    {/* Highly Secure Pure HTML Vector SVGs */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a 
                        href={proj.gitLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 rounded bg-purple-950/20 border border-purple-500/30 text-purple-400 hover:text-white hover:border-purple-400 transition-all shadow-[inset_0_0_8px_rgba(168,85,247,0.1)]"
                      >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a 
                        href={proj.liveLink} 
                        className="p-1.5 rounded bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all shadow-[inset_0_0_8px_rgba(34,211,238,0.1)]"
                      >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed font-sans font-medium text-justify">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/5 mt-auto bg-black/20">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tg, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-[9px] text-purple-300 font-semibold tracking-wider uppercase">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}