import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../lib/auth'
import { useMemo } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const user = useMemo(() => getCurrentUser(), [])

  const handleLogout = () => {
    logout()
    navigate('/')
    // Force re-render by navigating; in a real app, use context/state
    window.location.reload()
  }

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]' : 'text-slate-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`


  return (
    <header className="glass-panel sticky top-0 z-40 border-b-0 rounded-none">
      <div className="container-base flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary-DEFAULT flex items-center justify-center">
            <span className="text-white text-xs">🚀</span>
          </div>
          Orion Tech
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Services</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <button onClick={handleLogout} className="ml-2 btn-primary py-2 px-4 text-xs">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>Login</NavLink>
              <NavLink to="/signup" className="ml-2 btn-primary py-2 px-4 text-xs">Sign up</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
