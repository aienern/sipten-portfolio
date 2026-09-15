'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden pt-28 pb-20">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-950/20 via-[#030305] to-[#030305] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Help & Support
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-400 text-base font-light">
            Explore answers to common queries, complete with direct links to evaluate my live work and project quality.
          </p>
        </div>

        {/* FAQ Grid with Integrated Project CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* FAQ 1 with Direct Project Link */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" /> Can you build a complete project from idea to final product?
              </h4>
              <p className="text-sm text-gray-400 font-light mb-4">
                Yes, from full-stack architecture, UI/UX, and 3D web features to database integration and business automation.
              </p>
            </div>
            <a href="/projects" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition group mt-2">
              Explore My Projects <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* FAQ 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" /> Why should I trust your multidisciplinary expertise?
              </h4>
              <p className="text-sm text-gray-400 font-light mb-4">
                Combining technical web development, advanced data intelligence, and clear communication ensures end-to-end execution.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" /> Can you handle custom Excel & Power BI reports?
              </h4>
              <p className="text-sm text-gray-400 font-light mb-4">
                Yes! Advanced Excel, VBA macros, Power Query, Power Pivot, and interactive Power BI executive dashboards.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" /> Do you build WhatsApp and email automation?
              </h4>
              <p className="text-sm text-gray-400 font-light mb-4">
                Yes, automated messaging pipelines, lead generation bots, and custom workflow automations.
              </p>
            </div>
          </div>

          {/* FAQ 5 (Full Width) with Direct Project Link */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" /> How can I trust the quality of your work?
              </h4>
              <p className="text-sm text-gray-400 font-light">
                You can review my past development, design, and data automation projects directly to evaluate quality and performance.
              </p>
            </div>
            <a href="/projects" className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition flex items-center gap-2 group">
              View My Projects <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}