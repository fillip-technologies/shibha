import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/shibha-logo.png'
import { useQuoteModal } from '../context/QuoteModalContext'

const serviceDropdownItems = [
  {
    label: 'On-Grid Solar',
    href: '/services/on-grid',
    desc: 'Grid-tied systems with net metering',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    label: 'Off-Grid Solar',
    href: '/services/off-grid',
    desc: 'Independent battery-powered systems',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
      </svg>
    ),
  },
  {
    label: 'Hybrid Solar',
    href: '/services/hybrid',
    desc: 'Grid + battery backup systems',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false)
    setIsOpen(false)
    setIsMobileServicesOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current)
    setIsDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150)
  }

  const handleNavClick = (e, link) => {
    if (link.hasDropdown) {
      e.preventDefault()
      setIsDropdownOpen((prev) => !prev)
      return
    }

    // Handle hash links: if we're already on home, just scroll
    if (link.href.startsWith('/#')) {
      const hash = link.href.slice(1) // remove leading /
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      // otherwise, let the Link navigate to / and the hash will handle scroll
    }
  }

  return (
    <header className={`site-header transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/98' : 'shadow-sm bg-white/95'}`}>
      <nav className={`site-container flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-15 lg:h-16' : 'h-20'}`} aria-label="Primary navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="Shibha Solar home">
          <img src={logo} alt="Shibha Solar" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-9 lg:h-10' : 'h-12'}`} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              ref={link.hasDropdown ? dropdownRef : undefined}
              onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
            >
              {link.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, link)}
                    className="nav-link inline-flex items-center gap-1 cursor-pointer"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${isDropdownOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl shadow-emerald-100/20">
                      <div className="p-2">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-emerald-50 group"
                          >
                            <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                              {item.icon}
                            </span>
                            <div>
                              <span className="block text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                                {item.label}
                              </span>
                              <span className="block text-xs text-slate-500 mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 bg-slate-50/50 px-4 py-3">
                        {/* <Link
                          to="/#services"
                          className="flex items-center gap-2 text-xs font-semibold text-emerald-600 transition hover:text-emerald-800"
                        >
                          View All Services
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  className="nav-link"
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={openQuoteModal}
          className="primary-action hidden lg:inline-flex cursor-pointer"
        >
          Get Free Quote
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="site-container py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer"
                      >
                        {link.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobileServicesOpen && (
                        <ul className="ml-3 mt-1 space-y-1 border-l-2 border-emerald-200 pl-3">
                          {serviceDropdownItems.map((item) => (
                            <li key={item.label}>
                              <Link
                                to={item.href}
                                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 flex-shrink-0">
                                  {item.icon}
                                </span>
                                <div>
                                  <span className="block text-sm font-semibold">{item.label}</span>
                                  <span className="block text-[11px] text-slate-400">{item.desc}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setIsOpen(false)
                openQuoteModal()
              }}
              className="primary-action mt-4 w-full justify-center cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
