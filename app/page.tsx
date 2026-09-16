'use client';
import React, { useRef, useEffect } from 'react';
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
  User, 
  ExternalLink, 
  Download, 
  PlayCircle, 
  Globe, 
  GitBranch, 
  Video, 
  Mail,
  Send,
  BarChart3
} from 'lucide-react';

export default function Home() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Mouse move 3D tilt effect handler for widgets & 3D interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.transform = `perspective(1000px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  // Video style Scroll-driven 3D scrub effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        const progress = Math.min(scrollY / 600, 1);
        heroRef.current.style.transform = `translateY(${scrollY * 0.25}px) scale(${1 - progress * 0.05})`;
        heroRef.current.style.opacity = `${1 - progress * 1.2}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden scroll-smooth selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Background Spline 3D Scene - Fully Interactive & Cinematic */}
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-70 scale-105 transition-transform duration-1000">
        <SplineScene />
      </div>

      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#030305]/60 via-transparent to-[#030305] pointer-events-none"></div>

      {/* Cinematic Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .interactive-3d-video {
          transition: transform 0.1s ease-out, box-shadow 0.3s ease;
          transform-style: preserve-3d;
        }
        .scroll-badge {
          animation: floatBadge 3s infinite ease-in-out;
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Right Side Video Widget with 3D Tilt */}
      <div className="fixed right-6 md:right-16 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-none">
        <div className="relative flex items-center justify-center p-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-pink-500/40 blur-3xl animate-spin" style={{ animationDuration: '10s' }}></div>
          
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-48 h-60 sm:w-56 sm:h-72 relative flex items-center justify-center interactive-3d-video cursor-pointer z-50 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/50 pointer-events-auto"
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

      {/* Left Side Floating Social Icons */}
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

      {/* SECTION 1: HERO WITH VIDEO STYLE CINEMATIC SCROLL */}
      <section id="home" className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 pt-36 sm:pt-44 pb-20 text-center">
        <div className="relative flex items-center justify-center mb-8 lg:hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl animate-spin" style={{ animationDuration: '12s' }}></div>
          <div className="w-40 h-52 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 z-10">
            <video src="/portofilo dp.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-2xl"></video>
          </div>
        </div>

        {/* Scroll Scrubbing Animated Hero Box */}
        <div ref={heroRef} className="transition-all duration-150 ease-out z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6 shadow-xl">
            <Sparkles className="w-4 h-4" /> Multidisciplinary Digital Creator
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none">
            <span className="block text-white">I DESIGN.</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent my-2">I BUILD.</span>
            <span className="block text-gray-400">I AUTOMATE.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Full-Stack Development • UI/UX • 3D Web • Data & AI Automation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition flex items-center justify-center gap-2 glow-effect shadow-lg shadow-indigo-600/30">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Video Style Scroll Scrub Timeline Badge - Ab click karne par direct Contact section par jayega */}
        <a href="#contact" className="scroll-badge text-[11px] font-mono tracking-widest text-gray-400 hover:text-indigo-300 uppercase border border-white/10 hover:border-indigo-500/40 px-6 py-2 rounded-full glass-panel flex items-center gap-2 z-20 mt-4 transition cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
          ↓ CLICK FOR CONTACT / SCROLL
        </a>
      </section>

      {/* SECTION 2: ABOUT & SKILLS */}
      <section id="about" className="relative z-20 max-w-6xl mx-auto px-6 py-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 shadow-2xl relative overflow-hidden bg-gradient-to-br from-indigo-950/20 via-black to-purple-950/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-6">
            <User className="w-3.5 h-3.5" /> Introduction
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">About My Work & Vision</h2>

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

        {/* Skills Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Technical Skills & Architecture</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/40 transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition"><Code2 className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Full-Stack Development</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Next.js, React, Node.js, Tailwind CSS, TypeScript, and REST APIs. Building fast, responsive, and SEO-optimized web apps.</p>
            </div>
            <div className="text-[11px] text-indigo-400/90 font-medium">Next.js • React • Tailwind</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-teal-500/40 transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition"><FileSpreadsheet className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Advanced Excel & Macros</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Power Query pipelines, Power Pivot data modeling, complex VBA macros, automated data extraction, cleaning, and reporting.</p>
            </div>
            <div className="text-[11px] text-teal-400/90 font-medium">Power Query • Power Pivot • VBA</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-pink-500/40 transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition"><Layers className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">UI/UX & 3D Experiences</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Interactive Spline 3D scenes, glassmorphism layouts, micro-animations, and modern user-centric interfaces.</p>
            </div>
            <div className="text-[11px] text-pink-400/90 font-medium">Spline 3D • Glassmorphism • UI/UX</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-yellow-500/40 transition group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition"><Cpu className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">Business Intelligence</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Dynamic Power BI dashboards, automated business KPI tracking, and transforming raw transactional CSV data.</p>
            </div>
            <div className="text-[11px] text-yellow-400/90 font-medium">Power BI • KPI Dashboards</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition group sm:col-span-2 lg:col-span-2">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition"><Film className="w-5 h-5" /></div>
              <h4 className="text-lg font-bold text-white mb-2">AI-Powered Content & Video Editing</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Cinematic video creation, CapCut workflow mastery, AI-driven voiceover automation, and high-retention short-form digital marketing content.</p>
            </div>
            <div className="text-[11px] text-purple-400/90 font-medium">CapCut Pro • AI Content Workflows</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS SHOWCASE */}
      <section id="projects" className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-base font-light">
            Explore complete case studies, interactive web applications, live video demos, and advanced data automation dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="h-64 bg-black p-3 relative flex items-center justify-center border-b border-white/10 overflow-hidden gap-3">
              <div className="w-1/2 h-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                <img src="/project git hub.png" alt="Project GitHub Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] text-indigo-300 uppercase tracking-wider">GitHub Profile</span>
              </div>
              <div className="w-1/2 h-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                <img src="/when i coding.png" alt="When I Coding Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] text-purple-300 uppercase tracking-wider">Live Workspace</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20">SEO Optimized</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-semibold border border-pink-500/20">Spline 3D</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Live Search-Optimized Web Platform</h3>
              <p className="text-sm text-gray-400 font-light mb-6">
                Built and indexed live on Google Search with advanced SEO architecture, custom interactive 3D elements, and lightning-fast performance.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <a href="#home" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition">
                  View Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span>Client Project</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="h-64 bg-gradient-to-br from-teal-950/40 via-blue-950/20 to-black p-6 flex flex-col items-center justify-center border-b border-white/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
              
              <div className="flex items-center gap-3 mb-4 z-10">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <FileSpreadsheet className="w-4 h-4 text-teal-400" /><span>Excel</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <BarChart3 className="w-4 h-4 text-yellow-400" /><span>Power BI</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <Cpu className="w-4 h-4 text-indigo-400" /><span>Automation</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <Code2 className="w-4 h-4 text-blue-400" /><span>VS Code</span>
                </div>
              </div>

              <span className="text-xs font-semibold text-gray-400 tracking-wider z-10">[EXCEL & POWER QUERY AUTOMATIONS]</span>
            </div>

            <div className="p-8">
              <p className="text-xs text-teal-400 font-semibold tracking-wide uppercase mb-3">
                Power Query • Power Pivot • VBA • Advanced Excel • Automated Reporting
              </p>

              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Data Transformation & Dashboards</h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium mb-6 bg-teal-950/20 border border-teal-500/20 p-3 rounded-xl">
                <PlayCircle className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <span className="text-teal-300 font-bold block text-xs uppercase tracking-wider">WATCH AUTOMATION DEMO</span>
                  <span className="text-xs text-gray-400 font-light">See how the Excel systems work in real time.</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 pt-2">
                <a href="/Sales_Dashboard.xlsm" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">Sales_Dashboard.xlsm</span><Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/CRM_Inventory_Automation_System.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">CRM Inventory System</span><Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Data_Cleaning.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">Data_Cleaning.xlsx</span><Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Lookup_Reporting.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">Lookup_Reporting.xlsx</span><Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Top20_Freelancing_Platforms_Report.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition sm:col-span-2">
                  <span className="truncate">Top 20 Freelancing Platforms Report</span><Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <span className="text-teal-400 font-medium">All 5 Automation Files Ready</span>
                <span className="text-gray-500">Business Intelligence</span>
              </div>
            </div>
          </div>

        </div>

        {/* AI Video Editing & CapCut Creations */}
        <div className="mt-12 glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-pink-950/30 via-purple-950/20 to-black">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-semibold border border-pink-500/20 mb-3">
                  <Film className="w-3.5 h-3.5" /> AI Content & Video Production
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">CapCut & AI Video Editing Showcase</h3>
                <p className="text-sm text-gray-400 font-light max-w-xl">
                  Engaging reels, cinematic edits, and AI-powered content creation produced with advanced effects and smooth transitions.
                </p>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-pink-300 flex items-center gap-2">
                <Video className="w-4 h-4 text-pink-400" /> CapCut Pro • AI Tools
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-pink-500/40 transition">
                <div className="mb-4">
                  <span className="text-xs text-pink-400 font-semibold block mb-1">CapCut Cinematic Edition #01</span>
                  <h4 className="text-lg font-bold text-white mb-3">Black Theme Cinematic Edit</h4>
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-black/60 border border-white/10 relative shadow-2xl">
                    <video src="/black edit.mp4" controls playsInline className="w-full h-full object-cover"></video>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                  <span>Advanced Color Grading & Transitions</span>
                  <span className="text-pink-400 font-semibold">HD Playback</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-pink-500/40 transition">
                <div className="mb-4">
                  <span className="text-xs text-pink-400 font-semibold block mb-1">CapCut Cinematic Edition #02</span>
                  <h4 className="text-lg font-bold text-white mb-3">White Theme Clean Aesthetic Edit</h4>
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-black/60 border border-white/10 relative shadow-2xl">
                    <video src="/white edite.mp4" controls playsInline className="w-full h-full object-cover"></video>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                  <span>AI Beat Sync & Motion Graphics</span>
                  <span className="text-pink-400 font-semibold">HD Playback</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Coded Deployments Hub */}
        <div className="mt-12 glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 mb-3">
                  <Globe className="w-3.5 h-3.5" /> Live Coded Deployments
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Coded Live Websites & Apps</h3>
                <p className="text-sm text-gray-400 font-light max-w-xl">
                  Explore production websites and web applications built from scratch through custom programming.
                </p>
              </div>
              <a href="https://github.com/aienern" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-purple-300 transition flex items-center gap-2 shrink-0">
                <GitBranch className="w-4 h-4" /> View GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://kamil-portfolio-rose.vercel.app/" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center justify-between group shadow-lg">
                <div>
                  <span className="text-xs text-purple-400 font-semibold block mb-1">Live Vercel Deployment #01</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-1">Kamil Portfolio Web Application</h4>
                  <p className="text-xs text-gray-400 font-light">Custom coded responsive portfolio built with modern web tech.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 ml-4" />
              </a>

              <a href="https://aienern.github.io/math-studio-2026/" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center justify-between group shadow-lg">
                <div>
                  <span className="text-xs text-purple-400 font-semibold block mb-1">Live GitHub Pages #02</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-1">Math Studio 2026</h4>
                  <p className="text-xs text-gray-400 font-light">Interactive mathematical application developed and hosted live.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 ml-4" />
              </a>

              <a href="https://login-system-gpze.onrender.com/" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center justify-between group shadow-lg">
                <div>
                  <span className="text-xs text-purple-400 font-semibold block mb-1">Live Render Deployment #03</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-1">Secure Login System</h4>
                  <p className="text-xs text-gray-400 font-light">Full-stack authentication and secure login workflow application.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 ml-4" />
              </a>

              <a href="https://icareerguide.netlify.app/" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center justify-between group shadow-lg">
                <div>
                  <span className="text-xs text-purple-400 font-semibold block mb-1">Live Netlify Deployment #04</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition mb-1">iCareer Guide Platform</h4>
                  <p className="text-xs text-gray-400 font-light">Interactive career guidance and resource platform built with custom code.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 ml-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section id="contact" className="relative z-25 max-w-4xl mx-auto px-6 py-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl bg-gradient-to-br from-indigo-950/30 via-black to-purple-950/30 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-4">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Have a project in mind, need data automation, or looking for a full-stack developer? Drop a message and let's discuss.
          </p>
          <a href="mailto:siptenraja@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition glow-effect shadow-lg shadow-indigo-600/30">
            <Send className="w-4 h-4" /> Send Direct Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sipten Raja. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-indigo-400 transition">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}