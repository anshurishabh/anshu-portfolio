"use client";
import React from 'react';
import { FolderGit2, ArrowUpRight, Cpu } from 'lucide-react';

const projectMatrix = [
  {
    title: "CREDO AI",
    subtitle: "Hybrid Microfinance Loan Risk Prediction Engine",
    desc: "A highly sophisticated predictive system engineered specifically for microfinance institutions to assess credit risk. The framework implements a hybrid pipeline integrating high-performance XGBoost machine learning architectures with automated Google Gemini NLP modules to process granular risk metrics dynamically.",
    metrics: "CORE: XGBOOST + GEMINI INTERACTION MATRIX",
    tech: ["Python", "XGBoost", "Google Gemini API", "Node.js", "MongoDB Compass"],
    image: "/project-portfolio.jpg",
    link: "https://github.com/anshurishabh/credo-ai"
  },
  {
    title: "DISTRIBUTED DATABASE MATRIX",
    subtitle: "SQL & Node.js Backend Framework",
    desc: "A production-grade web system focused on optimized relational database indexing and schema structures. Built to handle secure full-stack software components, ensuring fast query execution times, clean query scaled optimizations, and seamless version control tracking.",
    metrics: "STACK: TRANS-ISOLATION LAYERS ACTIVE",
    tech: ["Node.js", "SQL", "MongoDB Compass", "Git Version Control", "Express"],
    image: "/project-portfolio.jpg",
    link: "https://github.com/anshurishabh"
  },
  {
    title: "INTELLIGENT DATA ANALYTICS PIPELINE",
    subtitle: "Real-Time Query Optimization Engine",
    desc: "A production-grade distributed logging framework built to optimize heavy analytical streams. Engineered using strict transactional scaling layers to handle multi-tenant data migrations without concurrency failures.",
    metrics: "THROUGHPUT: 12k req/sec // LATENCY: OPTIMIZED",
    tech: ["Java", "SQL", "Next.js", "Express", "Git Management"],
    image: "/project-portfolio.jpg",
    link: "https://github.com/anshurishabh"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/5 font-mono">
      
      {/* Section Header */}
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent inline-block">
          [ DEPLOYED_ARCHITECTURES ]
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-xs uppercase tracking-widest">
          &gt; Verified technical deployments & system kernels
        </p>
      </div>

      {/* Projects Grid Configuration */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projectMatrix.map((proj, idx) => (
          <div key={idx} className="border border-white/5 bg-white/[0.01] rounded-2xl p-5 relative group hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            
            {/* Structural Wireframe Edges */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-cyan-400 transition-colors" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <FolderGit2 size={18} />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">SYSTEM_NODE_0{idx+1}</span>
                </div>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Deployed Asset Preview Frame */}
              <div className="w-full h-40 rounded-xl overflow-hidden border border-white/5 bg-zinc-950/50 relative mb-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-40" />
                <img 
                  src={proj.image} 
                  alt={`${proj.title} Core Pipeline Matrix Graphic`}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight leading-snug">
                  {proj.title}
                </h3>
                <p className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">
                  {proj.subtitle}
                </p>
              </div>

              <p className="text-xs font-sans text-gray-400 leading-relaxed text-justify">
                {proj.desc}
              </p>
            </div>

            <div className="space-y-4 pt-6">
              {/* Performance Metrics Bar */}
              <div className="bg-black/50 border border-white/5 rounded p-2 text-[9px] text-amber-400 font-bold tracking-widest uppercase flex items-center gap-2">
                <Cpu size={12} className="text-amber-500 animate-pulse" />
                {proj.metrics}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 group-hover:border-purple-500/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}