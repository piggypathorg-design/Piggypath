
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">
    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#00E599]/20 text-[#10B981] flex items-center justify-center">
      <Check size={14} strokeWidth={3} />
    </div>
    <span>{text}</span>
  </li>
);

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [seats, setSeats] = useState(500);

  const baseSeatMonthlyRate = 899;
  const perSeatRate = isAnnual ? Math.round(baseSeatMonthlyRate * 0.8) : baseSeatMonthlyRate;
  const estimatedCost = seats * perSeatRate;

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="w-full py-20 md:py-28 bg-white dark:bg-[#18181B] transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <span className="inline-block px-4 py-1.5 border border-purple-200/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-4 text-center">
          SIMPLE, HONEST PRICING
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white max-w-2xl text-center tracking-tight leading-tight mb-4">
          Start free, upgrade when you are ready
        </h2>
        
        <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl text-center leading-relaxed mb-10">
          On the free plan you get 5 keys every day, which is plenty to build a daily habit. Go Premium for unlimited keys and every course.
        </p>

        {/* Toggle */}
        <div className="flex items-center p-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 rounded-full mb-16 shadow-inner">
          <button 
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${
              !isAnnual 
                ? 'bg-white dark:bg-[#8B5CF6] text-[#18181B] dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-gray-400 hover:text-[#18181B] dark:hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${
              isAnnual 
                ? 'bg-white dark:bg-[#8B5CF6] text-[#18181B] dark:text-white shadow-sm' 
                : 'text-gray-500 dark:text-gray-400 hover:text-[#18181B] dark:hover:text-white'
            }`}
          >
            Annual
            <span className="bg-[#00E599] text-[#18181B] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Free */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1E1B2E] border border-gray-200/80 dark:border-purple-900/30 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-black text-[#18181B] dark:text-white mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[#18181B] dark:text-white">₹0</span>
              <span className="text-xs font-bold text-gray-400 ml-1">/ month</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-6 flex-grow leading-relaxed">
              For getting started and building a daily money habit.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              <CheckItem text="5 keys per day" />
              <CheckItem text="All 5 core courses" />
              <CheckItem text="Mini games & daily streaks" />
              <CheckItem text="Leaderboards & achievements" />
            </ul>
            <button 
              onClick={scrollToWaitlist}
              className="w-full py-3.5 px-4 rounded-full border border-gray-200 dark:border-gray-700 font-bold text-[#18181B] dark:text-white text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-auto focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              Start free
            </button>
          </motion.div>

          {/* Premium (Most Popular) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#1E1B2E] border-2 border-[#8B5CF6] rounded-[32px] p-8 flex flex-col shadow-xl relative scale-102 lg:-translate-y-2"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-black text-[#18181B] dark:text-white mb-2 mt-2">Individual</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[#18181B] dark:text-white">₹{isAnnual ? '319' : '399'}</span>
              <span className="text-xs font-bold text-gray-400 ml-1">/ month</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-6 flex-grow leading-relaxed">
              Unlimited learning with premium games and offline access.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              <CheckItem text="Unlimited keys every day" />
              <CheckItem text="Every lesson & premium game" />
              <CheckItem text="No ads, offline mode" />
              <CheckItem text="Streak freezes & bonus XP" />
            </ul>
            <button 
              onClick={scrollToWaitlist}
              className="w-full py-3.5 px-4 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] font-bold text-white text-center shadow-md transition-all mt-auto focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2"
            >
              Go Premium
            </button>
          </motion.div>

          {/* Buddy / Family */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#1E1B2E] border border-gray-200/80 dark:border-purple-900/30 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-black text-[#18181B] dark:text-white mb-2">Buddy</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[#18181B] dark:text-white">₹{isAnnual ? '1119' : '1399'}</span>
              <span className="text-xs font-bold text-gray-400 ml-1">/ month</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-6 flex-grow leading-relaxed">
              Shared account for up to 4 friends or family members.
            </p>
            <ul className="flex flex-col gap-3.5 mb-8">
              <CheckItem text="Everything in Individual" />
              <CheckItem text="Up to 4 member seats" />
              <CheckItem text="Shared family leaderboard" />
              <CheckItem text="Progress insights dashboard" />
            </ul>
            <button 
              onClick={scrollToWaitlist}
              className="w-full py-3.5 px-4 rounded-full border border-gray-200 dark:border-gray-700 font-bold text-[#18181B] dark:text-white text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mt-auto focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              Choose Buddy
            </button>
          </motion.div>

          {/* Schools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-[#1E1B2E] border border-gray-200/80 dark:border-purple-900/30 rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-black text-[#18181B] dark:text-white mb-2">Schools</h3>
            <div className="mb-4">
              <span className="text-4xl font-black text-[#18181B] dark:text-white">₹{perSeatRate}</span>
              <span className="text-xs font-bold text-gray-400 ml-1">/ seat / yr</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-6 leading-relaxed">
              For classrooms and educational institutions.
            </p>
            <ul className="flex flex-col gap-3.5 mb-6">
              <CheckItem text="Teacher admin dashboard" />
              <CheckItem text="Custom class leaderboards" />
              <CheckItem text="Bulk student onboarding" />
              <CheckItem text="Priority support" />
            </ul>
            
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
              <div className="w-full flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                <span>Seats:</span>
                <span className="text-[#8B5CF6] font-black">{seats} students</span>
              </div>

              <input 
                type="range" 
                min="10" 
                max="10000" 
                step="10"
                value={seats} 
                aria-label="Number of seats for school plan"
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              />

              <div className="text-xs font-bold text-gray-600 dark:text-gray-300">
                Est: <span className="text-sm font-black text-[#18181B] dark:text-white">₹{estimatedCost.toLocaleString('en-IN')}</span> / yr
              </div>

              <button 
                onClick={scrollToWaitlist}
                className="w-full py-3 px-4 rounded-full bg-[#18181B] dark:bg-white text-white dark:text-[#18181B] font-bold text-xs text-center hover:opacity-90 transition-opacity mt-1 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              >
                Book sales call
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

