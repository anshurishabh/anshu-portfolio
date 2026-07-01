"use client";
import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="glass-card max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-purple-500/10 bg-gradient-to-tr from-purple-950/5 via-transparent to-white/[0.01] text-center relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block mb-4">
          Let&apos;s Build Something Impactful
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base mb-8">
          I am currently exploring technical internship and full-time software engineering roles. If you have an opening that matches my skill set, let&apos;s connect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:anshukr5000t@gmail.com"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={16} />
            Email Me
          </a>

          <a 
            href="https://www.linkedin.com/in/anshurishabh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
          >
            <span className="font-medium">Connect on LinkedIn</span>
            <ArrowUpRight size={14} className="text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}