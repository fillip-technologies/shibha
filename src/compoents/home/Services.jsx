import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Free Site Survey',
    description: 'Detailed on-site feasibility study, roof structural assessment, and load profiling by our expert engineers to plan the perfect solar setup.',
    colSpan: 'lg:col-span-2 md:col-span-2',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Solar Design & Engineering',
    description: 'Custom 3D CAD modeling, shading analysis, and optimized electrical diagrams.',
    colSpan: 'lg:col-span-1 md:col-span-1',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'ALMM Approved Panels',
    description: 'Procurement of premium, government-certified solar modules for longevity.',
    colSpan: 'lg:col-span-1 md:col-span-1',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'High-Efficiency On-Grid Systems',
    description: 'Advanced grid-connected solar solutions designed to optimize net power export and minimize bills.',
    colSpan: 'lg:col-span-1 md:col-span-1',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Net Metering Assistance',
    description: 'Hassle-free DISCOM registrations, bi-directional net meter testing, and final connection.',
    colSpan: 'lg:col-span-1 md:col-span-1',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'PM Surya Ghar Subsidy Support',
    description: 'End-to-end national portal application, document verification, and tracking to secure your subsidy directly in your bank account with zero friction.',
    colSpan: 'lg:col-span-2 md:col-span-2',
    highlight: true,
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Installation & Commissioning',
    description: 'Safe, premium-quality physical mounting and electrical commissioning by trained technicians adhering to strict standards.',
    colSpan: 'lg:col-span-2 md:col-span-2',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'After-Sales Service & Support',
    description: 'Proactive system performance health checks, panel cleaning guidance, and prompt warranty handling.',
    colSpan: 'lg:col-span-2 md:col-span-2',
    highlight: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

function Services() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="bg-slate-50/50 py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-100/20 blur-[120px]" aria-hidden="true" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="section-label">Our Offerings</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Complete Solar{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            From design to commissioning and subsidy approval, we handle every detail to ensure you go solar with confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 ${
                service.highlight
                  ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white border border-slate-800 shadow-xl shadow-emerald-950/15'
                  : 'bg-white border border-slate-100 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5'
              } ${service.colSpan} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: `${i * 75}ms`,
              }}
            >
              {/* Highlight background light blur */}
              {service.highlight && (
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-[50px] pointer-events-none" aria-hidden="true" />
              )}

              <div>
                {/* Icon wrapper */}
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                  service.highlight
                    ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30'
                    : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30'
                }`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-lg font-bold transition-colors duration-300 ${
                  service.highlight
                    ? 'text-white group-hover:text-emerald-400'
                    : 'text-slate-900 group-hover:text-emerald-700'
                }`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`mt-3 text-xs leading-relaxed ${
                  service.highlight ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
