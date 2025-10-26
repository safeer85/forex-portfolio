import { LiveMarketTicker } from "../UI/LiveMarketTicker";
import { StrategyCard } from "../UI/StrategyCard";
import { PerformanceChart } from "../UI/perfomanceChart";
import { MetricCard } from "../UI/MetricCard";
import { StatCard } from "../UI/StatCard";
import { PositionCard } from "../UI/PositionCard";


export function OverviewTab({ data, isVisible }: { data: any; isVisible: boolean }) {
  return (
    <>
      {/* Live Market Ticker */}
      <div className="mb-8">
        <LiveMarketTicker />
      </div>

      {/* Quick Stats Grid with Staggered Animation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
          Trading Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Win Rate", value: `${data.winRate}%`, change: "+2%", color: "green", icon: "🎯" },
            { title: "R:R Ratio", value: `${data.riskReward}:1`, change: "Stable", color: "blue", icon: "⚖️" },
            { title: "Monthly Return", value: `+${data.monthlyReturn}%`, change: "+1.2%", color: "yellow", icon: "📈" },
            { title: "Max Drawdown", value: `${data.maxDrawdown}%`, change: "Improved", color: "red", icon: "🛡️" }
          ].map((stat, index) => (
            <div
              key={stat.title}
              className={`transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Metrics Section */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
        <div className="xl:col-span-2">
          <PerformanceChart data={data.performanceHistory} />
        </div>
        
        <div className="space-y-6">
          <MetricCard
            title="Total Trades"
            value={data.totalTrades}
            subtitle="Lifetime executed"
            icon="📊"
            trend="up"
          />
          <MetricCard
            title="Profit Factor"
            value={data.profitFactor}
            subtitle="Gross Profit / Loss"
            icon="💎"
            trend="up"
          />
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-3">⭐</span>
              Market Sentiment
            </h3>
            <div className="space-y-3">
              {data.favoritePairs.map((pair: any, index: number) => (
                <div key={pair.symbol} className="flex justify-between items-center">
                  <span className="font-medium">{pair.symbol}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      pair.sentiment === 'bullish' ? 'bg-green-400' : 
                      pair.sentiment === 'bearish' ? 'bg-red-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className={`text-sm ${
                      pair.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {pair.change >= 0 ? '+' : ''}{pair.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Open Positions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
          Active Positions
        </h2>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
          {data.openPositions.map((position: any, index: number) => (
            <PositionCard key={index} position={position} index={index} />
          ))}
        </div>
      </section>

      {/* Enhanced Trading Strategy */}
      <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12 hover:border-cyan-400/50 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-8 text-center">Trading Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StrategyCard
            icon="🎯"
            title="Price Action"
            description="Advanced S/R levels and candlestick pattern recognition"
            features={['Market Structure', 'Pattern Recognition', 'Volume Analysis']}
          />
          <StrategyCard
            icon="⚡"
            title="Risk Management"
            description="Strict 1-2% risk per trade with dynamic position sizing"
            features={['1-2% Risk', 'Stop Loss', 'Position Sizing']}
          />
          <StrategyCard
            icon="🔍"
            title="Fundamental Analysis"
            description="Economic calendar integration and news sentiment analysis"
            features={['Economic Data', 'News Sentiment', 'Market Hours']}
          />
          <StrategyCard
            icon="📊"
            title="Performance Analytics"
            description="Continuous improvement through detailed trade analytics"
            features={['Trade Journal', 'Analytics', 'Review Process']}
          />
        </div>
      </section>
    </>
  );
}