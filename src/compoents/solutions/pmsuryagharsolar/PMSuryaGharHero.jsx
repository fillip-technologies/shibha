import { useState, useEffect } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar6 from '../../../assets/images/solar-6.jpg'
import yojnaLogo from '../../../assets/logo/yojna.png'

export default function PMSuryaGharHero() {
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#032B25] pt-28 pb-20">
      {/* Rooftop Solar Background */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center"
        style={{ backgroundImage: `url(${solar6})` }}
      >
        {/* Deep emerald gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032B25] via-[#04362E]/95 via-50% to-[#032B25]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032B25] via-transparent to-black/35 opacity-75" />
      </div>

      <div className="site-container relative z-10 w-full">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Top Kicker Label with Scheme Logo */}
          <div className="flex items-center gap-3 mb-5">
            <img 
              src={yojnaLogo} 
              alt="PM Surya Ghar Muft Bijli Yojana" 
              className="h-10 w-auto bg-white/95 rounded-lg px-2 py-1 shadow-md"
            />
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#6EE7B7]">
              INSTALL SOLAR &bull; GENERATE YOUR OWN POWER &bull; MAKE YOUR ROOF WORK FOR YOU
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.14] tracking-tight">
            PM Surya Ghar Solar <br />
            <span className="text-[#6EE7B7]">Installation in Patna</span>
          </h1>

          {/* Subtitle Description from user content */}
          <p className="mt-5 text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl font-normal">
            Every day your roof is exposed to the sun. “PM Surya Ghar: Muft Bijli Yojana” allows eligible families to harness that sun and make it work to generate electricity for their homes by getting a government subsidy for rooftop solar installation.
          </p>
          <p className="mt-2.5 text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-xl font-normal">
            With professional PM Surya Ghar Solar Installation in Patna, homeowners can have assistance with everything from determining the correct solar capacity and installing it to obtaining financial aid and connecting it to the grid.
          </p>

          {/* Pill CTA Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#6EE7B7] hover:bg-[#5ee1a8] text-[#032B25] font-black text-xs uppercase tracking-wider px-7 py-3.5 shadow-xl shadow-emerald-950/30 transition-all hover:gap-3.5 hover:shadow-2xl cursor-pointer"
            >
              <span>Apply for Government Subsidy</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="#subsidy-breakdown"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-6 py-3.5 backdrop-blur-sm transition-all"
            >
              <span>View Subsidy Breakdown</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
