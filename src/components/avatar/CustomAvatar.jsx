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
              /* Flows down the shoulders exactly like Reference 1 */
              <path d="M 45 100 C 35 150 30 200 33 260 C 45 260 48 240 50 210 Q 55 160 70 120 C 130 120 145 160 150 210 C 152 240 155 260 167 260 C 170 200 165 150 155 100 Z" />
            )}
            {hair === 'curly_locks' && (
              <path d="M 44 95 C 30 130 28 170 34 220 Q 42 220 46 200 C 42 160 50 140 65 120 C 135 120 150 140 154 200 Q 158 220 166 220 C 172 170 170 130 156 95 Z" />
            )}
            {hair === 'ponytail' && (
              /* Swirling ponytail to the side */
              <path d="M 148 100 C 168 95 188 120 175 165 C 162 180 150 165 146 135 Z" />
            )}
            {hair === 'side_part' && (
              <path d="M 45 100 C 38 140 38 180 44 220 Q 52 220 54 200 Q 50 150 70 120 C 130 120 148 150 146 200 Q 148 220 156 220 C 162 180 162 140 155 100 Z" />
            )}
          </g>
        )}

        {/* ==================== LEGS ==================== */}
        <g id="legs" fill={skinTone}>
          {isFemale ? (
            /* Straight leg posture close together (Reference 1) */
            <>
              <rect x="83" y="210" width="12" height="46" />
              <rect x="105" y="210" width="12" height="46" />
            </>
          ) : (
            /* Angled stance legs apart (Reference 2) */
            <>
              <path d="M 78 205 L 66 250 L 80 250 L 90 205 Z" />
              <path d="M 122 205 L 134 250 L 120 250 L 110 205 Z" />
            </>
          )}
        </g>

        {/* ==================== SHOES ==================== */}
        <g id="shoes">
          {isFemale ? (
            /* Left Shoe (Reference 1) */
            <>
              <path d="M 71 254 C 71 247 93 247 93 254 L 93 276 C 93 282 71 282 71 276 Z" fill="#111" />
              <path d="M 71 268 C 71 262 93 262 93 268 L 93 276 C 93 282 71 282 71 276 Z" fill="#fff" />
              <line x1="75" y1="268" x2="89" y2="268" stroke="#fff" strokeWidth="2" />
              {/* Right Shoe (Reference 1) */}
              <path d="M 107 254 C 107 247 129 247 129 254 L 129 276 C 129 282 107 282 107 276 Z" fill="#111" />
              <path d="M 107 268 C 107 262 129 262 129 268 L 129 276 C 129 282 107 282 107 276 Z" fill="#fff" />
              <line x1="111" y1="268" x2="125" y2="268" stroke="#fff" strokeWidth="2" />
            </>
          ) : (
            /* Left Shoe (Reference 2) */
            <>
              <path d="M 58 248 C 58 242 84 242 84 248 L 84 270 C 84 276 58 276 58 270 Z" fill="#111" />
              <path d="M 58 262 C 58 256 84 256 84 262 L 84 270 C 84 276 58 276 58 270 Z" fill="#fff" />
              <line x1="62" y1="262" x2="80" y2="262" stroke="#fff" strokeWidth="2" />
              {/* Right Shoe (Reference 2) */}
              <path d="M 116 248 C 116 242 142 242 142 248 L 142 270 C 142 276 116 276 116 270 Z" fill="#111" />
              <path d="M 116 262 C 116 256 142 256 142 262 L 142 270 C 142 276 116 276 116 270 Z" fill="#fff" />
              <line x1="120" y1="262" x2="138" y2="262" stroke="#fff" strokeWidth="2" />
            </>
          )}
        </g>

        {/* ==================== BOTTOMS ==================== */}
        <g id="bottom">
          {isFemale ? (
            bottom === 'none' ? (
              /* Default pink skirt base matching Reference 1 dress */
              <path d="M 73 205 L 127 205 L 133 226 L 67 226 Z" fill="#ffb6c1" />
            ) : (
              <FemaleBottoms bottom={bottom} />
            )
          ) : (
            bottom === 'none' ? (
              /* Default black shorts base matching Reference 2 */
              <path d="M 74 195 L 126 195 L 130 220 L 70 220 Z" fill="#222" />
            ) : (
              <MaleBottoms bottom={bottom} />
            )
          )}
        </g>

        {/* ==================== TORSO ==================== */}
        <g id="torso" fill={skinTone}>
          {isFemale ? (
            <path d="M 78 152 L 122 152 L 122 210 L 78 210 Z" />
          ) : (
            <path d="M 76 150 L 124 150 L 124 205 L 76 205 Z" />
          )}
        </g>

        {/* ==================== TOPS ==================== */}
        <g id="top">
          {isFemale ? (
            top === 'none' ? (
              /* Default white tee + pink apron with heart matching Reference 1 */
              <g>
                {/* White Tee sleeves */}
                <path d="M 78 152 Q 68 165 68 185 Q 82 185 82 152 Z" fill="#fff" />
                <path d="M 122 152 Q 132 165 132 185 Q 118 185 118 152 Z" fill="#fff" />
                <rect x="78" y="152" width="44" height="20" fill="#fff" />
                {/* Pink Apron Top */}
                <rect x="85" y="160" width="30" height="46" fill="#ffb6c1" />
                <rect x="85" y="152" width="5" height="15" fill="#ffb6c1" />
                <rect x="110" y="152" width="5" height="15" fill="#ffb6c1" />
                {/* Heart emblem */}
                <path d="M 100 188 C 100 188 96 182 92 184 C 88 186 88 192 92 195 L 100 202 L 108 195 C 112 192 112 186 108 184 C 104 182 100 188 100 188 Z" fill="#fff" />
              </g>
            ) : (
              <FemaleTops top={top} />
            )
          ) : (
            top === 'none' ? (
              /* Default white t-shirt matching Reference 2 */
              <g fill="#fff">
                <path d="M 76 150 Q 64 165 64 185 L 82 185 Z" />
                <path d="M 124 150 Q 136 165 136 185 L 118 185 Z" />
                <rect x="76" y="150" width="48" height="45" />
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
              <path d="M 78 152 Q 68 180 68 210 Q 75 210 78 210 Q 76 180 82 152 Z" />
              <circle cx="71" cy="214" r="7" />
              {/* Right Arm */}
              <path d="M 122 152 Q 132 180 132 210 Q 125 210 122 210 Q 124 180 118 152 Z" />
              <circle cx="129" cy="214" r="7" />
            </>
          ) : (
            /* Robust arms angled slightly outwards (Reference 2 A-stance) */
            <>
              {/* Left Arm */}
              <path d="M 76 150 L 52 195 L 62 201 L 82 162 Z" />
              <circle cx="57" cy="198" r="7.5" />
              {/* Right Arm */}
              <path d="M 124 150 L 148 195 L 138 201 L 118 162 Z" />
              <circle cx="143" cy="198" r="7.5" />
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
          {/* Ears (Larger, prominent circular ears on sides) */}
          {isFemale ? (
            <>
              <ellipse cx="48" cy="115" rx="13" ry="15" fill={skinTone} />
              <path d="M 44 110 Q 48 112 45 118" fill="none" strokeWidth="1.5" />
              <ellipse cx="152" cy="115" rx="13" ry="15" fill={skinTone} />
              <path d="M 156 110 Q 152 112 155 118" fill="none" strokeWidth="1.5" />
            </>
          ) : (
            <>
              /* Big round ears for male stance (Reference 2) */
              <ellipse cx="44" cy="115" rx="16" ry="16" fill={skinTone} />
              <path d="M 38 110 C 44 110 44 120 38 120" fill="none" strokeWidth="2" />
              <ellipse cx="156" cy="115" rx="16" ry="16" fill={skinTone} />
              <path d="M 162 110 C 156 110 156 120 162 120" fill="none" strokeWidth="2" />
            </>
          )}
          
          {/* Head Base */}
          <ellipse cx="100" cy="100" rx="55" ry="50" fill={skinTone} />
          
          {/* Face Elements */}
          <g id="face">
            {/* Curved eyebrows */}
            <path d="M 75 88 Q 83 83 91 87" fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M 125 88 Q 117 83 109 87" fill="none" strokeWidth="3" strokeLinecap="round" />
            
            {/* Eyes with sparkle reflection */}
            <circle cx="85" cy="102" r="5.5" fill="#1a202c" stroke="none" />
            <circle cx="115" cy="102" r="5.5" fill="#1a202c" stroke="none" />
            <circle cx="87" cy="100" r="1.8" fill="#fff" stroke="none" />
            <circle cx="117" cy="100" r="1.8" fill="#fff" stroke="none" />
            
            {/* Female eyelashes */}
            {isFemale && (
              <g stroke="#1a202c" strokeWidth="1.5" strokeLinecap="round">
                <line x1="80" y1="97" x2="78" y2="94" />
                <line x1="85" y1="96" x2="84" y2="93" />
                <line x1="90" y1="97" x2="91" y2="94" />
                <line x1="110" y1="97" x2="109" y2="94" />
                <line x1="115" y1="96" x2="116" y2="93" />
                <line x1="120" y1="97" x2="122" y2="94" />
              </g>
            )}

            {/* Blushing Cheeks (Rosy circles exactly like references) */}
            <ellipse cx="68" cy="114" rx="14" ry="10" fill="#ff99a8" stroke="none" opacity="0.8" />
            <ellipse cx="132" cy="114" rx="14" ry="10" fill="#ff99a8" stroke="none" opacity="0.8" />
            
            {/* Nose */}
            <path d="M 98 111 Q 100 109 102 111" fill="none" stroke="#7a5c4f" strokeWidth="1.5" />
            
            {/* Big happy smile */}
            <path d="M 87 121 Q 100 135 113 121" fill="none" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* ==================== HAIR FRONT / STYLES ==================== */}
          <g id="hair-front" fill={hairColor}>
            
            {/* --- Female Hair Styles --- */}
            {isFemale && (
              <>
                {hair === 'long_straight' && (
                  /* Parted in the middle with symmetric swoops down (Reference 1) */
                  <g>
                    <path d="M 100 70 Q 75 72 60 90 Q 50 110 46 130 C 54 120 62 105 100 70 Z" />
                    <path d="M 100 70 Q 125 72 140 90 Q 150 110 154 130 C 146 120 138 105 100 70 Z" />
                    {/* Top skull base cap */}
                    <path d="M 45 100 C 45 48 155 48 155 100 Q 155 70 100 70 Q 45 70 45 100 Z" />
                  </g>
                )}
                {hair === 'bob_cut' && (
                  /* Chin-length cute framing bob */
                  <path d="M 45 95 C 45 48 155 48 155 95 C 158 120 158 140 150 150 C 142 120 135 110 100 70 C 65 110 58 120 50 150 C 42 140 42 120 45 95 Z" />
                )}
                {hair === 'curly_locks' && (
                  /* Wavy front pieces */
                  <path d="M 45 95 C 45 48 155 48 155 95 C 158 115 152 135 146 145 C 142 120 135 110 100 72 C 65 110 58 120 54 145 C 48 135 42 115 45 95 Z" />
                )}
                {hair === 'side_part' && (
                  <path d="M 45 95 C 45 48 155 48 155 95 Q 130 65 100 68 C 70 70 55 85 45 95 Z" />
                )}
                {hair === 'ponytail' && (
                  /* Clean swept front bangs */
                  <path d="M 45 95 C 45 48 155 48 155 95 Q 100 70 45 95 Z" />
                )}
              </>
            )}

            {/* --- Male Hair Styles --- */}
            {!isFemale && (
              <>
                {hair === 'buzz_cut' && (
                  <path d="M 45 100 C 45 45 155 45 155 100 Q 155 78 100 78 Q 45 78 45 100 Z" />
                )}
                {hair === 'spiky' && (
                  <path d="M 45 95 L 53 72 L 65 82 L 80 62 L 95 78 L 110 58 L 125 78 L 140 65 L 150 82 L 155 95 Z" />
                )}
                {hair === 'undercut' && (
                  /* Side swept thick volume */
                  <path d="M 48 85 Q 75 42 115 48 Q 155 58 150 88 Q 120 75 100 75 Z" />
                )}
                {hair === 'curly_afro' && (
                  /* Curly clouds style */
                  <path d="M 44 92 C 32 72 52 42 72 52 C 82 32 112 32 122 47 C 142 32 167 62 157 87 C 162 102 142 112 135 97 Z" />
                )}
                {hair === 'combed_over' && (
                  <path d="M 45 92 C 45 52 120 42 152 77 C 130 72 80 74 45 92 Z" />
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
