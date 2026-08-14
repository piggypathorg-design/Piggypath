import React from 'react';
import DashboardTopBar from '../components/dashboard/layout/DashboardTopBar';
import UserProfileCard from '../components/dashboard/widgets/UserProfileCard';
import DailyChallengesCard from '../components/dashboard/widgets/DailyChallengesCard';
import YourStashCard from '../components/dashboard/widgets/YourStashCard';
import ArtifactsCard from '../components/dashboard/widgets/ArtifactsCard';
import MysteryBoxBanner from '../components/dashboard/widgets/MysteryBoxBanner';
import ShopPreviewCard from '../components/dashboard/widgets/ShopPreviewCard';
import CoachPennyCard from '../components/dashboard/widgets/CoachPennyCard';
import NewLeaderboardCard from '../components/dashboard/widgets/NewLeaderboardCard';

const DashboardPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-zinc-950 font-sans">
      {/* Top Bar Area */}
      <DashboardTopBar />

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8">
        
        {/* Continue Lesson Banner */}
        <div className="w-full bg-indigo-50/50 dark:bg-indigo-900/10 rounded-3xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between border border-indigo-100 dark:border-indigo-900/30">
          <div>
            <h2 className="text-zinc-900 dark:text-zinc-100 font-bold text-lg">Continue: Personal Finance - Lesson 7</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Budgeting Basics, you're 70% through</p>
          </div>
          <button className="mt-4 md:mt-0 px-8 py-3 bg-[#00E599] hover:bg-[#00D08A] text-zinc-900 font-bold rounded-full transition-colors shadow-sm">
            Resume
          </button>
        </div>

        {/* Dashboard Grid Container */}
        <div className="flex flex-col gap-6">
          
          {/* Row 1: Profile & Daily Challenges */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-5/12 shrink-0">
              <UserProfileCard />
            </div>
            <div className="w-full lg:w-7/12 shrink-0">
              <DailyChallengesCard />
            </div>
          </div>

          {/* Row 2: Stash & Artifacts */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-5/12 shrink-0">
              <YourStashCard />
            </div>
            <div className="w-full lg:w-7/12 shrink-0">
              <ArtifactsCard />
            </div>
          </div>

          {/* Row 3: Mystery Box (Full width) */}
          <div className="w-full">
            <MysteryBoxBanner />
          </div>

          {/* Row 4: Shop & Coach Penny */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-5/12 shrink-0">
              <ShopPreviewCard />
            </div>
            <div className="w-full lg:w-7/12 shrink-0">
              <CoachPennyCard />
            </div>
          </div>

          {/* Row 5: Leaderboard (Full width) */}
          <div className="w-full">
            <NewLeaderboardCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
