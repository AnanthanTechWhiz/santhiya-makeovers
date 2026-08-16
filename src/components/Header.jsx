import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/siteData'
import logoIcon from '../assets/logo-icon.png'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header sticky-top ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand brand-logo" onClick={() => setExpanded(false)}>
            <img src={logoIcon} alt={brand.name} className="brand-logo-icon me-2" />
            <span className="brand-name">{brand.name}</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            <span className={`bi ${expanded ? 'bi-x-lg' : 'bi-list'}`}></span>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    onClick={() => setExpanded(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <NavLink to="/contact" className="btn btn-gold btn-sm px-4" onClick={() => setExpanded(false)}>
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
