export function AnalysisItem({ label, value, positive, neutral }: { label: string; value: string; positive?: boolean; neutral?: boolean }) {
  const color = positive ? 'text-green-400' : neutral ? 'text-yellow-400' : 'text-white';
  
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}