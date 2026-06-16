import React from 'react';
import { Lock, Crown } from 'lucide-react';

const badgeCategories = [
  {
    title: 'LEARNING',
    badges: [
      { id: 'b1', letter: 'B', color: '#FFC107', label: 'Budget Master', locked: true },
      { id: 'b2', letter: 'S', color: '#8B5CF6', label: 'Saver', locked: true },
      { id: 'b3', letter: '', color: '#F4F4F5', label: 'Credit Wise', locked: true },
    ]
  },
  {
    title: 'ACHIEVEMENT',
    badges: [
      { id: 'a1', letter: 'F', color: '#00E599', label: 'First Investor', locked: true, hasCrown: false },
      { id: 'a2', letter: 'R', color: '#18181B', label: 'Risk Aware', locked: true, isDark: true },
      { id: 'a3', letter: 'Q', color: '#FFC107', label: 'Quiz Champion', locked: true },
      { id: 'a4', letter: '', color: '#F4F4F5', label: 'Stock Pro', locked: true },
    ]
  },
  {
    title: 'SPECIAL',
    badges: [
      { id: 's1', letter: 'N', color: '#8B5CF6', label: 'New Year Speci...', locked: true },
    ]
  },
  {
    title: 'MILESTONE',
    badges: [
      { id: 'm1', letter: '7', color: '#EF4444', label: '7-Day Streak', locked: true },
      { id: 'm2', letter: '', color: '#F4F4F5', label: 'Wealth Builder', locked: true },
    ]
  }
];

const BadgesAndCollections = () => {
  return (
    <div className="w-full bg-white dark:bg-[#18181B] border-[3px] border-[#18181B] dark:border-white shadow-[8px_8px_0_#18181B] dark:shadow-[8px_8px_0_#F4F4F5] p-8 mb-6 transition-colors">
      
      <h3 className="font-black text-xl tracking-tight text-[#18181B] dark:text-[#F4F4F5] uppercase mb-8">
        Badges & Collections
      </h3>

      <div className="flex flex-col gap-8">
        {badgeCategories.map((category, idx) => (
          <div key={idx}>
            <h4 className="font-['Space_Mono',monospace] font-bold text-xs text-[#18181B] dark:text-[#F4F4F5] uppercase mb-4">
              {category.title}
            </h4>
            
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {category.badges.map(badge => (
                <div key={badge.id} className="flex flex-col items-center shrink-0 w-16 relative">
                  
                  {/* Crown Icon */}
                  {badge.hasCrown && (
                    <div className="absolute -top-3 -right-2 text-[#FFC107]">
                      <Crown size={16} fill="#FFC107" strokeWidth={2} />
                    </div>
                  )}

                  {/* Badge Box */}
                  <div 
                    className={`
                      w-16 h-16 border-[3px] flex items-center justify-center mb-2 transition-colors
                      ${badge.locked ? 'bg-[#F4F4F5] dark:bg-[#27272A] border-gray-300 dark:border-gray-600 shadow-none' : 'border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#F4F4F5]'}
                    `}
                    style={{ backgroundColor: badge.locked ? undefined : (badge.isDark ? '#27272A' : badge.color) }}
                  >
                    {badge.locked ? (
                      <Lock size={16} color="#A1A1AA" strokeWidth={2} />
                    ) : (
                      <span className={`font-black text-2xl ${badge.isDark ? 'text-white' : 'text-[#18181B]'}`}>
                        {badge.letter}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <span className="font-['Space_Mono',monospace] text-[9px] font-bold text-[#18181B] dark:text-[#A1A1AA] text-center w-full leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BadgesAndCollections;
