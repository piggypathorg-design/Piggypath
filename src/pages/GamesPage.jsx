import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Clock, Zap, ChevronRight, Star, Gamepad2, Wallet, TrendingUp, FileText, Home, Bitcoin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MINI_GAMES = [
  { id: 'hangman',    name: 'Hangman',        Icon: Gamepad2,   color: '#00e699', xp: 20,  difficulty: 'Easy',   time: '5 min'  },
  { id: 'budget',     name: 'Budget Builder', Icon: Wallet,     color: '#ffcc00', xp: 30,  difficulty: 'Easy',   time: '8 min'  },
  { id: 'invest',     name: 'Invest Quest',   Icon: TrendingUp, color: '#9966ff', xp: 40,  difficulty: 'Medium', time: '12 min' },
  { id: 'tax',        name: 'Tax Escape',     Icon: FileText,   color: '#ff3366', xp: 25,  difficulty: 'Easy',   time: '6 min'  },
  { id: 'realestate', name: 'Real Estate',    Icon: Home,       color: '#33ccff', xp: 50,  difficulty: 'Hard',   time: '15 min' },
  { id: 'crypto',     name: 'Crypto Myth',    Icon: Bitcoin,    color: '#ff9900', xp: 35,  difficulty: 'Medium', time: '10 min' },
];

const TABS = ['Recent', 'Games', 'Favorites'];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.25 },
});

export default function GamesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Games');
  const [search, setSearch] = useState('');

  const filtered = MINI_GAMES.filter(g =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen px-6 md:px-10 pt-8 pb-28 font-sans bg-transparent max-w-6xl mx-auto">
      {/* ── Page Header ── */}
      <motion.div {...fade(0)} className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
        <div>
          <h1 className="font-black uppercase tracking-tight text-5xl text-black">
            Game Library
          </h1>
          <p className="font-bold mt-2 text-gray-500 uppercase tracking-widest text-sm">
            Pick a challenge. Earn XP. Level up.
          </p>
        </div>

        {/* Search + Bell */}
        <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search games…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-64 neo-input pl-12 py-3.5 text-black font-bold"
            />
          </div>
          <button className="neo-btn-white w-14 h-14 flex items-center justify-center shrink-0">
            <Bell size={20} className="text-black" />
          </button>
        </div>
      </motion.div>

      {/* ── Tabs ── */}
      <motion.div {...fade(0.05)} className="flex mb-10 w-fit bg-white border-[3px] border-black shadow-neo-sm rounded-neo overflow-hidden p-1">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2.5 font-bold text-sm uppercase tracking-wider rounded-[4px] transition-all
              ${activeTab === tab 
                ? 'bg-neo-purple text-white border-2 border-black' 
                : 'bg-transparent text-gray-500 hover:text-black border-2 border-transparent'
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="neo-card bg-white flex flex-col hover:-translate-y-2 transition-transform cursor-pointer"
            onClick={() => navigate('/app/games/quiz')}
          >
            {/* Banner top */}
            <div className="h-28 flex items-center justify-center border-b-[3px] border-black" style={{ background: game.color }}>
               <game.Icon size={48} color="#000" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-black text-2xl uppercase tracking-tight text-black leading-none">
                  {game.name}
                </h2>
                <div className="neo-badge bg-white flex items-center gap-1.5 shrink-0 ml-4">
                  <Star size={12} fill="#ffcc00" color="#000" />
                  <span className="text-black">{game.xp} XP</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                 <div className="flex items-center gap-1.5 text-gray-600 font-bold text-sm">
                   <Clock size={16} /> {game.time}
                 </div>
                 <div className="flex items-center gap-1.5 text-gray-600 font-bold text-sm">
                   <Zap size={16} /> {game.difficulty}
                 </div>
              </div>

              <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                <span className="font-bold text-sm uppercase text-gray-400">Play Now</span>
                <div className="w-8 h-8 rounded-full bg-neo-teal border-2 border-black flex items-center justify-center">
                  <ChevronRight size={16} color="#000" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
