'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem('gds-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'light' ? 'light' : prefersDark ? 'dark' : 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    if (initial === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('gds-theme', next);
    document.documentElement.dataset.theme = next;
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500"
      aria-label="Toggle dark and light theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
