import React from 'react';
import CustomAvatar from './CustomAvatar';

const AvatarDisplay = ({ config, className = '' }) => {
  const safeConfig = config || {
    gender: 'male',
    skinTone: '#fae7d0',
    top: 'none',
    bottom: 'none',
    accessory: 'none',
  };

  return (
    <div className={`overflow-hidden bg-[#FBCFE8] rounded-full flex items-center justify-center ${className}`}>
      <CustomAvatar
        gender={safeConfig.gender}
        skinTone={safeConfig.skinTone}
        top={safeConfig.top}
        bottom={safeConfig.bottom}
        accessory={safeConfig.accessory}
        className="w-full h-full scale-[1.4] translate-y-3"
      />
    </div>
  );
};

export default AvatarDisplay;
