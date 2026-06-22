"use client";
import React from 'react';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';
import TiltCard from '@/components/TiltCard'; // Core 3D engine linked

const certificatesList = [
  {
    title: "Frontend Developer (Intermediate)",
    issuer: "HackerRank",
    date: "Verified Token",
    verifyLink: "https://www.hackerrank.com/certificates/495d3ff85ad4",
    skillsVerified: ["React Framework", "JavaScript ES6", "Frontend Architecture", "UI Optimization"]
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Verified Token",
    verifyLink: "https://www.hackerrank.com/certificates/7256184e4f51",
    skillsVerified: ["CSS3 Cascading", "Responsive Layouts", "Flexbox & Grid", "Web Styling"]
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative font-mono">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block">
          [ VERIFIED_CREDENTIALS ]
        </h2>
        <p className="text-purple-400 max-w-2xl mx-auto text-xs tracking-wider uppercase animate-pulse">
          &gt; Scanning cryptography validations and token signatures...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {certificatesList.map((cert, idx) => (
          /* Wrapped exactly in TiltCard to force 3D Axis Matrix */
          <TiltCard key={idx} className="w-full">
            <div className="group relative p-6 rounded-md border border-purple-500/20 bg-purple-950/5 hover:border-cyan-400 transition-all duration-300 overflow-hidden h-full">
              
              {/* Matrix glow overlay internal */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-12 h-12 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Award size={22} className="group-hover:rotate-6 transition-transform" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-medium">{cert.issuer} • <span className="text-purple-400 font-mono font-semibold">{cert.date}</span></p>
                    </div>
                    
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded bg-black/40 border border-purple-500/30 text-gray-400 hover:text-white hover:border-cyan-400 transition-all group/btn shrink-0"
                    >
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {cert.skillsVerified.map((sk, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/50 border border-white/5 text-[10px] text-gray-300 font-mono">
                        <ShieldCheck size={10} className="text-emerald-400" />
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}