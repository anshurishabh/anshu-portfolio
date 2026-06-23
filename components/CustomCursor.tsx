"use client";
import React, { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let sparkles: Sparkle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createSparkle = (x: number, y: number) => {
      sparkles.push({
        x,
        y,
        // Sharp fast dispersion vectors
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        alpha: 1,
        size: Math.random() * 2 + 1 // Super micro tiny dot particle
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render the tiny precise hardware target pointer dot
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34, 211, 238, 1)'; // Solid Cyan Core Pointer
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(34, 211, 238, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0; // Reset blur for optimal framerate execution

      // Limit particle count to avoid heavy memory allocation overhead
      if (sparkles.length > 40) {
        sparkles.splice(0, sparkles.length - 40);
      }

      // Process micro sparks array
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.04; // Extremely fast linear fade-out

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${s.alpha})`; // Elegant subtle purple trailing spark
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      // 0ms Raw Screen Input Processing Loop
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Spawn tiny dynamic dots under movement velocity triggers
      if (Math.random() > 0.3) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-[99999] w-full h-full"
    />
  );
}