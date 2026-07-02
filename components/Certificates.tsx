"use client";
import React from 'react';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

const certificateMatrix = [
  {
    title: "Google Gemini QuizOff 2026",
    issuer: "Google / Unstop Events",
    date: "June 2026",
    image: "/gemini-quiz.png", // Aapka existing asset name
    verificationLink: "https://unstop.com"
  },
  {
    title: "HTML/CSS Developer Certification",
    issuer: "Clinchsoft Technologies",
    date: "March 2026",
    image: "/clinchsoft-cert.png", // Aapka existing asset name
    verificationLink: "#"
  },
  {
    title: "AI for Data Analysis",
    issuer: "Google (Authorized via Coursera)",
    date: "July 2026",
    image: "/dataanalysis.png", // Maps to dataanalysis.png / dataanalysis.jpg in public folder
    verificationLink: "https://coursera.org/share/87c0835b42e6d90694129699645f8fab"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 border-t border-white/5 font-mono">
      
      {/* Section Header */}
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
          [ VERIFIED_CREDENTIALS ]
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-xs uppercase tracking-widest">
          &gt; Official technical validations & industry checkpoints
        </p>
      </div>

      {/* Certificates Responsive Layout Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {certificateMatrix.map((cert, idx) => (
          <div key={idx} className="border border-white/5 bg-white/[0.01] rounded-2xl p-5 relative group hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            
            {/* Structural Cyber Frame Accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-purple-400 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/10 group-hover:border-purple-400 transition-colors" />

            <div className="space-y-4">
              {/* Header Meta */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 text-purple-400">
                  <Award size={18} />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">CERT_NODE_0{idx+1}</span>
                </div>
                <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Digital Certificate Screenshot Viewport */}
              <div className="w-full h-44 rounded-xl overflow-hidden border border-white/5 bg-zinc-950/50 relative mb-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-30" />
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Ledger Interface Layout`}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                />
              </div>

              {/* Text Meta Content */}
              <div className="space-y-1">
                <h3 className="text-base font-black text-white group-hover:text-purple-400 transition-colors tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Bottom Logging Info */}
            <div className="pt-4 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                {cert.date}
              </span>
              <div className="text-[9px] text-emerald-400 font-bold tracking-widest uppercase flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-500" />
                VERIFIED
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}