import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number; // percentage
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  color: string;
  opacity: number;
}

export const AmbientLivingBackground: React.FC = () => {
  // Gentle mouse parallax coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's prefers-reduced-motion setting
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized -1 to +1 from screen center with slight damping
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      rafId = requestAnimationFrame(() => {
        setMousePos({ x: normX, y: normY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isReducedMotion]);

  // Pre-generate a subtle set of 18 sacred floating prayer embers
  const particles: Particle[] = useMemo(() => {
    const colors = [
      '#F37016', // Flame Orange
      '#FFA439', // Golden Dawn
      '#2E7D32', // Olive Growth
      '#0F2C52', // Royal Navy Ember
    ];

    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 5.5 + 7) % 96,
      size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5) + (i % 4) * 0.5,
      duration: 16 + (i % 7) * 3, // 16s to 34s ultra-slow drift
      delay: -(i * 2.3),
      color: colors[i % colors.length],
      opacity: i % 3 === 0 ? 0.22 : 0.14,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Micro Sacred Pattern Grid Texture (Moving subtle geometric lattice) */}
      <div 
        className="absolute inset-0 opacity-[0.035] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`,
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A2240 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 2. Slow-Pulsing Ambient Radiant Aura #1 (Royal Navy Glow - Upper Left) */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[110px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,34,64,0.06) 0%, rgba(6,22,42,0) 70%)',
          x: mousePos.x * 15,
          y: mousePos.y * 15,
        }}
        animate={isReducedMotion ? undefined : {
          scale: [1, 1.08, 0.98, 1],
          opacity: [0.6, 0.9, 0.7, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3. Slow-Pulsing Ambient Radiant Aura #2 (Warm Flame Orange Ember - Upper Right) */}
      <motion.div
        className="absolute top-[5%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(243,112,22,0.055) 0%, rgba(217,83,4,0) 65%)',
          x: mousePos.x * -20,
          y: mousePos.y * -15,
        }}
        animate={isReducedMotion ? undefined : {
          scale: [1, 1.12, 0.96, 1],
          opacity: [0.5, 0.85, 0.55, 0.5],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* 4. Slow-Pulsing Ambient Radiant Aura #3 (Peaceful Olive Grace - Lower Left) */}
      <motion.div
        className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(46,125,50,0.04) 0%, rgba(46,125,50,0) 70%)',
          x: mousePos.x * 12,
          y: mousePos.y * 18,
        }}
        animate={isReducedMotion ? undefined : {
          scale: [0.95, 1.07, 1, 0.95],
          opacity: [0.4, 0.75, 0.5, 0.4],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* 5. Sacred Incense Rising Particles (Floating Prayer Embers) */}
      {!isReducedMotion && (
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.x}%`,
                bottom: '-20px',
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
              animate={{
                y: [0, -window.innerHeight - 100],
                x: [0, Math.sin(p.id) * 35, Math.cos(p.id) * -25, 0],
                opacity: [0, p.opacity, p.opacity * 1.3, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* 6. Subtle Watermark Geometry Ribbon (Drifting gently across viewport) */}
      <svg
        className="absolute top-1/3 -right-24 w-96 h-96 opacity-[0.02] text-[#0A2240] pointer-events-none"
        viewBox="0 0 200 200"
        fill="currentColor"
        style={{
          transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="1" />
        <path d="M43.4 43.4 L156.6 156.6 M43.4 156.6 L156.6 43.4" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};
