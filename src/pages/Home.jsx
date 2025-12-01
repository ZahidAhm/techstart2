import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'

export default function Home() {
  const features = [
    { title: 'Innovation First', description: 'We build cutting-edge software solutions that solve real-world problems.' },
    { title: 'User Centric', description: 'Our products are designed with the user in mind, ensuring intuitive experiences.' },
    { title: 'Scalable Tech', description: 'Built on modern stacks to grow with your business needs.' },
  ]

  return (
    <div>
      <Reveal width="100%">
        <Hero />
      </Reveal>

      <section className="container-base py-16">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-slate-400">We craft digital experiences that matter.</p>
          </div>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.25 + (i * 0.1)}>
              <FeatureCard title={f.title} description={f.description} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10"></div>
        <div className="container-base">
          <Reveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-slate-400">Trusted by innovative teams worldwide.</p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CTO at TechFlow',
                text: 'The scalability and performance of their solutions are unmatched. Highly recommended!',
                image: 'https://placehold.co/100x100/2563eb/ffffff?text=SJ'
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager',
                text: 'Incredible user experience. Our team adopted the platform in record time.',
                image: 'https://placehold.co/100x100/dc2626/ffffff?text=MC'
              },
              {
                name: 'Emily Davis',
                role: 'Founder',
                text: 'Support is fantastic and the features are exactly what we needed to grow.',
                image: 'https://placehold.co/100x100/16a34a/ffffff?text=ED'
              }
            ].map((testimonial, i) => (
              <Reveal key={i} delay={0.25 + (i * 0.1)}>
                <div className="glass-panel p-6 h-full hover:neon-border transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-primary-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">"{testimonial.text}"</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Reveal width="100%">
        <CTA />
      </Reveal>
    </div>
  )
}

