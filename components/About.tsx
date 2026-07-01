"use client";
import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Code2, Brain, Terminal, GraduationCap } from 'lucide-react';

const educationTimeline = [
  {
    level: "B.Tech in Computer Science & Engineering",
    institution: "Babu Banarasi Das University (BBDU)",
    duration: "2023 — 2027",
    logo: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-college-high-school-and-college-flatart-icons-flat-flatarticons.png",
    points: [
      { label: "Core Focus", text: "Advanced algorithms, scalable data architectures, and full-stack system optimization." },
      { label: "AI Track", text: "Specializing in training predictive pipelines, machine learning logic, and LLM orchestration." }
    ]
  },
  {
    level: "Higher Secondary Education (Class XII)",
    institution: "Don Bosco High School (CBSE Board)",
    duration: "2022",
    logo: "https://img.icons8.com/fluency/48/book.png",
    points: [
      { label: "Core Focus", text: "Senior school disciplines with primary specialization in Physics, Chemistry, and Mathematics (PCM)." },
      { label: "Competency", text: "Developed deep analytical math skills, structural physics baselines, and early engineering concepts." }
    ]
  },
  {
    level: "Secondary School Education (Class X)",
    institution: "Mahavir Saraswati Vidya Mandir (CBSE Board)",
    duration: "2020",
    logo: "https://img.icons8.com/fluency/48/diploma.png",
    points: [
      { label: "Core Focus", text: "General science schemas, fundamental algebraic foundations, and logical reasoning paradigms." },
      { label: "Competency", text: "Acquired fundamental analytical problems-solving methodologies and baseline computational logics." }
    ]
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Custom green matrix layout for the contribution node streams
  const cyberTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section id="about" className="py-20 relative font-mono">
      
      {/* 🔴 MODULE 1: SECTION HEADER */}
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
          About & Education
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          A deep dive into my professional competencies alongside my academic milestones.
        </p>
      </div>

      {/* 🔴 MODULE 2: SPLIT MATRIX GRID (CARDS + TIMELINE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Short & Sharp Professional Focus Cards */}
        <div className={`lg:col-span-5 space-y-6 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          
          {/* Full-Stack Core Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-purple-500/20 transition-all duration-300">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit mb-4">
              <Code2 size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full-Stack Core</h3>
            <div className="text-gray-400 text-xs sm:text-sm space-y-2 leading-relaxed">
              <p>
                <strong>Concept:</strong> Designing, building, and deploying highly responsive end-to-end web architectures.
              </p>
              <p>
                <strong>Tech & Stack:</strong> Creating smooth user interfaces using <strong>React</strong> and <strong>Next.js</strong> on the frontend, handling stable business logic with <strong>Node.js</strong> backends, and structuring database layouts securely using <strong>MongoDB</strong> and <strong>SQL</strong> systems.
              </p>
            </div>
          </div>

          {/* AI Integration Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-blue-500/20 transition-all duration-300">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit mb-4">
              <Brain size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Integration</h3>
            <div className="text-gray-400 text-xs sm:text-sm space-y-2 leading-relaxed">
              <p>
                <strong>Concept:</strong> Embedding advanced predictive analytics and automation directly into core software systems.
              </p>
              <p>
                <strong>Tech & Stack:</strong> Leveraging <strong>XGBoost</strong> machine learning pipelines for processing data, combined with <strong>Google Gemini API</strong> integration to pull automated analytical insights from complex text inputs.
              </p>
            </div>
          </div>
          
        </div>

        {/* Right Side: Structured & Matching Academic Timeline */}
        <div className={`lg:col-span-7 space-y-8 pl-2 sm:pl-6 relative transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/20 to-transparent pointer-events-none hidden sm:block" />

          {educationTimeline.map((edu, idx) => (
            <div key={idx} className="relative sm:pl-10 group">
              <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hidden sm:flex z-10 ${
                idx === 0 
                  ? 'bg-purple-950/60 border-purple-500/50 text-purple-400 shadow-md shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-6' 
                  : 'bg-white/5 border-white/10 text-gray-400 group-hover:border-indigo-500/40 group-hover:scale-110'
              }`}>
                <GraduationCap size={18} className="group-hover:text-purple-400 transition-colors" />
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/5 flex flex-col sm:flex-row gap-4 items-start">
                
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 transition-colors duration-300">
                  <img 
                    src={edu.logo} 
                    alt="institution logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 w-full space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className={`text-base font-bold tracking-tight transition-colors duration-300 ${
                      idx === 0 ? 'text-purple-400 group-hover:text-purple-300' : 'text-white group-hover:text-purple-400'
                    }`}>
                      {edu.level}
                    </h4>
                    <span className="text-xs font-mono font-medium text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md w-fit group-hover:border-purple-500/20 group-hover:text-gray-300 transition-all">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <p className="text-xs font-semibold text-gray-300">{edu.institution}</p>
                  
                  {/* Matching Structural Split Sub-Points */}
                  <div className="text-gray-400 text-xs sm:text-sm space-y-1.5 leading-relaxed pt-1 border-t border-white/5">
                    {edu.points.map((pt, pIdx) => (
                      <p key={pIdx}>
                        <strong>{pt.label}:</strong> {pt.text}
                      </p>
                    ))}
                  </div>
                  
                  {idx === 0 && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-semibold tracking-wider text-purple-300 uppercase animate-pulse">
                      ✨ Expected Graduation 2027
                    </span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🔴 MODULE 3: GITHUB CONTRIBUTIONS CORE DASHBOARD */}
      <div className={`mt-16 border border-white/5 bg-white/[0.01] p-6 rounded-2xl backdrop-blur-md hover:border-purple-500/20 transition-all duration-500 w-full overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Wireframe Heading Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
          <div className="space-y-1">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-purple-400 animate-pulse" /> 
              // GIT_ENGINE_CONTRIBUTIONS
            </h3>
            <p className="text-[10px] text-gray-500 tracking-wider">
              REAL-TIME SOURCE CODE SUBMISSIONS AND VERSION CONTROL MATRIX
            </p>
          </div>
          <a 
            href="https://github.com/anshurishabh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md border border-purple-500/20 bg-purple-950/10 text-purple-300 text-[10px] font-bold tracking-wider hover:bg-purple-900/20 hover:border-purple-400 transition-all text-center self-start sm:self-center font-mono"
          >
            SOURCE_NODE →
          </a>
        </div>

        {/* Calendar Graph Canvas Layer */}
        <div className="w-full overflow-x-auto pt-2 flex justify-center scrollbar-thin scrollbar-thumb-zinc-800">
          <div className="min-w-[760px] text-gray-400 font-sans text-xs">
            <GitHubCalendar 
              username="anshurishabh"
              blockSize={12}
              blockMargin={4}
              fontSize={11}
              theme={cyberTheme}
              hideColorLegend={false}
            />
          </div>
        </div>

      </div>

    </section>
  );
}