"use client";
import React from 'react';
import { Terminal, ArrowUpRight } from 'lucide-react'; // Removed Github import to fix build error
import TiltCard from '@/components/TiltCard'; 

const projectsList = [
  {
    title: "CREDO AI // MFI_RISK_ENGINE",
    description: "Hybrid machine learning loan risk prediction microfinance system architecture. Utilizes heavy hyperparameter optimized XGBoost modeling linked directly with Gemini pipelines for dynamic automated profile diagnostics.",
    tags: ["Python", "XGBoost", "Next.js 15", "Google Gemini API"],
    gitLink: "https://github.com/anshurishabh",
    liveLink: "#"
  },
  {
    title: "NODE_CLUSTER // CORE_PORTFOLIO",
    description: "Production-grade dark cyberpunk single-page environment framework. Engineered using server side layer injection, zero lag canvas graphics pipeline manipulation, and structural web audio modules.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projectsList.map((proj, idx) => (
          <TiltCard key={idx} className="w-full">
            <div className="group relative p-6 rounded-md border border-purple-500/20 bg-black/40 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between h-full shadow-[inset_0_0_15px_rgba(168,85,247,0.02)]">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Terminal size={14} className="group-hover:scale-110 transition-transform" />
                    <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    
                    {/* Native Hardware SVGs for GitHub - 100% immune to export errors */}
                    <a 
                      href={proj.gitLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded bg-purple-950/20 border border-purple-500/30 text-purple-400 hover:text-white hover:border-purple-400 transition-all"
                    >
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a href={proj.liveLink} className="p-1.5 rounded bg-cyan-950/20 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all">
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed font-sans font-medium">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/5 mt-4">
                {proj.tags.map((tg, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-[9px] text-purple-300 font-semibold tracking-wider uppercase">
                    {tg}
                  </span>
                ))}
              </div>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}