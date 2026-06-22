"use client";
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  sides: number;
  alpha: number;
  vx: number;
  vy: number;
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
    let particles: Particle[] = [];
    
    // Exact colors matching image_9e7da5.jpg matrix
    const colors = [
      'rgba(249, 115, 22, ',  // Instant Orange
      'rgba(38, 38, 38, ',    // Dark Charcoal Block
      'rgba(64, 64, 64, ',    // Mid Charcoal
      'rgba(47, 63, 67, '     // Muted Slate Node
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (x: number, y: number) => {
      const size = Math.random() * 25 + 6; // Compact high-performance sizing
      const colorTemplate = colors[Math.floor(Math.random() * colors.length)];
      const sides = Math.random() > 0.4 ? Math.floor(Math.random() * 3) + 4 : 0; 
      
      particles.push({
        x,
        y,
        size,
        color: colorTemplate,
        sides,
        alpha: 0.9,
        // High blast speed for quick explosion feedback
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4
      });
    };

    const drawPolygon = (context: CanvasRenderingContext2D, x: number, y: number, radius: number, sides: number) => {
      context.beginPath();
      context.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));
      for (let i = 1; i <= sides; i++) {
        context.lineTo(x + radius * Math.cos((i * 2 * Math.PI) / sides), y + radius * Math.sin((i * 2 * Math.PI) / sides));
      }
      context.closePath();
      context.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Force render matrix limits
      if (particles.length > 70) {
        particles.splice(0, particles.length - 70);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025; // Super fast fade-out to prevent lagging trail

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;

        if (p.sides === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawPolygon(ctx, p.x, p.y, p.size, p.sides);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      // Direct raw screen input update without any lerp interpolation lag
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Instantly generate bursts exactly underneath the pointer tip
      createParticle(e.clientX, e.clientY);
      createParticle(e.clientX, e.clientY);
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
      className="hidden md:block fixed inset-0 pointer-events-none z-[9999] w-full h-full mix-blend-screen"
    />
  );
}