export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto border-t border-gray-700/50 pt-8 mt-16">
      <div className="text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          {["Live Data", "Real-time Updates", "Professional Risk Management"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm">© 2024 Safeer's Forex Portfolio • Professional Trading Analytics</p>
      </div>
    </footer>
  );
}
