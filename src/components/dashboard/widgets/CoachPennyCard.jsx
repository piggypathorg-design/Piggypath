import React from 'react';
import { Sparkles, Sword } from 'lucide-react';

const CoachPennyCard = () => {
  return (
    <div className="bg-[#EFFFF6] dark:bg-[#064E3B]/20 rounded-3xl p-6 shadow-sm border border-[#00E599]/20 h-full flex flex-col relative overflow-hidden">
      
      <div className="flex items-center gap-2 mb-3 relative z-10">
        <Sword size={18} className="text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Coach Penny</h3>
      </div>

      <p className="text-sm text-emerald-800 dark:text-emerald-200/80 mb-4 relative z-10 leading-relaxed max-w-[85%]">
        Ready to build better money habits with me? Let's turn your finances into an adventure — with daily challenges, XP streaks, and real savings missions! <Sparkles size={14} className="inline text-yellow-500" />
      </p>

      <div className="mt-auto relative z-10">
        <div className="text-xs font-bold text-emerald-900 dark:text-emerald-100 mb-4">
          Tip: Save $100 today to earn your next streak bonus!
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-full transition-colors shadow-sm">
            Start your adventure
          </button>
        </div>
      </div>

      {/* Mascot Peeking */}
      <img 
        src="/images/cool-piggy-transparent.png" 
        alt="Coach Penny" 
        className="absolute -bottom-8 -left-6 w-32 h-auto opacity-90 drop-shadow-md z-0"
      />

    </div>
  );
};

export default CoachPennyCard;
