import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuoteModal } from '../../context/QuoteModalContext'

function CommercialSolar() {
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
              <li className="text-white">Commercial Solar</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-4">
              Offices, Hospitals, Schools & Malls
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Commercial Solar Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
              Turn unused commercial rooftop space into an active revenue-saving asset. Drastically reduce peak commercial tariff expenditures and achieve sustainability milestones.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                Request Commercial Audit
              </button>
              <a
                href="tel:+919534668343"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 text-sm font-bold backdrop-blur-sm transition-all"
              >
                Call Commercial Team
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 002.25 18h19.5a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0021.75 6H21a.75.75 0 01-.75-.75V4.5m-18 0A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5m-18 0h18" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accelerated Depreciation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Take advantage of tax incentives and up to 40% accelerated depreciation benefits for commercial solar investments.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Payback Period</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                High commercial tariff rates yield typical system payback in just 3 to 4 years, delivering free electricity thereafter.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industrial Grade Infrastructure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heavy duty hot-dip galvanized mounting structures and remote cloud SCADA telemetry for real-time yield monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommercialSolar
