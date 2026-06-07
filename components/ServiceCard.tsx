type ServiceCardProps = {
  title: string;
};

export default function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div className="group rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-glow dark:hover:border-sky-500/60 dark:hover:bg-slate-900/90">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl text-sky-500 transition-colors group-hover:bg-sky-50 group-hover:text-sky-600 dark:bg-slate-800/80 dark:text-sky-300 dark:group-hover:bg-sky-500/10">
        <span className="text-xl">✨</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-slate-600 leading-7 dark:text-slate-300">Delivering polished web solutions that resonate with audiences and convert visitors into customers.</p>
    </div>
  );
}
