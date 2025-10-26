export function PositionCard({ position, index }: { position: any; index: number }) {
  const progress = position.tp ? 
    ((position.currentPrice - position.openPrice) / (position.tp - position.openPrice)) * 100 : 0;
  
  return (
    <div className={`p-6 border-b border-gray-700/50 last:border-b-0 group hover:bg-white/5 transition-all duration-300 ${
      position.profit >= 0 ? 'hover:bg-green-500/5' : 'hover:bg-red-500/5'
    }`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <div className={`w-3 h-3 rounded-full ${
            position.type === 'LONG' ? 'bg-green-400' : 'bg-red-400'
          }`}></div>
          <div>
            <div className="font-semibold text-xl">{position.pair}</div>
            <div className="text-sm text-gray-400 capitalize">{position.type} • {position.lots} lots • Open: {position.openPrice}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm text-gray-400">Current P&L</div>
            <div className={`text-lg font-bold ${
              position.profit >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              ${position.profit.toFixed(2)}
            </div>
          </div>
          
          {position.tp && (
            <div className="w-32">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>SL: {position.sl}</span>
                <span>TP: {position.tp}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    position.profit >= 0 ? 'bg-green-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}