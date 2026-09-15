'use client';
import React from 'react';
import { aboutContent } from '../content/portfolioData';
import { CheckCircle, Code2, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
          // 02 — ABOUT ME
        </span>
        <div className="h-[1px] w-24 bg-white/10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Bio & Introduction */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Building digital products at the intersection of <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">design, code & automation.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            {aboutContent.bio}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Whether it's crafting an interactive 3D web experience, automating complex enterprise pipelines using Excel & Power Query, or deploying AI workflows, I focus on performance, scalability, and seamless user interaction.
          </p>

          {/* Capabilities Grid */}
          <div className="pt-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
              // CORE CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutContent.capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-md bg-white/[0.02] border border-white/10">
                  <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphic Stats & Profile Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/12 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">// EXPERTISE METRICS</span>
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>

            <div className="space-y-6">
              {aboutContent.stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-sm text-gray-300">{stat.label}</span>
                  <span className="text-2xl font-extrabold text-white font-mono">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="text-xs text-gray-400 font-mono">
                🚀 Pushing the boundaries of web & data systems.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}