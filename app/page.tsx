'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialShowcase from '@/components/TestimonialShowcase';
import SectionWrapper from '@/components/SectionWrapper';

const services = [
  'Website Development',
  'Landing Page Development',
  'React.js Development',
  'Business Website Development',
  'Portfolio Website Development',
  'Website Maintenance'
];

const portfolio = [
  {
    title: 'Gopal_Cloth_Collection',
    category: 'E-commerce',
    summary: 'Responsive clothing store UI with product gallery, category filters, and a simple checkout flow. Static site optimized for fast loading and mobile shopping, deployed on GitHub Pages.',
    image: '/images/projects/modern-saas-landing.svg',
    links: {
      demo: 'https://gopalmahjn.github.io/Gopal_Cloth_Collection-/',
      github: 'https://github.com/GOPALmahjn/Gopal_Cloth_Collection-'
    }
  },
  {
    title: 'Gopal_Jewellers',
    category: 'E-commerce',
    summary: 'Showcase site for a local jeweller featuring product galleries, contact/booking info, and SEO-friendly markup. Built for clean presentation and easy GitHub Pages deployment.',
    image: '/images/projects/creative-portfolio.svg',
    links: {
      demo: 'https://gopalmahjn.github.io/Gopal_Jewellers/',
      github: 'https://github.com/GOPALmahjn/Gopal_Jewellers'
    }
  },
  {
    title: 'Portfolio_',
    category: 'Portfolio',
    summary: 'Personal portfolio highlighting projects, skills, and contact methods with a minimal, responsive layout and fast performance. Deployed on GitHub Pages for quick sharing.',
    image: '/images/projects/business-growth.svg',
    links: {
      demo: 'https://gopalmahjn.github.io/Portfolio_/',
      github: 'https://github.com/GOPALmahjn/Portfolio_'
    }
  }
];

