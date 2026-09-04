import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Gamepad2, ShoppingBag, UserCircle } from 'lucide-react';

const DashboardTopBar = () => {
  return (
    <header className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-8 py-4 flex items-center justify-between transition-colors sticky top-0 z-50">
      
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-1 font-black text-2xl tracking-tight hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00E599] rounded-lg">
        <span className="text-zinc-900 dark:text-zinc-100">PiggyPath</span>
        <span className="text-indigo-500">.</span>
      </Link>

      {/* Right: Navigation Links */}
      <nav aria-label="Dashboard Navigation" className="hidden md:flex items-center gap-8">
        <Link to="/app" className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E599] rounded-lg px-1">
          <BookOpen size={18} strokeWidth={2.5} />
          Courses
        </Link>
        <Link to="/app/games" className="flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E599] rounded-lg px-1">
          <Gamepad2 size={18} strokeWidth={2.5} />
          Games
        </Link>
        <Link to="/app/path" className="flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E599] rounded-lg px-1">
          <ShoppingBag size={18} strokeWidth={2.5} />
          Path
        </Link>
        <Link to="/app/profile" className="flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E599] rounded-lg px-1">
          <UserCircle size={18} strokeWidth={2.5} />
          Profile
        </Link>
      </nav>

    </header>
  );
};

export default DashboardTopBar;

