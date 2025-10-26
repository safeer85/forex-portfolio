export function StrategyCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}