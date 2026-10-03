import { useState, useEffect } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'
import rooftopSolarHero from '../../../assets/images/rooftop-solar-hero.png'

export default function ResidentialHero() {
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-[15%] h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-[10%] h-80 w-80 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>PM Surya Ghar Muft Bijli Yojana Approved</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Power Your Home With{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300 bg-clip-text text-transparent">
                Clean Rooftop Solar
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Slash your monthly electricity bills by up to 90%, claim up to <strong className="text-emerald-300 font-semibold">₹78,000 direct central subsidy</strong> deposited to your bank, and protect your family with 25 years of guaranteed solar electricity.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 text-sm font-black uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Get Free Rooftop Survey</span>
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <a
                href="#residential-pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-sm font-bold backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                Explore System Sizes & Pricing
              </a>
            </div>

            {/* Credibility / Trust Points */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">Up to 90%</p>
                <p className="text-xs text-slate-400 mt-1">Monthly Bill Cut</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">₹78,000</p>
                <p className="text-xs text-slate-400 mt-1">Direct Bank Subsidy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">25 Years</p>
                <p className="text-xs text-slate-400 mt-1">Linear Performance</p>
              </div>
            </div>

            {/* Micro Trust Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MNRE & ALMM Approved
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                DISCOM Net Metering Assured
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                0% EMI Finance Options
              </span>
            </div>
          </div>

          {/* Right Column: Visual Solar Home Showcase Card */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card glow container */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-slate-900/90 shadow-2xl shadow-emerald-950/40">
                {/* Real photo of family with solar rooftop installation */}
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <img
                    src={rooftopSolarHero}
                    alt="Happy family outside residential solar home in Bihar"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top-Right Floating Telemetry Chip */}
                  <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-emerald-400/30 rounded-2xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-bold text-slate-300">Live Yield</span>
                    </div>
                    <p className="text-lg font-black text-white mt-0.5">14.8 kWh</p>
                    <p className="text-[10px] text-emerald-400 font-medium">Running AC & Pumps</p>
                  </div>

                  {/* Bottom Information Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          <p className="text-[11px] font-black uppercase tracking-wider text-emerald-400">PM Surya Ghar Subsidy</p>
                        </div>
                        <p className="text-base font-extrabold text-white mt-0.5">₹78,000 Direct DBT</p>
                        <p className="text-[11px] text-slate-400">Credited to SBPDCL / NBPDCL consumers</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="inline-block text-[10px] font-black uppercase px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950">
                          Net Metered
                        </span>
                        <p className="text-[10px] text-slate-400 mt-1">25-Yr Linear Warranty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

