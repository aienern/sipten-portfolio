'use client';
import React, { useEffect, useRef } from 'react';

export default function SplineScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse & Scroll tracking
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Particle Galaxy Generation
    const particleCount = 600;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        baseAngle: Math.random() * Math.PI * 2,
        radius: Math.random() * 300 + 40,
        size: Math.random() * 2.2 + 0.6,
        speed: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        opacity: Math.random() * 0.8 + 0.2,
        z: Math.random() * 2 - 1,
      });
    }

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Scroll ke sath center position aur vortex ka spread change hoga
      const centerX = width / 2 + (mouse.x - width / 2) * 0.1;
      const centerY = (height / 2) - (scrollProgress * 150) + (mouse.y - height / 2) * 0.1;

      particles.forEach((p) => {
        p.baseAngle += p.speed;

        // Scroll expand effect (jaise video mein scroll karne par phailta hai)
        const currentRadius = p.radius + (scrollProgress * 250);

        const x = centerX + Math.cos(p.baseAngle) * currentRadius;
        const y = centerY + Math.sin(p.baseAngle) * (currentRadius * 0.65);

        // Mouse proximity glow & attraction
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let dynamicSize = p.size;
        let opacity = p.opacity;

        if (dist < 120) {
          dynamicSize *= 1.8;
          opacity = 1;
        }

        ctx.beginPath();
        ctx.arc(x, y, dynamicSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.shadowBlur = dist < 120 ? 15 : 6;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center pointer-events-none bg-[#030305]">
      {/* Sci-Fi Ambient Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-900/15 via-indigo-900/10 to-transparent blur-[150px] pointer-events-none"></div>

      {/* Dynamic Scroll & Mouse Particle Vortex */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
    </div>
  );
}