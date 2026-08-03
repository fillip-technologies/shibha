import { useEffect, useRef, useState } from 'react'
import { useQuoteModal } from '../../context/QuoteModalContext'
import solarRbg from '../../assets/images/solar-rbg.png'

function SmartSolar() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="smart-solar"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-0 pb-0 lg:pt-0 lg:pb-0"
      ref={ref}
    >
      <style>{`
        @keyframes floatHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(12px); }
        }
      `}</style>
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[100px]" aria-hidden="true" />

      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[42%_58%] lg:gap-12">

          {/* Left Column: Content */}
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
              }`}
          >
            <span className="section-label">Smart Solar Tech</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Powering Today,{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Securing Tomorrow
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Shiba Solar, the best solar panel installation in Patna, merges innovation with precision to provide smart solar solutions, maximising efficiency, minimizing energy costs, and building a sustainable future for homes, businesses, and industries.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Advanced Solar Panel Design</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Being the best solar company in Patna, we design our solar technology for optimal sunlight collection and reliability in any weather condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Seamless Grid Integration</h4>
                  <p className="mt-1 text-sm text-slate-500">With the best solar company in Patna, experience uninterrupted connection to the grid with easy net metering, which allows you to harness more solar energy and save big in the long run.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Eco-Friendly & Sustainable</h4>
                  <p className="mt-1 text-sm text-slate-500">As the best solar company in Patna, we help you go green and reduce your carbon footprint through sustainable solar technology that saves on your electricity bills too.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-10">
              <button
                onClick={openQuoteModal}
                className="inline-flex h-13 items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Get Started Now
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div> */}
          </div>

          {/* Right Column: Image */}
          <div
            className={`relative flex items-center justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out lg:translate-x-12 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
          >
            {/* Glowing Backdrop behind the solar rbg image */}
            <div className="absolute h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 opacity-45 blur-[70px]" aria-hidden="true" />

            {/* Floating Image Wrapper */}
            <div
              className="relative z-10 w-full max-w-xl lg:max-w-2xl pt-4 px-4 pb-0"
              style={{
                perspective: '1000px',
                animation: 'floatHorizontal 6s ease-in-out infinite'
              }}
            >
              <img
                src={solarRbg}
                alt="Shibha Solar Technology Showcase"
                className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(16,185,129,0.25)] transition-transform duration-[1500ms] ease-out hover:[transform:rotateY(360deg)] cursor-pointer"
                loading="lazy"
              />

              {/* Float-over badge */}
              {/* <div className="absolute bottom-10 -left-6 flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-4.5 shadow-xl backdrop-blur-sm sm:-left-10"> */}
              {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div> */}
              {/* <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Efficiency</p>
                  <p className="text-sm font-extrabold text-slate-800">100% Clean Energy</p>
                </div> */}
              {/* </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SmartSolar
