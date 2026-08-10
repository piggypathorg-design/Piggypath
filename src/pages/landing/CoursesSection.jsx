import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 'course-1',
    num: "MODULE 1",
    title: "Personal Finance",
    subtitle: "Financial Basics & Money Mindset",
    desc: "Budgeting, saving, debt, credit, investing, taxes, insurance, and reaching financial independence step-by-step.",
    stats: "10 milestones • 265 lessons",
    color: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-[#00E599] border-emerald-200/60 dark:border-emerald-900/40",
    pill: "bg-[#00E599] text-[#18181B]",
    topics: ["3-6 Months Emergency Fund", "50/30/20 Budgeting Rule", "Debt Payoff Strategies", "Credit Score Mechanics"]
  },
  {
    id: 'course-2',
    num: "MODULE 2",
    title: "Taxation",
    subtitle: "Tax Basics & Smart Planning",
    desc: "Income heads, deductions, old vs new regimes, TDS, filing your ITR, GST basics, and legal tax savings.",
    stats: "10 milestones • 260 lessons",
    color: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-900/40",
    pill: "bg-[#8B5CF6] text-white",
    topics: ["Old vs New Tax Regimes", "Section 80C Deductions", "ITR Filing Walkthrough", "TDS & Advance Tax"]
  },
  {
    id: 'course-3',
    num: "MODULE 3",
    title: "Investing",
    subtitle: "Wealth Creation & Markets",
    desc: "Risk vs return, how markets function, equities, mutual funds, SIPs, fixed income, and compound interest.",
    stats: "10 milestones • 250 lessons",
    color: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-300 border-purple-200/60 dark:border-purple-900/40",
    pill: "bg-purple-600 text-white",
    topics: ["Compounding Calculator", "SIP vs Lumpsum", "Mutual Fund Selection", "Risk Management"]
  },
  {
    id: 'course-4',
    num: "MODULE 4",
    title: "Banking",
    subtitle: "Modern Banking & Payments",
    desc: "Accounts, credit cards, UPI & digital payments, loan interest formulas, fraud prevention, and consumer rights.",
    stats: "10 milestones • 250 lessons",
    color: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-300 border-amber-200/60 dark:border-amber-900/40",
    pill: "bg-amber-500 text-white",
    topics: ["UPI Safety & Limits", "Credit Card Rewards", "Interest Calculations", "Fraud Protection"]
  },
  {
    id: 'course-5',
    num: "MODULE 5",
    title: "Entrepreneurship",
    subtitle: "Building & Scaling Ventures",
    desc: "Finding business ideas, unit economics, funding, legal setup, marketing, operations, and scaling a venture.",
    stats: "10 milestones • 250 lessons",
    color: "bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-300 border-pink-200/60 dark:border-pink-900/40",
    pill: "bg-pink-500 text-white",
    topics: ["Business Model Canvas", "Unit Economics", "Pitching Investors", "Bootstrapping Tactics"]
  }
];

const CoursesSection = () => {
  const [activeCourse, setActiveCourse] = useState(courses[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCourse((prev) => {
        const index = courses.findIndex(c => c.id === prev.id);
        const next = (index + 1) % courses.length;
        return courses[next];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="courses" className="w-full py-20 md:py-28 bg-[#FAF9FF] dark:bg-[#18181B] border-t border-b border-gray-100 dark:border-gray-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <span className="inline-block px-4 py-1.5 border border-purple-200/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-4 text-center">
          FIVE COURSES, ONE CLEAR PATH
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white max-w-2xl text-center tracking-tight leading-tight mb-4">
          The curriculum
        </h2>
        
        <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl text-center leading-relaxed mb-10">
          Start from the very basics and go all the way to real-world financial mastery. No jargon, no dry textbook theory - just actionable lessons.
        </p>

        {/* Interactive Course Navigator Grid */}
        <div 
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* Module List Selector */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {courses.map((c) => {
              const isSelected = activeCourse.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCourse(c)}
                  className={`w-full p-6 rounded-3xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] flex items-center justify-between shadow-sm ${
                    isSelected 
                      ? 'bg-white dark:bg-gray-800 border-[#8B5CF6] shadow-md ring-1 ring-[#8B5CF6]' 
                      : 'bg-white/60 dark:bg-gray-900/40 border-gray-200/80 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 ${c.color}`}>
                      {c.num.split(' ')[1]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">{c.num}</span>
                      <h3 className="text-lg font-bold text-[#18181B] dark:text-white">{c.title}</h3>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`transition-transform ${isSelected ? 'text-[#8B5CF6] translate-x-1' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Course Details Drawer Card */}
          <div className="lg:col-span-7 w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1E1B2E] border border-purple-100 dark:border-purple-900/30 rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px] h-full"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold ${activeCourse.pill}`}>
                      {activeCourse.num}
                    </span>
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5">
                      <Layers size={14} className="text-[#8B5CF6]" />
                      {activeCourse.stats}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-[#18181B] dark:text-white mb-2">
                    {activeCourse.title}
                  </h3>
                  <div className="text-sm font-bold text-[#8B5CF6] mb-4">
                    {activeCourse.subtitle}
                  </div>

                  <p className="text-base text-gray-500 dark:text-gray-300 leading-relaxed font-medium mb-8">
                    {activeCourse.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Core Skills Covered</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCourse.topics.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-[#18181B] dark:text-gray-200">
                          <CheckCircle2 size={16} className="text-[#00E599] shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('waitlist');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#00E599] hover:bg-[#00D08A] text-[#18181B] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E599]"
                  >
                    Start {activeCourse.title} Free
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoursesSection;

