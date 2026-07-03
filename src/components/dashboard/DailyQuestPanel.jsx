import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

const useMidnightCountdown = () => {
  const getSecondsLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return Math.floor((midnight - now) / 1000);
  };
  const [secs, setSecs] = useState(getSecondsLeft);
  useEffect(() => { const t = setInterval(() => setSecs(getSecondsLeft()), 1000); return () => clearInterval(t); }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const DailyQuestPanel = () => {
  const countdown = useMidnightCountdown();

  return (
    <div className="bg-neo-teal border-[3px] border-black shadow-neo-base rounded-neo overflow-hidden">
      {/* Header strip */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b-[3px] border-black">
        <div className="flex items-center gap-2">
          <Zap size={18} color="#000" fill="#00e699" />
          <span className="font-black text-xs uppercase tracking-widest text-black">DAILY QUEST</span>
        </div>
        <div className="flex items-center gap-1.5 text-black bg-neo-purple/10 px-2 py-1 border-2 border-black rounded-md">
          <Clock size={14} />
          <span className="font-bold text-xs">{countdown}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center">
        <h3 className="text-2xl font-black uppercase tracking-tight text-center mb-6 text-black leading-tight">
          Budget Basics
        </h3>

        {/* CTA */}
        <button className="neo-btn-white w-full py-4 text-lg border-[3px]">
          Start Quest &rarr;
        </button>
      </div>
    </div>
  );
};

export default DailyQuestPanel;
