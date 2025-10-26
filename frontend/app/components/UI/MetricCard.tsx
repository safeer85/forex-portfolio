export function MetricCard({ title, value, subtitle, icon, trend }: {
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