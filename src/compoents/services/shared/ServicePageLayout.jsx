import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuoteModal } from '../../../context/QuoteModalContext'

function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  overviewTitle,
  overviewText,
  overviewFeatures,
  overviewImage,
  howItWorks,
  benefits,
  specifications,
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { openQuoteModal } = useQuoteModal()

  return (
    <>
      {/* ── Hero Banner ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 pt-32 pb-20 text-white">
        <div className="absolute inset-0 -z-0 opacity-20">
          {heroImage && (
            <img
              src={heroImage}
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-emerald-950/90" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" aria-hidden="true" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]" aria-hidden="true" />

        <div className="site-container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-emerald-300/70">
              <li>
                <Link to="/" className="transition hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="transition hover:text-white cursor-default">Services</span>
              </li>
              <li aria-hidden="true">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white font-semibold">{title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-sm mb-5">
              {subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/80">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Free Quote
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <a
                href="tel:+919534668343"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ─────────────────────────── */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Overview</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {overviewTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
                {overviewText}
              </p>
              <ul className="mt-8 space-y-4">
                {overviewFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {overviewImage && (
                <div className="overflow-hidden rounded-2xl shadow-2xl shadow-emerald-100/40">
                  <img
                    src={overviewImage}
                    alt={overviewTitle}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-emerald-500/10 -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-teal-500/10 -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────── */}
      <section className="bg-slate-50 py-20 overflow-hidden">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="section-label">Process</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              How It{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 group">
                {/* Step number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-lg font-extrabold text-white shadow-lg shadow-emerald-500/25 mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                {/* Connector arrow (hidden on last item) */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-emerald-300">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────── */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="section-label">Advantages</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/60 bg-white p-7 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-100/30 hover:-translate-y-1 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ───────────────────────────── */}
      <section className="bg-slate-50 py-20 overflow-hidden">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="section-label">Technical Details</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              System{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Parameter</th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Details</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 transition-colors hover:bg-emerald-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────── */}
      <section id="contact-section" className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" aria-hidden="true" />
        <div className="site-container relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 backdrop-blur-sm">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Go Solar with{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              {title}?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            Get a free, no-obligation quote today. Our experts will design the perfect {title.toLowerCase()} system for your needs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+919534668343"
              className="inline-flex h-13 items-center justify-center rounded-lg bg-white px-7 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us Now
            </a>
            <Link
              to="/"
              className="inline-flex h-13 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-200/70">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Free Site Survey
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              No Hidden Costs
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              25-Year Warranty
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePageLayout
