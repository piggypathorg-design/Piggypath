import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, GraduationCap, Briefcase, HeartHandshake } from 'lucide-react';

const tabs = [
  { id: 'students', label: 'Students', icon: <GraduationCap size={16} /> },
  { id: 'college', label: 'College', icon: <UserCheck size={16} /> },
  { id: 'working', label: 'Working', icon: <Briefcase size={16} /> },
  { id: 'parents', label: 'Parents', icon: <HeartHandshake size={16} /> }
];

const content = {
  students: {
    title: "Learn money before you need it",
    desc: "Start with the basics of saving, smart spending habits, and understanding value. Build a rock-solid foundation before you even open your first bank account.",
    badge: "School & High School"
  },
  college: {
    title: "Handle your first income with confidence",
    desc: "Budget your month, understand taxes on internships and stipends, avoid impulse debt, and start investing small amounts the right way.",
    badge: "Undergrads & Grads"
  },
  working: {
    title: "Optimize your salary and investments",
    desc: "Navigate tax regimes, maximize deductions, understand your pay slip, build an emergency fund, and grow a diverse portfolio for long-term freedom.",
    badge: "Young Professionals"
  },
  parents: {
    title: "Teach them right, secure their future",
    desc: "Learn how to talk to kids about money naturally, plan for future education expenses, and build generational financial security safely.",
    badge: "Parents & Guardians"
  }
};

const TargetAudienceSection = () => {
  const [activeTab, setActiveTab] = useState('college');

  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-[#18181B] transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        <span className="inline-block px-4 py-1.5 border border-purple-200/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-4">
          MADE FOR REAL LIFE
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white max-w-10xl leading-tight mb-12 tracking-tight">
          Whoever you are, it fits your day
        </h2>

        {/* Tab Switcher */}
        <div className="w-full md:w-auto p-1.5 bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 rounded-full flex flex-wrap justify-center overflow-x-auto mb-10 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 z-10 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${
                activeTab === tab.id 
                  ? 'text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#18181B] dark:hover:text-white'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-audience-tab"
                  className="absolute inset-0 bg-[#8B5CF6] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Card */}
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1E1B2E] border border-purple-100 dark:border-purple-900/30 rounded-[32px] p-8 md:p-12 text-left shadow-lg relative overflow-hidden"
            >
              {/* Soft corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E599]/15 rounded-full blur-2xl pointer-events-none" />

              <span className="inline-block px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-900/50 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-wider mb-4">
                {content[activeTab].badge}
              </span>

              <h3 className="text-2xl md:text-3xl font-black text-[#18181B] dark:text-white mb-4 leading-snug">
                {content[activeTab].title}
              </h3>
              
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 leading-relaxed font-medium">
                {content[activeTab].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;

