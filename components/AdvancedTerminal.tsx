"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Cpu, Wifi, Shield } from 'lucide-react';

export default function AdvancedTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const systemEvents = [
      "SYSTEM: Checking server configuration framework...",
      "KERNEL: Vercel server pipeline handshake status [OK]",
      "MEM_ALLOC: Memory buffers optimized for high-fps graphics",
      "SECURE: SSL/TLS handshakes authenticated over HTTPS",
      "MODULE: Hacker components compiled natively via Next.js 15"
    ];

    setLogs([systemEvents[0], systemEvents[1]]);

    const interval = setInterval(() => {
      const randomTrigger = [
        `METRIC: Core system latency normalized at ${Math.floor(Math.random() * 12 + 4)}ms`,
        `NODE_LOG: Input tracking responsive on coordinate axis [${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}]`,
        "BUFFER: Garbage collection execution triggered securely",
        "INTELLIGENCE: Credo AI prediction matrices pre-loaded"
      ];
      const nextLog = randomTrigger[Math.floor(Math.random() * randomTrigger.length)];
      setLogs(prev => [...prev.slice(-4), nextLog]); // Keep last 5 entries
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // FIXED: Ab ye sirf internal console box ke text ko update karega, full browser screen ko move nahi karega!
    if (terminalEndRef.current) {
      const parent = terminalEndRef.current.parentElement;
      if (parent) {
        parent.scrollTop = parent.scrollHeight;
      }
    }
  }, [logs]);

  return (
    <div className="max-w-5xl mx-auto border border-cyan-500/20 bg-black/60 backdrop-blur-md rounded-md p-4 font-mono text-[11px] text-gray-400 shadow-[0_0_30px_rgba(34,211,238,0.02)]">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-cyan-400">
        <div className="flex items-center gap-2">
          <Cpu size={12} className="animate-spin-slow" />
          <span className="font-bold tracking-widest uppercase">LIVE_SYSTEM_DIAGNOSTICS</span>
        </div>
        <div className="flex items-center gap-4 text-gray-500 text-[10px]">
          <span className="flex items-center gap-1"><Wifi size={10} className="text-emerald-500" /> ONLINE</span>
          <span className="flex items-center gap-1"><Shield size={10} className="text-purple-500" /> STABLE</span>
        </div>
      </div>
      
      {/* Scrollbar-none tracking locked internally here */}
      <div className="space-y-1 h-28 overflow-y-auto pr-2 scrollbar-none scroll-smooth">
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-2 items-start">
            <span className="text-purple-500 select-none">[{new Date().toLocaleTimeString()}]</span>
            <span className={log.includes('METRIC') ? 'text-cyan-400' : log.includes('NODE') ? 'text-yellow-500' : 'text-gray-300'}>
              {log}
            </span>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}