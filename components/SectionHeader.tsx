type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-500 dark:text-sky-300/90">{title}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
