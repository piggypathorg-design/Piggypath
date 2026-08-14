import React from 'react';
import { Check, Lock, Play, CircleDot } from 'lucide-react';

const pathData = [
  { type: 'milestone', id: 'm1', number: 1, title: 'Understanding Money', subtitle: 'The Penny Drops', reward: 'Gem Shard' },
  { type: 'level_marker', id: 'l1', title: 'Level 1 - What is Money?' },
  { type: 'node', id: 'n1', title: 'The Story of Currency', status: 'completed' },
  { type: 'node', id: 'n2', title: 'Trading Without Money', status: 'completed' },
  { type: 'node', id: 'n3', title: 'Cash, Cards & Digital Coins', status: 'completed' },
  { type: 'node', id: 'n4', title: "Why a Dollar isn't Always a Dollar", status: 'completed' },
  { type: 'node', id: 'n5', title: 'Prices Go Up: A First Look at Inflation', status: 'completed' },
  
  { type: 'level_marker', id: 'l2', title: 'Level 2 - Where Does Money Come From?' },
  { type: 'node', id: 'n6', title: 'Making the Most of Your Allowance', status: 'completed' },
  { type: 'node', id: 'n7', title: 'Side Hustles & Gig Work', status: 'completed' },
  { type: 'node', id: 'n8', title: 'Paychecks & How They Work', status: 'completed' },
  { type: 'node', id: 'n9', title: 'Practice Round', status: 'practice' },
  { type: 'node', id: 'n10', title: 'Earning Through Entrepreneurship', status: 'completed' },
  { type: 'node', id: 'n11', title: 'Money That Works While You Sleep', status: 'completed' },

  { type: 'level_marker', id: 'l3', title: 'Level 3 - Needs vs. Wants' },
  { type: 'node', id: 'n12', title: 'What You Truly Need', status: 'completed' },
  { type: 'node', id: 'n13', title: "What You'd Like to Have", status: 'completed' },
  { type: 'node', id: 'n14', title: 'The Blurry Line Between Need & Want', status: 'completed' },
  { type: 'node', id: 'n15', title: 'Putting Needs First', status: 'current' },
  { type: 'node', id: 'n16', title: 'How Ads Shape Your Spending', status: 'locked' },

  { type: 'level_marker', id: 'l4', title: 'Level 4 - Value, Scarcity & Trade-Offs' },
  { type: 'node', id: 'n17', title: 'Is It Worth the Price?', status: 'locked' },
  { type: 'node', id: 'n18', title: 'Practice Round', status: 'locked_practice' },
  { type: 'node', id: 'n19', title: 'When Supply Meets Demand', status: 'locked' },
  { type: 'node', id: 'n20', title: 'Every Choice Has a Cost', status: 'locked' },
  { type: 'node', id: 'n21', title: 'Spotting a Great Deal', status: 'locked' },

  { type: 'milestone_reward', id: 'mr1', title: 'Gem Shard - Milestone 1 complete', color: 'bg-indigo-400' },

  { type: 'milestone', id: 'm2', number: 2, title: 'Taking Control of Cash Flow', subtitle: 'Taking Control of Cash Flow', reward: 'Gem Shard' },
  { type: 'level_marker', id: 'l5', title: 'Level 1 - Decoding Your Paycheck' },
  { type: 'node', id: 'n22', title: 'Gross Pay vs. Take-Home Pay', status: 'locked' },
  { type: 'node', id: 'n23', title: 'Reading Your Pay Stub', status: 'locked' },
  { type: 'node', id: 'n24', title: 'Irregular & Seasonal Income', status: 'locked' },
  { type: 'node', id: 'n25', title: 'Mapping All Your Income Sources', status: 'locked' },

  { type: 'level_marker', id: 'l6', title: 'Level 2 - Tracking Every Dollar' },
  { type: 'node', id: 'n26', title: 'Why Tracking Expenses Changes Everything', status: 'locked' },
  { type: 'node', id: 'n27', title: 'Pen and Paper Tracking', status: 'locked' },
  { type: 'node', id: 'n28', title: 'Apps & Spreadsheets for Tracking', status: 'locked' },
  { type: 'node', id: 'n29', title: 'Sorting Your Spending By Category', status: 'locked' },
  { type: 'node', id: 'n30', title: 'Fixed Costs vs. Flex Spending', status: 'locked' },
  { type: 'node', id: 'n31', title: 'Practice Round', status: 'locked_practice' },

  { type: 'level_marker', id: 'l7', title: 'Level 3 - Building Your First Budget' },
  { type: 'node', id: 'n32', title: 'What is a Budget? Your Money Roadmap', status: 'locked' },
  { type: 'node', id: 'n33', title: 'Why Every Dollar Needs a Job', status: 'locked' },
  { type: 'node', id: 'n34', title: 'The 50/30/20 Framework', status: 'locked' },
  { type: 'node', id: 'n35', title: 'Zero-Based Budgeting', status: 'locked' },
  { type: 'node', id: 'n36', title: 'The Envelope Method', status: 'locked' },
  { type: 'node', id: 'n37', title: 'Prioritize Paying You', status: 'locked' },
  { type: 'node', id: 'n38', title: 'Drafting Your First Budget', status: 'locked' },

  { type: 'level_marker', id: 'l8', title: 'Level 4 - Plugging Your Spending Leaks' },
  { type: 'node', id: 'n39', title: 'Finding Hidden Spending Leaks', status: 'locked' },
  { type: 'node', id: 'n40', title: 'Practice Round', status: 'locked_practice' },
  { type: 'node', id: 'n41', title: 'Practical Ways to Cut Costs', status: 'locked' },
  { type: 'node', id: 'n42', title: 'Taming Impulse Purchases', status: 'locked' },
  { type: 'node', id: 'n43', title: 'Managing Subscription Creep', status: 'locked' },
  { type: 'node', id: 'n44', title: 'Small Habits, Big Savings', status: 'locked' },

  { type: 'milestone_reward', id: 'mr2', title: 'Moon Stone - Milestone 2 complete', color: 'bg-purple-500' },
  
  { type: 'milestone', id: 'm3', number: 3, title: 'Building a Savings Engine', subtitle: 'The Safe Vault', reward: 'Moon Stone' },
  { type: 'level_marker', id: 'l9', title: 'Level 1 - The Habit of Saving' },
  { type: 'node', id: 'n45', title: 'Why a Savings Habit Matters', status: 'locked' },
  { type: 'node', id: 'n46', title: 'The Security Blanket', status: 'locked' },
  { type: 'node', id: 'n47', title: 'Funding Your Biggest Dreams', status: 'locked' },
];

