"use client";

import { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { OverviewTab } from './components/tabs/OverviewTab';
import { PerformanceTab } from './components/tabs/PerformanceTab';
import { PositionsTab } from './components/tabs/PositionTab';
import { AnalysisTab } from './components/tabs/AnalysisTab';
import { JournalTab } from './components/tabs/JournalTab';
import NavigationTabs from './components/NavigationTabs';
import LoadingScreen from './components/UI/LoadingScreen';
import Footer from './components/layout/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  
  

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 1000);
  }, []);

  // Render different content based on active tab
  const renderTabContent = () => {
    const tabs: any = {
      overview: <OverviewTab data={portfolioData} isVisible={isVisible} />,
      performance: <PerformanceTab data={portfolioData} />,
      positions: <PositionsTab data={portfolioData} />,
      analysis: <AnalysisTab data={portfolioData} />,
      journal: <JournalTab data={portfolioData} />
    };
    return tabs[activeTab];
  };

  if (isLoading) return <LoadingScreen />;
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
            <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </header>

        {/* Main Content - Now Conditionally Rendered */}
        <main className="max-w-7xl mx-auto">
          {renderTabContent()}
        </main>

        {/* Enhanced Footer */}
        <Footer />
      </div>
    </div>
  );
}

