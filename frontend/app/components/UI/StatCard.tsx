export function StatCard({ title, value, change, color, icon }: {
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