import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuoteModal } from '../../context/QuoteModalContext'

function IndustrialSolar() {
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16 bg-white min-h-[70vh]">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" aria-hidden="true" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]" aria-hidden="true" />

        <div className="site-container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300/70">
              <li>
                <Link to="/" className="transition hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-emerald-300">Solutions</li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Industrial Solar</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-4">
              Factories, Plants, Warehouses & Cold Storages
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industrial Solar Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
              High-megawatt rooftop and ground-mounted solar power plants tailored for intensive manufacturing, heavy industry, cold chains, and logistical complexes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                Schedule Feasibility Study
              </button>
              <a
                href="tel:+919534668343"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 text-sm font-bold backdrop-blur-sm transition-all"
              >
                Industrial Project Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">High Capacity Scale</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered from 100 kW to multi-megawatt setups with central inverters, HT net metering, and HT step-up transformers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.315-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l5.234-4.306a2.548 2.548 0 00-3.586-3.586l-4.306 5.234m0 0l-3.03 2.496" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Turnkey EPC Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete engineering, procurement, statutory DISCOM approvals, civil works, and testing handled under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Operational Cost Reduction</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protect operating margins against industrial grid tariff surges and diesel generator fuel expenses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustrialSolar
