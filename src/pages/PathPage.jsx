import React from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, Star, Zap, Target, TrendingUp, Wallet, Coins, Shield, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CHAPTERS = [
  {
    id: 1, title: 'Money Basics', accent: '#00e699',
    levels: [
      { id: 1, state: 'completed', label: 'Budgeting 101',  stars: 3, xp: 50  },
      { id: 2, state: 'completed', label: 'Needs vs Wants', stars: 2, xp: 50  },
      { id: 3, state: 'current',   label: 'Saving Goals',   stars: 0, xp: 60  },
      { id: 4, state: 'locked',    label: 'Emergency Fund', stars: 0, xp: 60  },
      { id: 5, state: 'locked',    label: 'Boss Level',     stars: 0, xp: 150, isBoss: true },
    ],
  },
  {
    id: 2, title: 'Investing', accent: '#9966ff',
    levels: [
      { id: 6, state: 'locked', label: 'Stocks 101',      stars: 0, xp: 70  },
      { id: 7, state: 'locked', label: 'Diversification', stars: 0, xp: 80  },
      { id: 8, state: 'locked', label: 'Crypto Myth',     stars: 0, xp: 70  },
      { id: 9, state: 'locked', label: 'Boss Level',      stars: 0, xp: 200, isBoss: true },
    ],
  },
];

// Layout Constants
const PATH_WIDTH = 400;
const NODE_HEIGHT = 150;

// Pre-compute coordinates
const pathNodes = [];
const decorations = [];
let currentY = 30;

CHAPTERS.forEach((chapter) => {
  // Chapter Header
  pathNodes.push({ type: 'header', title: `CHAPTER ${chapter.id}: ${chapter.title}`, y: currentY, accent: chapter.accent });
  currentY += 90;

  chapter.levels.forEach((lvl) => {
    const index = pathNodes.filter(n => n.type === 'node').length;
    // Zig-zag pattern
    const pattern = [200, 80, 200, 320];
    const x = pattern[index % pattern.length];

    pathNodes.push({ type: 'node', ...lvl, index, accent: chapter.accent, x, y: currentY });
    
    // Add a decoration on the opposite side
    if (index % 2 === 0 && !lvl.isBoss) {
      decorations.push({
        id: `dec-${index}`,
        Icon: [TrendingUp, Wallet, Coins, Shield][index % 4],
        x: x > 200 ? x - 140 : x + 140,
        y: currentY - 20,
        color: ['#00e699', '#9966ff', '#e0e0e0', '#111111'][index % 4]
      });
    }

    currentY += NODE_HEIGHT;
  });
  currentY += 50;
});

const TOTAL_HEIGHT = currentY;

// Path generator
const generatePath = (onlyActive = false) => {
  const nodes = pathNodes.filter(n => n.type === 'node');
  if (nodes.length === 0) return '';
  
  let targetNodes = nodes;
  if (onlyActive) {
    targetNodes = [];
    for (const n of nodes) {
      targetNodes.push(n);
      if (n.state === 'current' || n.state === 'locked') break;
    }
  }

  if (targetNodes.length === 0) return '';

  let d = `M ${targetNodes[0].x} ${targetNodes[0].y}`;
  for (let i = 1; i < targetNodes.length; i++) {
    const prev = targetNodes[i - 1];
    const curr = targetNodes[i];
    const cp1X = prev.x;
    const cp1Y = prev.y + NODE_HEIGHT / 2.5;
    const cp2X = curr.x;
    const cp2Y = curr.y - NODE_HEIGHT / 2.5;
    d += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${curr.x} ${curr.y}`;
  }
  return d;
};


// ── Components ──

const StarRow = ({ count }) => (
  <div className="flex gap-1 mt-2">
    {[1,2,3].map(i => (
      <div key={i} className="flex items-center justify-center">
        <Star size={16} fill={i <= count ? '#ffcc00' : 'none'} color="#000" style={{ strokeWidth: 2.5 }} />
      </div>
    ))}
  </div>
);

const LevelNode = ({ node, onPlay }) => {
  const isCompleted = node.state === 'completed';
  const isCurrent   = node.state === 'current';
  const isLocked    = node.state === 'locked';

  const size = node.isBoss ? 96 : 80;

  let bg = '#e0e0e0';
  let iconColor = '#666';
  if (isCompleted) { bg = '#9966ff'; iconColor = '#000'; }
  if (isCurrent)   { bg = node.accent; iconColor = '#000'; }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: node.index * 0.07, type: 'spring', stiffness: 300 }}
      className="absolute flex flex-col items-center"
      style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)', zIndex: isCurrent ? 20 : 10 }}
    >
      <button
        onClick={() => !isLocked && onPlay()}
        disabled={isLocked}
        className={`relative flex flex-col items-center justify-center transition-all ${isLocked ? 'cursor-not-allowed opacity-60' : 'hover:-translate-y-1'}`}
        style={{
          width: size, height: size,
          background: bg,
          border: '4px solid #000',
          boxShadow: isLocked ? 'none' : (isCurrent ? `0 0 0 6px #fff, 0 0 0 10px ${node.accent}, 8px 8px 0px 0px rgba(0,0,0,1)` : '6px 6px 0px 0px rgba(0,0,0,1)'),
          borderRadius: '50%',
        }}
      >
        {isCompleted && <Play size={28} fill={iconColor} color={iconColor} />}
        {isCurrent   && <Play size={32} fill={iconColor} color={iconColor} className="ml-1" />}
        {isLocked    && (node.isBoss ? <Target size={28} color={iconColor} /> : <Lock size={24} color={iconColor} />)}
      </button>

      <div className="absolute top-full mt-4 flex flex-col items-center w-36">
        <div 
          className="px-3 py-1.5 font-black text-xs uppercase tracking-tight text-center bg-white border-[3px] border-black shadow-neo-sm rounded-neo w-full text-black"
        >
          {node.label}
        </div>
        {!isLocked && <StarRow count={node.stars} />}
      </div>
    </motion.div>
  );
};


