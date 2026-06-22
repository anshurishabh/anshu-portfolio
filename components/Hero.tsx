"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

export default function Hero() {
  const words = ["ROOT@ANSHU_DEV:~$ SYSTEM_ENG", "ROOT@ANSHU_DEV:~$ AI_INTEGRATION", "ROOT@ANSHU_DEV:~$ FULLSTACK_UP"];
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
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else { setTypingSpeed(50); }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
        } else { setTypingSpeed(300); }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-[#020005]">
      
      {/* Dynamic Digital Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-20 opacity-40" />

      {/* Grid Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141c3a_1px,transparent_1px),linear-gradient(to_bottom,#141c3a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 py-12">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 uppercase tracking-widest animate-pulse">
            <Activity size={10} className="text-cyan-400" />
            <span>⚡ INTRUSION DETECTED: ACCESS_GRANTED</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-mono text-white leading-none">
            INITIALIZE:<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] select-all">
              ANSHU_KUMAR
            </span>
          </h1>

          <div className="bg-[#050212] border border-purple-500/30 rounded-lg p-3 font-mono text-xs sm:text-sm text-left max-w-xl shadow-[0_0_15px_rgba(147,51,234,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 text-[10px] text-purple-500/50 p-1 select-none">BASH_V4.2</div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Terminal size={14} />
              <span>{currentText}</span>
              <span className="w-2 h-4 bg-cyan-400 inline-block animate-ping ml-0.5" />
            </div>
          </div>

          <p className="text-gray-400 max-w-xl text-xs sm:text-sm font-mono leading-relaxed mx-auto lg:mx-0">
            &gt; STACK_OVERVIEW: I compile <span className="text-cyan-400 font-bold">production-grade architecture overrides</span> and orchestrate advanced dynamic AI models. Resolving algorithmic anomalies dynamically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 font-mono">
            <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-xs hover:shadow-[0_0_25px_#22d3ee] transition-all duration-300 flex items-center justify-center gap-2 border border-cyan-400/30">
              [ EXECUTE_VIEW ]
            </a>
            <a href="/Anshu_resume.pdf" download className="w-full sm:w-auto px-6 py-3 rounded-md bg-black/40 hover:bg-cyan-950/20 border border-purple-500/30 text-gray-300 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-[inset_0_0_10px_rgba(168,85,247,0.1)] hover:border-cyan-400">
              [ DOWNLOAD_LOG.PDF ]
            </a>
          </div>
        </div>

        {/* Right Side: Futuristic Tech Portrait Ring Grid */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-lg group">
            
            {/* Cyber HUD Targeting Rectangles */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-purple-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-purple-500 group-hover:scale-110 transition-transform duration-300" />

            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500 animate-pulse" />
            
            <div className="relative w-full h-full p-[1px] bg-purple-500/20 border border-purple-500/40 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/profile.jpg" alt="Anshu" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-cyan-500/5 mix-blend-color" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}