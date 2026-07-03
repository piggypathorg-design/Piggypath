import React from 'react';

const FemaleBottoms = ({ bottom }) => {
  if (bottom === 'none') return null;

  // 1. Preppy Pleated Skirt
  if (bottom === 'skirt' || bottom === 'plaid_skirt' || bottom === 'purple_pleated') {
    return (
      <g>
        {/* Base Skirt */}
        <path d="M 72 205 L 128 205 L 134 235 L 66 235 Z" fill={bottom === 'skirt' ? '#ffb6c1' : bottom === 'plaid_skirt' ? '#e53e3e' : '#9f7aea'} />
        {/* Pleats / Folds */}
        <g stroke="rgba(0,0,0,0.2)" strokeWidth="2">
          <line x1="80" y1="205" x2="76" y2="235" />
          <line x1="90" y1="205" x2="88" y2="235" />
          <line x1="100" y1="205" x2="100" y2="235" />
          <line x1="110" y1="205" x2="112" y2="235" />
          <line x1="120" y1="205" x2="124" y2="235" />
        </g>
        {/* Plaid Pattern Overlay */}
        {bottom === 'plaid_skirt' && (
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
            <line x1="68" y1="220" x2="132" y2="220" />
            <line x1="70" y1="210" x2="130" y2="210" />
            <line x1="85" y1="205" x2="81" y2="235" />
            <line x1="115" y1="205" x2="119" y2="235" />
          </g>
        )}
      </g>
    );
  }

  // 2. Y2K Wide Flared Jeans
  if (bottom === 'flared_jeans' || bottom === 'denim_skirt' || bottom === 'ripped_jeans') {
    return (
      <g fill="#4a5568"> {/* Dark washed denim color */}
        {/* Waist/Hips */}
        <path d="M 72 205 L 128 205 L 128 225 L 105 220 L 100 220 L 95 220 L 72 225 Z" />
        
        {/* Flared Legs */}
        <path d="M 72 225 L 95 220 L 98 256 L 68 256 Z" />
        <path d="M 128 225 L 105 220 L 102 256 L 132 256 Z" />
        
        {/* Denim details (pockets, stitching) */}
        <g stroke="#ecc94b" strokeWidth="1" strokeDasharray="2,2">
          <line x1="75" y1="208" x2="125" y2="208" />
          <path d="M 100 208 L 100 220" />
          {/* Pocket stitching */}
          <path d="M 75 208 Q 80 215 85 208" fill="none" />
          <path d="M 125 208 Q 120 215 115 208" fill="none" />
        </g>

        {/* Rips for ripped jeans */}
        {bottom === 'ripped_jeans' && (
          <g stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round">
            <line x1="80" y1="235" x2="92" y2="236" />
            <line x1="82" y1="238" x2="88" y2="237" />
            <line x1="108" y1="240" x2="120" y2="239" />
          </g>
        )}
      </g>
    );
  }

  // 3. Streetwear Cargo Pants
  if (bottom === 'pink_cargo' || bottom === 'star_cargo' || bottom === 'sweatpants') {
    return (
      <g fill={bottom === 'pink_cargo' ? '#fbb6ce' : bottom === 'sweatpants' ? '#e2e8f0' : '#4a5568'}>
        {/* Baggy Waist */}
        <path d="M 70 205 L 130 205 L 130 225 L 105 220 L 100 220 L 95 220 L 70 225 Z" />
        
        {/* Baggy Legs with elastic cuffs */}
        <path d="M 70 225 L 95 220 L 96 250 L 76 250 Z" />
        <path d="M 130 225 L 105 220 L 104 250 L 124 250 Z" />
        
        {/* Elastic Cuffs */}
        <rect x="76" y="250" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
        <rect x="104" y="250" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)" />

        {/* Cargo Pockets */}
        {(bottom === 'pink_cargo' || bottom === 'star_cargo') && (
          <g fill="rgba(0,0,0,0.05)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5">
            <rect x="74" y="228" width="14" height="12" rx="1" />
            <rect x="112" y="228" width="14" height="12" rx="1" />
            {/* Pocket flaps */}
            <path d="M 72 228 L 90 228 L 86 232 L 76 232 Z" fill="rgba(0,0,0,0.1)" stroke="none" />
            <path d="M 110 228 L 128 228 L 124 232 L 114 232 Z" fill="rgba(0,0,0,0.1)" stroke="none" />
          </g>
        )}
        
        {bottom === 'star_cargo' && (
          <path d="M 81 234 L 83 238 L 79 238 Z" fill="#ecc94b" stroke="none" />
        )}
      </g>
    );
  }

  // Default fallback (Leggings / Biker Shorts)
  return (
    <g fill="#1a202c">
      <path d="M 72 205 L 128 205 L 128 225 L 105 220 L 100 220 L 95 220 L 72 225 Z" />
      <path d="M 72 225 L 95 220 L 95 242 L 75 242 Z" />
      <path d="M 128 225 L 105 220 L 105 242 L 125 242 Z" />
      <path d="M 72 240 Q 85 245 95 240" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M 105 240 Q 115 245 128 240" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    </g>
  );
};

export default FemaleBottoms;
