import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, X, Check } from 'lucide-react';
import { TrophyIcon } from '../../components/profile/ProfileHeader';

const FallingText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <div className="flex">
            {word.split("").map((letter, j) => (
              <motion.span
                key={j}
                initial={{ y: -50, opacity: 0, rotate: -20 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: (i * 0.1) + (j * 0.03), type: "spring", bounce: 0.6 }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <span className="w-3 md:w-6" />{/* space */}
        </React.Fragment>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="w-full relative overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background dot pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#18181B 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Decorative Abstract Star Illustration */}
        <motion.svg 
           initial={{ rotate: -45, scale: 0 }}
           animate={{ rotate: 15, scale: 1 }}
           transition={{ duration: 0.8, type: 'spring' }}
           className="absolute top-10 left-10 md:top-20 md:-left-10 w-24 h-24 -z-10 drop-shadow-[4px_4px_0_#18181B] dark:drop-shadow-[4px_4px_0_#00E599] fill-[#8B5CF6] stroke-[#18181B] dark:stroke-white stroke-[4px]" 
           viewBox="0 0 100 100"
        >
           <path d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39Z" />
        </motion.svg>



        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-[3px] border-[#18181B] dark:border-white bg-white dark:bg-[#27272A] w-max font-bold text-sm tracking-wide shadow-[#18181B] dark:shadow-[#FFFFFF]">
            <span className="text-[#8B5CF6]">✦</span> PRE-LAUNCH <span className="mx-1">•</span> NOW BOARDING
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
            The <span className="text-[#00E599]">Duolingo</span> <br /> for Finance.
          </h1>

          <p className="text-xl md:text-2xl font-medium text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed max-w-xl">
            PiggyPath turns financial education into an interactive journey where you learn budgeting, investing, wealth building and personal finance through gamified experiences, not boring videos or textbooks.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => scrollTo('waitlist')} className="bg-[#00E599] text-[#18181B] border-[3px] border-[#18181B] dark:border-white shadow-[4px_4px_0_#18181B] dark:shadow-[#FFFFFF] text-xl font-black px-8 py-4 rounded-xl transition-transform hover:-translate-y-1">
              Join Waitlist →
            </button>
            <button onClick={() => scrollTo('features')} className="bg-white dark:bg-[#27272A] text-[#18181B] dark:text-[#F4F4F5] border-[3px] border-[#18181B] dark:border-white shadow-[4px_4px_0_#18181B] dark:shadow-[#FFFFFF] flex items-center gap-2 text-xl font-black px-8 py-4 rounded-xl transition-transform hover:-translate-y-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={24} height={24}>
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="#18181B"/>
              </svg>
              See How It Works
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8">
             <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#18181B] dark:border-white bg-[#00E599] shadow-[#18181B] dark:shadow-[#FFFFFF]"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#18181B] dark:border-white bg-[#8B5CF6] shadow-[#18181B] dark:shadow-[#FFFFFF]"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#18181B] dark:border-white bg-[#18181B] shadow-[#18181B] dark:shadow-[#FFFFFF]"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#18181B] dark:border-white bg-white dark:bg-[#27272A] flex items-center justify-center font-bold shadow-[#18181B] dark:shadow-[#FFFFFF]">+</div>
             </div>
             <p className="font-bold text-sm text-[#3F3F46] dark:text-[#A1A1AA]">
               <span className="text-[#18181B] dark:text-[#F4F4F5]">Early builders</span> shaping PiggyPath. <br/>Be one of the first.
             </p>
          </div>
        </div>

        {/* Right Visual: Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl bg-white dark:bg-[#27272A] border-[4px] border-[#18181B] dark:border-white shadow-[12px_12px_0_#18181B] dark:shadow-[#FFFFFF] p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-stretch gap-4">
              <div className="aspect-square rounded-2xl bg-[#8B5CF6] border-[3px] border-[#18181B] dark:border-white flex items-center justify-center font-black text-3xl text-white shadow-[#18181B] dark:shadow-[#FFFFFF]">
                PP
              </div>
              <div>
                <div className="text-xs font-bold text-[#71717A] tracking-wider uppercase">Today's Quest</div>
                <div className="text-xl font-black text-[#18181B] dark:text-[#F4F4F5] leading-tight">Master<br/>Accounting</div>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-3">
               <div className="w-12 h-12 rounded-full bg-[#00E599] border-[3px] border-[#18181B] dark:border-white flex items-center justify-center shadow-[#18181B] dark:shadow-[#FFFFFF] relative top-2 right-2 font-black text-xl hover:scale-110 transition-transform cursor-pointer mb-4">
                 $
               </div>
               <div className="px-4 py-2 rounded-xl bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white shadow-[#18181B] dark:shadow-[#FFFFFF] font-bold text-xs flex items-center gap-2">
                 <Flame size={14} className="text-orange-500" /> 12 DAY STREAK
               </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between font-bold text-sm mb-2">
               <span>XP • 1,240 / 1,600</span>
               <span className="text-[#8B5CF6]">77%</span>
            </div>
            <div className="h-6 w-full bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white rounded-full overflow-hidden p-1">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '77%' }}
                 transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                 className="h-full bg-[#00E599] rounded-full"
               />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-[#00E599] border-[3px] border-[#18181B] dark:border-white rounded-2xl p-4 shadow-[#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 transition-transform">
               <div className="flex justify-between items-start mb-2">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#18181B" strokeWidth={2.5} width={20} height={20}>
                    <circle cx="12" cy="12" r="8"/>
                    <path d="M12 4v16M8 12h8"/>
                 </svg>
                 <span className="text-[10px] font-black tracking-widest text-[#18181B] dark:text-[#F4F4F5]/70">COINS</span>
               </div>
               <div className="text-2xl font-black">2,480</div>
            </div>
            <div className="bg-[#8B5CF6] text-white border-[3px] border-[#18181B] dark:border-white rounded-2xl p-4 shadow-[#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 transition-transform">
               <div className="flex justify-between items-start mb-2">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth={2.5} width={20} height={20}>
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
                 </svg>
                 <span className="text-[10px] font-black tracking-widest text-white/70">BADGES</span>
               </div>
               <div className="text-2xl font-black">14</div>
            </div>
            <div className="bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white rounded-2xl p-4 shadow-[#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 transition-transform">
               <div className="flex justify-between items-start mb-2">
                 <svg viewBox="0 0 24 24" fill="#EF4444" stroke="#18181B" strokeWidth={2.5} width={20} height={20}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                 </svg>
                 <span className="text-[10px] font-black tracking-widest text-[#18181B] dark:text-[#F4F4F5]/50">HEARTS</span>
               </div>
               <div className="text-2xl font-black">5</div>
            </div>
          </div>

          {/* Journey Path */}
          <div>
            <div className="text-[10px] font-black tracking-widest text-[#71717A] mb-4 uppercase">Your Learning Path</div>
            <div className="flex items-center justify-between relative">
               <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#E4E4E7] -z-10 -translate-y-1/2"></div>
               <div className="absolute top-1/2 left-0 w-2/3 h-[3px] bg-[#00E599] -z-10 -translate-y-1/2"></div>
               {[1,2,3,4,5].map(step => (
                 <div key={step} className={`w-10 h-10 rounded-full border-[3px] border-[#18181B] dark:border-white flex items-center justify-center font-black text-sm shadow-[#18181B] dark:shadow-[#FFFFFF] ${step <= 3 ? 'bg-[#00E599]' : step === 4 ? 'bg-[#8B5CF6] text-white scale-125' : 'bg-white dark:bg-[#27272A] text-[#A1A1AA] border-[#A1A1AA] shadow-none'}`}>
                   {step <= 3 ? <svg viewBox="0 0 24 24" fill="none" stroke="#18181B" strokeWidth={3} width={16} height={16}><polyline points="20 6 9 17 4 12"/></svg> : step}
                 </div>
               ))}
            </div>
          </div>

          {/* Floating 'Continue' button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-10 left-8 right-8 bg-[#F4F4F5] dark:bg-[#18181B] border-[3px] border-[#18181B] dark:border-white p-4 rounded-xl shadow-[#18181B] dark:shadow-[#FFFFFF] flex items-center justify-between z-10"
          >
            <div>
              <div className="font-black text-sm">Continue Lesson</div>
              <div className="font-bold text-xs text-[#71717A]">Accounting • 3 min left</div>
            </div>
            <div className="w-10 h-10 bg-[#00E599] border-2 border-[#18181B] dark:border-white rounded-lg shadow-[#18181B] dark:shadow-[#FFFFFF] flex items-center justify-center cursor-pointer hover:bg-white dark:bg-[#27272A] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="#18181B" strokeWidth={3} width={18} height={18}>
                 <line x1="5" y1="12" x2="19" y2="12" />
                 <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </motion.div>

          {/* Achievement popup */}
          <motion.div 
             initial={{ y: 50, opacity: 0, rotate: 10 }}
             animate={{ y: 0, opacity: 1, rotate: -5 }}
             transition={{ delay: 2, type: 'spring', bounce: 0.5 }}
             className="absolute -bottom-20 -right-8 bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white px-6 py-3 rounded-xl shadow-[#18181B] dark:shadow-[#FFFFFF] flex items-center gap-3 z-20"
          >
             <TrophyIcon size={24} color="#8B5CF6" />
             <span className="font-black text-sm">Achievement Unlocked</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ────────────────────── PROBLEM & SOLUTION SECTION ────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t-[3px] border-[#18181B] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* PROBLEM */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="inline-block px-4 py-1 border-[3px] border-[#18181B] dark:border-white rounded-lg bg-[#FF4444] text-white font-black uppercase text-sm w-max shadow-[#18181B] dark:shadow-[#FFFFFF]">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight lg:min-h-[110px]">
              Why Financial Education Is <span className="underline decoration-[#FF4444] decoration-4 underline-offset-4">Broken</span>
            </h2>
            <p className="text-lg font-medium text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed">
              Most people learn finance too late. Schools rarely teach practical money skills and most financial content is delivered through long videos, complicated jargon or overwhelming textbooks.
            </p>
            <div className="bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white rounded-2xl p-6 shadow-[8px_8px_0_#18181B] dark:shadow-[#FFFFFF] flex flex-col gap-4 mt-auto">
               <div className="flex items-center gap-4 font-bold text-[#18181B] dark:text-[#F4F4F5]">
                 <div className="bg-[#FF4444] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><X size={16} color="#FFF" strokeWidth={3.5} /></div>
                 Boring PDF Guides
               </div>
               <div className="flex items-center gap-4 font-bold text-[#18181B] dark:text-[#F4F4F5]">
                 <div className="bg-[#FF4444] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><X size={16} color="#FFF" strokeWidth={3.5} /></div>
                 2-Hour Video Lectures
               </div>
               <div className="flex items-center gap-4 font-bold text-[#18181B] dark:text-[#F4F4F5]">
                 <div className="bg-[#FF4444] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><X size={16} color="#FFF" strokeWidth={3.5} /></div>
                 Overwhelming Jargon
               </div>
            </div>
          </motion.div>

          {/* SOLUTION */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="inline-block px-4 py-1 border-[3px] border-[#18181B] dark:border-white rounded-lg bg-[#00E599] text-[#18181B] dark:text-[#F4F4F5] font-black uppercase text-sm w-max shadow-[#18181B] dark:shadow-[#FFFFFF]">The Solution</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight lg:min-h-[110px]">
              Meet <span className="bg-[#00E599] px-2 py-1 rounded-lg">PiggyPath</span>
            </h2>
            <p className="text-lg font-medium text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed">
              PiggyPath transforms financial education into an engaging experience where users learn through action. Instead of watching hours of content, learners:
            </p>
            <div className="bg-[#8B5CF6] text-white border-[3px] border-[#18181B] dark:border-white rounded-2xl p-6 shadow-[8px_8px_0_#18181B] dark:shadow-[#FFFFFF] flex flex-col gap-4 mt-auto">
               <div className="flex items-center gap-4 font-bold">
                 <div className="bg-[#00E599] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><Check size={16} color="#18181B" strokeWidth={3.5} /></div>
                 Interactive levels
               </div>
               <div className="flex items-center gap-4 font-bold">
                 <div className="bg-[#00E599] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><Check size={16} color="#18181B" strokeWidth={3.5} /></div>
                 Financial games
               </div>
               <div className="flex items-center gap-4 font-bold">
                 <div className="bg-[#00E599] p-1.5 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><Check size={16} color="#18181B" strokeWidth={3.5} /></div>
                 Earn rewards & build wealth
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
