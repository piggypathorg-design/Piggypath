import React from 'react';
import { ShoppingBag, Coins } from 'lucide-react';

const ShopPreview = ({ coins = 0, onBrowse }) => {
  return (
    <div className="neo-card p-6 border-[3px]">
      <div className="flex items-center justify-between mb-5">
         <p className="font-bold text-xs uppercase tracking-widest text-neo-purple">Item Shop</p>
         <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-[3px] border-black shadow-neo-sm">
           <Coins size={16} color="#000" fill="#000" className="text-neo-teal" />
           <span className="font-black text-sm text-black">{coins}</span>
         </div>
      </div>
      
      <div className="flex justify-center mb-6">
         <div className="w-20 h-20 flex items-center justify-center bg-neo-purple border-[3px] border-black shadow-neo-sm">
           <ShoppingBag size={32} color="#000" fill="#9966ff" className="text-black" />
         </div>
      </div>
      
      <button onClick={onBrowse} className="neo-btn-white w-full py-4 text-lg">
        Browse Store &rarr;
      </button>
    </div>
  );
};

export default ShopPreview;
