import React from 'react';
import ProfileTopBar from '../components/profile/ProfileTopBar';
import ProfileIdentityCard from '../components/profile/ProfileIdentityCard';
import FinancialSkillRadar from '../components/profile/FinancialSkillRadar';
import XpGrowthChart from '../components/profile/XpGrowthChart';
import ActivityCalendar from '../components/profile/ActivityCalendar';
import FriendsSearchList from '../components/profile/FriendsSearchList';
import JourneyCollection from '../components/profile/JourneyCollection';
import MessagesPanel from '../components/profile/MessagesPanel';
import BadgesAndCollections from '../components/profile/BadgesAndCollections';
import AccountAndSettings from '../components/profile/AccountAndSettings';

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen pb-[80px]"> {/* Add bottom padding for the nav bar */}
      {/* Top Bar */}
      <ProfileTopBar />

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* Masonry Layout Section */}
        <div className="columns-1 lg:columns-2 gap-8 mb-6">
          <div className="break-inside-avoid mb-8"><ProfileIdentityCard /></div>
          <div className="break-inside-avoid mb-8"><FinancialSkillRadar /></div>
          <div className="break-inside-avoid mb-8"><XpGrowthChart /></div>
          <div className="break-inside-avoid mb-8"><ActivityCalendar /></div>
          <div className="break-inside-avoid mb-8"><JourneyCollection /></div>
          <div className="break-inside-avoid mb-8"><FriendsSearchList /></div>
          <div className="break-inside-avoid mb-8"><MessagesPanel /></div>
        </div>

        {/* Full Width Sections */}
        <div className="flex flex-col">
          <BadgesAndCollections />
          <AccountAndSettings />
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
