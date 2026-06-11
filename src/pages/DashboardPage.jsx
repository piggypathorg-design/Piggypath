import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/dashboard/HeroSection';
import StreaksPanel from '../components/dashboard/StreaksPanel';
import DailyQuestPanel from '../components/dashboard/DailyQuestPanel';
import ShopPreview from '../components/dashboard/ShopPreview';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.3, ease: 'easeOut' },
});

const DashboardPage = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 pt-8 pb-24" style={{ maxWidth: 1200 }}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

        {/* Main / Left column */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <motion.div {...fade(0.05)}>
            <HeroSection username="Player" level={1} xp={0} maxXp={100} />
          </motion.div>

          {/* Mobile: sidebar content stacks below hero */}
          <div className="flex flex-col gap-5 lg:hidden">
            <motion.div {...fade(0.1)}><DailyQuestPanel /></motion.div>
            <motion.div {...fade(0.15)}><StreaksPanel currentStreak={0} /></motion.div>
            <motion.div {...fade(0.2)}><ShopPreview coins={0} /></motion.div>
          </div>
        </div>

        {/* Sidebar / Right column */}
        <div className="hidden lg:flex flex-col gap-5 shrink-0" style={{ width: 320 }}>
          <div className="sticky top-[76px] flex flex-col gap-5">
            <motion.div {...fade(0.1)}><DailyQuestPanel /></motion.div>
            <motion.div {...fade(0.15)}><StreaksPanel currentStreak={0} /></motion.div>
            <motion.div {...fade(0.2)}><ShopPreview coins={0} /></motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
