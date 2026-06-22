"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Activity, ShieldAlert } from 'lucide-react';

export default function Hero() {
  // Ultra-clean coding modules that look way more professional than raw text
  const words = [
    "system.initialize('AI_ML_Pipeline')",
    "db.connect('MONGO_NODE_CLUSTER')",
    "gemini.optimize('CREDO_LOAN_MODEL')",
    "kernel.execute('FULLSTACK_OVERRIDE')"
  ];
  
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTypingSpeed(2000); // Wait on full word
          setIsDeleting(true);
        } else { setTypingSpeed(40); } // Fast type
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
        } else { setTypingSpeed(20); } // Super fast delete
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-[#020005]">
      
      {/* Scanline and Cyber Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(34,211,238,0.03),rgba(168,85,247,0.02))] bg-[size:100%_4px,4px_100%] pointer-events-none z-20 opacity-60" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 py-12">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Top Status Alert Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <ShieldAlert size={11} className="text-cyan-400 animate-pulse" />
            <span>SECURE_SHELL // ANONYMOUS_ACCESS_GRANTED</span>
          </div>
          
          {/* Main Glitch Glow Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-mono text-white leading-none">
            INITIALIZE:<br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] select-all">
              ANSHU_RISHABH
            </span>
          </h1>

          {/* New Hacker Terminal Component with Premium Monospace Fonts */}
          <div className="bg-[#04010d] border border-cyan-500/20 rounded-md p-4 font-mono text-xs sm:text-sm text-left max-w-xl shadow-[0_0_25px_rgba(34,211,238,0.05)] relative overflow-hidden group">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="text-[10px] text-gray-500 ml-2">bash - core_engine.exe</span>
            </div>

            {/* Glowing Text Row */}
            <div className="space-y-1">
              <div className="text-purple-400/70 text-[11px]">&gt; guest@anshu_dev:~$ ./execute_profile</div>
              <div className="flex items-center flex-wrap gap-x-2 text-green-400 font-medium tracking-wide drop-shadow-[0_0_6px_rgba(74,222,128,0.3)]">
                <span className="text-cyan-400">root@core:~$</span>
                <span>{currentText}</span>
                <span className="w-2 h-4 bg-green-400 inline-block animate-pulse ml-0.5" />
              </div>
            </div>
          </div>

          <p className="text-gray-400 max-w-xl text-xs sm:text-sm font-mono leading-relaxed mx-auto lg:mx-0">
            &gt; STACK_OVERVIEW: Compiling <span className="text-cyan-400 font-bold">production-grade architecture overrides</span> and orchestrating advanced dynamic AI models. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 font-mono">
            <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded border border-cyan-400/40 bg-cyan-950/10 text-cyan-400 font-bold text-xs hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
              [ EXECUTE_VIEW ]
            </a>
            <a href="/Anshu_resume.pdf" download className="w-full sm:w-auto px-6 py-3 rounded border border-purple-500/40 bg-purple-950/10 text-purple-400 font-bold text-xs transition-all flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              [ DOWNLOAD_LOG.PDF ]
            </a>
          </div>
        </div>

        {/* Right Side Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded group">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-purple-500 group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-purple-500 group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-10 blur-xl group-hover:opacity-30 transition duration-500 animate-pulse" />
            <div className="relative w-full h-full p-[1px] bg-purple-500/20 border border-purple-500/30 overflow-hidden flex items-center justify-center">
              <img src="/profile.jpg" alt="Anshu" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}