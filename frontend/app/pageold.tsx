"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced mock data
  const portfolioData = {
    winRate: 62,
    riskReward: 1.8,
    monthlyReturn: 8,
    maxDrawdown: -6,
    totalTrades: 147,
    profitFactor: 1.45,
    currentBalance: 12500,
    equity: 12627.50,
    weeklyPerformance: [2.1, -1.2, 3.4, 0.8, 2.7],
    favoritePairs: [
      { symbol: 'XAUUSD', sentiment: 'bullish', change: 0.8 },
      { symbol: 'EURUSD', sentiment: 'bearish', change: -0.3 },
      { symbol: 'GBPUSD', sentiment: 'neutral', change: 0.2 },
      { symbol: 'USDJPY', sentiment: 'bullish', change: 1.2 }
    ],
    openPositions: [
      { 
        pair: 'XAUUSD', 
        type: 'LONG', 
        lots: 0.5, 
        profit: 127.50,
        openPrice: 1950.42,
        currentPrice: 1956.42,
        sl: 1940.00,
        tp: 1970.00
      },
      { 
        pair: 'EURUSD', 
        type: 'SHORT', 
        lots: 1.0, 
        profit: -42.30,
        openPrice: 1.0950,
        currentPrice: 1.0942,
        sl: 1.1020,
        tp: 1.0880
      }
    ],
    performanceHistory: [
      { month: 'Jan', return: 5.2 },
      { month: 'Feb', return: -2.1 },
      { month: 'Mar', return: 8.7 },
      { month: 'Apr', return: 4.3 },
      { month: 'May', return: 7.1 },
      { month: 'Jun', return: 8.0 }
    ],
    tradeHistory: [
      { id: 1, pair: 'XAUUSD', type: 'BUY', result: 'WIN', profit: 85.50, date: '2024-06-15' },
      { id: 2, pair: 'EURUSD', type: 'SELL', result: 'LOSS', profit: -32.10, date: '2024-06-14' },
      { id: 3, pair: 'GBPUSD', type: 'BUY', result: 'WIN', profit: 67.80, date: '2024-06-13' },
      { id: 4, pair: 'XAUUSD', type: 'BUY', result: 'WIN', profit: 42.30, date: '2024-06-12' }
    ]
  };

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 1000);
  }, []);

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab data={portfolioData} isVisible={isVisible} />;
      case 'performance':
        return <PerformanceTab data={portfolioData} />;
      case 'positions':
        return <PositionsTab data={portfolioData} />;
      case 'analysis':
        return <AnalysisTab data={portfolioData} />;
      case 'journal':
        return <JournalTab data={portfolioData} />;
      default:
        return <OverviewTab data={portfolioData} isVisible={isVisible} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-12"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl h-24"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-12">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Forex Portfolio
                  </h1>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Professional XAUUSD intraday trading specialist combining advanced price action 
                  with fundamental analysis for consistent risk-adjusted returns.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-6 md:mt-0 md:ml-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-sm text-gray-400 mb-1">Live Account Balance</div>
                <div className="text-2xl font-bold text-green-400 mb-2">${portfolioData.currentBalance.toLocaleString()}</div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Equity: ${portfolioData.equity.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Tabs */}
            <nav className="flex space-x-1 border-b border-gray-700/50">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'performance', label: 'Performance', icon: '📈' },
                { id: 'positions', label: 'Positions', icon: '⚡' },
                { id: 'analysis', label: 'Analysis', icon: '🔍' },
                { id: 'journal', label: 'Journal', icon: '📝' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium capitalize transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-cyan-400 text-cyan-400 bg-cyan-400/5'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content - Now Conditionally Rendered */}
        <main className="max-w-7xl mx-auto">
          {renderTabContent()}
        </main>

        {/* Enhanced Footer */}
        <footer className="max-w-7xl mx-auto border-t border-gray-700/50 pt-8 mt-16">
          <div className="text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
              {['Live Data', 'Real-time Updates', 'Professional Risk Management'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm">© 2024 Safeer's Forex Portfolio • Professional Trading Analytics</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ data, isVisible }: { data: any; isVisible: boolean }) {
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

// Performance Tab Component
function PerformanceTab({ data }: { data: any }) {
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

// Positions Tab Component
function PositionsTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Position Management
        </h2>
        <p className="text-gray-300 text-lg">Monitor and manage your open positions in real-time</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-3">⚡</span>
            Active Positions
          </h3>
        </div>
        {data.openPositions.map((position: any, index: number) => (
          <PositionCard key={index} position={position} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📋</span>
            Position Summary
          </h3>
          <div className="space-y-4">
            <SummaryItem label="Total Positions" value={data.openPositions.length} />
            <SummaryItem label="Total Exposure" value="$2,450" />
            <SummaryItem label="Net P&L" value="+$85.20" positive />
            <SummaryItem label="Margin Used" value="$485.75" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">🚨</span>
            Risk Overview
          </h3>
          <div className="space-y-4">
            <RiskItem label="Portfolio Risk" value="1.8%" level="low" />
            <RiskItem label="Leverage" value="1:30" level="medium" />
            <RiskItem label="Margin Level" value="450%" level="safe" />
            <RiskItem label="Free Margin" value="$11,814.25" level="safe" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Analysis Tab Component
function AnalysisTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Market Analysis
        </h2>
        <p className="text-gray-300 text-lg">Technical and fundamental analysis insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">🔍</span>
            XAUUSD Analysis
          </h3>
          <div className="space-y-4">
            <AnalysisItem label="Trend" value="Bullish" positive />
            <AnalysisItem label="Support" value="1940.00" />
            <AnalysisItem label="Resistance" value="1970.00" />
            <AnalysisItem label="RSI" value="58" neutral />
            <AnalysisItem label="Volume" value="High" positive />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📰</span>
            Market Sentiment
          </h3>
          <div className="space-y-4">
            {data.favoritePairs.map((pair: any) => (
              <div key={pair.symbol} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <span className="font-medium">{pair.symbol}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    pair.sentiment === 'bullish' ? 'bg-green-400' : 
                    pair.sentiment === 'bearish' ? 'bg-red-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="capitalize text-sm text-gray-300">{pair.sentiment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Journal Tab Component
function JournalTab({ data }: { data: any }) {
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

// Helper Components for Tabs
function MetricItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function SummaryItem({ label, value, positive }: { label: string; value: string | number; positive?: boolean }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className={`font-semibold ${positive ? 'text-green-400' : 'text-white'}`}>
        {value}
      </span>
    </div>
  );
}

function RiskItem({ label, value, level }: { label: string; value: string; level: 'low' | 'medium' | 'high' | 'safe' }) {
  const color = {
    low: 'text-green-400',
    medium: 'text-yellow-400',
    high: 'text-red-400',
    safe: 'text-cyan-400'
  }[level];

  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

function AnalysisItem({ label, value, positive, neutral }: { label: string; value: string; positive?: boolean; neutral?: boolean }) {
  const color = positive ? 'text-green-400' : neutral ? 'text-yellow-400' : 'text-white';
  
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

// Live Market Ticker Component
function LiveMarketTicker() {
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

// Stat Card Component
function StatCard({ title, value, change, color, icon }: {
  title: string;
  value: string;
  change: string;
  color: string;
  icon: string;
}) {
  const colorClasses = {
    green: 'from-green-400 to-emerald-500',
    blue: 'from-cyan-400 to-blue-500',
    yellow: 'from-yellow-400 to-amber-500',
    red: 'from-red-400 to-orange-500'
  };

  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <span className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm ${
          change.includes('+') 
            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
            : change.includes('-')
            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">{title}</h3>
      <div className={`text-3xl font-bold bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>
        {value}
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({ title, value, subtitle, icon, trend }: {
  title: string;
  value: number | string;
  subtitle: string;
  icon: string;
  trend: 'up' | 'down' | 'neutral';
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold flex items-center">
          <span className="mr-3">{icon}</span>
          {title}
        </h3>
        <div className={`w-2 h-2 rounded-full ${
          trend === 'up' ? 'bg-green-400' : trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
        }`}></div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{subtitle}</div>
    </div>
  );
}

// Position Card Component
function PositionCard({ position, index }: { position: any; index: number }) {
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

// Strategy Card Component
function StrategyCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}

// Performance Chart Component
function PerformanceChart({ data }: { data: any[] }) {
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
// ... (Keep all the existing helper components: StatCard, LiveMarketTicker, MetricCard, PositionCard, StrategyCard, PerformanceChart)
// [Include all the previous helper components here - they remain the same]