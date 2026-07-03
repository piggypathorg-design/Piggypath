import React from 'react';
import MaleTops from './clothes/MaleTops';
import FemaleTops from './clothes/FemaleTops';
import MaleBottoms from './clothes/MaleBottoms';
import FemaleBottoms from './clothes/FemaleBottoms';
import MaleAccessories from './clothes/MaleAccessories';
import FemaleAccessories from './clothes/FemaleAccessories';

const CustomAvatar = ({ gender = 'male', skinTone = '#ffe5d0', top = 'none', bottom = 'none', accessory = 'none', className = '' }) => {
  return (
    <svg viewBox="0 0 200 300" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        
        {/* BACK HAIR (Female) */}
        <g id="hair-back" fill="#3b2f2f">
          {gender === 'female' && (
            <path d="M 50 100 C 30 180 30 220 50 240 C 60 220 55 150 70 120 C 130 120 145 150 150 240 C 170 220 170 180 150 100 Z" />
          )}
        </g>

        {/* LEGS */}
        <g id="legs" fill={skinTone}>
          <rect x="80" y="210" width="14" height="40" />
          <rect x="106" y="210" width="14" height="40" />
        </g>

        {/* SHOES (Big chunky sneakers based on reference) */}
        <g id="shoes">
          {/* Left Shoe */}
          <path d="M 68 250 C 68 240 98 240 98 250 L 98 275 C 98 285 68 285 68 275 Z" fill="#111" />
          <path d="M 68 268 C 68 260 98 260 98 268 L 98 275 C 98 285 68 285 68 275 Z" fill="#fff" />
          <path d="M 72 268 L 94 268" stroke="#fff" strokeWidth="2" />
          {/* Right Shoe */}
          <path d="M 102 250 C 102 240 132 240 132 250 L 132 275 C 132 285 102 285 102 275 Z" fill="#111" />
          <path d="M 102 268 C 102 260 132 260 132 268 L 132 275 C 132 285 102 285 102 275 Z" fill="#fff" />
          <path d="M 106 268 L 128 268" stroke="#fff" strokeWidth="2" />
        </g>

        {/* BOTTOMS */}
        <g id="bottom">
          {gender === 'male' ? <MaleBottoms bottom={bottom} /> : <FemaleBottoms bottom={bottom} />}
        </g>

        {/* TORSO */}
        <g id="torso" fill={skinTone}>
          <path d="M 75 155 L 125 155 L 125 210 L 75 210 Z" />
        </g>

        {/* TOPS */}
        <g id="top">
          {gender === 'male' ? <MaleTops top={top} /> : <FemaleTops top={top} />}
        </g>

        {/* ARMS & HANDS */}
        <g id="arms" fill={skinTone}>
          {/* Left Arm */}
          <path d="M 75 155 L 55 210 L 67 210 L 82 165 Z" />
          <path d="M 51 210 C 45 215 45 225 55 228 C 65 225 65 215 67 210 Z" />
          {/* Right Arm */}
          <path d="M 125 155 L 145 210 L 133 210 L 118 165 Z" />
          <path d="M 149 210 C 155 215 155 225 145 228 C 135 225 135 215 133 210 Z" />
        </g>

        {/* NECK */}
        <rect x="93" y="145" width="14" height="15" fill={skinTone} />

        {/* HEAD */}
        <g id="head-group">
          {/* Ears */}
          <ellipse cx="50" cy="115" rx="14" ry="18" fill={skinTone} />
          <path d="M 45 110 C 50 110 50 120 45 120" fill="none" strokeWidth="2" />
          <ellipse cx="150" cy="115" rx="14" ry="18" fill={skinTone} />
          <path d="M 155 110 C 150 110 150 120 155 120" fill="none" strokeWidth="2" />
          
          {/* Head Base */}
          <ellipse cx="100" cy="100" rx="55" ry="50" fill={skinTone} />
          
          {/* Face Elements */}
          <g id="face">
            {/* Happy raised eyebrows */}
            <path d="M 75 88 Q 83 82 92 86" fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M 125 88 Q 117 82 108 86" fill="none" strokeWidth="3" strokeLinecap="round" />
            {/* Eyes with sparkle reflection */}
            <circle cx="85" cy="102" r="5.5" fill="#1a202c" stroke="none" />
            <circle cx="115" cy="102" r="5.5" fill="#1a202c" stroke="none" />
            <circle cx="87" cy="100" r="1.8" fill="#fff" stroke="none" />
            <circle cx="117" cy="100" r="1.8" fill="#fff" stroke="none" />
            {/* Female eyelashes */}
            {gender === 'female' && (
              <g stroke="#1a202c" strokeWidth="1.5" strokeLinecap="round">
                <line x1="80" y1="97" x2="78" y2="94" />
                <line x1="85" y1="96" x2="84" y2="93" />
                <line x1="90" y1="97" x2="91" y2="94" />
                <line x1="110" y1="97" x2="109" y2="94" />
                <line x1="115" y1="96" x2="116" y2="93" />
                <line x1="120" y1="97" x2="122" y2="94" />
              </g>
            )}
            {/* Blushing Cheeks */}
            <ellipse cx="68" cy="114" rx="15" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
            <ellipse cx="132" cy="114" rx="15" ry="9" fill="#ff99a8" stroke="none" opacity="0.75" />
            {/* Nose */}
            <circle cx="100" cy="110" r="1.2" fill="#7a5c4f" stroke="none" />
            {/* Big happy smile - wider for female */}
            {gender === 'female' ? (
              <path d="M 86 120 Q 100 136 114 120" fill="none" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <path d="M 88 120 Q 100 134 112 120" fill="none" strokeWidth="3" strokeLinecap="round" />
            )}
          </g>

          {/* FRONT HAIR */}
          <g id="hair-front" fill="#3b2f2f">
            {gender === 'female' && (
              <>
                {/* Bangs / fringe — sits only on forehead, does NOT cover eyes or brows */}
                <path d="M 48 78 C 50 50 150 50 152 78 C 140 65 120 68 108 78 C 104 72 96 72 92 78 C 80 68 60 65 48 78 Z" />
                {/* Left side parting */}
                <path d="M 48 78 C 45 90 44 100 46 108" fill="none" stroke="#3b2f2f" strokeWidth="6" strokeLinecap="round" />
                {/* Right side parting */}
                <path d="M 152 78 C 155 90 156 100 154 108" fill="none" stroke="#3b2f2f" strokeWidth="6" strokeLinecap="round" />
              </>
            )}
          </g>
        </g>

        {/* ACCESSORIES */}
        <g id="accessory">
          {gender === 'male' ? <MaleAccessories accessory={accessory} /> : <FemaleAccessories accessory={accessory} />}
        </g>
        
      </g>
    </svg>
  );
};

export default CustomAvatar;
