import React from 'react';

const PathSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-6 shrink-0 h-fit">
      
      {/* Title */}
      <h2 className="font-black text-2xl tracking-tight text-[#18181B] dark:text-[#F4F4F5] uppercase mb-2">
        PATH MAP
      </h2>

      {/* Unit/Chapter Info Card */}
      <div className="w-full bg-white dark:bg-[#27272A] border-[4px] border-[#18181B] dark:border-white shadow-[8px_8px_0_#18181B] dark:shadow-[#FFFFFF] rounded-2xl p-6 transition-colors">
        <div className="inline-block px-3 py-1 border-[2px] border-[#18181B] dark:border-[#71717A] rounded-lg bg-[#E4E4E7] dark:bg-[#18181B] text-[#18181B] dark:text-[#A1A1AA] font-black uppercase text-xs mb-3 shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#71717A]">
          Current Chapter
        </div>
        <h3 className="font-black text-2xl text-[#18181B] dark:text-white tracking-tight mb-2">
          Chapter 1: The Basics
        </h3>
        <p className="font-bold text-[#71717A] dark:text-[#A1A1AA] text-sm mb-5">
          4 Lessons • 1 Assessment
        </p>
        
        {/* Chapter Progress Bar */}
        <div className="flex justify-between text-xs font-black text-[#18181B] dark:text-[#F4F4F5] mb-1.5">
           <span>Progress</span>
           <span>75%</span>
        </div>
        <div className="w-full h-4 bg-[#E4E4E7] dark:bg-[#18181B] border-[2px] border-[#18181B] dark:border-white rounded-full overflow-hidden transition-colors">
          <div className="h-full bg-[#8B5CF6] border-r-[2px] border-[#18181B] dark:border-white w-[75%]"></div>
        </div>
      </div>

      {/* Up Next Lesson Card */}
      <div className="w-full bg-[#00E599] border-[4px] border-[#18181B] dark:border-white shadow-[8px_8px_0_#18181B] dark:shadow-[8px_8px_0_#FFFFFF] rounded-2xl p-6 transition-colors">
        <div className="inline-block px-3 py-1 border-[2px] border-[#18181B] rounded-lg bg-white text-[#18181B] font-black uppercase text-xs mb-3 shadow-[2px_2px_0_#18181B]">
          Up Next
        </div>
        <h3 className="font-black text-2xl text-[#18181B] tracking-tight mb-3">
          Banking Basics
        </h3>
        
        {/* Short Description */}
        <p className="text-[#18181B] font-bold text-sm mb-6 leading-relaxed bg-white/40 p-3 rounded-lg border-[2px] border-[#18181B]">
          Learn how checking and savings accounts work, how to avoid sneaky bank fees, and how to build credit safely.
        </p>
        
        <button className="w-full bg-[#18181B] dark:bg-white text-white dark:text-[#18181B] font-black text-sm px-6 py-4 rounded-xl border-[4px] border-[#18181B] dark:border-[#18181B] hover:-translate-y-1 hover:shadow-[4px_4px_0_#18181B] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Continue Lesson</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>

    </div>
  );
};

export default PathSidebar;
