"use client";
import React from 'react';
import { Terminal, Cpu, ArrowUpRight, Github } from 'lucide-react';
import TiltCard from '@/components/TiltCard'; // Core 3D engine linked

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
          /* Wrapped in TiltCard engine for advanced spatial 3D angle transforms */
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
                    <a href={proj.gitLink} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-purple-950/20 border border-purple-500/30 text-purple-400 hover:text-white hover:border-purple-400 transition-all">
                      <Github size={12} />
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