import React from 'react';
import { ChevronDown, Medal } from 'lucide-react';

const NewLeaderboardCard = () => {
  const topThree = [
    { rank: 2, name: 'Mira', handle: '@mira_xp', score: 2774, avatar: '/images/avatars/meera.png', medalColor: 'text-zinc-300', medalBg: 'bg-zinc-100', height: 'h-48' },
    { rank: 1, name: 'Jatin', handle: '@jtn_ux', score: 3074, avatar: '/images/avatars/aarav.png', medalColor: 'text-yellow-500', medalBg: 'bg-yellow-100', height: 'h-56' },
    { rank: 3, name: 'Riya', handle: '@riyafinds', score: 1988, avatar: '/images/avatars/meera.png', medalColor: 'text-orange-400', medalBg: 'bg-orange-100', height: 'h-40' },
  ];

  const others = [
    { rank: 4, name: 'Sam', handle: '@savvy_sam', score: 1589, avatar: '/images/avatars/rohan.png' },
    { rank: 5, name: 'Alex', handle: '@xpjunkie', score: 1021, avatar: '/images/avatars/aarav.png' },
    { rank: 6, name: 'Noob', handle: '@noob2pro', score: 999, avatar: '/images/avatars/meera.png' },
  ];

  return (
    <div className="bg-[#18181B] rounded-3xl p-6 shadow-sm border border-zinc-800 relative overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-xl font-bold text-white">Leaderboard</h3>
        <button className="flex items-center gap-2 bg-zinc-800 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors">
          Weekly <ChevronDown size={14} />
        </button>
      </div>

      {/* Podium */}
      <div className="flex justify-center items-end gap-2 md:gap-4 mb-8">
        {topThree.map((user, index) => (
          <div key={user.rank} className={`flex flex-col items-center w-28 md:w-36 rounded-t-2xl bg-zinc-800/50 pt-6 pb-4 relative ${user.height}`}>
            
            {/* Medal */}
            <div className={`absolute -top-6 w-12 h-12 rounded-full ${user.medalBg} flex items-center justify-center border-4 border-[#18181B] z-10 shadow-lg`}>
              <span className={`font-black text-lg ${user.medalColor}`}>{user.rank}</span>
            </div>
            
            {/* Ribbon tails (simplified) */}
            <div className="absolute -top-2 w-8 h-4 bg-red-500 rounded-sm -z-10 rotate-12 -left-1" />
            <div className="absolute -top-2 w-8 h-4 bg-blue-500 rounded-sm -z-10 -rotate-12 -right-1" />

            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700 mb-2 mt-4 bg-zinc-800">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover scale-110 translate-y-1" />
            </div>
            
            <div className="text-center mt-auto">
              <div className="text-sm font-bold text-white leading-tight">{user.name}</div>
              <div className="text-[10px] text-zinc-400 mb-1">{user.handle}</div>
              <div className={`text-base font-black ${user.rank === 1 ? 'text-yellow-400' : user.rank === 2 ? 'text-indigo-400' : 'text-orange-400'}`}>
                {user.score} <span className="text-[10px] uppercase">pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 pb-16">
        {others.map((user) => (
          <div key={user.rank} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-zinc-500 w-6 text-center">{user.rank}th</span>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-700">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover scale-110 translate-y-1" />
              </div>
              <span className="text-sm font-bold text-zinc-300">{user.handle}</span>
            </div>
            <span className="text-sm font-bold text-white">{user.score} pts</span>
          </div>
        ))}
      </div>

      {/* Sticky Current User Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0F0F13] border-t border-indigo-500/30 p-4 px-6 flex justify-between items-center z-20">
        <div className="absolute top-0 left-0 px-2 py-0.5 bg-indigo-500 text-[9px] font-black uppercase text-white rounded-br-lg">You</div>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-yellow-500">
            <span className="font-black text-yellow-600 text-xs">1</span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-700">
            <img src="/images/avatars/aarav.png" alt="You" className="w-full h-full object-cover scale-110 translate-y-1" />
          </div>
          <span className="text-sm font-bold text-white">@jtn_ux</span>
        </div>
        <div className="text-lg font-black text-yellow-400 mt-2">
          3074 pts
        </div>
      </div>

    </div>
  );
};

export default NewLeaderboardCard;
