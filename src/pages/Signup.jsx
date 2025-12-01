import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signup } from '../lib/auth'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    signup({ email })
    navigate('/dashboard', { replace: true })
  }

  return (
    <section className="container-base py-12 max-w-md mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign up</h2>
      <form onSubmit={submit} className="glass-panel p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">Email</label>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">Password</label>
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn-primary w-full" type="submit">Create account</button>
        <p className="text-center text-sm text-slate-400">
          Already have an account? <Link to="/login" className="text-primary-DEFAULT hover:text-primary-400">Log in</Link>
        </p>
      </form>
    </section>
  )
}
