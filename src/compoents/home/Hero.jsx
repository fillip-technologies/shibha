import { useState, useEffect } from 'react'
import roofTopBg from '../../assets/logo/roof-top-2.png'
import { useQuoteModal } from '../../context/QuoteModalContext'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-scroll lg:bg-fixed"
        style={{ backgroundImage: `url(${roofTopBg})`, backgroundPosition: 'center 42%' }}
        aria-hidden="true"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-emerald-950/20" />

      {/* Animated Glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Content */}
      <div
        className={`relative z-10 site-container flex flex-col items-center text-center transition-all duration-1000 ease-out pt-2 sm:pt-4 lg:pt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
      >
        {/* <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Trusted Solar Experts
        </span> */}

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Power Your Future
          <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 bg-clip-text text-transparent">
            With Clean Solar Energy
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-50 sm:text-lg md:text-xl">

          Welcome to Shibha Enterprises, the best solar company in Patna, where creativity meets credibility. We prioritise designing and delivering personalised solar power services from rooftop installations to commercial solar farms, helping you minimize electricity costs, enhance energy efficiency, and adapt to a sustainable future.

        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={openQuoteModal}
            className="hero-cta-primary group cursor-pointer"
          >
            Get Free Quote
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="#services"
            className="hero-cta-secondary"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
