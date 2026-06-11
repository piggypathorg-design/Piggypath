import React from 'react';
import { motion } from 'framer-motion';
import ProfileHeader from '../components/profile/ProfileHeader';

const ProfilePage = () => {
  return (
    <div
      className="w-full mx-auto px-4 md:px-8 pt-8 pb-24"
      style={{ maxWidth: 900 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ProfileHeader
          username="Player"
          level={1}
          xp={0}
          maxXp={100}
          followers={0}
          following={0}
        />
      </motion.div>
    </div>
  );
};

export default ProfilePage;
