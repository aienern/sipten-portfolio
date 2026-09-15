import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sipten Raja | Portfolio',
  description: 'Full-Stack Developer, UI/UX Designer, 3D Web Creator, and Business Automation Specialist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030305] text-[#f3f4f6]`}>
        {children}
      </body>
    </html>
  );
}