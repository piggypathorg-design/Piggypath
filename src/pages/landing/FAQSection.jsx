import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is PiggyPath free?",
    answer: "Yes! You can get started completely for free. Free users get 5 keys every day to play mini-games and complete lessons. This is plenty to build a consistent daily habit."
  },
  {
    question: "What is a key?",
    answer: "A key is used to unlock and play a lesson or game level. You get 5 keys per day on the free plan, which refill automatically every 24 hours. Premium users get unlimited keys."
  },
  {
    question: "Who is PiggyPath for?",
    answer: "PiggyPath is for anyone who wants to get better with money. Whether you're a student learning the basics, a young professional managing your first salary, or a parent wanting to teach your kids financial literacy."
  },
  {
    question: "What will I learn?",
    answer: "You'll learn practical, real-world skills across 5 core courses: Personal Finance, Taxation, Investing, Banking, and Entrepreneurship. We cover everything from budgeting and SIPs to tax regimes and business models."
  },
  {
    question: "Can schools use PiggyPath?",
    answer: "Absolutely. We offer a dedicated Schools plan that includes teacher dashboards, custom class leaderboards, and bulk student onboarding to bring financial literacy into the classroom."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, there are no long-term contracts. You can cancel your Premium or Buddy subscription at any time, and you will retain full access until the end of your billing cycle."
  }
];

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="w-full border border-gray-200/80 dark:border-purple-900/30 rounded-2xl overflow-hidden mb-4 bg-white dark:bg-[#1E1B2E] transition-all shadow-sm hover:shadow-md">
      <button 
        id={buttonId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-inset"
      >
        <span className="font-bold text-base md:text-lg text-[#18181B] dark:text-white leading-snug">{faq.question}</span>
        <div className="shrink-0 ml-4 w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/40 text-[#8B5CF6] dark:text-purple-300 flex items-center justify-center">
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-500 dark:text-gray-300 font-medium leading-relaxed text-sm md:text-base border-t border-gray-100 dark:border-gray-800/60 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-[#FAF9FF] dark:bg-[#18181B] transition-colors border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        <span className="inline-block px-4 py-1.5 border border-purple-200/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-4 text-center">
          GOOD TO KNOW
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white max-w-2xl text-center tracking-tight leading-tight mb-12">
          Questions people ask us
        </h2>
        
        <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl text-center leading-relaxed mb-16 hidden">
        </p>

        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              index={index}
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

