import React from 'react';
import { Lock } from 'lucide-react';

const ArtifactsCard = () => {
  const artifacts = [
    { id: 1, status: 'completed', image: '🌕' },
    { id: 2, status: 'completed', image: '🌖' },
    { id: 3, status: 'on the way', image: '🌗' },
    { id: 4, status: 'locked', image: '🌘' },
    { id: 5, status: 'locked', image: '🌑' },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">
      <div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Artifacts</h3>
        <p className="text-sm text-zinc-400 mt-1">Moon Stones earned at every milestone</p>
      </div>

      <div className="flex-1 flex flex-col justify-center mt-8">
        <div className="flex justify-between items-center relative">
          
          {/* Progress Line */}
          <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-zinc-200 dark:bg-zinc-800 z-0" />
          <div className="absolute top-[60%] left-0 h-[2px] bg-indigo-500 z-0" style={{ width: '40%' }} />

          {artifacts.map((item, index) => (
            <div key={item.id} className="relative z-10 flex flex-col items-center gap-3">
              
              {/* Status Label */}
              <div className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                item.status === 'completed' ? 'bg-indigo-500 text-white' : 
                item.status === 'on the way' ? 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400' : 
                'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500 opacity-70'
              }`}>
                {item.status}
              </div>

              {/* Artifact Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-3xl md:text-4xl bg-white dark:bg-zinc-900 border-[3px] ${
                item.status === 'completed' ? 'border-indigo-100 dark:border-indigo-900/50 shadow-sm' : 
                item.status === 'on the way' ? 'border-zinc-100 dark:border-zinc-800' : 
                'border-zinc-50 dark:border-zinc-800/50 opacity-40 grayscale'
              }`}>
                {item.image}
              </div>

              {/* Timeline Node */}
              <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 bg-white dark:bg-zinc-900 ${
                item.status === 'completed' ? 'border-indigo-500' : 'border-zinc-300 dark:border-zinc-700'
              }`}>
                {item.status === 'completed' && <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />}
                {item.status === 'locked' && <Lock size={10} className="text-zinc-400" />}
                {item.status === 'on the way' && <Lock size={10} className="text-zinc-400" />}
              </div>

            </div>
          ))}

        </div>
        
        <p className="text-xs font-bold text-zinc-400 mt-8 text-center md:text-left">
          3 collected - next Moon Stone at Level 13
        </p>
      </div>

    </div>
  );
};

export default ArtifactsCard;