const LearningPath = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 mb-24 overflow-hidden relative">
      
      {/* Header */}
      <div className="mb-8 pl-4">
        <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Money Mastery path</h2>
        <p className="text-sm text-zinc-500 font-medium">13 milestones - 280 lessons - Coach Penny</p>
      </div>

      {/* Ready Banner */}
      <div className="bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-2xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between mb-12">
        <p className="text-sm font-bold text-sky-900 dark:text-sky-100 mb-4 md:mb-0">
          The first 11 lessons of this course are ready to explore.
        </p>
        <button className="px-6 py-2.5 bg-[#00E599] hover:bg-[#00D08A] text-zinc-900 font-bold rounded-full transition-colors shadow-sm w-full md:w-auto">
          Start Lesson 1
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* The Continuous Vertical Line connecting everything */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-zinc-200 dark:bg-zinc-800 z-0 rounded-full" />

        {pathData.map((item, i) => {
          
          if (item.type === 'milestone') {
            return (
              <div key={item.id} className="relative z-10 w-full mb-12 mt-6 max-w-2xl bg-[#E6FFFA] dark:bg-teal-900/20 rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-sm border border-teal-100 dark:border-teal-900/30">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500 flex flex-col items-center justify-center text-white shrink-0 shadow-inner">
                  <span className="text-[8px] font-black uppercase tracking-wider opacity-80">Milestone</span>
                  <span className="text-xl font-black leading-none mt-0.5">{item.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black text-teal-900 dark:text-teal-100 leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-teal-700 dark:text-teal-300 font-medium">{item.subtitle}</p>
                </div>
                <div className="hidden md:flex bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full shadow-sm items-center gap-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  {item.reward}
                </div>
              </div>
            );
          }

          if (item.type === 'level_marker') {
            return (
              <div key={item.id} className="relative z-10 w-full flex justify-center my-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-2 rounded-full text-xs font-bold text-zinc-500 dark:text-zinc-400 shadow-sm whitespace-nowrap">
                  {item.title}
                </div>
              </div>
            );
          }

          if (item.type === 'milestone_reward') {
            return (
              <div key={item.id} className="relative z-10 w-full flex justify-center my-12 items-center gap-4">
                <div className="hidden md:block flex-1 border-t border-zinc-200 dark:border-zinc-800" />
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${item.color} shadow-lg border-4 border-white dark:border-zinc-900 shrink-0 z-10`} />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden md:block flex-1">
                  {item.title}
                </span>
              </div>
            );
          }

          if (item.type === 'node') {
            const isCompleted = item.status === 'completed';
            const isPractice = item.status === 'practice';
            const isCurrent = item.status === 'current';
            const isLockedPractice = item.status === 'locked_practice';
            const isLocked = item.status === 'locked';

            // Determine if label should be on left or right
            const isLabelLeft = i % 2 === 0;

            // Render node based on status
            return (
              <div key={item.id} className="relative z-10 w-full flex justify-center my-6 group cursor-pointer">
                <div className="flex flex-col items-center gap-3 transition-transform hover:scale-105 relative">
                  
                  <div className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-[4px] shadow-sm relative z-10
                    ${isCompleted ? 'bg-[#00E599] border-[#00D08A] text-white' : ''}
                    ${isCurrent ? 'bg-zinc-900 dark:bg-white border-zinc-800 dark:border-zinc-200 text-white dark:text-zinc-900 scale-110 shadow-lg' : ''}
                    ${isPractice ? 'bg-yellow-400 border-yellow-500 text-zinc-900' : ''}
                    ${isLockedPractice ? 'bg-yellow-100/50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900/50 text-yellow-600 dark:text-yellow-700' : ''}
                    ${isLocked ? 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600' : ''}
                  `}>
                    {isCompleted && <Check size={28} strokeWidth={3} />}
                    {isCurrent && <Play size={24} strokeWidth={3} className="ml-1" fill="currentColor" />}
                    {isPractice && <CircleDot size={24} strokeWidth={2.5} />}
                    {isLockedPractice && <CircleDot size={24} strokeWidth={2.5} />}
                    {isLocked && <Lock size={20} strokeWidth={2.5} />}
                  </div>

                  {/* Desktop alternating label */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-48 hidden md:flex items-center pointer-events-none ${
                    isLabelLeft ? 'right-[calc(100%+1.5rem)] justify-end text-right' : 'left-[calc(100%+1.5rem)] justify-start text-left'
                  }`}>
                    <span className={`text-[12px] font-bold leading-tight ${isLocked ? 'text-zinc-400' : 'text-zinc-700 dark:text-zinc-300'}`}>
                      {item.title}
                    </span>
                  </div>

                  {/* Mobile label (always bottom) */}
                  <div className="mt-1 text-center w-40 md:hidden pointer-events-none">
                    <span className={`text-[11px] font-bold leading-tight ${isLocked ? 'text-zinc-400' : 'text-zinc-700 dark:text-zinc-300'}`}>
                      {item.title}
                    </span>
                  </div>

                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default LearningPath;
