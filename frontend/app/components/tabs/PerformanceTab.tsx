import { MetricItem } from "../UI/MetricItem";

export function PerformanceTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Performance Analytics
        </h2>
        <p className="text-gray-300 text-lg">Detailed analysis of trading performance and metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📈</span>
            Monthly Returns
          </h3>
          <div className="space-y-4">
            {data.performanceHistory.map((month: any, index: number) => (
              <div key={month.month} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <span className="font-medium">{month.month}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  month.return >= 0 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {month.return >= 0 ? '+' : ''}{month.return}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📊</span>
            Performance Metrics
          </h3>
          <div className="space-y-4">
            <MetricItem label="Average Win" value="+$84.50" />
            <MetricItem label="Average Loss" value="-$38.20" />
            <MetricItem label="Largest Win" value="+$156.80" />
            <MetricItem label="Largest Loss" value="-$67.40" />
            <MetricItem label="Expectancy" value="+$28.75" />
            <MetricItem label="Sharpe Ratio" value="1.8" />
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <span className="mr-3">🎯</span>
          Win/Loss Distribution
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-green-400 mb-2">62%</div>
            <div className="text-gray-400">Win Rate</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-400 mb-2">1.8:1</div>
            <div className="text-gray-400">Risk/Reward Ratio</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1.45</div>
            <div className="text-gray-400">Profit Factor</div>
          </div>
        </div>
      </div>
    </div>
  );
}