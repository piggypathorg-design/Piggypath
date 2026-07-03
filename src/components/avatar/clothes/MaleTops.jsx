import React from 'react';

const MaleTops = ({ top }) => {
  if (top === 'none') return null;

  // 1. Streetwear / Graphic Tees (Oversized fit)
  if (top === 'tshirt' || top === 'graphic_tee' || top === 'void_tee') {
    return (
      <g>
        {/* Oversized Body */}
        <path d="M 70 155 L 130 155 L 130 220 L 70 220 Z" fill={top === 'void_tee' ? '#1a202c' : '#f7fafc'} />
        {/* Dropped Sleeves */}
        <path d="M 70 155 L 58 190 L 70 195 L 82 165 Z" fill={top === 'void_tee' ? '#1a202c' : '#f7fafc'} />
        <path d="M 130 155 L 142 190 L 130 195 L 118 165 Z" fill={top === 'void_tee' ? '#1a202c' : '#f7fafc'} />
        
        {/* Neckline */}
        <path d="M 85 155 Q 100 162 115 155" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
        
        {/* Graphics */}
        {top === 'graphic_tee' && (
           <g>
             <circle cx="100" cy="185" r="14" fill="#fc8181" stroke="none" />
             <path d="M 95 185 Q 100 195 105 185" fill="none" stroke="#fff" strokeWidth="2" />
           </g>
        )}
        {top === 'void_tee' && (
           <g fill="#9f7aea">
             <path d="M 90 175 L 110 175 L 105 185 L 115 185 L 95 205 L 100 190 L 90 190 Z" />
           </g>
        )}
      </g>
    );
  }

  // 2. Varsity / Track Jackets
  if (top === 'varsity_jacket' || top === 'track_jacket' || top === 'denim_jacket') {
    return (
      <g>
        {/* Jacket Body */}
        <path d="M 70 155 L 130 155 L 132 218 L 68 218 Z" fill={top === 'varsity_jacket' ? '#2b6cb0' : top === 'track_jacket' ? '#e53e3e' : '#4a5568'} />
        
        {/* Jacket Sleeves (White for Varsity) */}
        <path d="M 70 155 L 50 215 L 68 215 L 82 165 Z" fill={top === 'varsity_jacket' ? '#edf2f7' : top === 'track_jacket' ? '#e53e3e' : '#4a5568'} />
        <path d="M 130 155 L 150 215 L 132 215 L 118 165 Z" fill={top === 'varsity_jacket' ? '#edf2f7' : top === 'track_jacket' ? '#e53e3e' : '#4a5568'} />
        
        {/* Cuffs & Collar */}
        <path d="M 85 155 Q 100 168 115 155" fill="none" stroke="#1a202c" strokeWidth="5" />
        <rect x="50" y="210" width="18" height="5" fill="#1a202c" />
        <rect x="132" y="210" width="18" height="5" fill="#1a202c" />
        <rect x="68" y="215" width="64" height="6" fill="#1a202c" />

        {/* Zipper / Details */}
        <line x1="100" y1="162" x2="100" y2="215" stroke="#1a202c" strokeWidth="2.5" />
        {top === 'varsity_jacket' && (
          <circle cx="85" cy="175" r="6" fill="#edf2f7" />
        )}
        {top === 'track_jacket' && (
          <g stroke="#fff" strokeWidth="3">
            <line x1="60" y1="180" x2="54" y2="210" />
            <line x1="140" y1="180" x2="146" y2="210" />
            <path d="M 85 155 L 85 215" />
            <path d="M 115 155 L 115 215" />
          </g>
        )}
      </g>
    );
  }

  // 3. Vintage Sweaters / Hoodies
  if (top === 'hoodie' || top === 'sweater' || top === 'turtleneck' || top === 'puffer') {
    return (
      <g>
        {/* Bulky Body */}
        <path d="M 68 155 L 132 155 L 134 220 L 66 220 Z" fill={top === 'hoodie' ? '#718096' : top === 'sweater' ? '#d69e2e' : top === 'puffer' ? '#dd6b20' : '#1a202c'} />
        {/* Baggy Sleeves */}
        <path d="M 68 155 Q 40 190 48 215 L 68 215 Q 75 180 82 165 Z" fill={top === 'hoodie' ? '#718096' : top === 'sweater' ? '#d69e2e' : top === 'puffer' ? '#dd6b20' : '#1a202c'} />
        <path d="M 132 155 Q 160 190 152 215 L 132 215 Q 125 180 118 165 Z" fill={top === 'hoodie' ? '#718096' : top === 'sweater' ? '#d69e2e' : top === 'puffer' ? '#dd6b20' : '#1a202c'} />
        
        {/* Hoodie Strings & Pocket */}
        {top === 'hoodie' && (
          <g>
            <path d="M 75 155 Q 100 175 125 155" fill="none" stroke="#2d3748" strokeWidth="5" />
            <line x1="90" y1="168" x2="90" y2="185" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
            <line x1="110" y1="168" x2="110" y2="185" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 80 195 L 120 195 L 120 215 L 80 215 Z" fill="none" stroke="#4a5568" strokeWidth="1.5" />
          </g>
        )}
        
        {/* Puffer baffles */}
        {top === 'puffer' && (
          <g stroke="#9c4221" strokeWidth="2" fill="none">
            <line x1="66" y1="175" x2="134" y2="175" />
            <line x1="66" y1="195" x2="134" y2="195" />
            <line x1="100" y1="155" x2="100" y2="220" />
          </g>
        )}
      </g>
    );
  }

  // Default fallback
  return (
    <g fill="#cbd5e0">
      <path d="M 73 155 L 127 155 L 127 215 L 73 215 Z" />
      <path d="M 75 155 L 53 212 L 69 212 L 82 165 Z" />
      <path d="M 125 155 L 147 212 L 131 212 L 118 165 Z" />
    </g>
  );
};

export default MaleTops;
