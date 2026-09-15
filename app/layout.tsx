import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplineScene from "./components/SplineScene";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multidisciplinary Portfolio & Automation",
  description: "Next.js Cinematic Portfolio with 3D & Data Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030305] text-[#f3f4f6] relative min-h-screen overflow-x-hidden`}>
        
        {/* Fixed 3D Spline Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <SplineScene />
        </div>

        {/* Subtle Dark Vignette Overlay so text remains readable */}
        <div className="fixed inset-0 z-0 bg-[#030305]/40 pointer-events-none"></div>

        {/* Page Content Layer */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}