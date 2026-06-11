import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pen, LogOut, Bell, Shield, Lock } from 'lucide-react';
import PixelAvatar from './PixelAvatar';
import AvatarCustomizer from './AvatarCustomizer';
import { useAvatar } from '../../hooks/useAvatar';

// ─── SVG Icons ────────────────────────────────────────────────────────────
export const BoltIcon = ({ size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={fill} />
  </svg>
);

export const BookIcon = ({ size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill={fill !== 'none' ? fill : 'currentColor'} fillOpacity={0.2} />
  </svg>
);

export const FireIcon = ({ size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill={fill !== 'none' ? fill : 'currentColor'} />
  </svg>
);

export const TrophyIcon = ({ size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" fill={fill !== 'none' ? fill : 'currentColor'} fillOpacity={0.2} />
  </svg>
);

export const CoinIcon = ({ size = 20, color = 'currentColor', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <circle cx="12" cy="12" r="8" fill={fill !== 'none' ? fill : 'currentColor'} fillOpacity={0.2} />
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const ClockIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ─── Rank system ──────────────────────────────────────────────────────────
export const RANKS = [
  { min: 0,    label: 'Seedling',    color: '#86efac', type: 'seedling' },
  { min: 100,  label: 'Coin Rookie', color: '#FFCD75', type: 'coin' },
  { min: 300,  label: 'Money Spark', color: '#00D4C8', type: 'spark' },
  { min: 600,  label: 'Budget Hero', color: '#F97316', type: 'hero' },
  { min: 1000, label: 'Cash Wizard', color: '#c4b5fd', type: 'wizard' },
  { min: 2000, label: 'Legend',      color: '#a78bfa', type: 'legend' },
];

const getRank = xp => [...RANKS].reverse().find(r => xp >= r.min) || RANKS[0];

const RankIcon = ({ type, size = 14, color = 'currentColor' }) => {
  switch (type) {
    case 'seedling':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} width={size} height={size} style={{ display: 'inline-block' }}>
          <path d="M2 22c1.25-6.7 5.75-11 12-11h8v2c0 6.25-4.3 10.75-11 12" fill={color} fillOpacity={0.2} />
          <path d="M12 2A15.3 15.3 0 0 1 12 11" />
        </svg>
      );
    case 'coin':
      return <CoinIcon size={size} color={color} fill="currentColor" />;
    case 'spark':
      return <BoltIcon size={size} color={color} fill="currentColor" />;
    case 'hero':
      return <FireIcon size={size} color={color} fill="currentColor" />;
    case 'wizard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={color} />
        </svg>
      );
    case 'legend':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size} style={{ display: 'inline-block' }}>
          <polygon points="6 3 18 3 22 9 12 21 2 9 6 3" fill={color} fillOpacity={0.2} />
        </svg>
      );
    default:
      return null;
  }
};

// ─── Cursor blink ─────────────────────────────────────────────────────────
const Cursor = () => {
  const [v, setV] = useState(true);
  useEffect(() => { const t = setInterval(() => setV(x => !x), 500); return () => clearInterval(t); }, []);
  return <span style={{ opacity: v ? 1 : 0 }}>_</span>;
};

// ─── Count-up ─────────────────────────────────────────────────────────────
const CountUp = ({ to, duration = 1000 }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let s = 0;
    const step = to / (duration / 16);
    const t = setInterval(() => {
      s = Math.min(s + step, to);
      setVal(Math.floor(s));
      if (s >= to) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [to]);
  return <>{val.toLocaleString()}</>;
};

// ─── Circular weekly goal ring ────────────────────────────────────────────
const GoalRing = ({ current = 0, target = 5, size = 80 }) => {
  const r = (size / 2) - 7;
  const circ = 2 * Math.PI * r;
  const dash = (current / target) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7"/>
      <motion.circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke="#B8F400" strokeWidth="7" strokeLinecap="round"
        initial={{ strokeDasharray: `0 ${circ}` }}
        animate={{ strokeDasharray: `${dash} ${circ}` }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
      />
    </svg>
  );
};

// ─── Confetti ─────────────────────────────────────────────────────────────
const Confetti = ({ active }) => {
  if (!active) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 99 }}>
      {[...Array(20)].map((_, i) => (
        <motion.div key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: (Math.random()-0.5)*260, y: -(Math.random()*180+40), opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: i*0.025 }}
          style={{ position:'absolute', left:'50%', top:'30%', width:7, height:7, background:['#F97316','#B8F400','#00D4C8','#FFCD75','#c4b5fd'][i%5], borderRadius: i%2===0?'50%':2 }}
        />
      ))}
    </div>
  );
};

