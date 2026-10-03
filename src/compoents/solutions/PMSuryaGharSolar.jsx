import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuoteModal } from '../../context/QuoteModalContext'

function PMSuryaGharSolar() {
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
              <li className="text-white">PM Surya Ghar Solar</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-4">
              PM Surya Ghar: Muft Bijli Yojana
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PM Surya Ghar Solar Scheme
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
              Get up to ₹78,000 direct central government subsidy on residential rooftop solar installations. Shibha Enterprises is an authorized partner handling your portal registration, DISCOM approvals, and seamless subsidy disbursement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                Apply for Subsidy
              </button>
              <Link
                to="/#subsidy-scheme"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 text-sm font-bold backdrop-blur-sm transition-all"
              >
                View Rate Calculator
              </Link>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct DBT Subsidy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Central financial assistance credited straight to your bank account: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW and above.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">100% Hassle-Free Filing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We handle the National Rooftop Solar portal documentation, electricity bill verification, and DISCOM net meter processing for you.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">300 Units Free Power</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Produce up to 300 units of free clean electricity every month, dropping your monthly electric utility bills down to zero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PMSuryaGharSolar
