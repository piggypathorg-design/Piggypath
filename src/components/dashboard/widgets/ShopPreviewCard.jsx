import React from 'react';

const ShopPreviewCard = () => {
  const shopItems = [
    { id: 1, name: 'Gem Pack', price: '$ 1.47', icon: '💎', iconColor: 'text-purple-500' },
    { id: 2, name: '5 Keys', price: '$ 0.97', icon: '🔑', iconColor: 'text-yellow-400' },
    { id: 3, name: 'New Avatar', price: '$ 2.76', icon: '🧑🏻‍🎤', iconColor: '' },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Shop</h3>
        <button 
          aria-label="Open Inventory"
          className="text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-full transition-colors border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#00E599]"
        >
          Open Inventory
        </button>
      </div>

      <div className="flex-1 flex gap-3">
        {shopItems.map((item) => (
          <button 
            key={item.id} 
            aria-label={`Buy ${item.name} for ${item.price}`}
            className="flex-1 flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors cursor-pointer bg-zinc-50 dark:bg-zinc-800/30 focus:outline-none focus:ring-2 focus:ring-[#00E599]"
          >
            <div className={`text-4xl mb-3 drop-shadow-sm ${item.iconColor}`}>
              <span role="img" aria-label={item.name}>{item.icon}</span>
            </div>
            <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1 text-center leading-tight">
              {item.name}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold">
              {item.price}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopPreviewCard;
