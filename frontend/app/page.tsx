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
import Header from './components/layout/Header';
import Background from './components/layout/Background';

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
     
      <Background />

      <div className="relative z-10">
        <Header isVisible={isVisible} />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="max-w-7xl mx-auto">
          {renderTabContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

