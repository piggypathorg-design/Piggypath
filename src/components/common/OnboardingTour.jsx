import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Check, X } from 'lucide-react';

const steps = [
  {
    title: 'Welcome to PiggyPath! ??',
    description: 'Your gamified financial journey starts here. Learn budgeting, investing, and tax basics through interactive lessons.',
    badge: 'Step 1 of 3'
  },
  {
    title: 'Earn XP & Maintain Streaks ??',
    description: 'Complete daily challenges and mini-games to collect XP, coins, and gems to customize your avatar.',
    badge: 'Step 2 of 3'
  },
  {
    title: 'Climb the Leaderboards ??',
    description: 'Compare your progress with friends and learners worldwide as you level up your financial health score.',
    badge: 'Step 3 of 3'
  }
];

export default function OnboardingTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('piggypath_onboarding_seen');
    if (!hasSeenTour) {
      setIsOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    localStorage.setItem('piggypath_onboarding_seen', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
        <button 
          onClick={handleComplete}
          aria-label="Skip tour"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00E599]"
        >
          <X size={20} />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4">
          <Sparkles size={14} />
          <span>{step.badge}</span>
        </div>

        <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">
          {step.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
          {step.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex gap-1.5">
            {steps.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentStep ? 'w-6 bg-[#00E599]' : 'w-2 bg-zinc-200 dark:bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-[#00E599] hover:bg-[#00c885] text-zinc-900 font-bold px-5 py-2.5 rounded-full text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#00E599]"
          >
            <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
            {currentStep === steps.length - 1 ? <Check size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
