"use client";
import React from 'react';
import { Terminal, FileText, MessagesSquare, FolderGit2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative pt-24 pb-12 px-4 font-mono overflow-hidden">
      
      {/* 🌌 Cosmic Cyber Space Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
      
      {/* Central Nebula Swirl Radial Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] blur-[40px] pointer-events-none z-0 animate-pulse" />

      {/* Main Structural Asymmetrical Split (Left Side Content // Right Side Image Card) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* 📋 LEFT MODULE: DATA PIPELINE ARCHITECTURE */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Status Capsule Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[9px] tracking-[0.15em] uppercase font-bold">
              <span className="w-1 h-1 rounded-full bg-cyan-400 block animate-ping" />
              OPEN TO WORK
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[9px] tracking-[0.15em] uppercase font-bold">
              FULL STACK DEV
            </span>
          </div>

          {/* High-End Tech Asymmetric Title Grid */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              Anshu Kumar
            </h1>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-none">
              Rishabh
            </h1>
            <div className="text-[10px] text-gray-500 tracking-[0.4em] uppercase pt-4 font-bold">
              FULL-STACK • ML • DS-AI • DEVELOPER
            </div>
          </div>

          {/* Core Descriptive Copy */}
          <p className="text-gray-400 font-sans max-w-xl text-sm sm:text-base leading-relaxed text-justify">
            Building <span className="text-white font-semibold">intelligent systems</span> at the intersection of full-stack engineering and machine learning — from real-time operational data pipelines to agentic AI workflows.
          </p>

          {/* Glowing Big Status Text Tag */}
          <div className="text-2xl sm:text-4xl font-black tracking-widest uppercase bg-gradient-to-r from-amber-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent pt-2">
            PROGRAMMER
          </div>

          {/* Carousel Dot Visual Indicators */}
          <div className="flex gap-1.5 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            <span className="w-4 h-1.5 rounded-full bg-cyan-400 transition-all" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          </div>

          {/* 🔘 Capsule UI Button System */}
          <div className="flex flex-wrap gap-4 pt-4 items-center">
            
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-orange-500/30 bg-orange-950/10 text-orange-400 text-xs font-bold tracking-wider hover:bg-orange-950/30 hover:border-orange-400 transition-all flex items-center gap-2 relative group shadow-[0_0_15px_rgba(249,115,22,0.05)]">
              <MessagesSquare size={14} />
              Lounge
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-black text-black bg-cyan-400 rounded-full animate-bounce">1</span>
            </a>

            {/* FIXED & UPDATED: Direct target to Anshu_resume.pdf */}
            <a 
              href="/Anshu_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-full border border-cyan-500/40 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-wider hover:bg-cyan-950/40 hover:border-cyan-400 transition-all flex items-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <FileText size={14} />
              Resume & CV
            </a>

            <a href="https://github.com/anshurishabh" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/5 text-emerald-400 text-xs font-bold tracking-wider hover:bg-emerald-950/20 hover:border-emerald-400 transition-all flex items-center gap-2">
              <FolderGit2 size={14} />
              Get Source
            </a>

          </div>

        </div>

        {/* 🖼️ RIGHT MODULE: ADVANCED PROFILE FRAME */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Top Floating Cyber Tags */}
          <div className="absolute top-[-15px] left-6 z-20 px-2 py-0.5 rounded bg-black border border-cyan-500/30 text-[8px] text-cyan-400 font-bold uppercase tracking-widest shadow-md">
            NEXT.JS • PYTHON
          </div>
          <div className="absolute top-[-25px] right-6 z-20 px-2 py-0.5 rounded bg-black border border-purple-500/20 text-[8px] text-purple-400 font-bold uppercase tracking-widest shadow-md">
            AI + ML BUILDER
          </div>

          {/* Main Rounded Image Outer Shell */}
          <div className="w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-3xl p-1 border border-purple-500/20 bg-gradient-to-b from-purple-950/10 to-black overflow-hidden relative shadow-[0_0_40px_rgba(168,85,247,0.05)] group hover:border-cyan-400/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020005] via-transparent to-transparent z-10 opacity-60" />
            
            {/* The Professional Image Asset */}
            <img 
              src="/profile.jpg" 
              alt="System Operator Profile Architecture"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-102"
            />

            {/* Micro Floating Internal Tech Blueprint Overlay */}
            <div className="absolute bottom-4 right-4 z-20 px-2 py-0.5 rounded bg-black/80 border border-purple-500/40 text-[7px] text-purple-300 font-mono tracking-wider">
              XGBOOST // LSTM
            </div>
          </div>

          {/* Bottom Floating Profile Identity Box (LinkedIn Capsule) */}
          <div className="mt-6 w-full max-w-[280px] sm:max-w-[320px]">
            <a 
              href="https://linkedin.com/in/anshurishabh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full bg-zinc-950 border border-cyan-500/10 flex items-center justify-center gap-2 hover:border-cyan-400/50 hover:bg-cyan-950/10 transition-all text-[11px] font-mono tracking-widest text-cyan-400/80 hover:text-cyan-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              /in/anshurishabh
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}