import React from 'react';

const ActivityCalendar = () => {
  // Generate a random 7x5 grid for demo
  const generateGrid = () => {
    const grid = [];
    const shades = [
      'bg-white dark:bg-[#27272A]', // 0
      'bg-[#A7F070]', // 1 (light green)
      'bg-[#00E599] opacity-70', // 2
      'bg-[#00E599]', // 3
      'bg-[#00B377]', // 4 (dark green)
    ];

    for (let row = 0; row < 5; row++) { // 5 weeks (columns)
      const week = [];
      for (let day = 0; day < 7; day++) { // 7 days (rows)
        // Reset to 0
        const level = 0;
        week.push(shades[level]);
      }
      grid.push(week);
    }
    return grid;
  };

  const calendarData = generateGrid();

  return (
    <div className="w-full bg-white dark:bg-[#18181B] border-[3px] border-[#18181B] dark:border-white shadow-[6px_6px_0_#18181B] dark:shadow-[6px_6px_0_#F4F4F5] p-6 mb-6 transition-colors">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-sm tracking-widest text-[#18181B] dark:text-[#F4F4F5] uppercase">Activity Calendar</h3>
        <span className="bg-[#18181B] dark:bg-[#F4F4F5] text-[#00E599] dark:text-[#18181B] font-['Space_Mono',monospace] font-bold text-[10px] px-2 py-1 tracking-widest uppercase transition-colors border-2 border-transparent dark:border-[#18181B]">
          5 Weeks
        </span>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-1 mb-6">
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {calendarData.map((week, colIndex) => (
              <div 
                key={`${colIndex}-${rowIndex}`} 
                className={`w-full aspect-square border-[1.5px] border-[#18181B] dark:border-white transition-colors ${week[rowIndex]}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 font-['Space_Mono',monospace] text-[10px] font-bold text-[#71717A] dark:text-[#A1A1AA] transition-colors">
        <span>LESS</span>
        <div className="w-3 h-3 border-[1px] border-[#18181B] dark:border-white bg-white dark:bg-[#27272A] transition-colors"></div>
        <div className="w-3 h-3 border-[1px] border-[#18181B] dark:border-white bg-[#A7F070] transition-colors"></div>
        <div className="w-3 h-3 border-[1px] border-[#18181B] dark:border-white bg-[#00E599] opacity-70 transition-colors"></div>
        <div className="w-3 h-3 border-[1px] border-[#18181B] dark:border-white bg-[#00E599] transition-colors"></div>
        <div className="w-3 h-3 border-[1px] border-[#18181B] dark:border-white bg-[#00B377] transition-colors"></div>
        <span>MORE</span>
      </div>

    </div>
  );
};

export default ActivityCalendar;
