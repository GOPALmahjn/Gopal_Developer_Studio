export default function SkillTag({ label }: { label: string }) {
  return (
    <div className="group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] dark:border-slate-700/60 dark:bg-slate-900/40 dark:shadow-none dark:hover:border-sky-500/30 dark:hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]">
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-violet-500/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-500 group-hover:from-sky-500/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/10 group-hover:opacity-100 dark:group-hover:from-sky-500/10 dark:group-hover:via-violet-500/10 dark:group-hover:to-fuchsia-500/20" />
      
      <span className="relative z-10 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-slate-700 transition-colors duration-300 group-hover:text-sky-600 dark:text-slate-300 dark:group-hover:text-white">
        {label}
      </span>
      
      {/* Decorative details */}
      <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-slate-300/60 transition-colors duration-500 group-hover:bg-sky-400 dark:bg-slate-700" />
      <div className="absolute bottom-3 left-3 h-1 w-3 rounded-full bg-slate-300/60 transition-all duration-500 group-hover:w-8 group-hover:bg-violet-400 dark:bg-slate-700" />
    </div>
  );
}
