import { useState, useEffect } from 'react';

export function LiveMarketTicker() {
  const [pairs, setPairs] = useState([
    { symbol: 'XAUUSD', price: '1956.42', change: '+0.41%', trend: 'up' },
    { symbol: 'EURUSD', price: '1.0942', change: '-0.12%', trend: 'down' },
    { symbol: 'GBPUSD', price: '1.2750', change: '+0.23%', trend: 'up' },
    { symbol: 'USDJPY', price: '143.20', change: '+0.67%', trend: 'up' },
    { symbol: 'US30', price: '37520', change: '+0.89%', trend: 'up' },
    { symbol: 'BTCUSD', price: '43250', change: '+2.34%', trend: 'up' },
    { symbol: 'ETHUSD', price: '2580', change: '-1.23%', trend: 'down' },
  ]);

  const [isPaused, setIsPaused] = useState(false);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setPairs(prev => prev.map(pair => {
          const randomChange = (Math.random() - 0.5) * 0.5;
          const newChange = randomChange.toFixed(2) + '%';
          const newPrice = parseFloat(pair.price) * (1 + randomChange / 100);
          
          return {
            ...pair,
            price: newPrice.toFixed(pair.symbol.includes('USD') && !pair.symbol.includes('XAU') ? 4 : 2),
            change: (randomChange >= 0 ? '+' : '') + newChange,
            trend: randomChange >= 0 ? 'up' : 'down'
          };
        }));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-cyan-400">LIVE MARKETS</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <span>{isPaused ? 'Paused' : 'Live'}</span>
          <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`}></div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className={`flex space-x-8 ${isPaused ? 'animate-none' : 'animate-marquee'} whitespace-nowrap`}>
          {pairs.concat(pairs).map((pair, index) => (
            <div key={index} className="flex items-center space-x-4 px-2">
              <span className="font-semibold text-white min-w-[70px]">{pair.symbol}</span>
              <span className="text-gray-300 min-w-[80px] text-right">{pair.price}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium min-w-[70px] text-center ${
                pair.trend === 'up' 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {pair.change}
              </span>
              <div className="w-px h-6 bg-gray-600/50"></div>
            </div>
          ))}
        </div>

        {/* Gradient fade effects */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent"></div>
      </div>

      {/* Hover instruction */}
      <div className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Hover to pause • Click to view details
      </div>
    </div>
  );
}