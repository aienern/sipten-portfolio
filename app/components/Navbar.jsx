'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          PORTFOLIO<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="/" className="hover:text-indigo-400 transition">Home</a>
          <a href="/projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="/services" className="hover:text-indigo-400 transition">Services</a>
          <a href="/about" className="hover:text-indigo-400 transition">About</a>
          <a href="/contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a href="/contact" className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/30">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-b border-white/10 py-6 px-6 flex flex-col space-y-4 text-gray-300">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400 transition">Home</a>
          <a href="/projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400 transition">Projects</a>
          <a href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400 transition">Services</a>
          <a href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400 transition">About</a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400 transition">Contact</a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-indigo-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/30">
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}