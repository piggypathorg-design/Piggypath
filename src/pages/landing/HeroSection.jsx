import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [selectedQuizOption, setSelectedQuizOption] = useState('emergency');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="w-full relative overflow-hidden bg-white dark:bg-[#18181B] transition-colors pb-16 md:pb-24 pt-12 md:pt-16">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#00E599]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="flex flex-col items-start lg:col-span-6">
            
            {/* Soft Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200/60 dark:border-purple-900/40 bg-purple-50/80 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 font-bold text-xs tracking-wide mb-6 shadow-sm"
            >
              <Sparkles size={14} className="text-[#8B5CF6]" />
              <span>For anyone set on financial freedom</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#18181B] dark:text-white mb-6"
            >
              Get good with money, <br className="hidden sm:block" />
              <span className="text-[#8B5CF6]">one short game</span> at a time.
            </motion.h1>

            {/* Body Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mb-8"
            >
              PiggyPath simplifies finance into quick lessons, interactive quizzes, and real-life simulations that feel like a game.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4"
            >
              <button 
                onClick={() => scrollTo('waitlist')} 
                className="w-full sm:w-auto bg-[#00E599] hover:bg-[#00D08A] text-[#18181B] font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00E599] focus:ring-offset-2 dark:focus:ring-offset-[#18181B] flex items-center justify-center gap-2"
              >
                Get started for free
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => scrollTo('features')} 
                className="w-full sm:w-auto border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 text-[#18181B] dark:text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center gap-2"
              >
                <Play size={16} className="fill-current" />
                See how it works
              </button>
            </motion.div>

            {/* Subtext */}

            {/* Stats Counter Row (From Figma Screenshot 1) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 sm:gap-8 pt-6 border-t border-gray-100 dark:border-gray-800/80 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">5</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Modules</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">50</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Lessons</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">1275+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Points</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#18181B] dark:text-white">3 min</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Per day</div>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual: Pure SVG/JSX Interactive Quiz Card */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
              className="w-full max-w-lg bg-gradient-to-b from-[#F5F3FF] to-[#FAF8FF] dark:from-[#211D36] dark:to-[#191728] border border-purple-100 dark:border-purple-900/30 rounded-[32px] p-8 sm:p-10 shadow-xl relative overflow-hidden"
            >
              {/* Soft decorative background circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E599]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Module Header Pill */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800/80 border border-purple-200/50 dark:border-purple-800/50 text-sm font-bold text-[#8B5CF6] dark:text-purple-300 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
                  Module 1: Savings 101
                </div>
                <span className="text-sm font-bold text-gray-400">Quiz Preview</span>
              </div>

              {/* PNG Mascot */}
              <div className="flex flex-col items-center mb-8 relative z-10">
                <div className="w-28 h-28 bg-pink-100/80 dark:bg-pink-950/40 rounded-full flex items-center justify-center shadow-inner mb-4 border border-pink-200 dark:border-pink-800/40 overflow-hidden relative">
                  <img src="./mascot-hero.png" alt="Happy Piggy Mascot" className="w-[85%] h-[85%] object-contain object-center" />
                </div>
                <div className="bg-white/90 dark:bg-gray-800/90 border border-purple-100 dark:border-gray-700 rounded-2xl px-5 py-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm max-w-[280px]">
                  <span className="font-bold text-[#8B5CF6]">Piggy Hint:</span> Keep 3-6 months of expenses for unexpected events!
                </div>
              </div>

              {/* Quiz Question Card */}
              <div className="bg-white dark:bg-[#18181B] rounded-2xl p-6 border border-purple-100 dark:border-purple-950 shadow-sm relative z-10 mb-8">
                <p className="font-bold text-[#18181B] dark:text-white text-base sm:text-lg mb-5 leading-snug">
                  Which fund protects you from sudden expenses like medical emergencies?
                </p>

                <div className="space-y-4">
                  {/* Option A (Selected) */}
                  <button 
                    onClick={() => setSelectedQuizOption('emergency')}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left font-bold text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#00E599] ${
                      selectedQuizOption === 'emergency'
                        ? 'border-[#00E599] bg-[#00E599]/10 text-[#18181B] dark:text-white shadow-sm'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 text-gray-600 dark:text-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-[#00E599] bg-[#00E599] text-[#18181B] flex items-center justify-center text-sm">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      Emergency Fund
                    </span>
                    <span className="text-sm font-bold text-[#00E599] uppercase tracking-wider">Correct</span>
                  </button>

                  {/* Option B */}
                  <button 
                    onClick={() => setSelectedQuizOption('stocks')}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      selectedQuizOption === 'stocks'
                        ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20 text-[#18181B] dark:text-white'
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 text-gray-600 dark:text-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-sm" />
                      Stock Market Speculation
                    </span>
                  </button>
                </div>
              </div>

              {/* Progress Bar Footer */}
              <div className="space-y-2 relative z-10">
                <div className="flex justify-between items-center text-sm font-bold text-gray-500 dark:text-gray-400">
                  <span>Lesson 1 of 5 completed</span>
                  <span className="text-[#00E599]">20%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00E599] rounded-full w-1/5 transition-all duration-500" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* The Problem / The Solution Comparison Cards */}
        <div className="mt-28 md:mt-36 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white dark:bg-[#18181B] rounded-[32px] p-8 md:p-10 border border-red-100 dark:border-red-950/40 shadow-sm flex flex-col items-start h-full"
          >
            <div className="inline-block px-3.5 py-1 border border-red-200 dark:border-red-900/50 rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-bold uppercase text-[11px] tracking-wider mb-6">
              The Problem
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white tracking-tight leading-tight mb-4">
              Finance is <span className="text-gray-400 dark:text-gray-500">boring</span> and <span className="text-gray-400 dark:text-gray-500">confusing.</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-4">
              Traditional financial education relies on dense articles, long videos, and complex jargon that puts people to sleep. It feels like a chore, not a path to freedom.
            </p>
            <div className="bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-6 flex flex-col gap-3.5 mt-auto w-full">
              <div className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-300 text-sm">
                <div className="bg-red-100 dark:bg-red-900/50 p-1.5 rounded-full shrink-0 text-red-600 dark:text-red-400">
                  <X size={14} strokeWidth={3} />
                </div>
                Too much financial jargon
              </div>
              <div className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-300 text-sm">
                <div className="bg-red-100 dark:bg-red-900/50 p-1.5 rounded-full shrink-0 text-red-600 dark:text-red-400">
                  <X size={14} strokeWidth={3} />
                </div>
                Endless unengaging video lectures
              </div>
              <div className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-300 text-sm">
                <div className="bg-red-100 dark:bg-red-900/50 p-1.5 rounded-full shrink-0 text-red-600 dark:text-red-400">
                  <X size={14} strokeWidth={3} />
                </div>
                Hard to apply to everyday decisions
              </div>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#18181B] rounded-[32px] p-8 md:p-10 border border-emerald-100 dark:border-emerald-950/40 shadow-sm flex flex-col items-start h-full"
          >
            <div className="inline-block px-3.5 py-1 border border-[#00E599]/30 rounded-full bg-[#00E599]/10 text-emerald-600 dark:text-[#00E599] font-bold uppercase text-[11px] tracking-wider mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white tracking-tight leading-tight mb-4">
              Meet <span className="text-[#8B5CF6]">PiggyPath</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-4">
              PiggyPath transforms financial education into an engaging experience where users learn through action. Instead of watching hours of content, learners active play their path.
            </p>
            <div className="bg-[#8B5CF6] text-white rounded-2xl p-6 shadow-md flex flex-col gap-3.5 mt-auto w-full">
              <div className="flex items-center gap-3 font-bold text-sm">
                <div className="bg-[#00E599] p-1.5 rounded-full shrink-0 text-[#18181B]">
                  <Check size={14} strokeWidth={3.5} />
                </div>
                Bite-sized interactive levels & quizzes
              </div>
              <div className="flex items-center gap-3 font-bold text-sm">
                <div className="bg-[#00E599] p-1.5 rounded-full shrink-0 text-[#18181B]">
                  <Check size={14} strokeWidth={3.5} />
                </div>
                Gamified real-life money simulations
              </div>
              <div className="flex items-center gap-3 font-bold text-sm">
                <div className="bg-[#00E599] p-1.5 rounded-full shrink-0 text-[#18181B]">
                  <Check size={14} strokeWidth={3.5} />
                </div>
                Earn XP, streaks, and Moon Stone artifacts
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

