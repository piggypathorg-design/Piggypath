import { motion } from 'framer-motion';
import { Gamepad2, Trophy, TrendingUp, Flame, Shirt, ShoppingBag, Target, BookOpen, Medal, Star } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full relative overflow-hidden bg-white dark:bg-[#18181B] py-20 md:py-28 transition-colors">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-28 md:gap-36">
        


        {/* HOW IT WORKS (LOOP) */}
        <div>
          <div className="text-center mb-16 relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-[#8B5CF6] dark:text-indigo-300 text-xs font-bold tracking-widest uppercase mb-4">
              How it works
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#18181B] dark:text-white tracking-tight leading-tight">
              Three minutes a day is enough
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Short sessions beat long ones you never finish. Here is the loop that keeps learners coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Wavy dashed line connector for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2 z-0 pointer-events-none">
              <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full opacity-20 dark:opacity-10">
                <path 
                  d="M 50 100 Q 250 20 450 100 T 850 100" 
                  fill="none" 
                  stroke="#8B5CF6" 
                  strokeWidth="4" 
                  strokeDasharray="12 12" 
                />
              </svg>
            </div>
            
            {/* Step 1 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-[32px] p-8 shadow-sm relative z-10 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#00E599] text-[#18181B] rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                1
              </div>
              <h3 className="text-2xl font-black mb-3 text-[#18181B] dark:text-white">Learn by doing</h3>
              <p className="font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
                Every lesson is interactive. You make choices, see what happens, and understand the idea instead of memorizing it.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-[32px] p-8 shadow-sm relative z-10 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#8B5CF6] text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                2
              </div>
              <h3 className="text-2xl font-black mb-3 text-[#18181B] dark:text-white">Play to practice</h3>
              <p className="font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
                Turn each concept into a quick game. Budget under a timer, dodge impulse buys, and beat your own high score.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30 rounded-[32px] p-8 shadow-sm relative z-10 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-pink-500 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-sm">
                3
              </div>
              <h3 className="text-2xl font-black mb-3 text-[#18181B] dark:text-white">Earn and keep going</h3>
              <p className="font-medium text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
                Collect XP, coins, gems, and streaks. Complete a milestone and earn a Moon Stone artifact you can show off.
              </p>
            </motion.div>

          </div>
        </div>

        {/* CORE FEATURES (Pastel Grid) */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900/40 text-[#8B5CF6] dark:text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
              One app, everything connected
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#18181B] dark:text-white tracking-tight leading-tight">
              Learn it, play it, keep it
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Most apps just hand you videos. PiggyPath links every part together, so what you learn in a lesson gets reinforced in a game, rewarded with coins, and tracked on your path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              { 
                icon: <BookOpen size={24} />, title: 'Courses', desc: '5 courses from Personal Finance to Taxation, lessons on a gamified path.', 
                bg: 'bg-[#E6F9F0] dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4'
              },
              { 
                icon: <Gamepad2 size={24} />, title: 'Mini Games', desc: 'Practice concepts through play. Earn XP, coins & collectibles.', 
                bg: 'bg-[#F0EBFF] dark:bg-violet-500/10 border border-purple-200/50 dark:border-violet-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4'
              },
              { 
                icon: <ShoppingBag size={24} />, title: 'Shop', desc: 'Spend gems on outfits, keys & real merch.', 
                bg: 'bg-[#FFF9E6] dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4'
              },
              { 
                icon: <Target size={24} />, title: 'Daily Challenges', desc: 'Small daily goals for coins, XP & mystery boxes.', 
                bg: 'bg-[#FFEBF5] dark:bg-rose-500/10 border border-pink-200/50 dark:border-rose-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-6'
              },
              { 
                icon: <Flame size={24} />, title: 'Streaks', desc: 'Keep your learning streak alive every day.', 
                bg: 'bg-[#EEF2FF] dark:bg-blue-500/10 border border-indigo-200/50 dark:border-blue-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-6'
              },
              { 
                icon: <Medal size={24} />, title: 'Leaderboards', desc: 'Global, country & friends rankings, weekly & monthly.', 
                bg: 'bg-[#E6F9F0] dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4'
              },
              { 
                icon: <Star size={24} />, title: 'Achievements', desc: 'Unlock badges, artifacts & cosmetics for milestones.', 
                bg: 'bg-[#FFF9E6] dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4'
              },
              { 
                icon: <TrendingUp size={24} />, title: 'Portfolio Sim', desc: 'Practice investing with virtual money. Launching soon.', 
                bg: 'bg-[#FFEBF5] dark:bg-rose-500/10 border border-pink-200/50 dark:border-rose-500/20', text: 'text-[#18181B] dark:text-white', colSpan: 'md:col-span-4',
                badge: 'Coming soon'
              },
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className={`group rounded-[32px] p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${f.bg} ${f.colSpan}`}
              >
                {f.mascot && f.mascot}
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-2xl flex items-center justify-center mb-8 shadow-sm text-[#18181B] dark:text-white">
                    {f.icon}
                  </div>
                  {f.badge && (
                    <span className="bg-pink-200/80 dark:bg-pink-900/60 text-pink-800 dark:text-pink-200 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {f.badge}
                    </span>
                  )}
                </div>
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-2 ${f.text}`}>{f.title}</h3>
                  <p className={`font-medium ${f.text} opacity-70 leading-relaxed text-[14px]`}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;

