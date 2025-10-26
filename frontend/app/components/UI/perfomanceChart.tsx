export function PerformanceChart({ data }: { data: any[] }) {
  const maxReturn = Math.max(...data.map(item => Math.abs(item.return)));
  
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-6 flex items-center">
        <span className="mr-3">📈</span>
        Monthly Performance
      </h3>
      <div className="flex items-end justify-between h-48 space-x-2 px-4">
        {data.map((item, index) => (
          <div key={item.month} className="flex-1 flex flex-col items-center group">
            <div 
              className={`w-full max-w-16 rounded-t transition-all duration-500 group-hover:opacity-80 ${
                item.return >= 0 
                  ? 'bg-gradient-to-t from-green-400 to-green-500' 
                  : 'bg-gradient-to-t from-red-400 to-red-500'
              }`}
              style={{ height: `${(Math.abs(item.return) / maxReturn) * 80}%` }}
            >
              <div className="hidden group-hover:block bg-black/50 text-white text-xs p-1 rounded absolute -top-8 transform -translate-x-1/4">
                {item.return}%
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">{item.month}</div>
            <div className={`text-xs font-semibold ${
              item.return >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {item.return >= 0 ? '+' : ''}{item.return}%
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded"></div>
          <span className="text-xs text-gray-400">Positive Returns</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded"></div>
          <span className="text-xs text-gray-400">Negative Returns</span>
        </div>
      </div>
    </div>
  );
}