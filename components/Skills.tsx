"use client";
import React from 'react';
import { 
  Terminal, Cpu, Database, Binary, ShieldCheck, Palette, Activity,
  Code, Coffee, Braces, Eye, Server, Layers, HelpCircle, 
  Brain, Network, Cloud, Flame, GitBranch, Monitor, Video, Zap, FileCode
} from 'lucide-react';
import TiltCard from '@/components/TiltCard'; // Fully synchronized with your 3D system engine

// Helper function to map exact larger icons to your technical tool strings
const getToolIcon = (name: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    // Languages & Runtime Core
    "Java": <Coffee size={16} className="text-amber-500" />,
    "Python": <Code size={16} className="text-blue-400" />,
    "SQL": <Database size={16} className="text-cyan-400" />,
    "JavaScript": <Braces size={16} className="text-yellow-400" />,
    "TypeScript": <FileCode size={16} className="text-blue-500" />,
    
    // Backend & DB Nodes
    "Node.js": <Server size={16} className="text-emerald-400" />,
    "Express": <Layers size={16} className="text-gray-400" />,
    "MongoDB": <Database size={16} className="text-green-500" />,
    "MongoDB Compass": <Eye size={16} className="text-green-400" />,
    "XGBoost Framework": <Zap size={16} className="text-amber-400" />,
    
    // Advanced AI Toolchains
    "Google Gemini API": <Brain size={16} className="text-purple-400 animate-pulse" />,
    "Claude Matrix": <Cpu size={16} className="text-orange-400" />,
    "Groq Engine": <Zap size={16} className="text-orange-500" />,
    "Hugging Face": <Activity size={16} className="text-yellow-500" />,
    "Kaggle Core": <Network size={16} className="text-blue-400" />,
    "GitHub Copilot": <Code size={16} className="text-teal-400" />,
    "Google AI Studio": <Monitor size={16} className="text-blue-500" />,
    "ChatGPT Go": <Brain size={16} className="text-emerald-500" />,
    
    // Cloud Operations
    "Vercel Deploy": <Cloud size={16} className="text-white" />,
    "Render Cloud": <Server size={16} className="text-indigo-400" />,
    "Firebase Serverless": <Flame size={16} className="text-orange-500" />,
    "Agora API Cluster": <Network size={16} className="text-sky-400" />,
    "Google Colab Environment": <Monitor size={16} className="text-amber-400" />,
    "Git Lifecycle": <GitBranch size={16} className="text-red-400" />,
    
    // Creative Systems
    "HTML": <Code size={16} className="text-orange-500" />,
    "CSS": <FileCode size={16} className="text-blue-400" />,
    "Canva Space Layout": <Palette size={16} className="text-pink-400" />,
    "Bit-wise Transitions": <Video size={16} className="text-purple-400" />,
    "Glowing Outlines": <Palette size={16} className="text-cyan-400" />
  };

  return iconMap[name] || <HelpCircle size={16} className="text-gray-500" />;
};

const techStackMatrix = [
  {
    category: "Languages & Runtime Core",
    icon: <Binary size={24} className="text-cyan-400" />,
    status: "SYSTEM_READY",
    desc: "Core computational baselines utilized to engineer scalable backend algorithms, structural machine learning logic, and clean object-oriented code blocks.",
    tools: ["Java", "Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend Architecture & DB Nodes",
    icon: <Database size={24} className="text-purple-400" />,
    status: "STABLE_DATA_FLOW",
    desc: "Production-grade frameworks deployed to manage secure non-blocking operations, structured transactional query boundaries, and gradient boosting logic matrices.",
    tools: ["Node.js", "Express", "MongoDB", "MongoDB Compass", "XGBoost Framework"]
  },
  {
    category: "Advanced AI Toolchains & Inference",
    icon: <Cpu size={24} className="text-amber-400" />,
    status: "MODEL_INF_ACTIVE",
    desc: "Advanced neural networks orchestration pipelines, utilizing high-speed sub-second inference processors and natural language context processors.",
    tools: ["Google Gemini API", "Claude Matrix", "Groq Engine", "Hugging Face", "Kaggle Core", "GitHub Copilot", "Google AI Studio", "ChatGPT Go"]
  },
  {
    category: "Cloud Operations & Infrastructure Nodes",
    icon: <ShieldCheck size={24} className="text-emerald-400" />,
    status: "CLUSTERS_ONLINE",
    desc: "Distributed microservices, real-time WebRTC media streams, serverless backends, and decoupled lifecycle networks designed for zero downtime setups.",
    tools: ["Vercel Deploy", "Render Cloud", "Firebase Serverless", "Agora API Cluster", "Google Colab Environment", "Git Lifecycle"]
  },
  {
    category: "Creative Systems & Layout Interfaces",
    icon: <Palette size={24} className="text-pink-400" />,
    status: "UI_METRICS_OK",
    desc: "Aesthetic modular visual architectures focused on responsive design layouts, cinematic effects, and highly engaging bit-wise layout modifications.",
    tools: ["HTML", "CSS", "Canva Space Layout", "Bit-wise Transitions", "Glowing Outlines"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 font-mono relative">
      
      {/* Module Title Header */}
      <div className="space-y-4 text-center mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 bg-clip-text text-transparent inline-block tracking-tight">
          [ TECHNICAL SKILLS ]
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm tracking-wider uppercase">
          &gt; Indexing core competencies, developer frameworks, and operational toolchains
        </p>
      </div>

      {/* Large Expanded Multi-Column Dynamic Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6">
        {techStackMatrix.map((stack, idx) => (
          <TiltCard key={idx} className="w-full">
            <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              
              {/* Internal matrix pulse gradient element */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                
                {/* Upper Module Control Bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-500">
                      {stack.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest block mb-0.5">ENGINE_NODE_0{idx+1}</span>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                        {stack.category}
                      </h3>
                    </div>
                  </div>

                  {/* Real-Time Telemetry Status Tag */}
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md border border-white/5 bg-black/50 text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                    <Activity size={12} className="text-amber-500 animate-pulse" />
                    {stack.status}
                  </div>
                </div>

                {/* Architecture Objective Description */}
                <p className="text-sm font-sans text-gray-400 leading-relaxed text-justify pt-1">
                  {stack.desc}
                </p>

                {/* Sub-node badging arrays - Expanded View with Dynamic Icons */}
                <div className="space-y-3 pt-3">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block"></span>
                  <div className="flex flex-wrap gap-2.5">
                    {stack.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/80 border border-white/5 text-xs sm:text-sm text-gray-300 font-mono hover:border-purple-500/40 hover:text-white hover:bg-black transition-all duration-300 shadow-sm">
                        {getToolIcon(tool)}
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Wireframe Lower Matrix Line */}
              <div className="mt-10 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-gray-600 font-bold uppercase tracking-wider">
                <span></span>
                <Terminal size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </div>

            </div>
          </TiltCard>
        ))}
      </div>

    </section>
  );
}