type Testimonial = {
  quote: string;
  client: string;
  role: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10 dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-glow dark:hover:border-sky-500/60">
      <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">“{testimonial.quote}”</p>
      <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-500 dark:border-slate-700/50 dark:text-slate-400">
        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.client}</p>
        <p>{testimonial.role}</p>
      </div>
    </div>
  );
}
