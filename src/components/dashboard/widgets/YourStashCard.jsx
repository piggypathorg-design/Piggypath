import React from 'react';

const YourStashCard = () => {
  const stashItems = [
    {
      id: 'xp',
      name: 'XP',
      icon: '🔥',
      iconColor: 'text-orange-500',
      description: 'Level 12 - 2,800 total',
      value: '2,800'
    },
    {
      id: 'coins',
      name: 'Coins',
      icon: '🪙',
      iconColor: 'text-yellow-500',
      description: 'Earned from lessons & games',
      value: '1,240'
    },
    {
      id: 'gems',
      name: 'Gems',
      icon: '💎',
      iconColor: 'text-purple-500',
      description: 'Premium currency for the shop',
      value: '240'
    },
    {
      id: 'keys',
      name: 'Keys',
      icon: '🔑',
      iconColor: 'text-yellow-400',
      description: 'Same balance across the whole app - any course',
      value: '5'
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Your Stash</h3>

      <div className="flex flex-col gap-6 flex-1 justify-center">
        {stashItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center justify-between group">
              <div className="flex gap-3 items-start">
                <span className={`text-xl ${item.iconColor}`}>{item.icon}</span>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-0.5">
                    {item.description}
                  </span>
                </div>
              </div>
              <span className="font-black text-lg text-zinc-900 dark:text-zinc-100">
                {item.value}
              </span>
            </div>
            
            {/* Divider except for last item */}
            {index !== stashItems.length - 1 && (
              <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/50" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default YourStashCard;
