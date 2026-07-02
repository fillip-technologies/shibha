import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo/shibha-logo.png'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Featured Projects', href: '/#projects' },
  { label: 'PM Surya Ghar Scheme', href: '/#subsidy-scheme' },
]

const servicesLinks = [
  { label: 'On-Grid Solar (Grid-Tied)', href: '/services/on-grid' },
  { label: 'Off-Grid Solar (Independent)', href: '/services/off-grid' },
  { label: 'Hybrid Solar (Grid + Battery)', href: '/services/hybrid' },
  { label: 'Rooftop Installation', href: '/#services' },
  { label: 'Solar Savings Calculator', href: '/#subsidy-scheme' },
]

function Footer() {
  const location = useLocation()

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const hash = href.slice(1) // remove leading /
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get in touch with you shortly.')
  }

  return (
    <footer id="contact" className="relative border-t border-slate-900 bg-slate-950 text-white overflow-hidden">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
      
      {/* Soft background ambient glow */}
      <div className="absolute right-0 bottom-0 -z-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" aria-hidden="true" />
      <div className="absolute left-0 top-0 -z-0 h-80 w-80 rounded-full bg-teal-500/5 blur-[100px]" aria-hidden="true" />

      <div className="site-container relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Column 1: Company Logo & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center w-fit" aria-label="Shibha Solar home">
              <img 
                src={logo} 
                alt="Shibha Solar Logo" 
                className="h-14 w-auto rounded-xl bg-white px-3 py-1.5 object-contain shadow-lg shadow-emerald-500/10" 
              />
            </Link>
            
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Shibha Enterprises is a trusted MNRE-certified solar partner delivering custom rooftop, ground-mount, and hybrid energy systems to power a sustainable, zero-emission future.
            </p>

            {/* Certification / Accreditation badge */}
            <div className="flex items-center gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-950/20 px-3.5 py-2 w-fit">
              <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <div className="text-[11px] font-semibold text-emerald-300 tracking-wide uppercase">
                MNRE Authorized Partner
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="#facebook" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition hover:border-emerald-500/50 hover:bg-emerald-600/10 hover:text-emerald-400"
                aria-label="Follow us on Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a 
                href="#instagram" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition hover:border-emerald-500/50 hover:bg-emerald-600/10 hover:text-emerald-400"
                aria-label="Follow us on Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a 
                href="#linkedin" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition hover:border-emerald-500/50 hover:bg-emerald-600/10 hover:text-emerald-400"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group inline-flex items-center text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solar Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Solar Services
            </h3>
            <ul className="space-y-3.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group inline-flex items-center text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Support */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Get In Touch
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    Shibha Enterprises,<br />
                    Bihar, India
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div className="flex flex-col">
                    <a href="tel:+919534668343" className="transition hover:text-emerald-400">
                      +91 95346 68343
                    </a>
                    <a href="tel:+919534668345" className="transition hover:text-emerald-400">
                      +91 95346 68345
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:06123160223" className="transition hover:text-emerald-400">
                    0612 - 3160223
                  </a>
                </li>

                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@shibhaenterprises.com" className="transition hover:text-emerald-400">
                    info@shibhaenterprises.com
                  </a>
                </li>

                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <svg className="h-5 w-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Callback Request */}
            <div className="border-t border-slate-900 pt-5">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Request a Callback
              </span>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email..." 
                  required
                  className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 active:scale-95"
                >
                  Send
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>

      {/* Footer Bottom copyright and links */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="site-container flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shibha Solar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-emerald-400">
              Terms & Conditions
            </a>
            <a href="#sitemap" className="transition hover:text-emerald-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
