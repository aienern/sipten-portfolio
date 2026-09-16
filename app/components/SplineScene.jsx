'use client';
import React, { useState } from 'react';

export default function SplineScene() {
  const [rotate, setRotate] = useState({ x: 15, y: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 50, y: x * 50 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 15, y: 20 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative overflow-hidden flex items-center justify-center pointer-events-auto cursor-pointer perspective-[1200px]"
    >
      {/* Zero-Lag Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 blur-[100px] pointer-events-none"></div>

      {/* 3D Holographic Name Core */}
      <div 
        className="relative w-52 h-52 sm:w-64 sm:h-64 transition-transform duration-75 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-cyan-500/40 bg-cyan-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.2)] text-center p-4"
             style={{ transform: 'translateZ(90px)' }}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 mb-2">
            <span className="text-white font-black text-xl">SR</span>
          </div>
          <h4 className="text-sm font-extrabold text-white tracking-wider">Sipten Raja</h4>
          <span className="text-[10px] font-medium text-cyan-300 uppercase tracking-widest mt-1">Full-Stack Creator</span>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-purple-500/40 bg-purple-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl"
             style={{ transform: 'rotateY(180deg) translateZ(90px)' }}>
          <span className="text-xs font-bold text-purple-300 tracking-widest uppercase">UI/UX & 3D Web</span>
        </div>

        {/* Right Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-indigo-500/40 bg-indigo-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl"
             style={{ transform: 'rotateY(90deg) translateZ(90px)' }}>
          <span className="text-xs font-bold text-indigo-300 tracking-widest uppercase">Automation</span>
        </div>

        {/* Left Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-pink-500/40 bg-pink-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl"
             style={{ transform: 'rotateY(-90deg) translateZ(90px)' }}>
          <span className="text-xs font-bold text-pink-300 tracking-widest uppercase">Next.js</span>
        </div>

        {/* Top Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-yellow-500/40 bg-yellow-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl"
             style={{ transform: 'rotateX(90deg) translateZ(90px)' }}>
          <span className="text-xs font-bold text-yellow-300 tracking-widest uppercase">Dev 2026</span>
        </div>

        {/* Bottom Face */}
        <div className="absolute inset-0 rounded-2xl glass-panel border border-teal-500/40 bg-teal-950/40 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl"
             style={{ transform: 'rotateX(-90deg) translateZ(90px)' }}>
          <span className="text-xs font-bold text-teal-300 tracking-widest uppercase">Systems</span>
        </div>
      </div>
    </div>
  );
}