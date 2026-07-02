import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: 'STEP 01',
    title: 'Free Site Survey',
    description: 'Our engineers visit your property for a thorough assessment of roof structure, shading, orientation, and energy requirements.',
    icon: SurveyIcon,
  },
  {
    number: 'STEP 02',
    title: 'Custom System Design',
    description: 'We design a tailored solar system optimized for your specific energy consumption patterns, budget, and aesthetic preferences.',
    icon: DesignIcon,
  },
  {
    number: 'STEP 03',
    title: 'Professional Installation',
    description: 'Certified technicians install your system with precision and care, following all safety codes and manufacturer guidelines.',
    icon: InstallationIcon,
  },
  {
    number: 'STEP 04',
    title: 'Monitoring & Support',
    description: 'Real-time performance monitoring and dedicated support ensure your system delivers optimal energy output for decades.',
    icon: SupportIcon,
  },
]

function Process() {
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
    <section className="bg-slate-950 py-28 relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            How It Works
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Four Simple Steps to <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Solar Power</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-2xl mx-auto">
            Our streamlined process makes going solar effortless. From survey to switch-on, we guide you every step of the way.
          </p>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col items-center text-center group transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step Circle with Icon */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-slate-900/60 text-emerald-400 shadow-lg shadow-emerald-950/50 transition-all duration-300 group-hover:border-emerald-400/50 group-hover:bg-slate-900 group-hover:scale-105">
                <step.icon />
              </div>

              {/* Connecting Horizontal Arrow (only on desktop and not for the last step) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-8 left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] items-center justify-center" aria-hidden="true">
                  <svg className="h-4 w-4 text-emerald-500/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Step Number Tag */}
              <span className="mt-8 text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="mt-3 text-lg font-bold text-white tracking-wide">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-3 text-xs leading-relaxed text-slate-400 px-4 md:px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Inline SVG Icons ---------- */
function SurveyIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  )
}

function InstallationIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L20 4v16H4z" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
    </svg>
  )
}

export default Process
