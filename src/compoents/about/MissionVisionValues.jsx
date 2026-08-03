import { useEffect, useRef, useState } from 'react'

const items = [
  {
    title: 'Our Mission',
    description:
      'Enable homes, companies, and industries with pioneering, dependable, and cost-effective solar technologies that promote the adoption of renewable energy and create energy independence.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    accentColor: 'emerald',
    number: '01',
  },
  {
    title: 'Our Vision',
    description:
      'To be the best solar company in Bihar and a trustworthy solar energy provider through innovations in sustainability, setting new standards in quality, and ensuring a better future for generations to come.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accentColor: 'teal',
    number: '02',
  },
  {
    title: 'Our Values',
    description:
      'Integrity, Innovation, Quality, and Customer Trust are the cornerstones of our company. We value transparency in our services, strive for excellence in everything we do, and build enduring relationships through each of our projects.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accentColor: 'green',
    number: '03',
  },
]

function MissionVisionValues() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 py-28 overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-label-dark">What Drives Us</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Mission, Vision &{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            As the best solar company in Bihar,  our mission, vision, and values reflect our company ethics, guiding us in everything we do.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-700 ease-out hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 text-[80px] font-black text-white/[0.03] leading-none select-none" aria-hidden="true">
                {item.number}
              </span>

              {/* Gradient top border on hover */}
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{item.description}</p>

              {/* Bottom decorative glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-16 w-32 rounded-full bg-emerald-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues
