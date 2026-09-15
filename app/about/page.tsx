'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { Sparkles, GraduationCap, Award, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden pt-28 pb-20">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-blue-950/20 via-[#030305] to-[#030305] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> About Me & Expertise
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            MY <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Background</span>
          </h1>
          <p className="text-gray-400 text-base font-light">
            Combining a strong science foundation with technical software expertise and professional client communication.
          </p>
        </div>

        {/* Communication & Soft Skills Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 mb-16 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-indigo-950/20 to-purple-950/20">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
            <MessageSquare className="w-7 h-7" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Strong Communication & Client Collaboration</h3>
            <p className="text-sm text-gray-300 font-light">
              Along with technical proficiency in development and data automation, I possess strong communication skills. This ensures seamless client interactions, clear requirement understanding, and effective project delivery.
            </p>
          </div>
        </div>

        {/* Expertise Matrix 01 to 06 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-indigo-400 text-xs font-bold tracking-widest block mb-2">01 — DEVELOPMENT</span>
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Engineering</h3>
            <p className="text-sm text-gray-400 font-light">Full-Stack Development, Next.js, React, APIs, and robust database integrations.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-purple-400 text-xs font-bold tracking-widest block mb-2">02 — DESIGN</span>
            <h3 className="text-xl font-bold text-white mb-2">UI/UX Architecture</h3>
            <p className="text-sm text-gray-400 font-light">UI/UX design, responsive layouts, design systems, and interaction patterns.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-pink-400 text-xs font-bold tracking-widest block mb-2">03 — 3D EXPERIENCE</span>
            <h3 className="text-xl font-bold text-white mb-2">Immersive 3D Web</h3>
            <p className="text-sm text-gray-400 font-light">Spline 3D integration, interactive web scenes, motion, and cinematic micro-interactions.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-blue-400 text-xs font-bold tracking-widest block mb-2">04 — DATA & EXCEL</span>
            <h3 className="text-xl font-bold text-white mb-2">Advanced Data Processing</h3>
            <p className="text-sm text-gray-400 font-light">Advanced Excel, VBA macros, Power Query, Power Pivot, and complex data modeling.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-teal-400 text-xs font-bold tracking-widest block mb-2">05 — BUSINESS INTELLIGENCE</span>
            <h3 className="text-xl font-bold text-white mb-2">Power BI & Analytics</h3>
            <p className="text-sm text-gray-400 font-light">Power BI dashboards, DAX measures, data visualization, and executive reporting.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <span className="text-green-400 text-xs font-bold tracking-widest block mb-2">06 — AI & AUTOMATION</span>
            <h3 className="text-xl font-bold text-white mb-2">Intelligent Workflows</h3>
            <p className="text-sm text-gray-400 font-light">AI workflows, prompt engineering, WhatsApp bots, email sequences, and system automation.</p>
          </div>

        </div>

        {/* Tools & Technologies Interactive Wall */}
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Tools & Technologies Ecosystem</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-indigo-300 font-medium">Next.js</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-indigo-300 font-medium">React</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-indigo-300 font-medium">TypeScript</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-indigo-300 font-medium">Tailwind CSS</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-pink-300 font-medium">Spline 3D</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-300 font-medium">Advanced Excel 2021</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-300 font-medium">VBA / Macros</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-teal-300 font-medium">Power Query</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-teal-300 font-medium">Power Pivot</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-yellow-300 font-medium">Power BI</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-green-300 font-medium">WhatsApp Bots</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-purple-300 font-medium">AI Prompt Engineering</span>
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* DCST Diploma */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-indigo-400 shrink-0 mt-1" />
            <div>
              <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Diploma Certification</span>
              <h4 className="font-bold text-white text-lg mb-1">Diploma in Computer Software Technology (DCST)</h4>
              <p className="text-sm text-gray-400 font-light">Completed specialized technical training focused on computer software technology, programming foundations, and applications.</p>
            </div>
          </div>

          {/* 12th PCB Science */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex items-start gap-4">
            <Award className="w-8 h-8 text-purple-400 shrink-0 mt-1" />
            <div>
              <span className="text-xs text-purple-400 font-bold uppercase tracking-wider block mb-1">Higher Secondary Education</span>
              <h4 className="font-bold text-white text-lg mb-1">12th Grade — Science (PCB)</h4>
              <p className="text-sm text-gray-400 font-light">Completed Higher Secondary Education in Science stream (Physics, Chemistry, Biology), building strong analytical and problem-solving skills.</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}