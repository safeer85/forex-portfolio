import { PositionCard } from "../UI/PositionCard";
import { SummaryItem } from "../UI/SummaryItem";
import { RiskItem } from "../UI/RiskItem";


export function PositionsTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Position Management
        </h2>
        <p className="text-gray-300 text-lg">Monitor and manage your open positions in real-time</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="mr-3">⚡</span>
            Active Positions
          </h3>
        </div>
        {data.openPositions.map((position: any, index: number) => (
          <PositionCard key={index} position={position} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📋</span>
            Position Summary
          </h3>
          <div className="space-y-4">
            <SummaryItem label="Total Positions" value={data.openPositions.length} />
            <SummaryItem label="Total Exposure" value="$2,450" />
            <SummaryItem label="Net P&L" value="+$85.20" positive />
            <SummaryItem label="Margin Used" value="$485.75" />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">🚨</span>
            Risk Overview
          </h3>
          <div className="space-y-4">
            <RiskItem label="Portfolio Risk" value="1.8%" level="low" />
            <RiskItem label="Leverage" value="1:30" level="medium" />
            <RiskItem label="Margin Level" value="450%" level="safe" />
            <RiskItem label="Free Margin" value="$11,814.25" level="safe" />
          </div>
        </div>
      </div>
    </div>
  );
}