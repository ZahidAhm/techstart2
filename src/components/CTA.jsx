import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="container-base py-16 text-center">
      <div className="glass-panel p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
        <h2 className="text-3xl font-bold mb-4 neon-text">Ready to get started?</h2>
        <p className="text-slate-300 mb-8 text-lg">Create your account in seconds and start building.</p>
        <Link to="/signup" className="btn-primary">Create account</Link>
      </div>
    </section>
  )
}
