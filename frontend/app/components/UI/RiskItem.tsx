export function RiskItem({ label, value, level }: { label: string; value: string; level: 'low' | 'medium' | 'high' | 'safe' }) {
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
