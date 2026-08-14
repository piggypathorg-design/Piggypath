import React from 'react';
import PathSidebar from '../components/path/PathSidebar';
import LearningPath from '../components/path/LearningPath';

const PathPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-zinc-950 font-sans pb-12">
      
      {/* Top Banner */}
      <div className="w-full bg-[#E0F2FE] dark:bg-[#0C4A6E]/30 px-6 md:px-12 py-4 border-b border-sky-100 dark:border-sky-900/30">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <h1 className="text-xl font-black text-sky-900 dark:text-sky-100">Courses</h1>
          <p className="text-sm font-medium text-sky-800 dark:text-sky-200 hidden md:block">
            Chart your own journey, one bite-sized lesson at a time. Reach each milestone to collect a rare Gem Shard.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8">
        {/* 2-Column Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Area (Left side on desktop) */}
          <div className="w-full lg:w-[30%] shrink-0 sticky top-24">
             <PathSidebar />
          </div>

          {/* Main Content Area (Right side on desktop) */}
          <div className="w-full lg:w-[70%] shrink-0">
             <LearningPath />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PathPage;
