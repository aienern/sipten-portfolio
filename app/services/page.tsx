'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden pt-28 pb-20">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-950/20 via-[#030305] to-[#030305] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Services — Complete Skillset
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise & Services</span>
          </h1>
          <p className="text-gray-400 text-base font-light">
            Yahan meri poori professional skillset hai jo aapke business ko scale karne ke liye design ki gayi hai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Web Development */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Web Development</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light mb-6">
                <li>• Full-Stack Web Development</li>
                <li>• Next.js & React</li>
                <li>• JavaScript / TypeScript</li>
                <li>• Frontend & Backend Development</li>
                <li>• API & Database Integration</li>
                <li>• Web Application Development</li>
              </ul>
            </div>
            <a href="/contact" className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300">
              Request Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* UI/UX & 3D */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">UI/UX & 3D</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light mb-6">
                <li>• UI/UX Design & Systems</li>
                <li>• Responsive Web Design</li>
                <li>• Interactive Web Experiences</li>
                <li>• 3D Web Design (Spline)</li>
                <li>• 3D Interaction</li>
                <li>• Motion & Micro-interactions</li>
              </ul>
            </div>
            <a href="/contact" className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300">
              Request Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Excel & Data */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Excel & Data</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light mb-6">
                <li>• Advanced Excel & Automation</li>
                <li>• VBA & Macro Development</li>
                <li>• Power Query & Power Pivot</li>
                <li>• Data Cleaning & Transformation</li>
                <li>• Data Modeling</li>
                <li>• Automated Reporting</li>
              </ul>
            </div>
            <a href="/contact" className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300">
              Request Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Business Intelligence */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Business Intelligence</h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light mb-6">
                <li>• Power BI Dashboards</li>
                <li>• Interactive Data Visualization</li>
                <li>• DAX Modeling & Analytics</li>
                <li>• KPI Reporting</li>
                <li>• Business Analytics</li>
              </ul>
            </div>
            <a href="/contact" className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300">
              Request Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* AI & Automation */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">AI & Automation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 font-light mb-6">
                <li>• AI-Assisted Development</li>
                <li>• Prompt Engineering & Workflows</li>
                <li>• AI Content Creation</li>
                <li>• AI Workflow Automation</li>
                <li>• WhatsApp Automation Bots</li>
                <li>• Email & System Pipelines</li>
                <li>• Business Process Automation</li>
              </div>
            </div>
            <a href="/contact" className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 hover:text-indigo-300">
              Request Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}