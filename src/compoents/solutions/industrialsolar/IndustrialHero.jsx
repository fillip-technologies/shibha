import { useState, useEffect } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'
import install4 from '../../../assets/images/install-4.jpeg'

export default function IndustrialHero() {
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#032B25] pt-28 pb-20">
      {/* Heavy Industrial Solar Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${install4})` }}
      >
        {/* Deep industrial emerald & slate gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032B25] via-[#04362E]/95 via-50% to-[#032B25]/75 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032B25] via-transparent to-black/45 opacity-80" />
      </div>

      <div className="site-container relative z-10 w-full">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Top Kicker Label */}
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#6EE7B7] mb-5">
            FACTORIES &bull; WAREHOUSES &bull; COLD STORAGE &bull; SOLAR FARMS
          </p>

          {/* Heading matching user's exact content */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.14] tracking-tight">
            Powering Industry with <br />
            <span className="text-[#6EE7B7]">Smarter Solar</span>
          </h1>

          {/* Subtitle Description from user content */}
          <p className="mt-5 text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl font-normal">
            An industry works on a different kind of scale when it comes to the use of energy. Factories, warehouses, cold storage, and infrastructure require significant amounts of energy continuously, which makes energy efficiency one of the priorities of operations.
          </p>
          <p className="mt-2.5 text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-xl font-normal">
            With Industrial Solar Solutions in Patna, companies can utilise their huge roofs and lands in order to produce energy themselves and decrease their reliance on electricity while keeping their future costs in check.
          </p>

          {/* Pill CTA Button matching reference */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#6EE7B7] hover:bg-[#5ee1a8] text-[#032B25] font-black text-xs uppercase tracking-wider px-7 py-3.5 shadow-xl shadow-emerald-950/30 transition-all hover:gap-3.5 hover:shadow-2xl cursor-pointer"
            >
              <span>Unleash Your Industrial Solar Potential</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="#industrial-planning"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-6 py-3.5 backdrop-blur-sm transition-all"
            >
              <span>Explore Planning & Design</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
