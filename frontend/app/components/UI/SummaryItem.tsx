export function SummaryItem({ label, value, positive }: { label: string; value: string | number; positive?: boolean }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className={`font-semibold ${positive ? 'text-green-400' : 'text-white'}`}>
        {value}
      </span>
    </div>
  );
}