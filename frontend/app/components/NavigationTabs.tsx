export default function NavigationTabs({ activeTab, setActiveTab }: any) {
  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "performance", label: "Performance", icon: "📈" },
    { id: "positions", label: "Positions", icon: "⚡" },
    { id: "analysis", label: "Analysis", icon: "🔍" },
    { id: "journal", label: "Journal", icon: "📝" }
  ];

  return (
    <nav className="flex space-x-1 border-b border-gray-700/50">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 border-b-2 capitalize
            ${
              activeTab === tab.id
                ? "border-cyan-400 text-cyan-400 bg-cyan-400/5"
                : "border-transparent text-gray-400 hover:text-gray-300 hover:bg-white/5"
            }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
