"use client";
import React from 'react';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

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
    <section id="certificates" className="py-20 relative">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
          Verified Credentials
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Professional certifications and specialized coding validation from official platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificatesList.map((cert, idx) => (
          <div 
            key={idx} 
            className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Ambient subtle card glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
            
            <div className="flex gap-4 items-start relative z-10">
              {/* Animated Badge Icon Shield */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                <Award size={22} className="group-hover:rotate-6 transition-transform" />
              </div>

              {/* Certificate Core Content Block */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">{cert.issuer} • <span className="text-purple-400 font-mono font-semibold">{cert.date}</span></p>
                  </div>
                  
                  {/* Verification URL Anchor */}
                  <a 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-purple-400 hover:border-purple-400/30 transition-all group/btn shrink-0"
                  >
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Verified Skills Internal Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {cert.skillsVerified.map((sk, sIdx) => (
                    <span key={sIdx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-300 font-medium font-mono">
                      <ShieldCheck size={10} className="text-emerald-400" />
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}