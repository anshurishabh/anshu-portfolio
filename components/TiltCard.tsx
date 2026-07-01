"use client";
import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);

    setCoords({ x, y });
  };

  // Safe sound feedback generator using standard Web Audio API
  const playCyberClick = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime); // High frequency blip
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime); // Extremely low subtle volume
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.05);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    } catch (e) { /* Audio context safe block */ }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setIsHovered(true); playCyberClick(); }}
      onMouseLeave={() => { setIsHovered(false); setCoords({ x: 0, y: 0 }); }}
      className={`transition-all duration-200 ease-out ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${-coords.y * 12}deg) rotateY(${coords.x * 12}deg) scale3d(1.02, 1.02, 1.02)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
}