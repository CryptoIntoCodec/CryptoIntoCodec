import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeContext from '../theme/ThemeContext'

export default function Navbar(){
  const { toggle, theme } = useContext(ThemeContext)
  const loc = useLocation()
  return (
    <nav className="container nav">
      <div>
        <Link to="/">CryptoIntoCodec</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}
