import React from 'react';
import { ChevronLeft, ChevronRight, Key } from 'lucide-react';

const PathSidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Course Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 relative">
        <div className="absolute top-4 right-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
          5 <Key size={12} className="text-yellow-500" />
        </div>

        <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mt-6 mb-1">Money Mastery</h2>
        <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-6">Your Roadmap to Financial Freedom</p>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
          Master your money — budgets, saving, investing, taxes, credit, insurance, and long-term wealth strategies.
        </p>

        <div className="flex items-center justify-between mt-auto">
          <button className="flex items-center gap-1 text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <ChevronLeft size={16} /> Prev
          </button>
          
          <div className="flex gap-1.5">
            <div className="w-6 h-1.5 bg-[#00E599] rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
          </div>

          <button className="flex items-center gap-1 text-sm font-bold text-zinc-900 bg-[#00E599] hover:bg-[#00D08A] px-4 py-2 rounded-full transition-colors shadow-sm">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Tip Box */}
      <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-5 border border-amber-200 dark:border-amber-900/30">
        <p className="text-xs font-bold text-amber-900 dark:text-amber-200/80 leading-relaxed text-center">
          You hold 5 keys, one shared balance across the entire app. Keys work in every course; spend them to unlock whichever lesson you like.
        </p>
      </div>

    </div>
  );
};

export default PathSidebar;
