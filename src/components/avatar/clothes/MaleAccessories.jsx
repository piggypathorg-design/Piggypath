import React from 'react';

const MaleAccessories = ({ accessory }) => {
  if (accessory === 'none') return null;

  // Headwear
  if (accessory === 'cap' || accessory === 'beanie' || accessory === 'headband' || accessory === 'bandana') {
    return (
      <g>
        {accessory === 'cap' && (
          <g fill="#2e5c9e">
            <path d="M 45 75 C 45 40 155 40 155 75 Z" />
            <path d="M 155 75 L 180 75 C 180 65 160 65 155 65 Z" fill="#222" />
          </g>
        )}
        {accessory === 'beanie' && (
          <g fill="#ff9900">
            <path d="M 42 70 C 42 30 158 30 158 70 Z" />
            <rect x="42" y="65" width="116" height="15" rx="5" />
          </g>
        )}
        {accessory === 'headband' && (
          <rect x="43" y="75" width="114" height="15" fill="#e33030" rx="2" />
        )}
        {accessory === 'bandana' && (
          <g fill="#111">
            <rect x="43" y="75" width="114" height="20" rx="3" />
            <circle cx="60" cy="85" r="2" fill="#fff" />
            <circle cx="140" cy="85" r="2" fill="#fff" />
            <circle cx="100" cy="85" r="2" fill="#fff" />
          </g>
        )}
      </g>
    );
  }

  // Face/Eyes
  if (accessory === 'glasses' || accessory === 'sunglasses' || accessory === 'cyber_goggles' || accessory === 'mask' || accessory === 'headset') {
    return (
      <g>
        {(accessory === 'glasses' || accessory === 'sunglasses') && (
          <g stroke="#111" strokeWidth="3">
            <line x1="45" y1="102" x2="65" y2="102" />
            <line x1="135" y1="102" x2="155" y2="102" />
            <line x1="95" y1="102" x2="105" y2="102" />
            <rect x="65" y="92" width="30" height="20" rx="3" fill={accessory === 'sunglasses' ? '#111' : 'none'} />
            <rect x="105" y="92" width="30" height="20" rx="3" fill={accessory === 'sunglasses' ? '#111' : 'none'} />
          </g>
        )}
        {accessory === 'cyber_goggles' && (
          <g>
            <rect x="60" y="90" width="80" height="25" rx="10" fill="#111" stroke="#b8f400" strokeWidth="2" />
            <line x1="75" y1="102" x2="125" y2="102" stroke="#b8f400" strokeWidth="4" />
          </g>
        )}
        {accessory === 'mask' && (
          <path d="M 70 120 C 70 145 130 145 130 120 Z" fill="#222" />
        )}
        {accessory === 'headset' && (
          <g stroke="#222" strokeWidth="5" fill="none">
            <path d="M 40 115 C 30 40 170 40 160 115" />
            <rect x="30" y="95" width="15" height="35" rx="5" fill="#222" />
            <rect x="155" y="95" width="15" height="35" rx="5" fill="#222" />
          </g>
        )}
      </g>
    );
  }

  // Neck/Jewelry
  if (accessory === 'cross_earring' || accessory === 'chain' || accessory === 'choker' || accessory === 'scarf' || accessory === 'nose_ring') {
    return (
      <g>
        {accessory === 'cross_earring' && (
          <g stroke="#fce74c" strokeWidth="2">
            <line x1="45" y1="120" x2="45" y2="135" />
            <line x1="40" y1="128" x2="50" y2="128" />
          </g>
        )}
        {accessory === 'chain' && (
          <path d="M 85 145 C 95 165 105 165 115 145" fill="none" stroke="#fce74c" strokeWidth="3" />
        )}
        {accessory === 'choker' && (
          <rect x="88" y="140" width="24" height="6" fill="#111" />
        )}
        {accessory === 'scarf' && (
          <g fill="#e33030">
            <rect x="85" y="140" width="30" height="15" rx="5" />
            <path d="M 105 145 L 115 175 L 105 175 Z" />
          </g>
        )}
        {accessory === 'nose_ring' && (
          <circle cx="100" cy="116" r="3" fill="none" stroke="#fce74c" strokeWidth="1.5" />
        )}
      </g>
    );
  }

  return null;
};

export default MaleAccessories;
