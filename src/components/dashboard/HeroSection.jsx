import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAvatar } from '../../hooks/useAvatar';
import CustomAvatar from '../avatar/CustomAvatar';

const useTypewriter = (text, speed = 55) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text]);
  return displayed;
};

const Cursor = () => {
  const [v, setV] = useState(true);
  useEffect(() => { const t = setInterval(() => setV(x => !x), 500); return () => clearInterval(t); }, []);
  return <span style={{ opacity: v ? 1 : 0 }}>_</span>;
};

const ChapterDots = ({ total = 5, current = 1 }) => (
  <div className="flex items-center gap-2">
    {[...Array(total)].map((_, i) => (
      <div key={i} className={`h-3 border-[2px] border-black ${i < current ? 'bg-neo-teal w-6' : 'bg-gray-100 w-3'}`} />
    ))}
  </div>
);

const HeroSection = ({
  username = 'Player',
  level = 1,
  xp = 1240,
  maxXp = 1600,
}) => {
  const greeting = useTypewriter(`HEY ${username.toUpperCase()}!`, 60);
  const navigate = useNavigate();
  const [avatarConfig] = useAvatar();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col neo-card"
    >
      <div className="flex items-center gap-4 px-6 pt-6 pb-4 border-b-[3px] border-black">
        <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-neo-teal border-[3px] border-black shadow-neo-sm">
          <Bot size={28} color="#000" />
        </div>
        <p className="font-black text-2xl uppercase tracking-tight text-black leading-tight">
          {greeting}<span className="text-neo-teal"><Cursor /></span>
        </p>
      </div>

      <div className="px-6 py-6 border-b-[3px] border-black bg-neo-teal/5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end mb-1">
            <span className="font-black text-sm uppercase text-black">XP &middot; {xp} / {maxXp}</span>
            <span className="font-black text-sm text-neo-purple">{Math.round((xp/maxXp)*100)}%</span>
          </div>
          <div className="w-full h-5 rounded-full bg-white border-[3px] border-black p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${maxXp > 0 ? (xp / maxXp) * 100 : 0}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full rounded-full bg-neo-teal border-r-[2px] border-black"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <p className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-4">Today's Quest</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="shrink-0 flex items-center justify-center w-28 h-28 bg-[#FBCFE8] border-[3px] border-black shadow-neo-base rounded-neo overflow-hidden">
            <CustomAvatar
              gender={avatarConfig.gender}
              skinTone={avatarConfig.skinTone}
              top={avatarConfig.top}
              bottom={avatarConfig.bottom}
              accessory={avatarConfig.accessory}
              className="w-full h-full scale-[1.3] translate-y-3"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-black text-4xl tracking-tight mb-4 text-black leading-tight">
              Master<br/>Accounting
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/app/games/quiz')}
                className="neo-btn-primary flex justify-between items-center px-6 flex-1 py-4"
              >
                <div className="flex flex-col items-start">
                  <span className="font-black text-lg">Continue Lesson</span>
                  <span className="font-medium text-xs normal-case opacity-80">Accounting • 3 min left</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                  <Play size={14} fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
