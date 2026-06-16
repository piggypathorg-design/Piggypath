import React from 'react';

const badges = [];

const RecentAchievementsCard = () => {
  return (
    <div className="w-full bg-[#00E599] border-[3px] border-[#18181B] dark:border-white shadow-[6px_6px_0_#18181B] dark:shadow-[6px_6px_0_#F4F4F5] p-6 transition-colors">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-xl tracking-tight text-[#18181B]">RECENT</h3>
        <span className="bg-[#18181B] dark:bg-white text-[#00E599] dark:text-[#18181B] font-['Space_Mono',monospace] font-bold text-[10px] px-2 py-1 tracking-widest uppercase transition-colors">
          View All
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {badges.length === 0 ? (
          <div className="w-full text-center py-2 text-xs font-bold text-[#18181B]">
            No achievements yet.
          </div>
        ) : (
          badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center shrink-0 w-16">
              <div 
                className="w-16 h-16 bg-white dark:bg-[#18181B] border-[3px] border-[#18181B] dark:border-white flex items-center justify-center mb-2 shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#F4F4F5] transition-colors"
              >
                <span 
                  className="font-black text-2xl"
                  style={{ color: badge.color }}
                >
                  {badge.letter}
                </span>
              </div>
              <span className="font-['Space_Mono',monospace] text-[9px] font-bold text-[#18181B] text-center w-full leading-tight">
                {badge.title}
              </span>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default RecentAchievementsCard;
