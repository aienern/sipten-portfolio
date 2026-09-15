'use client';
import React from 'react';

export default function SplineScene() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-auto overflow-hidden bg-[#030305]">
      <iframe 
        src="https://my.spline.design/visualicons-QsdXv6hZ1K8XtdGpdKLMNiKY/" 
        title="Spline 3D Background"
        className="w-full h-full border-0"
        style={{ width: '100%', height: '100%', border: 'none', background: 'transparent' }}
      ></iframe>
    </div>
  );
} 