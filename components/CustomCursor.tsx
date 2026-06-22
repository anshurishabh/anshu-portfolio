"use client";
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsHidden(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Smooth delay for the hacker trailing effect
    let animationFrameId: number;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // Smooth interpolation factor
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    // Hover triggers on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (isHidden) return null;

  return (
    <>
      {/* Core Dot (Immediate feedback) */}
      <div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#22d3ee] mix-blend-screen transition-transform duration-100 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})` }}
      />

      {/* Outer Cyberpunk Ring Trail */}
      <div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-purple-500 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
          borderColor: isHovered ? '#22d3ee' : '#a855f7',
          boxShadow: isHovered ? '0 0 15px rgba(34, 211, 238, 0.4)' : '0 0 10px rgba(168, 85, 247, 0.2)',
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.05)' : 'transparent'
        }}
      />
    </>
  );
}