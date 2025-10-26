import { AnalysisItem } from "../UI/AnalysisItem";
export function AnalysisTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Market Analysis
        </h2>
        <p className="text-gray-300 text-lg">Technical and fundamental analysis insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">🔍</span>
            XAUUSD Analysis
          </h3>
          <div className="space-y-4">
            <AnalysisItem label="Trend" value="Bullish" positive />
            <AnalysisItem label="Support" value="1940.00" />
            <AnalysisItem label="Resistance" value="1970.00" />
            <AnalysisItem label="RSI" value="58" neutral />
            <AnalysisItem label="Volume" value="High" positive />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-3">📰</span>
            Market Sentiment
          </h3>
          <div className="space-y-4">
            {data.favoritePairs.map((pair: any) => (
              <div key={pair.symbol} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <span className="font-medium">{pair.symbol}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    pair.sentiment === 'bullish' ? 'bg-green-400' : 
                    pair.sentiment === 'bearish' ? 'bg-red-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="capitalize text-sm text-gray-300">{pair.sentiment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}