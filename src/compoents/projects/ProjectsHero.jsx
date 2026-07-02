import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import solar5 from '../../assets/images/solar-5.jpg'

function ProjectsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={solar5}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-emerald-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div className="absolute top-16 right-[20%] h-64 w-64 rounded-full bg-emerald-500/12 blur-[90px]" aria-hidden="true" />
      <div className="absolute bottom-16 left-[15%] h-48 w-48 rounded-full bg-teal-400/8 blur-[70px]" aria-hidden="true" />

      <div className="site-container relative z-10 py-32">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className={`mb-8 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        >
          <ol className="flex items-center gap-2 text-sm text-emerald-300/60">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li aria-hidden="true">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-white font-semibold">Projects</li>
          </ol>
        </nav>

        <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Our Portfolio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-white">Delivering Solar</span>
            <br />
            <span className="text-white">Excellence </span>
            <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 bg-clip-text text-transparent">
              Across India
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Explore our portfolio of 500+ successful solar installations  from compact residential rooftops to massive industrial solar farms powering India's future.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:shadow-emerald-400/40 hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500"
            >
              View Projects
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHero
