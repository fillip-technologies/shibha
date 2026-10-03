import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar8 from '../../../assets/images/solar-8.jpg'
import install2 from '../../../assets/images/install-2.jpeg'
import install3 from '../../../assets/images/install-3.jpeg'

export default function PMSuryaGharFeatureCards() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-8 sm:py-12 bg-white relative z-20 mt-0 sm:-mt-10 lg:-mt-14">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Up to ₹98,000 Combined Subsidy */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={solar8}
                alt="PM Surya Ghar Subsidy Patna"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Up to ₹98,000 Total Subsidy
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Direct bank transfer: ₹78,000 Central financial assistance + ₹20,000 Bihar state government top-up support.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#subsidy-breakdown"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>View Subsidy Matrix</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: 300 Units Free Electricity (Highlighted Dark Green Card) */}
          <div className="rounded-3xl bg-[#064E3B] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install2}
                alt="Generate Free Electricity Patna"
                className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-[#6EE7B7] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-white tracking-tight">
                Up to 300 Units Free / Mo
              </h3>
              <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed font-normal">
                Harness every ray of sun on your roof to power air conditioners, pumps, and appliances while lowering power bills to zero.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6EE7B7] hover:text-white transition-colors group/link cursor-pointer"
              >
                <span>Check Your Home Capacity</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: Seamless DISCOM Net-Metering */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install3}
                alt="SBPDCL NBPDCL Net Metering Patna"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/75 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Hassle-Free Net-Metering
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                End-to-end liaison with SBPDCL / NBPDCL for bi-directional net meter installation, testing, and grid synchronization.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#what-we-offer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>Our Installation Services</span>
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
