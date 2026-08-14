
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageCircle, Share2, Users, Globe, Mail } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const ConversionSection = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJoinWaitlist = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Please enter an email address.');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    setEmailError('');

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw10ujRrAJkBhdzX1WDiCoLzME1t7ui-YPp5hhta91d1Ld1Z2Hl2F_YDU0brxH5GO4W/exec';
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: email })
      });
      
      setShowSuccessModal(true);
      setEmail('');
    } catch {
      setEmailError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSubscribe = () => {
    const el = document.getElementById('subscribe-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus();
    }
  };

  return (
    <>
      <div className="w-full bg-white dark:bg-[#18181B] text-[#18181B] dark:text-white transition-colors">
      
        {/* WHY PIGGYPATH? (Comparison Table) */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-gray-100 dark:border-gray-800">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 border border-purple-700/60 dark:border-purple-900/40 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#8B5CF6] dark:text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
              Clear Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#18181B] dark:text-white tracking-tight leading-tight">Why We Are Different</h2>
          </div>

          <div className="max-w-6xl mx-auto bg-white dark:bg-[#1E1B2E] border border-gray-700/80 dark:border-purple-900/30 rounded-[32px] shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 border-b border-gray-700/80 dark:border-purple-900/30">
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900/60 text-black-500 font-bold text-base md:text-lg text-center border-r border-gray-700/80 dark:border-purple-900/30">
                Traditional Courses
              </div>
              <div className="p-4 md:p-6 bg-[#00E599]/10 text-emerald-600 dark:text-[#00E599] font-black text-base md:text-lg text-center">
                PiggyPath
              </div>
            </div>
            
            {[
              ['Hours of boring videos', 'Short interactive games'],
              ['Complex jargon', 'Simple everyday language'],
              ['Theoretical concepts', 'Real-world simulations'],
              ['No accountability', 'Streaks and daily challenges'],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== 3 ? 'border-b border-gray-700 dark:border-gray-800' : ''}`}>
                <div className="p-4 md:p-6 text-gray-500 font-medium text-center text-sm md:text-base border-r border-gray-700 dark:border-gray-800 flex items-center justify-center gap-2">
                  <X size={18} className="text-red-400 shrink-0" /> {row[0]}
                </div>
                <div className="p-4 md:p-6 font-bold text-center text-sm md:text-base flex items-center justify-center gap-2 text-[#18181B] dark:text-white">
                  <Check size={18} className="text-[#00E599] shrink-0 stroke-[3]" /> {row[1]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION (Deep Purple Card with glowing blurs & inline SVG Mascot) */}
        <section id="waitlist" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
          <div className="bg-[#252145] rounded-[32px] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-purple-900/40">
            {/* Soft gradient blurs */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#00E599]/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/30 rounded-full blur-[120px] translate-y-1/4 translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              
              {/* PNG Mascot */}
              <div className="mb-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg flex items-center justify-center overflow-hidden relative">
                <img src="./mascot-waitlist.png" alt="Sunglasses Piggy Mascot" className="w-[85%] h-[85%] object-contain object-center" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Your money journey starts with one lesson
              </h2>
              <p className="text-base md:text-lg font-medium text-gray-300 mb-6 max-w-2xl leading-relaxed">
                It is free to begin, and three minutes is all it takes. Your future self will thank you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
                <button 
                  onClick={scrollToSubscribe}
                  className="w-full sm:w-auto bg-[#00E599] hover:bg-[#00D08A] text-[#18181B] font-bold px-8 py-4 rounded-full transition-all shadow-md text-base sm:text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#00E599] focus:ring-offset-2 focus:ring-offset-[#252145]"
                >
                  Create your free account
                </button>
                <button 
                  onClick={scrollToSubscribe}
                  className="w-full sm:w-auto text-white font-bold px-12 py-4 rounded-full transition-all text-base sm:text-lg border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white whitespace-nowrap"
                >
                  Log in
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#111219] pt-20 pb-10 text-white border-t border-[#1F212E]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#2A2A35] pb-12 mb-8">
              
              {/* Left Column: Brand & Subscribe */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <h3 className="text-2xl font-black">PiggyPath.</h3>
                <p className="font-medium text-gray-400 text-[14px] leading-relaxed max-w-sm">
                  PiggyPath makes money and life skills fun, practical, and accessible for everyone. Learn by playing, not memorizing.
                </p>
                
                <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      id="subscribe-form"
                      type="email" 
                      placeholder="Your email address"
                      aria-label="Email address for newsletter subscription"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#1C1D29] border border-gray-700/60 px-5 py-3 rounded-full text-white font-medium outline-none focus:ring-2 focus:ring-[#00E599] transition-all text-[14px]"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#00E599] hover:bg-[#00D08A] text-[#18181B] font-bold px-6 py-3 rounded-full transition-all text-[14px] whitespace-nowrap disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#00E599]"
                    >
                      {isSubmitting ? '...' : 'Subscribe'}
                    </button>
                  </div>
                  {emailError && (
                    <div className="text-red-400 text-xs font-medium px-2">{emailError}</div>
                  )}
                </form>
              </div>
              
              {/* Right Columns: Links */}
              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 mt-2">
                <div>
                  <h4 className="font-bold text-[15px] mb-5 text-white">Product</h4>
                  <ul className="space-y-3 font-medium text-gray-400 text-[14px]">
                    <li><button onClick={() => {document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-white transition-colors">Features</button></li>
                    <li><button onClick={() => {document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-white transition-colors">Courses</button></li>
                    <li><button onClick={() => {document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}} className="hover:text-white transition-colors">Pricing</button></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Mini Games</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Download App</span></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[15px] mb-5 text-white">Courses</h4>
                  <ul className="space-y-3 font-medium text-gray-400 text-[14px]">
                    <li><span className="hover:text-white transition-colors cursor-pointer">Personal finance</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Taxation</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Banking</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Investing</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Entrepreneurship</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[15px] mb-5 text-white">Company</h4>
                  <ul className="space-y-3 font-medium text-gray-400 text-[14px]">
                    <li><span className="hover:text-white transition-colors cursor-pointer">About us</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Careers</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Blog</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Press</span></li>
                    <li><a href="mailto:piggypath.org@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[15px] mb-5 text-white">Support</h4>
                  <ul className="space-y-3 font-medium text-gray-400 text-[14px]">
                    <li><span className="hover:text-white transition-colors cursor-pointer">Help Centre</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Community</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Schools</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Privacy</span></li>
                    <li><span className="hover:text-white transition-colors cursor-pointer">Terms</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 font-medium text-[13px]">
                © 2026 PiggyPath. Made with care for money learners.
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/piggy_path?igsh=dngwODVzYzFydm14" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#1C1D29] flex items-center justify-center text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]">
                  <FaInstagram size={18} />
                </a>
                <a href="https://x.com/Piggypath_Edu" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#1C1D29] flex items-center justify-center text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]">
                  <FaXTwitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/piggypath/posts/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#1C1D29] flex items-center justify-center text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]">
                  <FaLinkedin size={18} />
                </a>
                <a href="mailto:admin@piggypath.in" aria-label="Admin Email" className="w-10 h-10 rounded-full bg-[#1C1D29] flex items-center justify-center text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#18181B] border border-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center relative"
            >
              <button 
                onClick={() => setShowSuccessModal(false)}
                aria-label="Close success modal"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#00E599]"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
              <div className="w-16 h-16 bg-[#00E599]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-[#00E599]" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">You're on the list!</h3>
              <p className="font-medium text-gray-400 mb-6 text-sm">
                You have been successfully added to the PiggyPath waitlist. Keep an eye on your inbox!
              </p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold rounded-full text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              >
                Awesome!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConversionSection;

