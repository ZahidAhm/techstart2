import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="container-base py-20 sm:py-32 text-center relative overflow-hidden">


      <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-primary-300 mb-8 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
        Innovate. Explore. Connect.
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-primary-200">
        Powering the Future <br /> of Technology
      </h1>

      <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
        Guided by the stars, built for tomorrow. Experience the next generation of digital solutions with our space-age platform.
      </p>

      <div className="flex gap-4 justify-center">
        <Link to="/products" className="btn-primary text-base px-8 py-4">Discover Our Solutions</Link>
        <Link to="/signup" className="btn-secondary text-base px-8 py-4">Get Started</Link>
      </div>
    </section>
  )
}
