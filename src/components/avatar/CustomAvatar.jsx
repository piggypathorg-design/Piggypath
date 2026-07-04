import React from 'react';
import MaleTops from './clothes/MaleTops';
import FemaleTops from './clothes/FemaleTops';
import MaleBottoms from './clothes/MaleBottoms';
import FemaleBottoms from './clothes/FemaleBottoms';
import MaleAccessories from './clothes/MaleAccessories';
import FemaleAccessories from './clothes/FemaleAccessories';

const CustomAvatar = ({
  gender = 'male',
  skinTone = '#ffe5d0',
  hair = 'none',
  top = 'none',
  bottom = 'none',
  accessory = 'none',
  className = ''
}) => {
  const isFemale = gender === 'female';

  // Hair colors
  const hairColor = '#3b2f2f'; // natural dark brown

  return (
    <svg viewBox="0 0 200 300" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        
        {/* ==================== BACK HAIR ==================== */}
        {isFemale && (
          <g id="hair-back" fill={hairColor}>
            {hair === 'long_straight' && (
              /* Flows down to the hips/elbows level for a natural look matching the reference picture */
              <path d="M 50 78 C 34 110 32 160 36 220 C 44 222 48 215 50 200 C 48 160 52 130 68 110 C 132 110 148 130 150 200 C 152 215 156 222 164 220 C 168 160 166 110 150 78 Z" />
            )}
            {hair === 'curly_locks' && (
              <path d="M 48 95 C 36 130 34 170 39 220 Q 47 220 51 200 C 47 160 55 140 68 120 C 132 120 145 140 149 200 Q 153 220 161 220 C 166 170 164 130 152 95 Z" />
            )}
            {hair === 'ponytail' && (
              <path d="M 142 100 C 162 95 180 120 168 165 C 157 180 146 165 142 135 Z" />
            )}
            {hair === 'side_part' && (
              <path d="M 48 100 C 42 140 42 180 48 220 Q 55 220 57 200 Q 54 150 72 120 C 128 120 144 150 142 200 Q 144 220 151 220 C 156 180 156 140 150 100 Z" />
            )}
          </g>
        )}

        {/* ==================== LEGS ==================== */}
        <g id="legs" fill={skinTone}>
          {isFemale ? (
            /* Straight leg posture, slightly wider for balanced look */
            <>
              <rect x="78" y="210" width="14" height="46" />
              <rect x="108" y="210" width="14" height="46" />
            </>
          ) : (
            /* Angled stance legs apart, balanced coordinates */
            <>
              <path d="M 74 205 L 60 250 L 76 250 L 86 205 Z" />
              <path d="M 126 205 L 140 250 L 124 250 L 114 205 Z" />
            </>
          )}
        </g>

        {/* ==================== SHOES ==================== */}
        <g id="shoes">
          {isFemale ? (
            /* Left Shoe (Reference 1) */
            <>
              <path d="M 66 254 C 66 247 88 247 88 254 L 88 276 C 88 282 66 282 66 276 Z" fill="#111" />
              <path d="M 66 268 C 66 262 88 262 88 268 L 88 276 C 88 282 66 282 66 276 Z" fill="#fff" />
              <line x1="70" y1="268" x2="84" y2="268" stroke="#fff" strokeWidth="2" />
              {/* Right Shoe (Reference 1) */}
              <path d="M 112 254 C 112 247 134 247 134 254 L 134 276 C 134 282 112 282 112 276 Z" fill="#111" />
              <path d="M 112 268 C 112 262 134 262 134 268 L 134 276 C 134 282 112 282 112 276 Z" fill="#fff" />
              <line x1="116" y1="268" x2="130" y2="268" stroke="#fff" strokeWidth="2" />
            </>
          ) : (
            /* Left Shoe (Reference 2) */
            <>
              <path d="M 52 248 C 52 242 80 242 80 248 L 80 270 C 80 276 52 276 52 270 Z" fill="#111" />
              <path d="M 52 262 C 52 256 80 256 80 262 L 80 270 C 80 276 52 276 52 270 Z" fill="#fff" />
              <line x1="56" y1="262" x2="76" y2="262" stroke="#fff" strokeWidth="2" />
              {/* Right Shoe (Reference 2) */}
              <path d="M 120 248 C 120 242 148 242 148 248 L 148 270 C 148 276 120 276 120 270 Z" fill="#111" />
              <path d="M 120 262 C 120 256 148 256 148 262 L 148 270 C 148 276 120 276 120 270 Z" fill="#fff" />
              <line x1="124" y1="262" x2="144" y2="262" stroke="#fff" strokeWidth="2" />
            </>
          )}
        </g>

        {/* ==================== BOTTOMS ==================== */}
        <g id="bottom">
          {isFemale ? (
            bottom === 'none' ? (
              /* Default pink skirt base matching Reference 1 dress */
              <path d="M 68 205 L 132 205 L 138 226 L 62 226 Z" fill="#ffb6c1" />
            ) : (
              <FemaleBottoms bottom={bottom} />
            )
          ) : (
            bottom === 'none' ? (
              /* Default black shorts base matching Reference 2 */
              <path d="M 68 195 L 132 195 L 136 220 L 64 220 Z" fill="#222" />
            ) : (
              <MaleBottoms bottom={bottom} />
            )
          )}
        </g>

        {/* ==================== TORSO ==================== */}
        <g id="torso" fill={skinTone}>
          {isFemale ? (
            /* Balanced wider torso */
            <path d="M 72 152 L 128 152 L 128 210 L 72 210 Z" />
          ) : (
            <path d="M 70 150 L 130 150 L 130 205 L 70 205 Z" />
          )}
        </g>

        {/* ==================== TOPS ==================== */}
        <g id="top">
          {isFemale ? (
            top === 'none' ? (
              /* Default white tee + pink apron with heart matching Reference 1 (wider) */
              <g>
                {/* White Tee sleeves */}
                <path d="M 72 152 Q 62 165 62 185 Q 76 185 76 152 Z" fill="#fff" />
                <path d="M 128 152 Q 138 165 138 185 Q 124 185 124 152 Z" fill="#fff" />
                <rect x="72" y="152" width="56" height="20" fill="#fff" />
                {/* Pink Apron Top */}
                <rect x="80" y="160" width="40" height="46" fill="#ffb6c1" />
                <rect x="80" y="152" width="7" height="15" fill="#ffb6c1" />
                <rect x="113" y="152" width="7" height="15" fill="#ffb6c1" />
                {/* Heart emblem */}
                <path d="M 100 188 C 100 188 96 182 92 184 C 88 186 88 192 92 195 L 100 202 L 108 195 C 112 192 112 186 108 184 C 104 182 100 188 100 188 Z" fill="#fff" />
              </g>
            ) : (
              <FemaleTops top={top} />
            )
          ) : (
            top === 'none' ? (
              /* Default white t-shirt matching Reference 2 (wider) */
              <g fill="#fff">
                <path d="M 70 150 Q 56 165 56 185 L 76 185 Z" />
                <path d="M 130 150 Q 144 165 144 185 L 124 185 Z" />
                <rect x="70" y="150" width="60" height="45" />
              </g>
            ) : (
              <MaleTops top={top} />
            )
          )}
        </g>

        {/* ==================== ARMS & HANDS ==================== */}
        <g id="arms" fill={skinTone}>
          {isFemale ? (
            /* Slender arms pointing straight down (Reference 1) */
            <>
              {/* Left Arm */}
              <path d="M 72 152 Q 60 180 60 210 Q 68 210 72 210 Q 70 180 77 152 Z" />
              <circle cx="64" cy="214" r="7" />
              {/* Right Arm */}
              <path d="M 128 152 Q 140 180 140 210 Q 132 210 128 210 Q 130 180 123 152 Z" />
              <circle cx="136" cy="214" r="7" />
            </>
          ) : (
            /* Robust arms angled slightly outwards (Reference 2 A-stance) */
            <>
              {/* Left Arm */}
              <path d="M 70 150 L 42 195 L 52 201 L 76 162 Z" />
              <circle cx="47" cy="198" r="7.5" />
              {/* Right Arm */}
              <path d="M 130 150 L 158 195 L 148 201 L 124 162 Z" />
              <circle cx="153" cy="198" r="7.5" />
            </>
          )}
        </g>

        {/* ==================== NECK ==================== */}
        {isFemale ? (
          <rect x="94" y="140" width="12" height="18" fill={skinTone} />
        ) : (
          <rect x="92" y="142" width="16" height="10" fill={skinTone} />
        )}

        {/* ==================== HEAD ==================== */}
        <g id="head-group">
          {/* Ears (Shifted inwards to match smaller head radius rx=47) */}
          {isFemale ? (
            <>
              <ellipse cx="56" cy="115" rx="11" ry="13" fill={skinTone} />
              <path d="M 52 110 Q 56 112 53 118" fill="none" strokeWidth="1.5" />
              <ellipse cx="144" cy="115" rx="11" ry="13" fill={skinTone} />
              <path d="M 148 110 Q 144 112 147 118" fill="none" strokeWidth="1.5" />
            </>
          ) : (
            <>
              /* Big round ears for male stance (Reference 2) */
              <ellipse cx="54" cy="115" rx="14" ry="14" fill={skinTone} />
              <path d="M 48 110 C 54 110 54 120 48 120" fill="none" strokeWidth="2" />
              <ellipse cx="146" cy="115" rx="14" ry="14" fill={skinTone} />
              <path d="M 152 110 C 146 110 146 120 152 120" fill="none" strokeWidth="2" />
            </>
          )}
          
          {/* Head Base (Reduced radius rx=47 ry=42 for balanced proportion) */}
          <ellipse cx="100" cy="100" rx="47" ry="42" fill={skinTone} />
          
          {/* Face Elements */}
          <g id="face">
            {isFemale ? (
              /* Female: Grumpy/pouty facial expressions exactly matching the uploaded picture reference */
              <>
                {/* Slanted pouting eyebrows */}
                <path d="M 78 89 L 88 86" fill="none" strokeWidth="3" strokeLinecap="round" />
                <path d="M 122 89 L 112 86" fill="none" strokeWidth="3" strokeLinecap="round" />
                
                {/* Eyes with sparkle reflection */}
                <circle cx="86" cy="102" r="5" fill="#1a202c" stroke="none" />
                <circle cx="114" cy="102" r="5" fill="#1a202c" stroke="none" />
                <circle cx="88" cy="100" r="1.5" fill="#fff" stroke="none" />
                <circle cx="116" cy="100" r="1.5" fill="#fff" stroke="none" />
                
                {/* Eyelashes */}
                <g stroke="#1a202c" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="82" y1="97" x2="80" y2="94" />
                  <line x1="86" y1="96" x2="85" y2="93" />
                  <line x1="90" y1="97" x2="91" y2="94" />
                  <line x1="110" y1="97" x2="109" y2="94" />
                  <line x1="114" y1="96" x2="115" y2="93" />
                  <line x1="118" y1="97" x2="120" y2="94" />
                </g>

                {/* Blushing Cheeks */}
                <ellipse cx="72" cy="114" rx="12" ry="8" fill="#ff99a8" stroke="none" opacity="0.8" />
                <ellipse cx="128" cy="114" rx="12" ry="8" fill="#ff99a8" stroke="none" opacity="0.8" />
                
                {/* Nose */}
                <path d="M 98 111 Q 100 109 102 111" fill="none" stroke="#7a5c4f" strokeWidth="1.5" />
                
                {/* Grumpy inverted mouth curve matching picture */}
                <path d="M 95 124 Q 100 120 105 124" fill="none" strokeWidth="3" strokeLinecap="round" />
              </>
            ) : (
              /* Male: Happy facial expressions */
              <>
                {/* Curved eyebrows */}
                <path d="M 78 88 Q 85 83 91 87" fill="none" strokeWidth="3" strokeLinecap="round" />
                <path d="M 122 88 Q 115 83 109 87" fill="none" strokeWidth="3" strokeLinecap="round" />
                
                {/* Eyes with sparkle reflection */}
                <circle cx="86" cy="102" r="5" fill="#1a202c" stroke="none" />
                <circle cx="114" cy="102" r="5" fill="#1a202c" stroke="none" />
                <circle cx="88" cy="100" r="1.5" fill="#fff" stroke="none" />
                <circle cx="116" cy="100" r="1.5" fill="#fff" stroke="none" />

                {/* Blushing Cheeks */}
                <ellipse cx="72" cy="114" rx="12" ry="8" fill="#ff99a8" stroke="none" opacity="0.8" />
                <ellipse cx="128" cy="114" rx="12" ry="8" fill="#ff99a8" stroke="none" opacity="0.8" />
                
                {/* Nose */}
                <path d="M 98 111 Q 100 109 102 111" fill="none" stroke="#7a5c4f" strokeWidth="1.5" />
                
                {/* Big happy smile */}
                <path d="M 89 121 Q 100 133 111 121" fill="none" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </g>

          {/* ==================== HAIR FRONT / STYLES ==================== */}
          <g id="hair-front" fill={hairColor}>
            
            {/* --- Female Hair Styles --- */}
            {isFemale && (
              <>
                {hair === 'long_straight' && (
                  /* Parted in the middle with symmetric sweeps down (Reference 1) */
                  <g>
                    {/* Continuous crown cap and sweeps framing the face */}
                    <path d="M 52 108 C 50 82 52 60 65 52 C 75 46 125 46 135 52 C 148 60 150 82 148 108 C 148 118 142 118 134 106 C 120 90 110 82 100 82 C 90 82 80 90 66 106 C 58 118 52 118 52 108 Z" />
                    
                    {/* Center Parting Line */}
                    <line x1="100" y1="48" x2="100" y2="82" stroke="#1a1a1a" strokeWidth="3" />
                  </g>
                )}
                {hair === 'bob_cut' && (
                  /* Chin-length bob */
                  <path d="M 52 95 C 52 56 148 56 148 95 C 151 120 150 135 143 145 C 136 120 130 110 100 72 C 70 110 64 120 57 145 C 50 135 49 120 52 95 Z" />
                )}
                {hair === 'curly_locks' && (
                  /* Wavy front pieces */
                  <path d="M 52 95 C 52 56 148 56 148 95 C 151 115 146 130 140 140 C 136 120 130 110 100 74 C 70 110 64 120 60 140 C 54 130 49 115 52 95 Z" />
                )}
                {hair === 'side_part' && (
                  <path d="M 52 95 C 52 56 148 56 148 95 Q 125 65 100 68 C 75 70 60 85 52 95 Z" />
                )}
                {hair === 'ponytail' && (
                  <path d="M 52 95 C 52 56 148 56 148 95 Q 100 72 52 95 Z" />
                )}
              </>
            )}

            {/* --- Male Hair Styles --- */}
            {!isFemale && (
              <>
                {hair === 'buzz_cut' && (
                  <path d="M 52 100 C 52 54 148 54 148 100 Q 148 76 100 76 Q 52 76 52 100 Z" />
                )}
                {hair === 'spiky' && (
                  <path d="M 52 95 L 59 74 L 70 84 L 82 65 L 95 80 L 108 62 L 120 80 L 132 68 L 142 84 L 148 95 Z" />
                )}
                {hair === 'undercut' && (
                  /* Side swept thick volume */
                  <path d="M 54 85 Q 78 48 112 54 Q 146 62 144 88 Q 118 75 100 75 Z" />
                )}
                {hair === 'curly_afro' && (
                  <path d="M 50 92 C 40 72 58 46 75 56 C 84 36 110 36 119 50 C 136 36 158 62 150 85 C 154 98 136 107 130 93 Z" />
                )}
                {hair === 'combed_over' && (
                  <path d="M 52 92 C 52 56 118 46 146 78 C 126 73 80 75 52 92 Z" />
                )}
              </>
            )}

          </g>
        </g>

        {/* ==================== ACCESSORIES ==================== */}
        <g id="accessory">
          {isFemale ? (
            <FemaleAccessories accessory={accessory} />
          ) : (
            <MaleAccessories accessory={accessory} />
          )}
        </g>
        
      </g>
    </svg>
  );
};

export default CustomAvatar;
