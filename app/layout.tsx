import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Gopal Developer Studio | Premium Web Development',
  description: 'Modern web development agency delivering React, Next.js, and premium frontend experiences for businesses, startups, and personal brands.',
  metadataBase: new URL('https://gopaldeveloperstudio.com'),
  openGraph: {
    title: 'Gopal Developer Studio',
    description: 'Premium web development services with React, Next.js, and modern frontend solutions.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gopal Developer Studio',
    description: 'Premium web development services with React, Next.js, and modern frontend solutions.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-[#080a14] dark:text-slate-100`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_25%),radial-gradient(circle_at_20%_10%,_rgba(139,92,246,0.05),_transparent_18%),linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(241,245,249,1)_50%,_rgba(226,232,240,0.4)_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_25%),radial-gradient(circle_at_20%_10%,_rgba(139,92,246,0.12),_transparent_18%),linear-gradient(180deg,_rgba(8,10,20,1)_0%,_rgba(13,18,43,1)_50%,_rgba(4,7,19,1)_100%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
