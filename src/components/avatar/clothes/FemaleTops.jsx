import React from 'react';

const FemaleTops = ({ top }) => {
  if (top === 'none') return null;

  // 1. Soft-Girl Pink Apron Dress (Reference)
  if (top === 'pink_star' || top === 'blouse' || top === 'kimono') {
    return (
      <g>
        {/* White Tee Underneath */}
        <path d="M 73 155 L 127 155 L 127 185 L 73 185 Z" fill="#fff" />
        {/* Puffy Sleeves */}
        <path d="M 75 155 Q 60 165 63 185 L 73 188 Q 78 175 82 165 Z" fill="#fff" />
        <path d="M 125 155 Q 140 165 137 185 L 127 188 Q 122 175 118 165 Z" fill="#fff" />
        
        {/* Pink Apron/Dress */}
        <path d="M 78 175 L 122 175 L 128 230 C 110 235 90 235 72 230 Z" fill="#ffb6c1" stroke="#ff99a8" strokeWidth="2" />
        {/* Apron Straps */}
        <rect x="80" y="155" width="8" height="20" fill="#ffb6c1" />
        <rect x="112" y="155" width="8" height="20" fill="#ffb6c1" />
        {/* Buttons */}
        <circle cx="84" cy="170" r="2" fill="#fff" />
        <circle cx="116" cy="170" r="2" fill="#fff" />
        
        {/* Heart Logo */}
        <path d="M 100 195 C 100 195 95 190 95 185 C 95 180 100 180 100 185 C 100 180 105 180 105 185 C 105 190 100 195 100 195" fill="#fff" stroke="#ff6680" strokeWidth="1.5" />
      </g>
    );
  }

  // 2. Y2K Aesthetic Crop Top
  if (top === 'croptop' || top === 'butterfly_top' || top === 'tube_top') {
    return (
      <g>
        <path d="M 73 155 L 127 155 L 124 180 Q 100 175 76 180 Z" fill="#a78bfa" />
        {/* Straps */}
        <path d="M 85 155 Q 100 165 115 155" fill="none" stroke="#222" strokeWidth="2" />
        {/* Star graphic */}
        <path d="M 100 160 L 102 165 L 107 165 L 103 168 L 104 173 L 100 170 L 96 173 L 97 168 L 93 165 L 98 165 Z" fill="#fce74c" />
      </g>
    );
  }

  // 3. Oversized Grunge Sweater / Cardigan
  if (top === 'sweater_dress' || top === 'oversized_hoodie' || top === 'white_cardigan') {
    return (
      <g>
        {/* Oversized Body */}
        <path d="M 68 155 L 132 155 L 134 225 C 110 230 90 230 66 225 Z" fill="#2d3748" />
        {/* Baggy Sleeves */}
        <path d="M 68 155 Q 40 190 48 215 L 68 215 Q 75 180 82 165 Z" fill="#2d3748" />
        <path d="M 132 155 Q 160 190 152 215 L 132 215 Q 125 180 118 165 Z" fill="#2d3748" />
        
        {/* Cardigan Buttons/V-neck detail */}
        {top === 'white_cardigan' && (
          <g>
            <path d="M 68 155 L 132 155 L 134 225 C 110 230 90 230 66 225 Z" fill="#f7fafc" />
            <path d="M 68 155 Q 40 190 48 215 L 68 215 Q 75 180 82 165 Z" fill="#f7fafc" />
            <path d="M 132 155 Q 160 190 152 215 L 132 215 Q 125 180 118 165 Z" fill="#f7fafc" />
            <path d="M 85 155 L 100 185 L 115 155" fill="none" stroke="#e2e8f0" strokeWidth="4" />
            <line x1="100" y1="185" x2="100" y2="225" stroke="#e2e8f0" strokeWidth="3" />
            <circle cx="100" cy="195" r="2" fill="#a0aec0" />
            <circle cx="100" cy="210" r="2" fill="#a0aec0" />
          </g>
        )}
      </g>
    );
  }

  // 4. Streetwear Leather Jacket over Tube Top
  if (top === 'leather_jacket' || top === 'sports_bra') {
    return (
      <g>
        {/* White Tube Top underneath */}
        <rect x="75" y="160" width="50" height="20" fill="#fff" />
        
        {/* Leather Jacket Body */}
        <path d="M 70 155 L 90 155 L 90 215 L 68 215 Z" fill="#1a202c" />
        <path d="M 110 155 L 130 155 L 132 215 L 110 215 Z" fill="#1a202c" />
        {/* Collar */}
        <path d="M 70 155 L 90 155 L 80 175 Z" fill="#2d3748" />
        <path d="M 110 155 L 130 155 L 120 175 Z" fill="#2d3748" />
        
        {/* Leather Sleeves */}
        <path d="M 70 155 L 53 212 L 69 212 L 82 165 Z" fill="#1a202c" />
        <path d="M 130 155 L 147 212 L 131 212 L 118 165 Z" fill="#1a202c" />
        {/* Zipper details */}
        <line x1="85" y1="185" x2="80" y2="205" stroke="#a0aec0" strokeWidth="1.5" />
        <line x1="115" y1="185" x2="120" y2="205" stroke="#a0aec0" strokeWidth="1.5" />
      </g>
    );
  }

  // Default fallback (Basic aesthetic graphic tee)
  return (
    <g>
      {/* Tee */}
      <path d="M 73 155 L 127 155 L 127 210 Q 100 215 73 210 Z" fill="#edf2f7" />
      <path d="M 75 155 L 60 185 L 70 188 L 82 165 Z" fill="#edf2f7" />
      <path d="M 125 155 L 140 185 L 130 188 L 118 165 Z" fill="#edf2f7" />
      
      {/* Happy face graphic */}
      <circle cx="100" cy="180" r="10" fill="#fbd38d" stroke="#d69e2e" strokeWidth="1.5" />
      <circle cx="96" cy="177" r="1.5" fill="#744210" />
      <circle cx="104" cy="177" r="1.5" fill="#744210" />
      <path d="M 95 182 Q 100 188 105 182" fill="none" stroke="#744210" strokeWidth="1.5" />
    </g>
  );
};

export default FemaleTops;
