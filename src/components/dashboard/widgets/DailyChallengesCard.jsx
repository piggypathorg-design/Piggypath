import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const DailyChallengesCard = () => {
  const challenges = [
    {
      id: 1,
      title: 'Complete 3 Lessons',
      completed: true,
      rewardType: 'xp',
      rewardAmount: 67,
    },
    {
      id: 2,
      title: 'Complete 5 Lessons',
      completed: false,
      rewardType: 'gem',
      rewardAmount: 25,
    },
    {
      id: 3,
      title: 'Play 3 games',
      completed: false,
      rewardType: 'coin',
      rewardAmount: 10,
    },
    {
      id: 4,
      title: 'Log in 3 days in a row',
      completed: false,
      rewardType: 'key',
      rewardAmount: 1,
    }
  ];

  const getRewardIcon = (type) => {
    switch(type) {
      case 'xp': return <span role="img" aria-label="XP">🔥</span>;
      case 'gem': return <span role="img" aria-label="Gems">💎</span>;
      case 'coin': return <span role="img" aria-label="Coins">🪙</span>;
      case 'key': return <span role="img" aria-label="Keys">🔑</span>;
      default: return <span role="img" aria-label="Reward">🎁</span>;
    }
  };

  const getRewardColor = (type) => {
    switch(type) {
      case 'xp': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'gem': return 'bg-[#00E599] text-zinc-900';
      case 'coin': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'key': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-zinc-100 text-zinc-600';
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Daily Challenges</h3>

      {challenges.length === 0 ? (
        <div className="text-center py-8 text-zinc-400 font-medium text-sm">
          🎉 All caught up! No active challenges right now.
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                {challenge.completed ? (
                  <>
                    <span className="sr-only">Completed:</span>
                    <CheckCircle2 className="text-[#00E599]" size={22} aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Pending:</span>
                    <Circle className="text-zinc-200 dark:text-zinc-700 group-hover:text-zinc-400 transition-colors" size={22} aria-hidden="true" />
                  </>
                )}
                <span className={`font-bold text-sm ${challenge.completed ? 'text-zinc-400 line-through' : 'text-zinc-700 dark:text-zinc-200'}`}>
                  {challenge.title}
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold ${getRewardColor(challenge.rewardType)}`}>
                {getRewardIcon(challenge.rewardType)}
                <span>{challenge.rewardAmount.toString().padStart(2, '0')}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyChallengesCard;
