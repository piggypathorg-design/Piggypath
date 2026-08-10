import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I finally understand where my money goes. The budgeting games made it click in a way high school class never did.",
    name: "Aarav",
    role: "College Student",
    bg: "bg-[#F4F1FF] dark:bg-[#221F36] border-purple-100 dark:border-purple-900/30",
    avatarBg: "bg-purple-200/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-200"
  },
  {
    quote: "My daughter asks to do her money lesson every single night. That never happened with a textbook or homework.",
    name: "Meera",
    role: "Parent & Teacher",
    bg: "bg-[#F0FDF4] dark:bg-[#1A2E25] border-emerald-100 dark:border-emerald-900/30",
    avatarBg: "bg-[#00E599]/30 text-emerald-800 dark:text-[#00E599]"
  },
  {
    quote: "Short bite-sized lessons fit right into my commute. I understood SIPs, compounding, and tax regimes in a single week.",
    name: "Rohan",
    role: "Working Professional",
    bg: "bg-[#FFFBEB] dark:bg-[#2C2719] border-amber-100 dark:border-amber-900/30",
    avatarBg: "bg-amber-200/80 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-[#FAF9FF] dark:bg-[#18181B] border-t border-gray-100 dark:border-gray-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        <span className="inline-block px-4 py-1.5 border border-purple-200/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-4">
          EARLY LEARNERS
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#18181B] dark:text-white max-w-2xl text-center tracking-tight leading-tight mb-4">
          People are finally getting money
        </h2>
        
        <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-2xl text-center leading-relaxed mb-10">
          A few words from learners in our early community. Stories are illustrative of the experience.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`rounded-[32px] p-8 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${t.bg}`}
            >
              <div>
                <Quote size={28} className="text-[#8B5CF6] opacity-40 mb-4" />
                <p className="text-base text-[#18181B] dark:text-gray-200 font-medium leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden ${t.bg}`}>
                  <img 
                    src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(t.name)}&backgroundColor=transparent`} 
                    alt={t.name} 
                    className="w-full h-full object-cover scale-110" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#18181B] dark:text-white text-base">{t.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

