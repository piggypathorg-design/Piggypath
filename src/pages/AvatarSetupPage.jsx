import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarBuilder from '../components/avatar/AvatarBuilder';
import { useAvatar } from '../hooks/useAvatar';

const AvatarSetupPage = () => {
  const navigate = useNavigate();
  const [avatarConfig, saveConfig] = useAvatar();

  const handleSave = (config) => {
    saveConfig(config);           // persists to localStorage & notifies app
    navigate('/app');             // go straight into the app after saving
  };

  return (
    <div className="min-h-screen bg-transparent p-3 sm:p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full mb-6 md:mb-8 text-center bg-white border-[4px] border-black shadow-neo-base py-4 md:py-6 px-4 rounded-neo">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-2">
          PiggyPath Avatar
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-bold text-black">
          Customize your character before you start your journey.
        </p>
      </div>
      
      <AvatarBuilder initialConfig={avatarConfig} onSave={handleSave} />
    </div>
  );
};

export default AvatarSetupPage;
