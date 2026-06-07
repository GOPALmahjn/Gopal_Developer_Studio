import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080a14] px-6 text-slate-100">
      <div className="max-w-xl rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-10 text-center shadow-glow backdrop-blur-xl">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
