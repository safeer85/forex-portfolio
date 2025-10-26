export function MetricItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-gray-300">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}