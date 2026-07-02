import { useEffect, useRef, useState } from 'react'
import solar5 from '../../assets/images/solar-5.jpg'
import solar8 from '../../assets/images/solar-8.jpg'

const timelineEvents = [
  { year: '2010', title: 'Founded', desc: 'Shibha Enterprises founded with a vision for clean energy' },
  { year: '2014', title: 'MNRE Certified', desc: 'Achieved MNRE certification & government empanelment' },
  { year: '2018', title: '100+ Installations', desc: 'Crossed 100 residential & commercial installations' },
  { year: '2022', title: '500+ Projects', desc: 'Scaled to 500+ projects and 12 MW deployed capacity' },
  { year: '2025', title: 'Industry Leader', desc: 'Recognized as one of North India\'s top solar providers' },
]

function OurStory() {
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
    <section className="overflow-hidden bg-white py-28" ref={ref}>
      <div className="site-container">
        {/* Top: Image gallery + Story text */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage side */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-200/30">
                <img
                  src={solar5}
                  alt="Shibha Solar team at a rooftop installation"
                  className="h-auto w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
              </div>

              {/* Overlapping second image */}
              <div className="absolute -bottom-8 -right-6 w-[45%] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  src={solar8}
                  alt="Completed solar panel installation"
                  className="h-auto w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -top-5 -left-5 rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-xl shadow-emerald-100/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900">15<span className="text-emerald-500">+</span></p>
                    <p className="text-xs font-semibold text-slate-500">Years of Excellence</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-10 -bottom-10 -z-10 h-40 w-40 rounded-full bg-emerald-100/60" aria-hidden="true" />
              <div className="absolute -right-8 top-8 -z-10 h-24 w-24 rounded-2xl bg-teal-100/40 rotate-12" aria-hidden="true" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
          >
            <span className="section-label">Our Story</span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Building a{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Sustainable Tomorrow
              </span>
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
                Founded with a vision to make clean energy accessible to every Indian household, Shibha Enterprises
                began its journey in the heart of India's solar boom. What started as a small team of passionate
                engineers has grown into one of the most trusted solar energy companies in North India.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                Over the past 15 years, we have installed thousands of solar systems across residential, commercial,
                and industrial segments — earning the trust of 500+ customers with our commitment to quality
                and innovation.
              </p>
            </div>

            {/* Key stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '12 MW', label: 'Deployed' },
                { value: '500+', label: 'Installations' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-emerald-50/50 p-5 text-center transition-all duration-500 hover:shadow-lg hover:shadow-emerald-100/40 hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <p className="text-2xl font-black text-emerald-600 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Timeline */}
        <div className={`mt-28 transition-all duration-1000 delay-400 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Our Journey</span>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              From Startup to{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Industry Leader
              </span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 hidden md:block" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {timelineEvents.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative text-center transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/30 ring-4 ring-white relative z-10">
                    {event.year}
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-slate-900">{event.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
