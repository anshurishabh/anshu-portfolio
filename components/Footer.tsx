"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030014]/50 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div>
          © {new Date().getFullYear()} Anshu Kumar Rishabh. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}