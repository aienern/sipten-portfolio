'use client';
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import SplineScene from './components/SplineScene';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Layers, 
  Cpu, 
  FileSpreadsheet, 
  Film, 
  CheckCircle2, 
  User 
} from 'lucide-react';

export default function Home() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.transform = `perspective(1000px) rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden">
      <Navbar />

      {/* Background Spline 3D Scene */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-45">
        <SplineScene />
      </div>

      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#030305]/70 via-transparent to-[#030305] pointer-events-none"></div>

      <style jsx>{`
        .interactive-3d-video {
          transition: transform 0.1s ease-out, box-shadow 0.3s ease;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Right Side Video Widget */}
      <div className="fixed right-6 md:right-16 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-none">
        <div className="relative flex items-center justify-center p-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl animate-spin" style={{ animationDuration: '12s' }}></div>
          
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-48 h-60 sm:w-56 sm:h-72 relative flex items-center justify-center interactive-3d-video cursor-pointer z-50 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 pointer-events-none"></div>
            <video 
              src="/portofilo dp.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover rounded-2xl relative z-10 pointer-events-none"
            ></video>
          </div>
        </div>
      </div>

      {/* Left Side Socials */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4 p-3 rounded-2xl glass-panel border border-white/10 shadow-2xl">
        <a 
          href="https://www.linkedin.com/in/sipten-raja-814a17429" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-gray-300 hover:text-indigo-400 flex items-center justify-center transition border border-white/5 hover:border-indigo-500/40 group"
          title="LinkedIn Profile"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>

        <a 
          href="https://github.com/aienern" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-600/20 text-gray-300 hover:text-purple-400 flex items-center justify-center transition border border-white/5 hover:border-purple-500/40 group"
          title="GitHub Profile"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
          </svg>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 pt-48 sm:pt-56 pb-20 text-center">
        
        <div className="relative flex items-center justify-center mb-8 lg:hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl animate-spin" style={{ animationDuration: '12s' }}></div>
          <div className="w-40 h-52 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 z-10">
            <video src="/portofilo dp.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl"></video>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6 z-20">
          <Sparkles className="w-4 h-4" /> Multidisciplinary Digital Creator
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none z-20">
          <span className="block text-white">I DESIGN.</span>
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent my-2">I BUILD.</span>
          <span className="block text-gray-400">I AUTOMATE.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed z-20">
          Full-Stack Development • UI/UX • 3D Web • Data & AI Automation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 z-20">
          <a href="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition flex items-center justify-center gap-2 glow-effect shadow-lg shadow-indigo-600/30">
            Explore Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition">
            Get in Touch
          </a>
        </div>

        <div className="pt-10 flex flex-col items-center gap-2 text-gray-500 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll Down to Discover</span>
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* ABOUT & SKILLS SECTION */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 shadow-2xl relative overflow-hidden bg-gradient-to-br from-indigo-950/20 via-black to-purple-950/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-6">
            <User className="w-3.5 h-3.5" /> Introduction
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            About My Work & Vision
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-6">
            I’m a <span className="text-indigo-400 font-semibold">Full-Stack Developer</span>, <span className="text-pink-400 font-semibold">UI/UX Designer</span>, <span className="text-purple-400 font-semibold">3D Web Creator</span>, and <span className="text-teal-400 font-semibold">Business Automation Specialist</span>. I build premium digital experiences, intelligent web applications, advanced Excel automation systems, data-driven dashboards, and AI-powered business workflows that turn ideas into practical solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-indigo-400" /><span>Production-Ready Code</span></div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-400" /><span>Advanced Data Engineering</span></div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-pink-400" /><span>Fluid 3D & Responsive UI</span></div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-purple-400" /><span>AI Automation Integration</span></div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technical Skills & Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4"><Code2 className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Full-Stack Development</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Next.js, React, Node.js, Tailwind CSS, TypeScript, and REST APIs.</p>
            </div>
            <div className="text-[11px] text-indigo-400/90 font-medium">Next.js • React • Node.js • Tailwind</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4"><FileSpreadsheet className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Advanced Excel & Macros</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Power Query, Power Pivot, complex VBA macros, automated data cleaning.</p>
            </div>
            <div className="text-[11px] text-teal-400/90 font-medium">Power Query • Power Pivot • VBA • Excel</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4"><Layers className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">UI/UX & 3D Experiences</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Interactive Spline 3D scenes, glassmorphism layouts, micro-animations.</p>
            </div>
            <div className="text-[11px] text-pink-400/90 font-medium">Spline 3D • Glassmorphism • UI/UX</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4"><Cpu className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Business Intelligence</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Dynamic Power BI dashboards and automated business KPI tracking.</p>
            </div>
            <div className="text-[11px] text-yellow-400/90 font-medium">Power BI • KPI Dashboards • Analytics</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between sm:col-span-2 lg:col-span-2">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4"><Film className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">AI-Powered Content & Video Editing</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Cinematic video creation, CapCut workflow mastery, AI-driven voiceover automation.</p>
            </div>
            <div className="text-[11px] text-purple-400/90 font-medium">CapCut Pro • AI Content Workflows • Video Production</div>
          </div>
        </div>

      </section>

      <footer className="relative z-10 py-12 px-6 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sipten Raja. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="/projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="/services" className="hover:text-indigo-400 transition">Services</a>
            <a href="/faq" className="hover:text-indigo-400 transition">FAQ</a>
            <a href="/contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}