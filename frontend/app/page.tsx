export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Safeer’s Forex Trading Portfolio</h1>
        <p className="text-lg text-gray-300">
          Focused on XAUUSD intraday trading using price action and fundamentals.
        </p>
      </header>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Win Rate</h3>
            <p className="text-xl text-green-400  font-semibold">62%</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">R:R Ratio</h3>
            <p className="text-xl text-blue-400 font-semibold">1.8:1</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Monthly Return</h3>
            <p className="text-xl text-yellow-400 font-semibold">+8%</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">Max Drawdown</h3>
            <p className="text-xl text-red-400 font-semibold">-6%</p>
          </div>
        </div>
      </section>
    </div>
  )
}
