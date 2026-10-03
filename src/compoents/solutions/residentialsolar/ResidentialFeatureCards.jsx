import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar8 from '../../../assets/images/solar-8.jpg'
import install1 from '../../../assets/images/install-1.jpeg'
import solar7 from '../../../assets/images/solar-7.jpg'

export default function ResidentialFeatureCards() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-8 sm:py-12 bg-white relative z-20 mt-0 sm:-mt-10 lg:-mt-14">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Residential Solar (Light Card) */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            {/* Background Image on Right with Smooth Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={solar8}
                alt="Residential Solar Home"
                className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/70 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              {/* Sun Icon */}
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Residential Solar
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Clean energy for your home. Reduce your power bills by up to 90% and increase your property value.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#solar-planning"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link"
              >
                <span>Learn More</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: PM Surya Ghar Subsidy (Highlighted Dark Green Card) */}
          <div className="rounded-3xl bg-[#064E3B] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            {/* Background Image on Right with Smooth Dark Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={install1}
                alt="Solar Rooftop Installation"
                className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              {/* Subsidy / Building Icon */}
              <div className="h-10 w-10 rounded-full bg-emerald-900/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.75a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5V21" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-white tracking-tight">
                PM Surya Ghar Subsidy
              </h3>
              <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed font-normal">
                Claim up to ₹78,000 direct central government subsidy credited straight to your bank account.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <a
                href="#residential-contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6EE7B7] hover:text-white transition-colors group/link"
              >
                <span>Learn More</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Solar Consultation (Light Card) */}
          <div className="rounded-3xl bg-[#F4FAF6] border border-emerald-100/80 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[220px] group">
            {/* Background Image on Right with Smooth Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src={solar7}
                alt="Solar Consultation and Engineering"
                className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAF6] via-[#F4FAF6]/70 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[65%] sm:max-w-[70%]">
              {/* Solar Panel Icon */}
              <div className="h-10 w-10 rounded-full bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>

              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Solar Consultation
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Get expert advice and a custom plan tailored to your roof, energy load, and shadow analysis.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-2">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors group/link cursor-pointer"
              >
                <span>Learn More</span>
                <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
