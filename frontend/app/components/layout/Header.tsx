'use client';

import { useEffect, useState } from 'react';

interface Portfolio {
  currentBalance: number;
  equity: number;
}

export default function Header({ isVisible }: { isVisible: boolean }) {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  useEffect(() => {
    // Fetch portfolio data from Django backend
    fetch('http://127.0.0.1:8000/api/portfolio/')
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error('Failed to fetch portfolio:', err));
  }, []);

  return (
    <header className="max-w-7xl mx-auto mb-12">
      <div
        className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Forex Portfolio
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Professional XAUUSD intraday trading specialist combining advanced
              price action with fundamental analysis for consistent returns.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-6 md:mt-0 md:ml-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-sm text-gray-400 mb-1">Live Account Balance</div>
            <div className="text-2xl font-bold text-green-400 mb-2">
              ${portfolio ? portfolio.currentBalance : '...'}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Equity: ${portfolio ? portfolio.equity.toLocaleString() : '...'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
