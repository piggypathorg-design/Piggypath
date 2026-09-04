import React from 'react';
import { Camera, MessageSquare, Share2, Award, Calendar } from 'lucide-react';

const UserProfileCard = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full flex flex-col justify-between">
      
      <div className="flex gap-6">
        {/* Avatar Section */}
        <div className="relative shrink-0">
          <div className="absolute -top-4 -left-4 z-10 bg-zinc-800 text-white text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1">
            <Award size={14} className="text-zinc-300" />
            MVP
          </div>
          <div className="w-24 h-24 bg-red-50 dark:bg-red-900/10 rounded-2xl overflow-hidden border-2 border-transparent">
            <img src="/images/avatars/aarav.png" alt="Jatin's avatar" width={96} height={96} className="w-full h-full object-cover scale-110 translate-y-2" />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Jatin</h3>
              <p className="text-zinc-400 text-sm">@jtn_ux</p>
            </div>
            <div className="bg-[#18181B] dark:bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              Lvl 12
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div 
              className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Level progress"
            >
              <div className="h-full bg-[#00E599] rounded-full" style={{ width: '80%' }} />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              <span>80%</span>
              <span>429 XP to Level 13</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges & Actions */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wide">
          <span className="flex items-center gap-1"><span role="img" aria-label="Crystal ball" className="text-purple-500 text-sm">🔮</span> Budget Master</span>
          <span className="flex items-center gap-1"><span role="img" aria-label="Star" className="text-yellow-400 text-sm">⭐</span> Collector</span>
          <span className="flex items-center gap-1"><span role="img" aria-label="Fire" className="text-orange-500 text-sm">🔥</span> 7 Day Streak</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
            <Calendar size={12} />
            Member since Feb 2026
          </div>
          <div className="flex gap-2">
            <button 
              aria-label="Change avatar" 
              className="w-11 h-11 rounded-full bg-[#18181B] dark:bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]"
            >
              <Camera size={16} />
            </button>
            <button 
              aria-label="Send message" 
              className="w-11 h-11 rounded-full bg-[#18181B] dark:bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]"
            >
              <MessageSquare size={16} />
            </button>
            <button 
              aria-label="Share profile" 
              className="w-11 h-11 rounded-full bg-[#18181B] dark:bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserProfileCard;
