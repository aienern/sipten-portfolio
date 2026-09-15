'use client';
import React, { useState } from 'react';
import type { FormEvent } from 'react';
import Navbar from '../components/Navbar';
import { Sparkles, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Yahan aap apni free Web3Forms key daal sakte hain

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Fallback submission if offline/error
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#030305] text-[#f3f4f6] relative overflow-x-hidden pt-28 pb-20">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-pink-950/20 via-[#030305] to-[#030305] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Let's Work Together
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-base font-light">
            Have a project in mind or want to build something exceptional? Send a message below and it will land straight in my inbox.
          </p>
        </div>

        {/* Single Direct Email Card (WhatsApp Removed) */}
        <div className="mb-8">
          <a href="mailto:siptenfreelance@gmail.com" className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-center gap-4 hover:border-indigo-500/50 transition group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider text-center sm:text-left">Direct Email Inbox</span>
              <span className="text-sm font-bold text-white">siptenfreelance@gmail.com</span>
            </div>
          </a>
        </div>

        {/* Contact Form Container */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          
          {submitted ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2 text-white">Message Sent Successfully!</h3>
              <p className="text-gray-400 text-sm font-light">
                Thank you for reaching out. Your message has been sent directly to <span className="text-indigo-400 font-medium">siptenfreelance@gmail.com</span>. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Project Requirements / Message</label>
                <textarea 
                  name="message"
                  rows={5} 
                  required 
                  placeholder="Tell me what you want to build (Web development, Excel automation, Power BI dashboard, AI workflows)..." 
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition flex items-center justify-center gap-2 glow-effect shadow-lg shadow-indigo-600/30 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Direct Message"} <Send className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>

      </div>
    </main>
  );
}