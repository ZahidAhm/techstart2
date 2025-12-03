import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../lib/auth'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const navigate = useNavigate()
  const user = useMemo(() => getCurrentUser(), [])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
    // Force re-render by navigating; in a real app, use context/state
    window.location.reload()
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]' : 'text-slate-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`

  const mobileLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive ? 'text-primary bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`

  return (
    <header className="glass-panel sticky top-0 z-40 border-b-0 rounded-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary-DEFAULT flex items-center justify-center">
            <span className="text-white text-xs">🚀</span>
          </div>
          Orion Tech
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Services</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              {user.role === 'admin' && (
                <NavLink to="/admin" className={linkClass}>Admin Panel</NavLink>
              )}
              <button onClick={handleLogout} className="ml-2 btn-primary py-2 px-4 text-xs">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>Login</NavLink>
              <NavLink to="/signup" className="ml-2 btn-primary py-2 px-4 text-xs">Sign up</NavLink>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-2 shadow-2xl"
          >
            <NavLink to="/" className={mobileLinkClass} onClick={toggleMenu} end>Home</NavLink>
            <NavLink to="/products" className={mobileLinkClass} onClick={toggleMenu}>Services</NavLink>
            {user ? (
              <>
                <NavLink to="/dashboard" className={mobileLinkClass} onClick={toggleMenu}>Dashboard</NavLink>
                {user.role === 'admin' && (
                  <NavLink to="/admin" className={mobileLinkClass} onClick={toggleMenu}>Admin Panel</NavLink>
                )}
                <button onClick={() => { handleLogout(); toggleMenu(); }} className="mt-2 btn-primary w-full py-2">Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={mobileLinkClass} onClick={toggleMenu}>Login</NavLink>
                <NavLink to="/signup" className="mt-2 btn-primary w-full py-2 text-center" onClick={toggleMenu}>Sign up</NavLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