// ─── BadgeIcon component ──────────────────────────────────────────────────
export const BadgeIcon = ({ name, size = 30, color = 'currentColor' }) => {
  switch (name) {
    case 'welcome':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill={`${color}20`} />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case 'consistency':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <rect x="3" y="4" width="18" height="18" rx="2" fill={`${color}20`} />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'wealth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <circle cx="12" cy="12" r="8" fill={`${color}20`} />
          <path d="M12 8v8M9 10h5.5a1.5 1.5 0 0 1 0 3H12" />
        </svg>
      );
    case 'growth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'planner':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={`${color}20`} />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <circle cx="12" cy="12" r="10" fill={`${color}20`} />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case 'legendary':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <polygon points="6 3 18 3 22 9 12 21 2 9" fill={`${color}20`} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={`${color}20`} />
        </svg>
      );
    default:
      return null;
  }
};

// ─── SkillIcon component ──────────────────────────────────────────────────
export const SkillIcon = ({ name, size = 24, color = 'currentColor' }) => {
  switch (name) {
    case 'budgeting':
      return <CoinIcon size={size} color={color} fill="currentColor" />;
    case 'investing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'banking':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <path d="M3 22h18M5 10v10M19 10v10M12 10v10M3 10h18M12 2L3 7h18l-9-5z" fill={`${color}20`} />
        </svg>
      );
    case 'credit':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <rect x="2" y="5" width="20" height="14" rx="2" fill={`${color}20`} />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case 'estate':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} width={size} height={size}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={`${color}20`} />
        </svg>
      );
    default:
      return null;
  }
};

// ─── Badge component ──────────────────────────────────────────────────────
const Badge = ({ name, earned, rarity = 'common', color = '#94B0C2' }) => {
  const glow = { common:'none', uncommon:'0 0 10px rgba(0,212,200,0.3)', rare:'0 0 14px rgba(139,92,246,0.4)', legendary:'0 0 20px rgba(255,205,117,0.5)' };
  const border = { common:'rgba(255,255,255,0.07)', uncommon:'rgba(0,212,200,0.5)', rare:'rgba(139,92,246,0.6)', legendary:'rgba(255,205,117,0.8)' };
  return (
    <motion.div
      whileHover={earned ? { scale: 1.14, y: -5 } : {}}
      className="flex items-center justify-center rounded-xl"
      title={name.toUpperCase()}
      style={{
        width: 60, height: 60,
        background: earned ? 'rgba(18,10,45,0.85)' : 'rgba(10,4,28,0.4)',
        border: `2px solid ${earned ? border[rarity] : 'rgba(255,255,255,0.06)'}`,
        boxShadow: earned ? glow[rarity] : 'none',
        opacity: earned ? 1 : 0.35,
        color: earned ? color : '#566C86',
      }}
    >
      {earned ? <BadgeIcon name={name} color={color} size={32} /> : <Lock size={20} />}
    </motion.div>
  );
};

