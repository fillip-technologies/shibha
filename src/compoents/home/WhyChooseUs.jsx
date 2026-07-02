import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    title: 'Experienced & Trained Team',
    description: 'Highly skilled team of engineers and technicians certified for solar installations and safety compliance, ensuring precision work.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'High-Quality Materials',
    description: 'We procure only ALMM-approved solar modules, smart high-efficiency inverters, and heavy-duty galvanized structural mounts.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'On-Time Project Completion',
    description: 'Structured workflows, swift procurement, and efficient execution to ensure your system is commissioned exactly on schedule.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest calculations, detailed quotations, and zero hidden charges, ensuring complete clarity on capital cost estimates.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-6 2h6m-6 2h6m-6 2h6m-6 2h6M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: 'Complete Subsidy & Net Metering Support',
    description: 'End-to-end management of registry uploads, DISCOM approvals, billing adjustments, and government portal subsidy claims.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction as Priority',
    description: 'We offer reliable after-sales support, custom cleaning advice, and rapid response times for any query.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function WhyChooseUs() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="overflow-hidden bg-white py-28" ref={ref}>
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Sticky Stats Panel (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 p-8 sm:p-10 text-white border border-slate-800 shadow-2xl shadow-emerald-950/20">
              {/* Blur decorative light */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-[60px]" aria-hidden="true" />
              
              <span className="section-label-dark">About Shibha Enterprises</span>
              
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white leading-tight">
                The Trusted Choice for{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Solar Excellence
                </span>
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                We combine deep technical expertise with premium ALMM materials and comprehensive net metering support to deliver solar solutions that perform year after year.
              </p>

              {/* Stats Block */}
              <div className="mt-8 pt-8 border-t border-slate-800 space-y-6">
                <div>
                  <p className="text-3xl font-black text-emerald-400">15+</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Years of Industry Presence</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-emerald-400">500+</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Successful Installations</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-emerald-400">98%</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="max-w-2xl">
              <span className="section-label">Why Choose Us</span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Delivering Value at Every Step
              </h3>
            </div>

            <div className="mt-8 space-y-2">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`group flex gap-5 items-start p-5 rounded-3xl border border-transparent hover:border-emerald-500/10 hover:bg-emerald-50/20 transition-all duration-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Icon wrapper */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/20">
                    {reason.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                      {reason.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 max-w-xl">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
