import { useQuoteModal } from '../../../context/QuoteModalContext'
import install1 from '../../../assets/images/install-1.jpeg'
import install7 from '../../../assets/images/install-7.jpeg'
import solar7 from '../../../assets/images/solar-7.jpg'

export default function IndustrialFeatureCards() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-8 sm:py-12 bg-white relative z-20 mt-0 sm:-mt-10 lg:-mt-14">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Manufacturing & Heavy Industry */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install1}
                alt="Manufacturing Plant Industrial Solar"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.315-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l5.234-4.306a2.548 2.548 0 00-3.586-3.586l-4.306 5.234m0 0l-3.03 2.496" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Factories & Manufacturing
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                High-voltage captive power for heavy induction motors, continuous assembly lines, and industrial CNC fabrication.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#industrial-overview"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>Explore Technical Architecture</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Cold Storage & Agro-Processing (Highlighted Dark Green Card) */}
          <div className="rounded-3xl bg-[#064E3B] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={solar7}
                alt="Cold Storage and Agro Industrial Solar"
                className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-[#6EE7B7] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-white tracking-tight">
                Cold Chains & Agro Plants
              </h3>
              <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed font-normal">
                Continuous refrigeration and massive daytime chilling loads offset with zero-drop Solar-DG synchronization.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6EE7B7] hover:text-white transition-colors group/link cursor-pointer"
              >
                <span>Plan Cold Storage Solar</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: Warehousing & Logistical Hubs */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install7}
                alt="Warehousing and PEB Rooftop Solar"
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
                Warehouses & Logistics
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Turn sprawling PEB metal roofs into high-yield power assets with zero-puncture standing-seam mounting clamps.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#industrial-sizes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>View Megawatt Sizing</span>
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
