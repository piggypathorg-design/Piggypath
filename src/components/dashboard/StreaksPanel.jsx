import React from 'react';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const StreaksPanel = ({ currentStreak = 0 }) => {
  // For brand new user: all days inactive
  const ACTIVE = Array(7).fill(false);

  return (
    <div className="neo-card p-6 border-[3px]">
      {/* Header: streak count */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-bold text-xs uppercase tracking-widest text-neo-teal">
            Current Streak
          </p>
          <div className="flex items-end gap-2 mt-1">
            <span className="font-black text-5xl leading-none text-black">
              {currentStreak}
            </span>
            <span className="font-bold text-sm mb-1 text-gray-500">days</span>
          </div>
        </div>
        <div className="w-14 h-14 flex items-center justify-center bg-neo-teal border-[3px] border-black shadow-neo-sm">
          <Flame size={28} color="#000" fill="#000" />
        </div>
      </div>

      {/* Day tiles */}
      <div className="flex justify-between items-center px-4 py-4 mb-6 bg-white border-[3px] border-black">
        {DAYS.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase text-gray-500">{day}</span>
            <div className={`w-6 h-6 border-[3px] border-black ${ACTIVE[i] ? 'bg-neo-teal' : 'bg-gray-100'}`} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="neo-btn-primary w-full py-4 text-lg">
        Start Lesson &rarr;
      </button>
    </div>
  );
};

export default StreaksPanel;
