"use client";
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  sides: number;
  alpha: number;
  velocity: { x: number; y: number };
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Theme colors matching image_9e7da5.jpg
    const colors = [
      'rgba(249, 115, 22, ',  // Bright Orange (#f97316)
      'rgba(38, 38, 38, ',    // Dark Charcoal Polygon
      'rgba(64, 64, 64, ',    // Medium Charcoal
      'rgba(47, 63, 67, '     // Slate-Teal Muted Bubbles
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (x: number, y: number) => {
      const size = Math.random() * 35 + 8; // Varied polygon and bubble shapes
      const colorTemplate = colors[Math.floor(Math.random() * colors.length)];
      const sides = Math.random() > 0.4 ? Math.floor(Math.random() * 3) + 4 : 0; // 0 means clean circle, others are polygons
      
      particles.push({
        x,
        y,
        size,
        color: colorTemplate,
        sides,
        alpha: 0.8,
        velocity: {
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 1.5
        }
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

      // Create new items continually on slow moves or drags
      if (mouseRef.current.active && Math.random() > 0.2) {
        createParticle(mouseRef.current.x, mouseRef.current.y);
      }

      // Cap array constraints to maintain stable framerates
      if (particles.length > 120) {
        particles.shift();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.alpha -= 0.006; // Slow decay rate to let nodes settle like the snapshot

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
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      
      // Spawn burst items dynamically on motion trigger
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-[40] w-full h-full mix-blend-screen"
    />
  );
}