const testimonials = [
  {
    quote: 'Gopal turned our idea into a polished website with speed and clarity. The result looks premium and feels effortless.',
    client: 'Sana V.',
    role: 'Startup Founder',
    image: '/images/testimonials/sana.png',
    rating: 5,
    highlight: 'Polished & Speedy Delivery'
  },
  {
    quote: 'Professional, responsive, and detail-oriented. The website exceeded our expectations in every way.',
    client: 'Arjun P.',
    role: 'Marketing Lead',
    image: '/images/testimonials/arjun.png',
    rating: 5,
    highlight: 'Exceeded Every Expectation'
  },
  {
    quote: 'Excellent communication and a modern technical approach. Highly recommended for businesses seeking a strong online presence.',
    client: 'Ria S.',
    role: 'Creative Director',
    image: '/images/testimonials/ria.png',
    rating: 5,
    highlight: 'Modern Technical Approach'
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <section id="home" className="relative px-6 pt-24 pb-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-xl dark:border-slate-600/40 dark:bg-slate-900/40 dark:text-sky-300 dark:shadow-glow">
              Premium frontend development for bold brands
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Transforming Ideas into Powerful Digital Experiences
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Professional Web Development Services for Businesses, Startups, and Personal Brands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-sky-600 hover:shadow-lg dark:text-slate-950 dark:hover:bg-sky-400">
                Hire Me
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-600/60 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:text-sky-300">
                View Client Project
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto max-w-xl lg:mx-0 lg:w-[520px]"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-600/40 dark:bg-slate-950/80 dark:shadow-glow">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 opacity-80" />
              <div className="grid gap-5">
                <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 shadow-sm dark:border-white/5 dark:from-slate-900/95 dark:via-slate-900/70 dark:to-slate-800/80 dark:shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
                  <div className="mb-4 flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em]">Featured Service</span>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600 dark:bg-slate-800/80 dark:text-sky-300">React / Next.js</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Fast, responsive websites that convert.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Designed for modern brands using scalable React.js workflows and smooth interactions that keep visitors engaged.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Performance-first UI', 'Conversion-focused layouts', 'Animations with purpose', 'Strategic content hierarchy'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-xl dark:shadow-slate-950/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="about" title="About" description="Crafting premium websites with a polished, modern approach.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Gopal Developer Studio is a dedicated frontend development agency focused on building premium web experiences for businesses, startups, and personal brands.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                '1+ years of frontend experience',
                'React.js & Next.js expert',
                'HTML, CSS, Tailwind CSS mastery',
                'Clean, maintainable code'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/80 dark:shadow-glow">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">What Makes Us Different</h3>
            <p className="mt-4 text-slate-600 leading-7 dark:text-slate-300">
              We blend design precision with modern frontend development techniques, creating websites that look exceptional on every device and drive meaningful results.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="services" title="Services" description="Full-service development for websites, landing pages, and ongoing digital growth.">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard title={service} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="portfolio" title="Our Client Project" description="Selected projects that showcase polished UI, fast performance, and conversion-first design.">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {portfolio.map((project) => (
            <motion.div key={project.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="why" title="Why Choose Us" description="Why clients trust Gopal Developer Studio for premium web projects.">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { title: 'Fast Delivery', description: 'Launch quickly without sacrificing quality.' },
            { title: 'Responsive Design', description: 'Perfect experiences on desktop, tablet, and mobile.' },
            { title: 'SEO Friendly', description: 'Built for search visibility and strong page performance.' },
            { title: 'Clean Code', description: 'Readable, maintainable, and scalable frontend architecture.' },
            { title: 'Ongoing Support', description: 'Reliable maintenance and updates after launch.' }
          ].map((item) => (
            <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-slate-950/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-7 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="testimonials" title="Testimonials" description="Client reviews from brands who trust the development process.">
        <TestimonialShowcase testimonials={testimonials} />
      </SectionWrapper>

      <SectionWrapper id="contact" title="Contact" description="Ready to launch your next website? Let’s connect and build something exceptional.">
        <div className="relative mt-12">
          {/* Decorative Background Blob */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sky-300/30 to-violet-400/30 blur-[80px] dark:from-sky-500/10 dark:to-violet-600/10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Let's build the future together.</h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Whether you have a clear vision or just a rough idea, I'm here to turn it into a high-performing digital reality.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a href="mailto:gopalmahajantech18@gmail.com" className="group rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-700/60 dark:bg-slate-900/50 dark:shadow-none dark:hover:bg-slate-900/80">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Me</h4>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">gopalmahajantech18@gmail.com</p>
              </a>

              <a href="https://wa.me/919340864608" target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-700/60 dark:bg-slate-900/50 dark:shadow-none dark:hover:bg-slate-900/80">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition-colors group-hover:bg-violet-500 group-hover:text-white dark:bg-violet-500/20 dark:text-violet-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">WhatsApp</h4>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">+91 93408 64608</p>
              </a>

              <a href="https://topmate.io/gopal_mahajan10" target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-700/60 dark:bg-slate-900/50 dark:shadow-none dark:hover:bg-slate-900/80">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m-8 4h8m-4-16a9 9 0 100 18 9 9 0 000-18z" /></svg>
                </div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Topmate</h4>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">Book a session</p>
              </a>

              <a href="https://www.instagram.com/gopal.dev.studio/" target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-700/60 dark:bg-slate-900/50 dark:shadow-none dark:hover:bg-slate-900/80">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-500 group-hover:text-white dark:bg-pink-500/20 dark:text-pink-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10M7 17h10" /></svg>
                </div>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Instagram</h4>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">@gopal.dev.studio</p>
              </a>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-8 text-sm font-medium text-slate-500 backdrop-blur-xl transition-colors dark:border-slate-700/50 dark:bg-slate-950/80 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gopal Developer Studio. Crafted for modern brands.</p>
          <p>Built with Next.js, React, Tailwind CSS, and premium design detail.</p>
        </div>
      </footer>
    </main>
  );
}
