import { motion } from 'framer-motion';
import { ShoppingCart, Rocket, TrendingUp, CreditCard, Coins, Trophy, Flame, Gift, Check } from 'lucide-react';

const JourneyPreviewSection = () => {
  return (
    <section id="journey" className="w-full bg-white dark:bg-[#18181B] py-20 md:py-28 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-28 md:gap-36">
        
        {/* LEARNING JOURNEY PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 border border-indigo-200/60 dark:border-indigo-900/40 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 font-bold uppercase text-xs mb-6 tracking-wider">
              Your Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#18181B] dark:text-white tracking-tight leading-tight">
              Your Journey To <br className="hidden md:block" /> <span className="text-[#8B5CF6]">Financial Freedom</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
              Every journey is broken into milestones and levels. Learn concepts through guided stories and master them by playing simulations.
            </p>
          </div>

          {/* Right Side: Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              { title: 'Budget Survivor', desc: 'Can you survive a month on your first salary without going broke?', color: '#EF4444', bg: 'bg-red-50/70 dark:bg-red-950/30 border-red-100 dark:border-red-900/30', icon: <ShoppingCart size={24} /> },
              { title: 'Startup Challenge', desc: 'Manage a growing business, handle cash flow, and expand operations.', color: '#F59E0B', bg: 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30', icon: <Rocket size={24} /> },
              { title: 'Investment Quest', desc: 'Build your first portfolio and watch the compound interest magic.', color: '#10B981', bg: 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30', icon: <TrendingUp size={24} /> },
              { title: 'Credit Score Rescue', desc: 'Recover from financial mistakes and build an 800+ credit score.', color: '#8B5CF6', bg: 'bg-purple-50/70 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/30', icon: <CreditCard size={24} /> },
            ].map((game, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group border rounded-[24px] p-5 shadow-sm flex gap-5 items-center hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 ${game.bg}`}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: `${game.color}20`, color: game.color }}>
                  {game.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-[#18181B] dark:text-white">{game.title}</h3>
                  <p className="font-medium text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{game.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VIRTUAL INVESTING PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#18181B] rounded-[32px] p-6 md:p-8 border border-gray-200/80 dark:border-gray-800 shadow-xl relative"
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Portfolio Value</div>
                  <div className="text-3xl md:text-4xl font-black text-[#18181B] dark:text-white">$12,450.00</div>
                  <div className="text-[#10B981] font-bold text-xs sm:text-sm mt-1.5 flex items-center gap-1">
                    <TrendingUp size={16} /> + $1,200 (10.4%) All Time
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm rounded-full shadow-sm transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]">
                  Trade Sim
                </button>
              </div>

              {/* Mock Chart */}
              <div className="h-36 w-full flex items-end gap-2 mb-6 pt-2">
                {[40, 50, 45, 60, 55, 70, 85, 80, 95, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex-1 bg-gradient-to-t from-[#10B981]/20 to-[#10B981] rounded-t-md opacity-90"
                  />
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border border-gray-100 dark:border-gray-800 rounded-2xl bg-gray-50/60 dark:bg-gray-800/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-[11px] font-black shadow-sm">
                      AAPL
                    </div>
                    <div>
                      <div className="font-bold text-[#18181B] dark:text-white text-sm">Apple Inc.</div>
                      <div className="text-xs font-medium text-gray-400">Technology</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#18181B] dark:text-white text-sm">$150.25</div>
                    <div className="text-[#10B981] text-xs font-bold">+ 1.2%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 border border-emerald-200/60 dark:border-emerald-900/40 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 font-bold uppercase text-xs mb-6 tracking-wider">
              Simulation
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#18181B] dark:text-white tracking-tight leading-tight">
              Practice Before You Invest
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 mb-4 leading-relaxed max-w-2xl">
              Apply everything you have learned in a risk-free virtual market. Trade stocks, build portfolios, and test strategies.
            </p>
            <ul className="space-y-4 text-base font-bold text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00E599]/20 text-[#10B981] flex items-center justify-center shrink-0">
                  <Check size={16} strokeWidth={3} />
                </span> 
                Real-time market data.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00E599]/20 text-[#10B981] flex items-center justify-center shrink-0">
                  <Check size={16} strokeWidth={3} />
                </span> 
                Track performance over time.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00E599]/20 text-[#10B981] flex items-center justify-center shrink-0">
                  <Check size={16} strokeWidth={3} />
                </span> 
                Learn from outcomes with zero financial risk.
              </li>
            </ul>
          </div>
        </div>

        {/* REWARDS & PROGRESSION */}
        <div className="mt-20 p-8 sm:p-12 md:p-16 rounded-[40px] bg-gray-50/80 dark:bg-[#15131C] border border-gray-100 dark:border-gray-800/60 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white tracking-tight leading-tight mb-4">
              Progress That Feels Rewarding
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every lesson, challenge, and game moves you closer to new rewards and milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { label: 'Piggy Coins', desc: 'Earned for completing lessons and acing quizzes.', icon: <Coins size={32} className="text-amber-500" />, bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200/50 dark:border-amber-800/40', color: 'text-amber-600 dark:text-amber-400' },
              { label: 'Skill Badges', desc: 'Show off your mastery in specific financial topics.', icon: <Trophy size={32} className="text-indigo-500" />, bg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200/50 dark:border-indigo-800/40', color: 'text-indigo-600 dark:text-indigo-400' },
              { label: 'Daily Streaks', desc: 'Build daily habits and multiply your earned rewards.', icon: <Flame size={32} className="text-red-500" />, bg: 'bg-red-50 dark:bg-red-950/40 border-red-200/50 dark:border-red-800/40', color: 'text-red-600 dark:text-red-400' },
              { label: 'Mystery Chests', desc: 'Unlock mystery boxes filled with rare artifacts.', icon: <Gift size={32} className="text-emerald-500" />, bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/50 dark:border-emerald-800/40', color: 'text-emerald-600 dark:text-emerald-400' },
            ].map((r, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, y: -4 }}
                className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-white dark:bg-[#1C1A24] border border-gray-100 dark:border-gray-800/60 rounded-[32px] shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border ${r.bg}`}>
                  {r.icon}
                </div>
                <div>
                  <h3 className={`font-black text-xl mb-2 ${r.color}`}>
                    {r.label}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneyPreviewSection;

