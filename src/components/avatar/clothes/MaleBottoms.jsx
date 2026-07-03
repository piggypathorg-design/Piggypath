import React from 'react';

const MaleBottoms = ({ bottom }) => {
  if (bottom === 'none') return null;

  // 1. Streetwear Cargo / Baggy Denim
  if (bottom === 'cargo_pants' || bottom === 'wide_denim' || bottom === 'baggy_chain') {
    return (
      <g fill={bottom === 'cargo_pants' ? '#4a5d23' : bottom === 'wide_denim' ? '#4a5568' : '#1a202c'}>
        {/* Baggy Waist */}
        <path d="M 70 205 L 130 205 L 130 225 L 105 220 L 100 220 L 95 220 L 70 225 Z" />
        
        {/* Baggy Legs with puddle effect at bottom */}
        <path d="M 70 225 L 95 220 L 98 258 L 68 258 Z" />
        <path d="M 130 225 L 105 220 L 102 258 L 132 258 Z" />
        
        {/* Cargo Pockets */}
        {bottom === 'cargo_pants' && (
          <g stroke="rgba(0,0,0,0.3)" strokeWidth="1.5">
            <rect x="70" y="230" width="14" height="15" fill="rgba(0,0,0,0.1)" />
            <rect x="116" y="230" width="14" height="15" fill="rgba(0,0,0,0.1)" />
          </g>
        )}
        
        {/* E-boy chains */}
        {bottom === 'baggy_chain' && (
           <path d="M 74 210 Q 68 230 84 218" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="3,2" />
        )}

        {/* Denim stitching */}
        {bottom === 'wide_denim' && (
          <g stroke="#ecc94b" strokeWidth="1" strokeDasharray="3,3">
            <line x1="75" y1="208" x2="125" y2="208" />
            <path d="M 75 210 Q 80 215 85 210" fill="none" />
            <path d="M 125 210 Q 120 215 115 210" fill="none" />
          </g>
        )}
      </g>
    );
  }

  // 2. Sweatpants / Track Pants
  if (bottom === 'sweatpants' || bottom === 'track_pants' || bottom === 'chinos') {
    return (
      <g fill={bottom === 'sweatpants' ? '#e2e8f0' : bottom === 'track_pants' ? '#e53e3e' : '#d6bc97'}>
        <path d="M 72 205 L 128 205 L 128 225 L 105 220 L 100 220 L 95 220 L 72 225 Z" />
        
        {/* Tapered Legs */}
        <path d="M 72 225 L 95 220 L 95 250 L 76 250 Z" />
        <path d="M 128 225 L 105 220 L 105 250 L 124 250 Z" />
        
        {/* Track stripes */}
        {bottom === 'track_pants' && (
           <g stroke="#fff" strokeWidth="3">
             <line x1="74" y1="205" x2="78" y2="250" />
             <line x1="126" y1="205" x2="122" y2="250" />
           </g>
        )}
        
        {/* Drawstrings */}
        {bottom === 'sweatpants' && (
          <g stroke="#a0aec0" strokeWidth="2">
            <line x1="98" y1="208" x2="95" y2="218" />
            <line x1="102" y1="208" x2="105" y2="218" />
          </g>
        )}
      </g>
    );
  }

  // 3. Shorts
  if (bottom === 'shorts' || bottom === 'cargo_shorts' || bottom === 'board_shorts') {
    return (
      <g fill={bottom === 'cargo_shorts' ? '#8c8c73' : bottom === 'board_shorts' ? '#00e699' : '#1a202c'}>
        <path d="M 72 205 L 128 205 L 128 225 L 105 220 L 100 220 L 95 220 L 72 225 Z" />
        <path d="M 72 225 L 95 220 L 95 235 L 75 235 Z" />
        <path d="M 128 225 L 105 220 L 105 235 L 125 235 Z" />
        
        {bottom === 'board_shorts' && (
          <g stroke="#fff" strokeWidth="3">
             <line x1="95" y1="230" x2="75" y2="230" />
             <line x1="105" y1="230" x2="125" y2="230" />
          </g>
        )}
      </g>
    );
  }

  // Default fallback (Straight Jeans)
  return (
    <g fill="#3182ce">
      <path d="M 72 205 L 128 205 L 128 225 L 105 220 L 100 220 L 95 220 L 72 225 Z" />
      <path d="M 72 225 L 95 220 L 95 252 L 78 252 Z" />
      <path d="M 128 225 L 105 220 L 105 252 L 122 252 Z" />
      <g stroke="#ecc94b" strokeWidth="1" strokeDasharray="3,3">
        <line x1="75" y1="208" x2="125" y2="208" />
      </g>
    </g>
  );
};

export default MaleBottoms;
