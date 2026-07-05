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

    // long_straight: Two thick curtain panels that flow from crown all the way down
    if (hair === 'long_straight') {
      return (
        <g stroke="none">
          {/* ── LEFT PANEL ── wide at crown, slightly narrows, falls to hip level */}
          <path fill={hairColor}
            d="M 68 68
               C 60 72 52 82 48 95
               C 42 115 40 150 42 220
               C 48 224 56 220 58 210
               C 56 185 56 155 60 130
               C 63 115 68 105 72 100
               Z"
          />
          {/* inner sheen on left panel */}
          <path fill={hairHighlight} opacity="0.35"
            d="M 68 80 C 64 92 60 115 62 145 C 64 160 66 190 66 210
               C 67 210 68 205 68 200 C 68 175 68 145 70 118
               C 70 105 71 95 72 88 Z"
          />
          {/* ── RIGHT PANEL ── mirror */}
          <path fill={hairColor}
            d="M 132 68
               C 140 72 148 82 152 95
               C 158 115 160 150 158 220
               C 152 224 144 220 142 210
               C 144 185 144 155 140 130
               C 137 115 132 105 128 100
               Z"
          />
          {/* inner sheen on right panel */}
          <path fill={hairHighlight} opacity="0.35"
            d="M 132 80 C 136 92 140 115 138 145 C 136 160 134 190 134 210
               C 133 210 132 205 132 200 C 132 175 132 145 130 118
               C 130 105 129 95 128 88 Z"
          />
        </g>
      );
    }

    if (hair === 'bob_cut') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 66 70 C 56 80 50 100 52 136 C 58 140 64 136 66 128 C 64 110 66 92 72 84 Z" />
          <path d="M 134 70 C 144 80 150 100 148 136 C 142 140 136 136 134 128 C 136 110 134 92 128 84 Z" />
        </g>
      );
    }

    if (hair === 'curly_locks') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 66 68 C 52 90 46 135 50 215 C 56 218 62 210 64 198 C 60 165 62 130 70 108 Z" />
          <path d="M 134 68 C 148 90 154 135 150 215 C 144 218 138 210 136 198 C 140 165 138 130 130 108 Z" />
        </g>
      );
    }

    if (hair === 'ponytail') {
      return (
        <g stroke="none">
          {/* ponytail rope going right and down */}
          <path fill={hairColor}
            d="M 128 84 C 146 80 168 92 174 122
               C 180 150 168 175 156 178
               C 146 165 144 144 138 126
               C 134 112 130 98 128 84 Z"
          />
          <path fill={hairHighlight} opacity="0.4"
            d="M 136 86 C 150 84 166 96 168 120 C 164 116 154 108 142 118 Z"
          />
        </g>
      );
    }

    if (hair === 'side_part') {
      return (
        <g fill={hairColor} stroke="none">
          <path d="M 66 68 C 54 84 48 125 50 215 C 56 218 62 210 64 196 C 62 160 64 120 72 100 Z" />
          <path d="M 134 68 C 146 84 152 125 150 215 C 144 218 138 210 136 196 C 138 160 136 120 128 100 Z" />
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

    // ── long_straight ──────────────────────────────────────────────
    // Crown cap + center part + face-frame wisps + strand shading
    if (hair === 'long_straight') {
      return (
        <g stroke="none">
          {/* Main crown cap — hugs the skull tightly */}
          <path fill={hairColor}
            d="M 100 50
               C 82 50 66 56 58 68
               C 51 78 51 93 56 102
               C 60 109 66 112 70 108
               C 74 102 78 96 84 92
               C 90 88 95 86 100 86
               C 105 86 110 88 116 92
               C 122 96 126 102 130 108
               C 134 112 140 109 144 102
               C 149 93 149 78 142 68
               C 134 56 118 50 100 50 Z"
          />
          {/* Crown sheen — light stripe running front-to-back */}
          <path fill={hairHighlight} opacity="0.4"
            d="M 100 52 C 92 53 82 57 76 64 C 85 60 93 58 100 58
               C 107 58 115 60 124 64 C 118 57 108 53 100 52 Z"
          />
          {/* Center parting — thin visible line from crown down to forehead */}
          <line x1="100" y1="51" x2="100" y2="86"
            stroke="#2a1a1a" strokeWidth="2" strokeLinecap="round" />
          {/* Strand lines on left side of crown for depth */}
          <path fill="none" stroke={hairHighlight} strokeWidth="1" opacity="0.5"
            d="M 88 86 C 82 80 76 72 74 64" />
          <path fill="none" stroke={hairHighlight} strokeWidth="1" opacity="0.4"
            d="M 80 90 C 72 82 67 74 66 66" />
          {/* Strand lines on right side */}
          <path fill="none" stroke={hairHighlight} strokeWidth="1" opacity="0.5"
            d="M 112 86 C 118 80 124 72 126 64" />
          <path fill="none" stroke={hairHighlight} strokeWidth="1" opacity="0.4"
            d="M 120 90 C 128 82 133 74 134 66" />
          {/* Left face-framing wisp — hangs just in front of left ear */}
          <path fill={hairColor}
            d="M 58 68 C 50 80 48 96 50 116
               C 54 120 58 116 60 110
               C 60 98 60 84 65 74 Z"
          />
          {/* Right face-framing wisp */}
          <path fill={hairColor}
            d="M 142 68 C 150 80 152 96 150 116
               C 146 120 142 116 140 110
               C 140 98 140 84 135 74 Z"
          />
        </g>
      );
    }

    // ── bob_cut ─────────────────────────────────────────────────────
    if (hair === 'bob_cut') {
      return (
        <g stroke="none">
          <path fill={hairColor}
            d="M 100 52 C 76 52 58 62 53 76
               C 48 88 50 106 57 114
               C 63 120 70 120 74 116
               C 78 112 80 108 82 106
               C 88 101 94 99 100 99
               C 106 99 112 101 118 106
               C 120 108 122 112 126 116
               C 130 120 137 120 143 114
               C 150 106 152 88 147 76
               C 142 62 124 52 100 52 Z"
          />
          <path fill={hairHighlight} opacity="0.35"
            d="M 100 53 C 88 54 78 58 72 66 C 82 62 92 59 100 59
               C 108 59 118 62 128 66 C 122 58 112 54 100 53 Z"
          />
          <line x1="100" y1="52" x2="100" y2="88" stroke="#2a1a1a" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    }

    // ── curly_locks ─────────────────────────────────────────────────
    if (hair === 'curly_locks') {
      return (
        <g stroke="none">
          <path fill={hairColor}
            d="M 100 50 C 78 50 60 60 54 74
               C 48 88 50 106 58 115
               C 66 109 68 101 70 95
               C 78 87 88 83 100 83
               C 112 83 122 87 130 95
               C 132 101 134 109 142 115
               C 150 106 152 88 146 74
               C 140 60 122 50 100 50 Z"
          />
          {/* Curly side wisps */}
          <path fill={hairColor}
            d="M 54 74 C 47 86 45 100 49 112 C 52 120 57 120 59 115
               C 56 107 53 96 57 86 Z"
          />
          <path fill={hairColor}
            d="M 146 74 C 153 86 155 100 151 112 C 148 120 143 120 141 115
               C 144 107 147 96 143 86 Z"
          />
          {/* Curly ends at bottom of wisps */}
          <path fill={hairColor}
            d="M 49 112 C 45 122 47 133 53 135 C 59 133 59 122 57 115 Z"
          />
          <path fill={hairColor}
            d="M 151 112 C 155 122 153 133 147 135 C 141 133 141 122 143 115 Z"
          />
          <line x1="100" y1="50" x2="100" y2="83" stroke="#2a1a1a" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    }

    // ── side_part ───────────────────────────────────────────────────
    if (hair === 'side_part') {
      return (
        <g stroke="none">
          <path fill={hairColor}
            d="M 100 52 C 78 50 60 58 52 72
               C 46 84 48 100 55 110
               C 61 118 70 118 74 112
               C 78 106 82 98 88 92
               C 92 88 96 86 100 86
               C 108 86 118 91 128 99
               C 132 105 136 114 144 116
               C 150 108 152 92 148 78
               C 142 62 122 52 100 52 Z"
          />
          {/* Heavy left swoop — the dominant side */}
          <path fill={hairColor}
            d="M 52 72 C 44 86 42 104 45 118
               C 49 122 53 118 55 110
               C 53 100 51 88 57 78 Z"
          />
          {/* Smaller right strand */}
          <path fill={hairColor}
            d="M 148 78 C 154 90 156 104 154 114
               C 150 118 146 116 144 110
               C 146 100 148 88 148 78 Z"
          />
        </g>
      );
    }

    // ── ponytail ────────────────────────────────────────────────────
    if (hair === 'ponytail') {
      return (
        <g stroke="none">
          {/* Crown cap swept back */}
          <path fill={hairColor}
            d="M 100 52 C 78 52 60 60 54 74
               C 48 87 50 102 58 110
               C 66 106 74 100 82 96
               C 88 92 94 90 100 90
               C 106 90 112 92 118 96
               C 126 100 134 106 142 112
               C 150 102 152 87 146 74
               C 140 60 122 52 100 52 Z"
          />
          {/* Left thin wisp framing face */}
          <path fill={hairColor}
            d="M 54 74 C 48 87 46 102 50 116
               C 54 122 58 118 60 112
               C 58 100 56 88 60 79 Z"
          />
          {/* Right thin wisp */}
          <path fill={hairColor}
            d="M 146 74 C 152 87 154 102 150 116
               C 146 122 142 118 140 112
               C 142 100 144 88 140 79 Z"
          />
          {/* Elastic band / scrunchie at back of head */}
          <ellipse cx="134" cy="88" rx="7" ry="5" fill="#e8a0bf" stroke="#1a1a1a" strokeWidth="2" />
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
