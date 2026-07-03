import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Zap, Lightbulb, Flame, PackageOpen, Pause, Trophy, Coins, Dog, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QUESTION = {
  chapter: 'Finance Basics · Chapter 2',
  title: 'What is a Diversified Portfolio?',
  body: 'Spreading investments across different asset classes to reduce risk is a core principle of sound financial planning.',
  answers: [
    { id: 'a', text: 'Putting all money in one high-return stock',    color: '#9966ff', textColor: '#fff'       },
    { id: 'b', text: 'Mixing stocks, bonds and cash to reduce risk',  color: '#00e699', textColor: '#000', correct: true },
    { id: 'c', text: 'Saving every coin in a single savings account', color: '#ffcc00', textColor: '#000'       },
    { id: 'd', text: 'Only investing in government bonds',            color: '#33ccff', textColor: '#000'   },
  ],
};

const ALL_QUESTIONS = 8;
const CURRENT_Q = 3;

export default function QuizPage() {
  const navigate = useNavigate();
  const [selected, setSelected]   = useState(null);
  const [revealed, setRevealed]   = useState(false);
  const [showHint, setShowHint]   = useState(false);
  const [lives]                   = useState(3);

  const handleSelect = (id) => {
    if (revealed) return;
    setSelected(id);
    setRevealed(true);
  };

  const isCorrect = (id) => QUESTION.answers.find(a => a.id === id)?.correct;

  return (
    <div className="w-full min-h-screen px-6 md:px-10 pt-8 pb-28 font-sans bg-transparent max-w-6xl mx-auto">
      <div>

        {/* ── Top Status Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 mb-8"
        >
          {/* Left: lives */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigate(-1)}
              className="neo-btn-white px-4 py-3 text-sm border-[3px]"
            >
              &larr; Back
            </button>
            <div className="flex items-center gap-2 px-4 py-3 bg-white border-[3px] border-black shadow-neo-sm rounded-neo">
              {[1, 2, 3].map(i => (
                <Heart key={i} size={20} fill={i <= lives ? '#ff3366' : 'none'} color={i <= lives ? '#ff3366' : '#999'} />
              ))}
            </div>
          </div>

          {/* Center: progress */}
          <div className="flex items-center gap-4 flex-1 max-w-md mx-auto order-last md:order-none w-full mt-4 md:mt-0">
            <span className="font-black text-sm shrink-0 text-gray-500">{CURRENT_Q}/{ALL_QUESTIONS}</span>
            <div className="flex-1 h-5 rounded-full bg-white border-[3px] border-black p-0.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(CURRENT_Q / ALL_QUESTIONS) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-neo-teal border-r-[2px] border-black"
              />
            </div>
            <span className="font-black text-sm flex items-center gap-1 shrink-0 text-neo-purple">
              <Zap size={16} fill="currentColor" /> +50 XP
            </span>
          </div>

          {/* Right: coins + pause */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 px-4 py-3 bg-white border-[3px] border-black shadow-neo-sm rounded-neo">
              <Coins size={20} color="#000" fill="#ffcc00" />
              <span className="font-black text-sm text-black">320</span>
            </div>
            <button className="neo-btn-white p-3 border-[3px]">
              <Pause size={20} />
            </button>
          </div>
        </motion.div>

        {/* ── Main 2-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* ── Left Column: Question + Answers ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">

            {/* Question card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="neo-card p-8 md:p-10"
            >
              <p className="font-black text-xs uppercase tracking-widest mb-4 text-neo-purple">
                {QUESTION.chapter}
              </p>
              <h2 className="font-black text-4xl uppercase tracking-tight mb-4 text-black leading-tight">
                {QUESTION.title}
              </h2>
              <p className="font-bold text-lg leading-relaxed text-gray-700">
                {QUESTION.body}
              </p>
            </motion.div>

            {/* Answer grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {QUESTION.answers.map((ans, i) => {
                const isSelected       = selected === ans.id;
                const correctRevealed  = revealed && ans.correct;
                const wrongSelected    = revealed && isSelected && !ans.correct;
                const fadedOut         = revealed && !ans.correct && !isSelected;

                return (
                  <motion.button
                    key={ans.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: fadedOut ? 0.35 : 1, scale: 1 }}
                    transition={{ delay: 0.22 + i * 0.06 }}
                    whileHover={!revealed ? { y: -4, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' } : {}}
                    onClick={() => handleSelect(ans.id)}
                    disabled={revealed}
                    className="relative p-6 text-left font-black text-lg leading-snug transition-all flex flex-col justify-between rounded-neo border-[4px] border-black shadow-neo-base"
                    style={{
                      background: ans.color,
                      color: ans.textColor,
                      minHeight: 160,
                      cursor: revealed ? 'default' : 'pointer',
                      border: correctRevealed
                        ? `6px solid #000`
                        : wrongSelected
                        ? '6px solid #000'
                        : '4px solid #000',
                      boxShadow: correctRevealed ? `0 0 0 6px #fff, 0 0 0 10px #000, 8px 8px 0px 0px rgba(0,0,0,1)` : '4px 4px 0px 0px rgba(0,0,0,1)',
                    }}
                  >
                    <span className="text-sm font-black uppercase opacity-60 mb-4 bg-white/20 w-fit px-3 py-1 rounded-md border-2 border-current" style={{ color: ans.textColor }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{ans.text}</span>

                    {/* Result icons */}
                    {correctRevealed && (
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute top-4 right-4 bg-white rounded-full p-1 border-[3px] border-black"
                      >
                        <CheckCircle2 size={32} color="#00e699" fill="#000" />
                      </motion.div>
                    )}
                    {wrongSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 bg-white rounded-full p-1 border-[3px] border-black"
                      >
                        <XCircle size={32} color="#ff3366" fill="#000" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Hint */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-5 overflow-hidden px-8 py-8 bg-white border-[4px] border-black shadow-neo-base rounded-neo"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-neo-teal border-[3px] border-black shadow-neo-sm">
                    <Dog size={32} color="#000" />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wider mb-2 text-neo-teal">Piggy's Tip</p>
                    <p className="font-bold text-base leading-relaxed text-black">
                      Think about what happens when you put all your eggs in one basket versus spreading them out. Which approach protects you better if one investment fails?
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result feedback */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-5 px-8 py-8 border-[4px] border-black shadow-neo-base rounded-neo ${isCorrect(selected) ? 'bg-neo-teal' : 'bg-[#ff3366]'}`}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-white border-[3px] border-black shadow-neo-sm">
                    {isCorrect(selected) ? <CheckCircle2 size={32} color="#00e699" fill="#000" /> : <XCircle size={32} color="#ff3366" fill="#000" />}
                  </div>
                  <div>
                    <p className="font-black text-2xl uppercase tracking-tight mb-2 text-black leading-none">
                      {isCorrect(selected) ? 'Correct! +50 XP earned' : 'Not quite right!'}
                    </p>
                    <p className="font-bold text-base text-black/80">
                      {isCorrect(selected)
                        ? 'Diversification means spreading investments to lower risk.'
                        : 'The correct answer is B — mixing asset types reduces overall portfolio risk.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full sm:w-auto">
                {[
                  { label: 'Hint',     icon: <Lightbulb size={18} />, color: '#00e699', action: () => setShowHint(h => !h) },
                  { label: 'Power Up', icon: <Flame size={18} />,     color: '#ffcc00', action: () => {} },
                  { label: 'Items',    icon: <PackageOpen size={18}/>, color: '#9966ff', action: () => {} },
                ].map(({ label, icon, color, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="flex items-center gap-2 px-6 py-4 font-black uppercase tracking-wider text-sm transition-all hover:-translate-y-1 bg-white border-[3px] border-black shadow-neo-sm rounded-neo"
                    style={{ color: '#000' }}
                  >
                    <span style={{ color }}>{icon}</span> {label}
                  </button>
                ))}
              </div>

              {revealed && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full sm:w-auto ml-auto px-10 py-5 font-black uppercase tracking-wider text-lg transition-all hover:-translate-y-1 active:translate-y-0 bg-black text-white border-[3px] border-black shadow-neo-base rounded-neo"
                >
                  Next Question &rarr;
                </motion.button>
              )}
            </div>
          </div>

          {/* ── Right Sidebar ── */}
          <div className="hidden lg:flex flex-col gap-6 shrink-0 w-80">
            <div className="sticky top-[100px] flex flex-col gap-6">

              {/* Session stats */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="neo-card p-6"
              >
                <p className="font-black text-xs uppercase tracking-widest mb-5 text-gray-500">This Session</p>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b-2 border-dashed border-gray-300">
                    <span className="font-bold text-gray-500">Accuracy</span>
                    <span className="font-black text-neo-teal text-xl">100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-dashed border-gray-300">
                    <span className="font-bold text-gray-500">XP Gained</span>
                    <span className="font-black text-neo-purple text-xl">+100</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-gray-500">Current Streak</span>
                    <div className="flex items-center gap-1.5 font-black text-[#ff9900] text-xl">
                      <Flame size={20} fill="currentColor" /> 2
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Leaderboard snippet */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="neo-card p-6"
              >
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-[3px] border-black">
                  <Trophy size={20} className="text-[#ffcc00]" fill="#ffcc00" color="#000" />
                  <span className="font-black text-sm uppercase tracking-widest text-black">Top Players</span>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { rank: 1, name: 'AlexTheGreat', pts: '12.4k' },
                    { rank: 2, name: 'FinanceBro99', pts: '11.8k' },
                    { rank: 3, name: 'SavingsQueen', pts: '10.2k' },
                  ].map(p => (
                    <div key={p.rank} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-black border-2 border-black ${p.rank === 1 ? 'bg-[#ffcc00] text-black' : 'bg-gray-100 text-gray-500'}`}>
                          {p.rank}
                        </div>
                        <span className="font-bold text-sm text-black">{p.name}</span>
                      </div>
                      <span className="font-black text-xs text-gray-500">{p.pts}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