// ─── Activity Heatmap (GitHub-style) ──────────────────────────────────────
const ActivityHeatmap = ({ data }) => {
  const weeks = 10;
  // New user = all cells empty
  const emptyData = Array.from({ length: weeks * 7 }, () => 0);
  const cells = data || emptyData;

  const intensityColors = [
    'rgba(255,255,255,0.04)',
    'rgba(0,212,200,0.25)',
    'rgba(0,212,200,0.55)',
    '#00D4C8',
  ];

  return (
    <div>
      <div className="flex gap-1">
        {Array.from({ length: weeks }, (_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: 7 }, (_, d) => {
              const intensity = cells[w * 7 + d] || 0;
              return (
                <motion.div
                  key={d}
                  whileHover={{ scale: 1.4 }}
                  style={{
                    width: 10, height: 10,
                    borderRadius: 2,
                    background: intensityColors[intensity],
                    cursor: 'default',
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Seedling Icon (inline SVG for rank badge) ────────────────────────────
const SeedlingIcon = ({ size = 16, color = '#86efac' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} width={size} height={size} style={{ display: 'inline-block' }}>
    <path d="M2 22c1.25-6.7 5.75-11 12-11h8v2c0 6.25-4.3 10.75-11 12" fill={color} fillOpacity={0.25} />
    <path d="M12 2A15.3 15.3 0 0 1 12 11" />
  </svg>
);

// ─── Main ProfileHeader ───────────────────────────────────────────────────
const ProfileHeader = ({
  username  = 'Player',
  level     = 1,
  xp        = 0,
  maxXp     = 100,
  followers = 0,
  following = 0,
}) => {
  const [avatarConfig, setAvatarConfig] = useAvatar();
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const rank = getRank(xp);

  // All badges locked for new user
  const BADGES = [
    { name: 'welcome',     earned: false, rarity: 'uncommon',  color: '#00D4C8', label: 'Welcome' },
    { name: 'consistency', earned: false, rarity: 'rare',      color: '#8B5CF6', label: 'Consistency' },
    { name: 'wealth',      earned: false, rarity: 'common',    color: '#FFCD75', label: 'Wealth' },
    { name: 'growth',      earned: false, rarity: 'uncommon',  color: '#00D4C8', label: 'Growth' },
  ];

  const cardStyle = {
    background: 'rgba(18,10,45,0.95)',
    border: '2px solid #8B5CF6',
    backdropFilter: 'blur(10px)',
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto flex flex-col gap-7">

        {/* ────────────────────── 1. PROFILE CARD ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            border: '2px solid #8B5CF6',
            background: 'rgba(18,10,45,0.95)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 32px rgba(139,92,246,0.3)',
          }}
        >
          <Confetti active={showConfetti} />

          {/* Banner */}
          <div style={{
            height: 110,
            background: 'linear-gradient(135deg, #1a0540 0%, #2d1060 50%, #0d2040 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Pixelated star particles */}
            {[...Array(22)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: i % 5 === 0 ? 3 : 2,
                height: i % 5 === 0 ? 3 : 2,
                background: '#c4b5fd',
                opacity: 0.2 + (i % 4) * 0.12,
                top: `${(i * 31 + 7) % 85}%`,
                left: `${(i * 47 + 11) % 96}%`,
              }} />
            ))}
            {/* XP strip at banner bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,0.3)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(xp / maxXp) * 100}%` }}
                transition={{ duration: 1.3 }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #8B5CF6, #c4b5fd)' }}
              />
            </div>
          </div>

          {/* Avatar + info */}
          <div style={{ padding: '0 24px 24px' }}>
            {/* Avatar overlapping banner */}
            <div className="flex items-end justify-between" style={{ marginTop: -42, marginBottom: 16 }}>
              <div className="relative cursor-pointer" onClick={() => setIsEditingAvatar(true)}>
                {/* Goal ring behind avatar */}
                <div style={{ position: 'absolute', inset: -8, zIndex: 0 }}>
                  <GoalRing current={0} target={5} size={100} />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: 80, height: 80,
                    border: '3px solid #8B5CF6',
                    background: '#12123A',
                    borderRadius: 16,
                    boxShadow: '0 0 20px rgba(139,92,246,0.5)',
                    overflow: 'hidden',
                    imageRendering: 'pixelated',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <PixelAvatar config={avatarConfig} size={74} />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(0,0,0,0.55)' }}
                  >
                    <Pen size={16} color="#c4b5fd" />
                  </div>
                </motion.div>
              </div>

              {/* Edit button */}
              <button
                onClick={() => setIsEditingAvatar(true)}
                className="font-pixel pixel-btn"
                style={{
                  fontSize: 10,
                  padding: '8px 14px',
                  borderRadius: 12,
                  border: '2px solid #701A75',
                  color: '#FFF',
                  background: '#D946EF',
                  boxShadow: '4px 4px 0 #701A75',
                  cursor: 'pointer',
                  marginBottom: 4,
                }}
              >
                {'> EDIT '}<Cursor />
              </button>
            </div>

            {/* Username */}
            <h1 className="text-2xl font-black text-white" style={{ marginBottom: 8 }}>{username}</h1>

            {/* Rank badge */}
            <div
              className="font-pixel inline-flex items-center gap-1.5 rounded-lg"
              style={{
                fontSize: 9,
                color: rank.color,
                background: `${rank.color}15`,
                border: `1px solid ${rank.color}35`,
                padding: '4px 10px',
                marginBottom: 14,
              }}
            >
              <SeedlingIcon size={14} color={rank.color} />
              {rank.label}
            </div>

            {/* Followers / Following */}
            <div className="flex items-center gap-4">
              <span className="text-sm">
                <span className="font-black text-white">{followers}</span>{' '}
                <span style={{ color: '#566C86' }}>followers</span>
              </span>
              <span className="text-sm">
                <span className="font-black text-white">{following}</span>{' '}
                <span style={{ color: '#566C86' }}>following</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ────────────────────── 2. STATISTICS GRID ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-white font-black text-lg px-1">Statistics</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                Icon: <FireIcon size={24} color="#F97316" fill="currentColor" />,
                label: 'Day Streak',
                value: '0',
                color: '#F97316',
                bg: 'rgba(249,115,22,0.15)',
                border: '#F97316',
              },
              {
                Icon: <BoltIcon size={24} color="#FFCD75" fill="currentColor" />,
                label: 'Total XP',
                value: <CountUp to={xp} />,
                color: '#FFCD75',
                bg: 'rgba(255,205,117,0.15)',
                border: '#FFCD75',
              },
              {
                Icon: <TrophyIcon size={24} color="#00D4C8" fill="currentColor" />,
                label: 'League',
                value: '--',
                color: '#00D4C8',
                bg: 'rgba(0,212,200,0.15)',
                border: '#00D4C8',
              },
              {
                Icon: <BookIcon size={24} color="#c4b5fd" fill="currentColor" />,
                label: 'Quests Done',
                value: '0',
                color: '#c4b5fd',
                bg: 'rgba(139,92,246,0.15)',
                border: '#8B5CF6',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl flex items-center gap-4"
                style={{
                  background: s.bg,
                  border: `2px solid ${s.border}`,
                  boxShadow: `2px 2px 0 ${s.border}40`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center justify-center shrink-0">{s.Icon}</div>
                <div>
                  <div className="font-black text-xl" style={{ color: s.color, fontFamily: 'Inter, sans-serif' }}>
                    {s.value}
                  </div>
                  <div className="font-pixel" style={{ fontSize: 8, color: '#7B8DB0' }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ────────────────────── 3. ACHIEVEMENTS ROW ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center justify-between px-1">
            <h3 className="text-white font-black text-lg">Achievements</h3>
            <span className="text-sm font-bold text-violet-400 cursor-pointer hover:underline">View all</span>
          </div>
          <div
            className="p-5 rounded-2xl"
            style={{
              ...cardStyle,
              border: '2px solid #FFCD75',
              boxShadow: '4px 4px 0 rgba(255,205,117,0.3)',
            }}
          >
            <div className="flex items-center justify-between gap-3">
              {BADGES.map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Badge {...b} />
                  <span className="font-pixel text-center" style={{ fontSize: 8, color: '#566C86', maxWidth: 64 }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ────────────────────── 4. ACTIVITY HEATMAP ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center justify-between px-1">
            <h3 className="text-white font-black text-lg">Activity</h3>
            {/* Color legend */}
            <div className="flex items-center gap-1.5">
              <span className="font-pixel" style={{ fontSize: 7, color: '#566C86', marginRight: 4 }}>Less</span>
              {[
                'rgba(255,255,255,0.04)',
                'rgba(0,212,200,0.25)',
                'rgba(0,212,200,0.55)',
                '#00D4C8',
              ].map((c, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
              ))}
              <span className="font-pixel" style={{ fontSize: 7, color: '#566C86', marginLeft: 4 }}>More</span>
            </div>
          </div>
          <div className="p-5 rounded-2xl" style={{ ...cardStyle, border: '2px solid #00D4C8', boxShadow: '4px 4px 0 rgba(0,212,200,0.3)' }}>
            <ActivityHeatmap data={null} />
          </div>
        </motion.div>

        {/* ────────────────────── 5. FRIENDS SECTION ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center justify-between px-1">
            <h3 className="text-white font-black text-lg">Friends</h3>
            <span className="text-sm font-bold text-violet-400 cursor-pointer hover:underline">Find</span>
          </div>
          <div className="p-6 rounded-2xl" style={{ ...cardStyle, border: '2px solid #8B5CF6', boxShadow: '4px 4px 0 rgba(139,92,246,0.3)' }}>
            {/* Empty state */}
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                border: '2px dashed rgba(139,92,246,0.25)',
                padding: '32px 16px',
              }}
            >
              <div className="flex flex-col items-center gap-3">
                {/* People icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#566C86" strokeWidth={1.5} width={32} height={32}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <p className="font-pixel text-center" style={{ fontSize: 9, color: '#566C86' }}>
                  Add friends to compete
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Avatar customizer modal */}
      {isEditingAvatar && (
        <AvatarCustomizer
          initialConfig={avatarConfig}
          onSave={c => { setAvatarConfig(c); setIsEditingAvatar(false); }}
          onClose={() => setIsEditingAvatar(false)}
        />
      )}
    </>
  );
};

export default ProfileHeader;
