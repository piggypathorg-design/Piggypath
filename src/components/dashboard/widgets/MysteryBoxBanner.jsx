import React from 'react';
import { Gift } from 'lucide-react';

const MysteryBoxBanner = () => {
  return (
    <div className="w-full bg-[#1E1B4B] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm border border-indigo-900/50 relative overflow-hidden">
      
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="flex items-center gap-6 z-10 w-full md:w-auto mb-6 md:mb-0">
        <div className="w-20 h-20 bg-indigo-900/50 rounded-2xl flex items-center justify-center border border-indigo-500/30 shadow-inner shrink-0">
          <Gift size={40} className="text-yellow-400" />
        </div>
        <div>
          <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">Daily Reward</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Your Mystery Box is ready!</h3>
          <p className="text-sm text-indigo-200/80">Claim it for logging in today, coins, gems or a rare cosmetic inside.</p>
        </div>
      </div>

      <button className="z-10 w-full md:w-auto px-10 py-3.5 bg-[#00E599] hover:bg-[#00D08A] text-zinc-900 font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,153,0.3)]">
        Open Box
      </button>

    </div>
  );
};

export default MysteryBoxBanner;
