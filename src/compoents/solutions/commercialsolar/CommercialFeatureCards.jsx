import { useQuoteModal } from '../../../context/QuoteModalContext'
import install3 from '../../../assets/images/install-3.jpeg'
import install5 from '../../../assets/images/install-5.jpeg'
import solar4 from '../../../assets/images/solar-4.jpg'

export default function CommercialFeatureCards() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-8 sm:py-12 bg-white relative z-20 mt-0 sm:-mt-10 lg:-mt-14">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Commercial Buildings & Offices */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install3}
                alt="Commercial Buildings & Offices Solar"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Commercial Buildings
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Offices, retail complexes, and commercial towers. Turn unused rooftop space into a power-generating asset that offsets power costs.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#commercial-planning"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>Learn More</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Schools & Campuses (Highlighted Green Card) */}
          <div className="rounded-3xl bg-[#064E3B] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={solar4}
                alt="School and Institutional Campus Solar"
                className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-[#6EE7B7] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-white tracking-tight">
                Schools & Campuses
              </h3>
              <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed font-normal">
                Academic institutions, colleges, and university campuses. Sustainable energy systems engineered around your operating patterns.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6EE7B7] hover:text-white transition-colors group/link cursor-pointer"
              >
                <span>Plan Campus Solar</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: Hospitals & Healthcare (Critical Backup & Hybrid) */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install5}
                alt="Hospital Solar Installation"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Hospitals & Healthcare
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Reliable solar systems with hybrid battery storage or Solar-DG sync for critical loads and uninterrupted healthcare operations.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#commercial-contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>Request Assessment</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
