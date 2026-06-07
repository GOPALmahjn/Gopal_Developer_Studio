'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Client Project', href: '#portfolio' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Gopal Developer Studio
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '×' : '≡'}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-5 shadow-lg backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-500 dark:text-slate-200 dark:hover:bg-slate-900/80 dark:hover:text-sky-400" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
