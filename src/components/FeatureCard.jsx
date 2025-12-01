export default function FeatureCard({ title, description }) {
  return (
    <div className="glass-panel p-6 text-left h-full hover:neon-border transition-all duration-300 hover:-translate-y-1">
      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
