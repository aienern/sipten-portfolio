'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { Sparkles, FileSpreadsheet, ExternalLink, Download, PlayCircle, Globe, GitBranch, BarChart3, Cpu, Code2, Video, Film } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden pt-28 pb-20">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-indigo-950/20 via-[#030305] to-[#030305] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-base font-light">
            Explore complete case studies, interactive web applications, live video demos, and advanced data automation dashboards (Excel, Power Query, Power BI).
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Web Platform with Real Working Screenshots */}
          <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="h-64 bg-black p-3 relative flex items-center justify-center border-b border-white/10 overflow-hidden gap-3">
              <div className="w-1/2 h-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                <img src="/project git hub.png" alt="GitHub Profile" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] text-indigo-300 uppercase tracking-wider">GitHub Profile</span>
              </div>
              <div className="w-1/2 h-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
                <img src="/when i coding.png" alt="Coding Workspace" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
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
                <a href="/" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition">
                  View Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span>Client Project</span>
              </div>
            </div>
          </div>

          {/* Project 2: Excel & CSV Automations */}
          <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="h-64 bg-gradient-to-br from-teal-950/40 via-blue-950/20 to-black p-6 flex flex-col items-center justify-center border-b border-white/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
              
              <div className="flex items-center gap-3 mb-4 z-10">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <FileSpreadsheet className="w-4 h-4 text-teal-400" />
                  <span>Excel</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <BarChart3 className="w-4 h-4 text-yellow-400" />
                  <span>Power BI</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Automation</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-md shadow-lg">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>VS Code</span>
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
                  <span className="truncate">Sales_Dashboard.xlsm</span>
                  <Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/CRM_Inventory_Automation_System.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">CRM Inventory System</span>
                  <Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Data_Cleaning.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">Data_Cleaning.xlsx</span>
                  <Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Lookup_Reporting.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition">
                  <span className="truncate">Lookup_Reporting.xlsx</span>
                  <Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
                <a href="/Top20_Freelancing_Platforms_Report.xlsx" download className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-teal-300 flex items-center justify-between transition sm:col-span-2">
                  <span className="truncate">Top 20 Freelancing Platforms Report</span>
                  <Download className="w-3.5 h-3.5 shrink-0 ml-2" />
                </a>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <span className="text-teal-400 font-medium">All 5 Automation Files Ready</span>
                <span className="text-gray-500">Business Intelligence</span>
              </div>
            </div>
          </div>

        </div>

        {/* AI VIDEO EDITING SHOWCASE */}
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
                  <span className="text-xs text-pink-400 font-semibold block mb-1">CapCut Edition #01</span>
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
                  <span className="text-xs text-pink-400 font-semibold block mb-1">CapCut Edition #02</span>
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

        {/* LIVE DEPLOYMENTS HUB */}
        <div className="mt-12 glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-black">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 mb-3">
                  <Globe className="w-3.5 h-3.5" /> Live Coded Deployments
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Coded Live Websites & Apps</h3>
                <p className="text-sm text-gray-400 font-light max-w-xl">
                  Explore live production websites built from scratch through custom programming.
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
                  <span className="text-xs text-purple-400 font-semibold group-hover:text-purple-300 transition block mb-1">Live Netlify Deployment #04</span>
                  <h4 className="text-lg font-bold text-white mb-1">iCareer Guide Platform</h4>
                  <p className="text-xs text-gray-400 font-light">Interactive career guidance and resource platform built with custom code.</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0 ml-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}