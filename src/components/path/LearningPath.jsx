import React from 'react';
import { Play, Lock } from 'lucide-react';

const pathData = [
  { id: 1, label: 'Budgeting 101', state: 'completed', xOffset: -1 },
  { id: 2, label: 'Budgeting 202', state: 'completed', xOffset: 1 },
  { id: 3, label: 'Budgeting 302', state: 'completed', xOffset: -1 },
  { id: 4, label: 'Budgeting 301', state: 'active', xOffset: 1 },
  { id: 5, label: 'Budgeting 402', state: 'completed', xOffset: -1 }, // In the screenshot this is completed (purple), but below the active node? Weird. Let's make it locked to be logical.
  { id: 6, label: 'Budgeting 501', state: 'locked', xOffset: 1 },
  { id: 7, label: 'Budgeting 102', state: 'locked', xOffset: -1 },
  { id: 8, label: 'Budgeting 201', state: 'locked', xOffset: 1 },
  { id: 9, label: 'Final Exam', state: 'locked', xOffset: -1 },
];

const ROW_HEIGHT = 130; // Height of each row
const SVG_WIDTH = 448; // max-w-md width
const PATH_OFFSET = 70; // How far left/right it snakes

const LearningPath = () => {
  
  // Generate SVG path for the connecting line
  const generatePath = () => {
    let d = "";
    pathData.forEach((node, index) => {
      // Calculate center coordinates
      // X: center + offset
      const x = (SVG_WIDTH / 2) + (node.xOffset * PATH_OFFSET);
      const y = index * ROW_HEIGHT + (ROW_HEIGHT / 2);
      
      if (index === 0) {
        // Start point above the first node
        d += `M ${x} 0 L ${x} ${y} `;
      } else {
        const prevNode = pathData[index - 1];
        const prevX = (SVG_WIDTH / 2) + (prevNode.xOffset * PATH_OFFSET);
        const prevY = (index - 1) * ROW_HEIGHT + (ROW_HEIGHT / 2);
        
        // Curve to the new node
        // We use cubic bezier to create an S-curve
        const controlY1 = prevY + (ROW_HEIGHT / 2);
        const controlY2 = y - (ROW_HEIGHT / 2);
        
        d += `C ${prevX} ${controlY1}, ${x} ${controlY2}, ${x} ${y} `;
      }
    });
    
    // Line extending past the last node
    const lastNode = pathData[pathData.length - 1];
    const lastX = (SVG_WIDTH / 2) + (lastNode.xOffset * PATH_OFFSET);
    const lastY = (pathData.length - 1) * ROW_HEIGHT + (ROW_HEIGHT / 2);
    d += `L ${lastX} ${lastY + ROW_HEIGHT}`;
    
    return d;
  };

  // Determine how much of the path should be "filled" (colored)
  // We want the colored line to go up to the active node.
  const activeIndex = pathData.findIndex(n => n.state === 'active');
  const activeLengthPx = (activeIndex * ROW_HEIGHT) + (ROW_HEIGHT / 2); // Approximate pixel height

  const TOTAL_HEIGHT = pathData.length * ROW_HEIGHT + ROW_HEIGHT;

  return (
    <div className="w-full lg:w-[65%] min-h-screen relative flex flex-col pt-12 items-center shrink-0">
      
      {/* Background SVG Path */}
      <div className="absolute inset-0 w-full max-w-md mx-auto overflow-hidden pointer-events-none" style={{ height: TOTAL_HEIGHT }}>
        <svg className="w-full h-full" viewBox={`0 0 ${SVG_WIDTH} ${TOTAL_HEIGHT}`} preserveAspectRatio="xMidYMin meet">
          {/* Unfilled Path (Gray) */}
          <path 
            d={generatePath()} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="20" 
            strokeLinecap="round"
            className="text-[#3F3F46] dark:text-[#27272A] opacity-50"
          />
          {/* Filled Path (Gradient/Color) */}
          {/* We use a mask or strokeDasharray to only show it up to the active node, but for simplicity let's use a clipPath */}
          <clipPath id="filled-path-clip">
            <rect x="0" y="0" width="100%" height={activeLengthPx} />
          </clipPath>
          
          {/* Inner shadow/border for the path to give neo-brutalist feel */}
          <path 
            d={generatePath()} 
            fill="none" 
            stroke="#18181B" 
            strokeWidth="26" 
            clipPath="url(#filled-path-clip)"
          />
          <path 
            d={generatePath()} 
            fill="none" 
            stroke="#8B5CF6" 
            strokeWidth="20" 
            clipPath="url(#filled-path-clip)"
          />
          
        </svg>
      </div>

      {/* Nodes Container */}
      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        {pathData.map((node, index) => {
          
          const isCompleted = node.state === 'completed';
          const isActive = node.state === 'active';
          const isLocked = node.state === 'locked';

          // Position class based on xOffset
          const rowAlignment = node.xOffset === -1 ? 'flex-row' : 'flex-row-reverse';
          
          return (
            <div 
              key={node.id} 
              className={`w-full flex items-center justify-center gap-6 ${rowAlignment}`}
              style={{ height: ROW_HEIGHT }}
            >
              
              {/* Node Circle */}
              <div className="relative group cursor-pointer" style={{ transform: `translateX(${node.xOffset * PATH_OFFSET}px)` }}>
                
                {/* Active Glow Ring */}
                {isActive && (
                  <div className="absolute -inset-3 bg-[#00E599] opacity-30 rounded-full animate-pulse"></div>
                )}
                
                {/* The Node */}
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center border-[4px] border-[#18181B] dark:border-black transition-transform duration-300
                  ${isActive ? 'scale-110' : 'group-hover:-translate-y-1'}
                  ${isCompleted ? 'bg-[#8B5CF6] shadow-[4px_6px_0_#18181B] dark:shadow-[4px_6px_0_black]' : ''}
                  ${isActive ? 'bg-[#00E599] shadow-[0_0_20px_#00E599]' : ''}
                  ${isLocked ? 'bg-[#71717A] dark:bg-[#3F3F46] shadow-[4px_6px_0_#18181B] dark:shadow-[4px_6px_0_black]' : ''}
                `}>
                  
                  {isCompleted && <Play className="w-8 h-8 text-[#18181B] fill-[#18181B] ml-1" />}
                  {isActive && <div className="w-8 h-8 rounded-full bg-white opacity-20"></div>}
                  {isLocked && <Lock className="w-7 h-7 text-[#18181B] fill-[#18181B]" />}
                  
                </div>
              </div>

              {/* Node Label Pill */}
              <div 
                className={`
                  bg-[#18181B] dark:bg-black px-4 py-2 rounded-full border-[3px] border-[#18181B] dark:border-[#3F3F46]
                  shadow-[4px_4px_0_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0_#18181B]
                  flex items-center justify-center min-w-[140px]
                `}
                style={{ transform: `translateX(${node.xOffset * PATH_OFFSET}px)` }}
              >
                <span className="text-white font-black text-sm tracking-wide">
                  {node.label}
                </span>
              </div>
              
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default LearningPath;
