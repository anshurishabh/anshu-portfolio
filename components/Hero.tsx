"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const words = ["AI/ML Engineer", "Full-Stack Developer", "Problem Solver"];
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
          setTypingSpeed(1500); // Word hold duration
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Interactive Cyberpunk Particle Matrix Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[pulse_8s_infinite]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 py-12">
        
        {/* Left Side Content - Slow Fade Entry */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-[fadeIn_1s_ease-out]">
          
          {/* Badge with subtle rotation glow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest relative group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles size={12} className="text-purple-400 animate-spin-slow" />
            <span className="relative z-10">✨ Available for Internships & Full-Time Roles</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              Anshu Kumar Rishabh
            </span>
          </h1>

          {/* Dynamic Typist Subheader with blinking cursor */}
          <div className="h-10 flex items-center justify-center lg:justify-start">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300 tracking-wide">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 border-r-2 border-purple-500 pr-1 animate-pulse">
                {currentText}
              </span>
            </h2>
          </div>

          {/* Catchy & Action-Oriented Pitch Line */}
          <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed mx-auto lg:mx-0 font-medium">
            I build <span className="text-white font-bold">smart, production-grade web systems</span> and engineer intelligent AI pipelines. Turning complex algorithmic logic into high-performance user experiences.
          </p>

          {/* Premium Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 group border border-purple-400/20 relative overflow-hidden"
            >
              View Work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            
            <a 
              href="/Anshu_resume.pdf" 
              download
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 text-gray-200 font-bold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 backdrop-blur-sm group shadow-lg"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Floating Picture Frame with Kinetic Border Glow */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full group">
            
            {/* Outer Rotating Neon Orbiting Blur Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-[spin_6s_linear_infinite]" />
            
            {/* Precise Inner Ring Shell Frame */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-transparent to-blue-500 z-10 overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#030014] overflow-hidden relative flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Anshu Kumar Rishabh"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Embedded High-tech Grid overlays over avatar */}
                <div className="absolute border border-white/5 inset-3 rounded-full pointer-events-none mix-blend-overlay" />
                <div className="absolute border border-purple-500/10 inset-6 rounded-full pointer-events-none animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS Inject directly for fallback keyframe loops */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
}