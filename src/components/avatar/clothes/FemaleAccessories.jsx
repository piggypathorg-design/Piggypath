import React from 'react';

const FemaleAccessories = ({ accessory }) => {
  if (accessory === 'none') return null;

  // Hair Accessories
  if (accessory === 'bear_buns' || accessory === 'star_clips' || accessory === 'butterfly_clip' || accessory === 'cat_ears' || accessory === 'ribbon_bow' || accessory === 'hair_band') {
    return (
      <g>
        {accessory === 'bear_buns' && (
          <g fill="#3b2f2f">
            <circle cx="50" cy="50" r="22" />
            <circle cx="150" cy="50" r="22" />
          </g>
        )}
        {accessory === 'star_clips' && (
          <g fill="#ffcc00" stroke="#111" strokeWidth="1.5">
            <path d="M 60 75 L 65 85 L 75 85 L 68 92 L 72 102 L 60 95 L 48 102 L 52 92 L 45 85 L 55 85 Z" />
            <path d="M 140 75 L 145 85 L 155 85 L 148 92 L 152 102 L 140 95 L 128 102 L 132 92 L 125 85 L 135 85 Z" />
          </g>
        )}
        {accessory === 'butterfly_clip' && (
          <path d="M 60 80 Q 75 70 70 90 Q 55 100 50 85 Z" fill="#9966ff" stroke="#111" strokeWidth="1.5" />
        )}
        {accessory === 'cat_ears' && (
          <g fill="#111">
            <path d="M 50 50 L 70 60 L 80 40 Z" />
            <path d="M 150 50 L 130 60 L 120 40 Z" />
          </g>
        )}
        {accessory === 'ribbon_bow' && (
          <g fill="#ffb6c1" stroke="#111" strokeWidth="1.5">
            <path d="M 100 50 L 80 30 L 80 70 Z" />
            <path d="M 100 50 L 120 30 L 120 70 Z" />
            <circle cx="100" cy="50" r="5" />
          </g>
        )}
        {accessory === 'hair_band' && (
          /* Curved band arching over the head exactly like requested */
          <path d="M 48 90 C 48 50 152 50 152 90" fill="none" stroke="#e33030" strokeWidth="6" />
        )}
      </g>
    );
  }

  // Headwear
  if (accessory === 'backwards_cap' || accessory === 'beanie' || accessory === 'beret' || accessory === 'baseball_cap') {
    return (
      <g>
        {accessory === 'backwards_cap' && (
          <g fill="#2e5c9e">
            <path d="M 45 75 C 45 40 155 40 155 75 Z" />
            <path d="M 45 75 L 20 75 C 20 65 40 65 45 65 Z" fill="#222" />
          </g>
        )}
        {accessory === 'beanie' && (
          <g fill="#ff9900">
             <path d="M 42 70 C 42 30 158 30 158 70 Z" />
             <rect x="42" y="65" width="116" height="15" rx="5" />
          </g>
        )}
        {accessory === 'beret' && (
          <g fill="#e33030">
            <ellipse cx="100" cy="50" rx="50" ry="15" />
            <circle cx="100" cy="35" r="3" />
          </g>
        )}
        {accessory === 'baseball_cap' && (
          /* Standard forward-facing baseball cap */
          <g fill="#e33030">
            <path d="M 45 75 C 45 40 155 40 155 75 Z" />
            <path d="M 155 75 L 182 75 C 182 68 165 65 155 65 Z" fill="#111" />
          </g>
        )}
      </g>
    );
  }

  // Glasses/Face
  if (accessory === 'glasses' || accessory === 'sunglasses') {
    return (
      <g stroke="#111" strokeWidth="3">
        <line x1="45" y1="102" x2="65" y2="102" />
        <line x1="135" y1="102" x2="155" y2="102" />
        <line x1="95" y1="102" x2="105" y2="102" />
        <circle cx="80" cy="102" r="15" fill={accessory === 'sunglasses' ? '#111' : 'none'} />
        <circle cx="120" cy="102" r="15" fill={accessory === 'sunglasses' ? '#111' : 'none'} />
      </g>
    );
  }

  // Neck/Wrist/Earrings/Jewelry
  if (accessory === 'purple_tie' || accessory === 'choker' || accessory === 'hoop_earrings' || accessory === 'scarf' || accessory === 'watch' || accessory === 'earrings') {
    return (
      <g>
        {accessory === 'purple_tie' && (
          <g fill="#9966ff">
            <path d="M 95 155 L 105 155 L 110 185 L 100 195 L 90 185 Z" />
            <path d="M 90 145 L 110 145 L 105 155 L 95 155 Z" />
          </g>
        )}
        {accessory === 'choker' && (
          <rect x="88" y="140" width="24" height="4" fill="#111" />
        )}
        {accessory === 'hoop_earrings' && (
          <g fill="none" stroke="#fce74c" strokeWidth="2">
            <circle cx="45" cy="130" r="10" />
            <circle cx="155" cy="130" r="10" />
          </g>
        )}
        {accessory === 'earrings' && (
          /* Stud & drop star earrings (Reference 1 style) */
          <g fill="#fce74c" stroke="#111" strokeWidth="1">
            <circle cx="40" cy="126" r="3" />
            <path d="M 40 126 L 40 134 L 37 137 L 43 137 Z" />
            <circle cx="160" cy="126" r="3" />
            <path d="M 160 126 L 160 134 L 157 137 L 163 137 Z" />
          </g>
        )}
        {accessory === 'scarf' && (
          <g fill="#e33030">
            {/* Wrap around neck */}
            <rect x="82" y="138" width="36" height="15" rx="5" />
            {/* Hanging tails */}
            <path d="M 85 148 L 76 190 L 90 190 Z" />
            <path d="M 100 148 L 109 182 L 99 182 Z" />
          </g>
        )}
        {accessory === 'watch' && (
          /* Golden watch on left wrist */
          <g>
            <rect x="67" y="196" width="10" height="4" fill="#ffcc00" />
            <circle cx="72" cy="198" r="4" fill="#fff" stroke="#111" strokeWidth="1" />
          </g>
        )}
      </g>
    );
  }

  return null;
};

export default FemaleAccessories;
