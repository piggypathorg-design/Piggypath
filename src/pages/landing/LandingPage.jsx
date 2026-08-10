import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CoursesSection from './CoursesSection';
import JourneyPreviewSection from './JourneyPreviewSection';
import TargetAudienceSection from './TargetAudienceSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import ConversionSection from './ConversionSection';
import Logo from '../../components/common/Logo';
import { Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#18181B]/80 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 shadow-sm py-3.5' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollTo('home')}
              className="text-left focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-xl"
              aria-label="PiggyPath Home"
            >
              <Logo className="text-[26px]" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600 dark:text-gray-300">
            <button onClick={() => scrollTo('features')} className="hover:text-[#8B5CF6] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-lg px-1">Features</button>
            <button onClick={() => scrollTo('courses')} className="hover:text-[#8B5CF6] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-lg px-1">Courses</button>
            <button onClick={() => scrollTo('journey')} className="hover:text-[#8B5CF6] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-lg px-1">Journey</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-[#8B5CF6] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-lg px-1">Pricing</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-[#8B5CF6] dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-lg px-1">FAQ</button>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Switcher Toggle */}
            <button 
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            <button 
              onClick={() => scrollTo('waitlist')} 
              className="hidden sm:flex items-center justify-center font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 bg-[#00E599] hover:bg-[#00D08A] text-[#18181B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E599]"
            >
              Join Waitlist
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

const LandingPage = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-[#00E599]/30 selection:text-[#18181B] bg-white dark:bg-[#18181B] text-[#18181B] dark:text-white transition-colors overflow-x-hidden">
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <JourneyPreviewSection />
        <TargetAudienceSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ConversionSection />
      </main>
    </div>
  );
};

export default LandingPage;

