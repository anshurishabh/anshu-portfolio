"use client";
import React from 'react';
import { Terminal, ShieldCheck, Layers, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative pt-20 px-4 font-mono">
      
      {/* 🟢 Premium Glassmorphic Availability Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(16,185,129,0.05)] animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block animate-ping" />
        AVAILABLE_FOR_SYSTEM_ARCHITECTURE // OPEN_TO_ROLES
      </div>

      {/* 🟢 High-End Tech Title (Stripe / Vercel Aesthetic) */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
          ANSHU KUMAR RISHABH
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-3xl sm:text-5xl mt-3 font-extrabold tracking-normal">
            SOFTWARE & SYSTEMS ENGINEER
          </span>
        </h1>
        
        {/* Concise Academic/Technical Pitch (No Student Clichés) */}
        <p className="text-gray-400 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
          Specializing in developing high-throughput backend applications, intelligent predictive data engines, and production-grade user experiences. Proficient in engineering secure distributed networks using Java, Python, and cloud infrastructure logic.
        </p>
      </div>

      {/* 🟢 Real-Time Static Core System Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-14 text-left border-y border-white/5 py-6 bg-black/20 backdrop-blur-sm px-4 rounded-md">
        <div className="space-y-1">
          <div className="text-[10px] text-purple-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Terminal size={12} /> ALIGNMENT
          </div>
          <p className="text-white font-bold text-xs sm:text-sm">COMPUTER SCIENCE</p>
        </div>
        <div className="space-y-1 border-l border-white/5 pl-4">
          <div className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Layers size={12} /> CORE_STACK
          </div>
          <p className="text-white font-bold text-xs sm:text-sm">FULL-STACK SYSTEMS</p>
        </div>
        <div className="space-y-1 border-l border-white/5 pl-4">
          <div className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
            <ShieldCheck size={12} /> PROJ_CORE
          </div>
          <p className="text-white font-bold text-xs sm:text-sm">CREDO AI ENGINE</p>
        </div>
        <div className="space-y-1 border-l border-white/5 pl-4">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            LOCATION_NODE
          </div>
          <p className="text-white font-bold text-xs sm:text-sm">IN // REMOTE</p>
        </div>
      </div>

      {/* 🟢 Premium High-Intent CTA Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 w-full max-w-md">
        <a 
          href="#projects" 
          className="w-full sm:w-auto px-6 py-3 rounded bg-white text-black font-sans font-bold text-sm tracking-wide hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
        >
          Explore Architectures
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        
        <a 
          href="#contact" 
          className="w-full sm:w-auto px-6 py-3 rounded border border-white/10 bg-white/5 font-sans font-medium text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all text-center flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <FileText size={14} className="text-cyan-400" />
          Review Credentials
        </a>
      </div>

    </section>
  );
}