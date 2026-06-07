type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  links: {
    demo: string;
    github: string;
  };
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10 dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-glow dark:hover:border-violet-400/60 dark:hover:bg-slate-900/90">
      <div className="mb-5 flex items-center justify-between rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-950/80 dark:text-slate-300">
        <span className="font-medium uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300/90">{project.category}</span>
        <span className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">Live Demo</span>
      </div>
      <div className="h-48 overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-inner shadow-slate-950/40">
        <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-slate-600 leading-7 dark:text-slate-300">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:bg-slate-900/80 dark:hover:text-sky-300">
          Live Demo
        </a>
        <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:bg-slate-900/80 dark:hover:text-violet-300">
          GitHub
        </a>
      </div>
    </article>
  );
}