export default function PathPage() {
  const navigate = useNavigate();

  const totalLevels     = CHAPTERS.flatMap(c => c.levels).length;
  const completedLevels = CHAPTERS.flatMap(c => c.levels).filter(l => l.state === 'completed').length;

  return (
    <div className="w-full min-h-screen px-6 md:px-10 pt-8 pb-28 font-sans bg-transparent max-w-6xl mx-auto">

      {/* ── Page Header ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-black uppercase tracking-tight mb-1 text-5xl text-black">
          Your Journey
        </h1>
        <p className="font-bold uppercase tracking-wider text-sm text-gray-500">
          Follow the path to master finance
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

        {/* ── LEFT: Curvy Path Map ── */}
        <div className="flex-1 w-full flex justify-center min-w-0 overflow-hidden bg-white border-[4px] border-black shadow-neo-lg rounded-neo py-12">
          
          <div className="relative" style={{ width: PATH_WIDTH, height: TOTAL_HEIGHT }}>
            
            {/* SVG Tracks */}
            <svg className="absolute inset-0 pointer-events-none" width={PATH_WIDTH} height={TOTAL_HEIGHT}>
              {/* Background Track */}
              <path
                d={generatePath(false)}
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={generatePath(false)}
                fill="none"
                stroke="#000"
                strokeWidth="28"
                strokeDasharray="4 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.1}
              />
              
              {/* Active Track */}
              <path
                d={generatePath(true)}
                fill="none"
                stroke="#00e699"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Active track inner stripe for style */}
              <path
                d={generatePath(true)}
                fill="none"
                stroke="#000"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.15}
              />
            </svg>

            {/* Decorations */}
            {decorations.map((dec) => (
              <motion.div
                key={dec.id}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="absolute flex items-center justify-center border-[3px] border-black shadow-neo-sm rounded-neo bg-white"
                style={{ left: dec.x, top: dec.y, width: 48, height: 48, transform: `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)` }}
              >
                <dec.Icon size={24} color={dec.color} />
              </motion.div>
            ))}

            {/* Nodes and Headers */}
            {pathNodes.map((item, i) => {
              if (item.type === 'header') {
                return (
                  <motion.div
                    key={`header-${i}`}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    className="absolute w-full px-8"
                    style={{ top: item.y, transform: 'translateY(-50%)' }}
                  >
                    <div 
                      className="px-6 py-3 font-black text-xl uppercase tracking-tight inline-block border-[4px] border-black shadow-neo-base text-black"
                      style={{ background: item.accent }}
                    >
                      {item.title}
                    </div>
                  </motion.div>
                );
              }

              if (item.type === 'node') {
                return <LevelNode key={`node-${item.id}`} node={item} onPlay={() => navigate('/app/games/quiz')} />;
              }
              return null;
            })}

          </div>
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <div className="hidden lg:flex flex-col gap-6 shrink-0 w-80">
          <div className="sticky top-[100px] flex flex-col gap-6">

            {/* Progress card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              className="bg-white border-[4px] border-black shadow-neo-lg rounded-neo p-6"
            >
              <p className="text-xs font-black uppercase tracking-widest mb-4 text-neo-purple">
                Overall Progress
              </p>
              
              <div className="flex items-end gap-2 mb-6">
                <span className="font-black text-6xl leading-none text-black">{completedLevels}</span>
                <span className="font-bold text-gray-400 mb-1">/ {totalLevels}</span>
              </div>
              
              <div className="w-full h-4 bg-gray-200 border-[3px] border-black rounded-full overflow-hidden p-0.5">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${(completedLevels / totalLevels) * 100}%` }} 
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-neo-teal border-r-[2px] border-black rounded-full" 
                />
              </div>
            </motion.div>

            {/* Daily Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-neo-purple border-[4px] border-black shadow-neo-lg rounded-neo p-6 text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap size={20} className="text-neo-teal" />
                <span className="font-black text-sm uppercase tracking-widest text-black">Daily Challenge</span>
              </div>
              <h3 className="font-black text-2xl tracking-tight mb-2 text-black leading-tight">Complete 2 lessons with perfect score</h3>
              <p className="text-white/80 font-medium text-sm mb-6">Reward: 150 XP</p>
              
              <button className="neo-btn-white w-full py-4 text-lg border-[3px] shadow-neo-sm">
                Claim Reward
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
