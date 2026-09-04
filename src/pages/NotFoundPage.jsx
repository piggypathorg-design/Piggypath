import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#18181B] px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-950/40 rounded-3xl mx-auto flex items-center justify-center mb-6 text-4xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
          ??
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">404</h1>
        <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 mb-3">Page Not Found</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
          Oops! Looks like this page wandered off the path. Let&apos;s get you back on track with your financial journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/app"
            className="flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#00c885] text-zinc-900 font-bold px-6 py-3 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#00E599]"
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold px-6 py-3 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#00E599]"
          >
            <ArrowLeft size={18} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
