'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  quote: string;
  client: string;
  role: string;
  image: string;
  rating: number;
  highlight: string;
};

type TestimonialShowcaseProps = {
  testimonials: Testimonial[];
};

export default function TestimonialShowcase({ testimonials }: TestimonialShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Autoplay cycle (6 seconds)
  useEffect(() => {
    if (isHovered) {
      return;
    }

    const intervalTime = 60; // Update progress bar every 60ms
    const totalDuration = 6000; // 6 seconds
    const steps = totalDuration / intervalTime;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          return 0;
        }
        return prev + (100 / steps);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isHovered, testimonials.length]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div 
      className="relative mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background blur glowing blobs */}
      <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[80px] dark:bg-sky-500/5" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[80px] dark:bg-violet-500/5" />

      {/* Left Column: Spotlight Testimonial Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-8 md:p-10 shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_24px_80px_rgba(15,23,42,0.3)] flex flex-col justify-between min-h-[360px] md:min-h-[380px]">
        {/* Large Decorative Quote Icon */}
        <svg className="absolute right-8 top-8 h-28 w-28 text-sky-500/10 dark:text-sky-400/5 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col justify-between h-full flex-grow z-10"
          >
            <div>
              {/* Highlight Badge & Star Rating */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:bg-sky-500/20 dark:text-sky-300">
                  {activeTestimonial.highlight}
                </span>
                
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="mt-8 text-xl md:text-2xl font-medium leading-relaxed text-slate-800 dark:text-slate-100">
                “{activeTestimonial.quote}”
              </blockquote>
            </div>

            {/* Author details */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200/60 pt-6 dark:border-slate-800/80">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.client}
                  className="h-12 w-12 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                />
                <div>
                  <cite className="not-italic font-bold text-slate-900 dark:text-white">
                    {activeTestimonial.client}
                  </cite>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Direct Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-sky-400"
                  aria-label="Previous testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-sky-400"
                  aria-label="Next testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Column: Avatar Navigation Picker */}
      <div className="flex flex-col justify-center gap-4">
        {testimonials.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.client}
              onClick={() => handleSelect(index)}
              className={`relative flex items-center gap-4 rounded-[1.8rem] border p-5 text-left transition-all duration-300 ${
                isActive
                  ? 'border-sky-500 bg-sky-500/[0.03] shadow-lg shadow-sky-500/5 dark:border-sky-500/60 dark:bg-sky-500/[0.02]'
                  : 'border-slate-200/80 bg-white/50 hover:border-slate-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-950/40 dark:hover:border-slate-700 dark:hover:bg-slate-950/70'
              }`}
            >
              {/* Avatar with spinning/pulsing ring when active */}
              <div className="relative h-14 w-14 flex-shrink-0">
                {isActive && (
                  <span className="absolute -inset-1 rounded-full border-2 border-sky-500/30 dark:border-sky-400/40 animate-ping pointer-events-none" />
                )}
                <img
                  src={item.image}
                  alt={item.client}
                  className={`h-full w-full rounded-full object-cover border-2 transition-all duration-300 ${
                    isActive ? 'border-sky-500 scale-105' : 'border-slate-200/80 dark:border-slate-800'
                  }`}
                />
              </div>

              {/* Client details & highlight */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className={`font-bold transition-colors ${
                    isActive ? 'text-sky-500 dark:text-sky-400' : 'text-slate-900 dark:text-white'
                  }`}>
                    {item.client}
                  </h4>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {item.role}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400 font-medium">
                  "{item.highlight}"
                </p>
              </div>

              {/* Linear progress bar indicating autoplay timer for the active item */}
              {isActive && (
                <div className="absolute bottom-0 inset-x-5 h-0.5 bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-sky-500 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
