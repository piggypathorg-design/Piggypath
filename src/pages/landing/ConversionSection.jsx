
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Logo from '../../components/common/Logo';

const ConversionSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: 'What is PiggyPath?', a: 'PiggyPath is a gamified financial learning platform designed to help people learn money skills through interactive experiences.' },
    { q: 'Is PiggyPath free?', a: 'The platform will include both free and premium experiences.' },
    { q: 'Do I need investment experience?', a: 'No, PiggyPath is built for beginners.' },
    { q: 'Is real money involved?', a: 'No, virtual investing uses simulated funds.' },
    { q: 'When is PiggyPath launching?', a: 'Join the waitlist to stay updated.' },
  ];

  return (
    <div className="w-full bg-[#F4F4F5] dark:bg-[#18181B] text-[#18181B] dark:text-[#F4F4F5]">
      
      {/* 11. WHO IS IT FOR? */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b-[3px] border-[#18181B]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Built For The Next Generation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Students', desc: 'Build money skills early.', bg: '#8B5CF6', textWhite: true },
            { title: 'Young Professionals', desc: 'Learn to manage income.', bg: '#8B5CF6', textWhite: true },
            { title: 'Future Investors', desc: 'Practice before investing.', bg: '#8B5CF6', textWhite: true },
            { title: 'Entrepreneurs', desc: 'Understand business and money.', bg: '#8B5CF6', textWhite: true },
          ].map((c, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-[3px] border-[#18181B] dark:border-white rounded-2xl p-6 shadow-[#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-2 transition-transform"
              style={{ backgroundColor: c.bg, color: c.textWhite ? 'white' : '#18181B' }}
            >
              <h3 className="text-xl md:text-2xl lg:text-[20px] xl:text-2xl font-black mb-2 tracking-tight whitespace-nowrap">{c.title}</h3>
              <p className="font-bold">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 12. WHY PIGGYPATH? */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b-[3px] border-[#18181B]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Why We're Different</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#27272A] border-[4px] border-[#18181B] dark:border-white rounded-3xl shadow-[#18181B] dark:shadow-[#FFFFFF] overflow-hidden">
           <div className="grid grid-cols-2 border-b-[4px] border-[#18181B]">
              <div className="p-6 bg-[#A1A1AA] text-white font-black text-2xl text-center border-r-[4px] border-[#18181B]">Traditional Courses</div>
              <div className="p-6 bg-[#00E599] text-[#18181B] dark:text-[#F4F4F5] font-black text-2xl text-center">PiggyPath</div>
           </div>
           {[
             { t: 'Long Videos', p: 'Interactive Experiences' },
             { t: 'Passive Learning', p: 'Active Learning' },
             { t: 'Theory First', p: 'Practice First' },
             { t: 'Boring Content', p: 'Gamified Content' },
             { t: 'One-Time Consumption', p: 'Continuous Progress' },
           ].map((row, i) => (
             <div key={i} className={`grid grid-cols-2 ${i !== 4 ? 'border-b-[3px] border-[#18181B]' : ''}`}>
                <div className="p-4 text-center font-bold text-[#71717A] border-r-[3px] border-[#18181B] flex items-center justify-center gap-3">
                   <div className="bg-[#FF4444] p-1 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><X size={14} color="#FFF" strokeWidth={4} /></div> {row.t}
                </div>
                <div className="p-4 text-center font-black flex items-center justify-center gap-3">
                   <div className="bg-[#00E599] p-1 border-[2px] border-[#18181B] shadow-[2px_2px_0_#18181B] rounded-md"><Check size={14} color="#18181B" strokeWidth={4} /></div> {row.p}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 13. WAITLIST */}
      <section id="waitlist" className="py-32 bg-white dark:bg-[#18181B] border-b-[3px] border-[#18181B] dark:border-white relative flex justify-center items-center px-6">
        <div className="relative w-full max-w-4xl bg-white dark:bg-[#27272A] border-[4px] border-[#18181B] dark:border-white rounded-2xl shadow-[8px_8px_0_#18181B] dark:shadow-[#FFFFFF] overflow-hidden p-10 md:p-16 text-center">
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8B5CF6] border-[4px] border-[#18181B] dark:border-white rounded-full"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#00E599] border-[4px] border-[#18181B] dark:border-white rounded-full"></div>

          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 border-[2px] border-[#18181B] dark:border-white rounded-full bg-white dark:bg-[#18181B] text-[#18181B] dark:text-[#F4F4F5] font-black uppercase text-[10px] tracking-widest mb-8">
              LIMITED EARLY ACCESS
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black mb-6 leading-[1.3] uppercase text-[#18181B] dark:text-[#F4F4F5] max-w-3xl mx-auto">
              Be Among The First To <br className="hidden md:block" /> Experience <span className="bg-[#00E599] text-[#18181B] px-3 py-1 inline-block mt-2 md:mt-0">PIGGYPATH.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-[#71717A] dark:text-[#A1A1AA] mb-10 max-w-2xl mx-auto">
              Get early access, product updates, and launch announcements.
            </p>

            <form className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto mb-6" onSubmit={e => e.preventDefault()}>
              <div className="relative flex-1">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#71717A]">
                   <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                 <input 
                   type="email" 
                   placeholder="you@example.com" 
                   className="w-full pl-12 pr-6 py-4 rounded-xl border-[4px] border-[#18181B] dark:border-white text-[#18181B] dark:text-[#F4F4F5] bg-white dark:bg-[#18181B] font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#00E599] shadow-[4px_4px_0_#18181B] dark:shadow-[#FFFFFF]"
                 />
              </div>
              <button className="px-8 py-4 bg-[#00E599] text-[#18181B] border-[4px] border-[#18181B] dark:border-white rounded-xl font-black text-lg shadow-[4px_4px_0_#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 hover:shadow-[6px_6px_0_#18181B] dark:hover:shadow-[6px_6px_0_#000] transition-all flex items-center justify-center gap-2">
                Join Waitlist <span>→</span>
              </button>
            </form>

            <div className="inline-block bg-[#00E599] text-[#18181B] text-[10px] font-black uppercase px-2 py-0.5">
               No spam. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-[#27272A] border-[3px] border-[#18181B] dark:border-white rounded-2xl shadow-[#18181B] dark:shadow-[#FFFFFF] overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left font-black text-xl flex justify-between items-center"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                {faq.q}
                <span className={`transform transition-transform text-2xl ${openFAQ === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 font-medium text-[#3F3F46] dark:text-[#A1A1AA] text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="border-t-[4px] border-[#18181B] bg-white dark:bg-[#27272A] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b-[3px] border-[#18181B] pb-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex flex-col gap-6 max-w-xs">
                <Logo className="text-3xl" />
                <p className="font-bold text-[#71717A] dark:text-[#A1A1AA] text-lg">
                  The Duolingo for Finance. Learn money skills through interactive games and stories.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4">Links</h4>
              <ul className="space-y-3 font-bold text-[#71717A]">
                <li><a href="#" className="hover:text-[#00E599] hover:underline">About</a></li>
                <li><a href="#" className="hover:text-[#00E599] hover:underline">Contact</a></li>
                <li><a href="#" className="hover:text-[#00E599] hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#00E599] hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4">Socials</h4>
              <ul className="flex gap-4 font-bold text-[#71717A]">
                <li><a href="#" className="flex w-10 h-10 items-center justify-center rounded-lg border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a></li>
                <li><a href="#" className="flex w-10 h-10 items-center justify-center rounded-lg border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a></li>
                <li><a href="#" className="flex w-10 h-10 items-center justify-center rounded-lg border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a></li>
                <li><a href="#" className="flex w-10 h-10 items-center justify-center rounded-lg border-2 border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[#FFFFFF] hover:-translate-y-1 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </a></li>
              </ul>
            </div>
          </div>
          <div className="text-center font-bold text-[#A1A1AA]">
            © PiggyPath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConversionSection;
