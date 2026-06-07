'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/40 dark:shadow-glow sm:p-10">
      <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sky-400/20 blur-[60px]" />
      <div className="absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-violet-400/20 blur-[60px]" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setStatus('sending');
          window.setTimeout(() => setStatus('success'), 1000);
        }}
        className="space-y-5"
      >
        <div>
          <input required className="w-full border-b-2 border-slate-300/60 bg-transparent px-2 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-500 focus:border-sky-500 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-sky-400" type="text" name="name" placeholder="Your Name" />
        </div>
        <div>
          <input required className="w-full border-b-2 border-slate-300/60 bg-transparent px-2 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-500 focus:border-sky-500 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-sky-400" type="email" name="email" placeholder="Email Address" />
        </div>
        <div>
          <textarea required className="h-32 w-full resize-none border-b-2 border-slate-300/60 bg-transparent px-2 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-500 focus:border-sky-500 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-sky-400" name="message" placeholder="Project Details"></textarea>
        </div>
        <button type="submit" className="group relative mt-6 w-full overflow-hidden rounded-full bg-slate-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/25 active:scale-[0.98] dark:bg-white dark:text-slate-900">
          <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10 transition-colors group-hover:text-white">{status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}</span>
        </button>
        {status === 'success' && <p className="text-center text-sm text-sky-300">Thanks! I’ll respond within 24 hours.</p>}
      </form>
    </div>
  );
}
