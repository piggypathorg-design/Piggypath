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
  const hairColor = '#3b2f2f';
  const hairHighlight = '#5a4040';

  /* ----------------------------------------------------------------
     FEMALE BACK HAIR — rendered first (behind everything)
  ---------------------------------------------------------------- */
  const FemaleBackHair = () => {
    if (!isFemale) return null;

    if (hair === 'long_straight') {
      return (
        <g fill={hairColor} stroke="none">
          {/* Left curtain — wider at top, tapers slightly at bottom */}
          <path d="M 53 72 C 44 90 36 130 38 210 C 44 212 50 205 52 195 C 50 155 54 120 66 104 C 72 96 68 82 53 72 Z" />
          {/* Right curtain */}
          <path d="M 147 72 C 156 90 164 130 162 210 C 156 212 150 205 148 195 C 150 155 146 120 134 104 C 128 96 132 82 147 72 Z" />
          {/* Subtle highlight strands on left side */}
          <path d="M 46 100 C 42 140 40 175 42 210 C 44 210 46 205 47 195 C 46 160 48 128 56 108 Z" fill={hairHighlight} opacity="0.4" />
          {/* Subtle highlight strands on right side */}
          <path d="M 154 100 C 158 140 160 175 158 210 C 156 210 154 205 153 195 C 154 160 152 128 144 108 Z" fill={hairHighlight} opacity="0.4" />
        </g>
      );
    }
    if (hair === 'bob_cut') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 53 72 C 44 88 40 115 44 148 C 50 150 54 144 56 138 C 54 118 56 100 66 88 Z" />
          <path d="M 147 72 C 156 88 160 115 156 148 C 150 150 146 144 144 138 C 146 118 144 100 134 88 Z" />
        </g>
      );
    }
    if (hair === 'curly_locks') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 52 72 C 38 95 34 140 40 210 C 48 212 52 202 54 188 C 50 155 54 125 66 104 Z" />
          <path d="M 148 72 C 162 95 166 140 160 210 C 152 212 148 202 146 188 C 150 155 146 125 134 104 Z" />
        </g>
      );
    }
    if (hair === 'ponytail') {
      return (
        <g fill={hairColor} stroke="none">
          {/* Ponytail bundle going to the right-back */}
          <path d="M 130 90 C 148 88 170 100 176 130 C 182 155 172 178 160 180 C 150 168 148 148 140 132 C 136 118 132 105 130 90 Z" />
          <path d="M 135 92 C 150 90 168 102 172 128 C 168 125 156 118 144 128 Z" fill={hairHighlight} opacity="0.4" />
        </g>
      );
    }
    if (hair === 'side_part') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 50 72 C 40 90 36 130 38 210 C 44 212 50 205 52 192 C 50 155 52 118 64 100 Z" />
          <path d="M 150 72 C 160 90 164 130 162 210 C 156 212 150 205 148 192 C 150 155 148 118 136 100 Z" />
        </g>
      );
    }
    return null;
  };

  /* ----------------------------------------------------------------
     FEMALE FRONT HAIR — rendered on top of head/face
  ---------------------------------------------------------------- */
  const FemaleFrontHair = () => {
    if (!isFemale) return null;

    if (hair === 'long_straight') {
      return (
        <g stroke="none">
          {/* Full crown cap — covers entire top of head */}
          <path
            fill={hairColor}
            d="
              M 100 50
              C 80 50 63 57 55 68
              C 48 78 48 92 53 100
              C 58 108 64 110 66 106
              C 72 98 80 90 92 86
              C 96 85 98 84 100 84
              C 102 84 104 85 108 86
              C 120 90 128 98 134 106
              C 136 110 142 108 147 100
              C 152 92 152 78 145 68
              C 137 57 120 50 100 50 Z
            "
          />
          {/* Left side strand that frames the face — hangs forward */}
          <path
            fill={hairColor}
            d="M 55 68 C 48 80 46 96 48 112 C 52 116 56 112 58 106 C 58 96 58 84 63 75 Z"
          />
          {/* Right side strand */}
          <path
            fill={hairColor}
            d="M 145 68 C 152 80 154 96 152 112 C 148 116 144 112 142 106 C 142 96 142 84 137 75 Z"
          />
          {/* Center parting line */}
          <line x1="100" y1="50" x2="100" y2="84" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
          {/* Subtle sheen/highlight on crown */}
          <path
            fill={hairHighlight}
            opacity="0.35"
            d="M 100 50 C 90 51 78 56 72 64 C 82 60 92 57 100 57 C 108 57 118 60 128 64 C 122 56 110 51 100 50 Z"
          />
        </g>
      );
    }

    if (hair === 'bob_cut') {
      return (
        <g stroke="none">
          <path
            fill={hairColor}
            d="M 100 52 C 76 52 58 62 53 76 C 48 88 50 104 56 112 C 62 118 68 118 72 114 C 76 110 78 106 80 104 C 86 100 92 98 100 98 C 108 98 114 100 120 104 C 122 106 124 110 128 114 C 132 118 138 118 144 112 C 150 104 152 88 147 76 C 142 62 124 52 100 52 Z"
          />
          <line x1="100" y1="52" x2="100" y2="86" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    }

    if (hair === 'curly_locks') {
      return (
        <g stroke="none">
          {/* Crown */}
          <path
            fill={hairColor}
            d="M 100 50 C 78 50 60 60 54 74 C 48 87 50 105 58 114 C 66 108 68 100 70 94 C 78 86 88 82 100 82 C 112 82 122 86 130 94 C 132 100 134 108 142 114 C 150 105 152 87 146 74 C 140 60 122 50 100 50 Z"
          />
          {/* Wavy curls hanging on sides */}
          <path fill={hairColor} d="M 54 74 C 48 84 46 96 50 108 C 53 116 56 118 58 114 C 55 106 52 96 56 86 Z" />
          <path fill={hairColor} d="M 146 74 C 152 84 154 96 150 108 C 147 116 144 118 142 114 C 145 106 148 96 144 86 Z" />
          {/* Curly bob ends */}
          <path fill={hairColor} d="M 50 108 C 46 118 48 128 54 130 C 60 128 60 120 58 114 Z" />
          <path fill={hairColor} d="M 150 108 C 154 118 152 128 146 130 C 140 128 140 120 142 114 Z" />
          <line x1="100" y1="50" x2="100" y2="82" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    }

    if (hair === 'side_part') {
      return (
        <g stroke="none">
          <path
            fill={hairColor}
            d="M 100 52 C 78 50 60 58 52 72 C 46 82 48 98 54 108 C 60 116 68 116 72 110 C 76 104 80 96 86 90 C 90 87 95 85 100 85 C 108 85 118 90 128 98 C 132 104 136 112 144 114 C 150 106 152 90 148 76 C 142 60 122 52 100 52 Z"
          />
          {/* Heavy left side swoop */}
          <path fill={hairColor} d="M 52 72 C 44 84 42 100 44 116 C 48 120 52 116 54 108 C 52 100 50 88 56 78 Z" />
          {/* Small right side strand */}
          <path fill={hairColor} d="M 148 76 C 154 88 156 102 154 112 C 150 116 146 114 144 108 C 146 100 148 88 148 76 Z" />
        </g>
      );
    }

    if (hair === 'ponytail') {
      return (
        <g stroke="none">
          {/* Crown — swept back */}
          <path
            fill={hairColor}
            d="M 100 52 C 78 52 60 60 54 74 C 48 86 50 100 56 108 C 64 104 72 98 80 94 C 88 90 94 88 100 88 C 106 88 112 90 118 94 C 126 98 132 104 140 110 C 148 100 150 86 146 74 C 140 60 122 52 100 52 Z"
          />
          {/* Side strands */}
          <path fill={hairColor} d="M 54 74 C 48 86 46 100 50 112 C 54 118 58 114 60 108 C 58 98 56 86 60 78 Z" />
          <path fill={hairColor} d="M 146 74 C 152 86 154 100 150 112 C 146 118 142 114 140 108 C 142 98 144 86 140 78 Z" />
        </g>
      );
    }

    return null;
  };

  /* ----------------------------------------------------------------
     MALE FRONT HAIR
  ---------------------------------------------------------------- */
  const MaleFrontHair = () => {
    if (isFemale) return null;

    if (hair === 'buzz_cut') {
      return (
        <path fill={hairColor} stroke="none"
          d="M 54 100 C 54 56 146 56 146 100 Q 146 78 100 78 Q 54 78 54 100 Z" />
      );
    }
    if (hair === 'spiky') {
      return (
        <path fill={hairColor} stroke="none"
          d="M 54 95 L 61 73 L 72 84 L 84 64 L 96 80 L 108 62 L 120 80 L 132 67 L 143 84 L 146 95 C 146 58 54 58 54 95 Z" />
      );
    }
    if (hair === 'undercut') {
      return (
        <path fill={hairColor} stroke="none"
          d="M 56 85 C 64 56 100 52 120 56 C 136 60 146 72 146 88 Q 118 74 100 74 C 84 74 68 78 56 85 Z" />
      );
    }
    if (hair === 'curly_afro') {
      return (
        <path fill={hairColor} stroke="none"
          d="M 52 92 C 40 72 56 44 76 54 C 84 34 116 34 124 50 C 142 36 162 62 152 87 C 156 100 138 110 132 94 C 128 80 118 72 100 72 C 82 72 72 80 68 94 C 62 110 44 100 52 92 Z" />
      );
    }
    if (hair === 'combed_over') {
      return (
        <path fill={hairColor} stroke="none"
          d="M 54 92 C 54 54 120 46 146 78 C 126 72 80 74 54 92 Z" />
      );
    }
    return null;
  };

  return (
    <svg viewBox="0 0 200 300" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">

        {/* ==================== BACK HAIR ==================== */}
        <FemaleBackHair />

        {/* ==================== LEGS ==================== */}
        <g id="legs" fill={skinTone}>
          {isFemale ? (
            <>
              <rect x="78" y="210" width="14" height="46" />
              <rect x="108" y="210" width="14" height="46" />
            </>
          ) : (
            <>
              <path d="M 74 205 L 60 250 L 76 250 L 86 205 Z" />
              <path d="M 126 205 L 140 250 L 124 250 L 114 205 Z" />
            </>
          )}
        </g>

        {/* ==================== SHOES ==================== */}
        <g id="shoes">
          {isFemale ? (
            <>
              <path d="M 66 254 C 66 247 88 247 88 254 L 88 276 C 88 282 66 282 66 276 Z" fill="#111" />
              <path d="M 66 268 C 66 262 88 262 88 268 L 88 276 C 88 282 66 282 66 276 Z" fill="#fff" />
              <line x1="70" y1="268" x2="84" y2="268" stroke="#fff" strokeWidth="2" />
              <path d="M 112 254 C 112 247 134 247 134 254 L 134 276 C 134 282 112 282 112 276 Z" fill="#111" />
              <path d="M 112 268 C 112 262 134 262 134 268 L 134 276 C 134 282 112 282 112 276 Z" fill="#fff" />
              <line x1="116" y1="268" x2="130" y2="268" stroke="#fff" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M 52 248 C 52 242 80 242 80 248 L 80 270 C 80 276 52 276 52 270 Z" fill="#111" />
              <path d="M 52 262 C 52 256 80 256 80 262 L 80 270 C 80 276 52 276 52 270 Z" fill="#fff" />
              <line x1="56" y1="262" x2="76" y2="262" stroke="#fff" strokeWidth="2" />
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
              <path d="M 68 205 L 132 205 L 138 226 L 62 226 Z" fill="#ffb6c1" />
            ) : (
              <FemaleBottoms bottom={bottom} />
            )
          ) : (
            bottom === 'none' ? (
              <path d="M 68 195 L 132 195 L 136 220 L 64 220 Z" fill="#222" />
            ) : (
              <MaleBottoms bottom={bottom} />
            )
          )}
        </g>

        {/* ==================== TORSO ==================== */}
        <g id="torso" fill={skinTone}>
          {isFemale ? (
            <path d="M 72 152 L 128 152 L 128 210 L 72 210 Z" />
          ) : (
            <path d="M 70 150 L 130 150 L 130 205 L 70 205 Z" />
          )}
        </g>

        {/* ==================== TOPS ==================== */}
        <g id="top">
          {isFemale ? (
            top === 'none' ? (
              <g>
                <path d="M 72 152 Q 62 165 62 185 Q 76 185 76 152 Z" fill="#fff" />
                <path d="M 128 152 Q 138 165 138 185 Q 124 185 124 152 Z" fill="#fff" />
                <rect x="72" y="152" width="56" height="20" fill="#fff" />
                <rect x="80" y="160" width="40" height="46" fill="#ffb6c1" />
                <rect x="80" y="152" width="7" height="15" fill="#ffb6c1" />
                <rect x="113" y="152" width="7" height="15" fill="#ffb6c1" />
                <path d="M 100 188 C 100 188 96 182 92 184 C 88 186 88 192 92 195 L 100 202 L 108 195 C 112 192 112 186 108 184 C 104 182 100 188 100 188 Z" fill="#fff" />
              </g>
            ) : (
              <FemaleTops top={top} />
            )
          ) : (
            top === 'none' ? (
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
            <>
              <path d="M 72 152 Q 60 180 60 210 Q 68 210 72 210 Q 70 180 77 152 Z" />
              <circle cx="64" cy="214" r="7" />
              <path d="M 128 152 Q 140 180 140 210 Q 132 210 128 210 Q 130 180 123 152 Z" />
              <circle cx="136" cy="214" r="7" />
            </>
          ) : (
            <>
              <path d="M 70 150 L 42 195 L 52 201 L 76 162 Z" />
              <circle cx="47" cy="198" r="7.5" />
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
          {/* Ears */}
          {isFemale ? (
            <>
              <ellipse cx="56" cy="115" rx="11" ry="13" fill={skinTone} />
              <ellipse cx="144" cy="115" rx="11" ry="13" fill={skinTone} />
            </>
          ) : (
            <>
              <ellipse cx="54" cy="115" rx="14" ry="14" fill={skinTone} />
              <path d="M 48 110 C 54 110 54 120 48 120" fill="none" strokeWidth="2" />
              <ellipse cx="146" cy="115" rx="14" ry="14" fill={skinTone} />
              <path d="M 152 110 C 146 110 146 120 152 120" fill="none" strokeWidth="2" />
            </>
          )}

          {/* Head Base */}
          <ellipse cx="100" cy="100" rx="47" ry="42" fill={skinTone} />

          {/* ==================== FACE ==================== */}
          <g id="face">
            {isFemale ? (
              <>
                {/* Slanted angry/pouty eyebrows */}
                <path d="M 79 88 L 90 85" fill="none" strokeWidth="3" strokeLinecap="round" />
                <path d="M 121 88 L 110 85" fill="none" strokeWidth="3" strokeLinecap="round" />
                {/* Eyes */}
                <circle cx="86" cy="100" r="5.5" fill="#1a202c" stroke="none" />
                <circle cx="114" cy="100" r="5.5" fill="#1a202c" stroke="none" />
                <circle cx="88" cy="98" r="1.8" fill="#fff" stroke="none" />
                <circle cx="116" cy="98" r="1.8" fill="#fff" stroke="none" />
                {/* Eyelashes */}
                <g stroke="#1a202c" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="82" y1="95" x2="80" y2="92" />
                  <line x1="86" y1="94" x2="85" y2="91" />
                  <line x1="91" y1="95" x2="92" y2="92" />
                  <line x1="110" y1="95" x2="109" y2="92" />
                  <line x1="114" y1="94" x2="115" y2="91" />
                  <line x1="118" y1="95" x2="120" y2="92" />
                </g>
                {/* Rosy cheeks */}
                <ellipse cx="72" cy="113" rx="13" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
                <ellipse cx="128" cy="113" rx="13" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
                {/* Nose */}
                <path d="M 98 109 Q 100 107 102 109" fill="none" stroke="#7a5c4f" strokeWidth="1.5" />
                {/* Pouty mouth */}
                <path d="M 95 121 Q 100 117 105 121" fill="none" strokeWidth="2.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M 78 88 Q 85 83 91 87" fill="none" strokeWidth="3" strokeLinecap="round" />
                <path d="M 122 88 Q 115 83 109 87" fill="none" strokeWidth="3" strokeLinecap="round" />
                <circle cx="86" cy="100" r="5.5" fill="#1a202c" stroke="none" />
                <circle cx="114" cy="100" r="5.5" fill="#1a202c" stroke="none" />
                <circle cx="88" cy="98" r="1.8" fill="#fff" stroke="none" />
                <circle cx="116" cy="98" r="1.8" fill="#fff" stroke="none" />
                <ellipse cx="72" cy="113" rx="13" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
                <ellipse cx="128" cy="113" rx="13" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
                <path d="M 98 109 Q 100 107 102 109" fill="none" stroke="#7a5c4f" strokeWidth="1.5" />
                <path d="M 89 120 Q 100 132 111 120" fill="none" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </g>

          {/* ==================== FRONT HAIR (over face) ==================== */}
          <FemaleFrontHair />
          <MaleFrontHair />
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
