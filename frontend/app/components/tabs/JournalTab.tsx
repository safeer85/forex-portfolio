export function JournalTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Trade Journal
        </h2>
        <p className="text-gray-300 text-lg">Record and analyze your trading decisions</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-3">📝</span>
            Recent Trades
          </h3>
        </div>
        {data.tradeHistory.map((trade: any) => (
          <div key={trade.id} className="p-4 border-b border-gray-700/50 last:border-b-0 hover:bg-white/5 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  trade.result === 'WIN' ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <div>
                  <div className="font-semibold">{trade.pair}</div>
                  <div className="text-sm text-gray-400 capitalize">{trade.type} • {trade.date}</div>
                </div>
              </div>
              <div className={`text-lg font-bold ${
                trade.profit >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                ${trade.profit.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}