import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import solar7 from '../../assets/images/solar-7.jpg'

function AboutCta() {
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
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <img
        src={solar7}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-950/95" />

      {/* Animated floating orbs */}
      <div className="absolute top-20 right-[20%] h-48 w-48 rounded-full bg-emerald-400/15 blur-[80px] animate-[float_7s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute bottom-20 left-[15%] h-40 w-40 rounded-full bg-teal-400/10 blur-[60px] animate-[float_9s_ease-in-out_infinite_1s]" aria-hidden="true" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div
        className={`site-container relative z-10 flex flex-col items-center py-28 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/20 text-emerald-300 backdrop-blur-xl">
          <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>

        <h2 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          Ready to Partner with{' '}
          <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
            Shibha Solar?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
          Thousands of satisfied customers have chosen Shibha Enterprises as the best solar company in Bihar for its unmatched quality. Be a part of the revolution and have a more sustainable future.

        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-xl transition-all hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Contact Us Today
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="tel:+919534668343"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Us Now
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-emerald-200/60">
          {[
            'MNRE Certified',
            '500+ Installations',
            '25-Year Warranty',
            '98% Satisfaction',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCta
