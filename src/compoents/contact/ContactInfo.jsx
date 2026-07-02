import { useEffect, useRef, useState } from 'react'

const contactCards = [
  {
    title: 'Visit Our Office',
    description: 'Shibha Enterprises, Bihar, India',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    actionLabel: 'Bihar, India',
    actionHref: 'https://maps.google.com',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Call Us',
    description: 'Mobile: +91 95346 68343 / 95346 68345 | Telephone: 0612-3160223',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    actionLabel: 'Call Mobile',
    actionHref: 'tel:+919534668343',
    gradient: 'from-teal-500 to-emerald-600',
  },
  {
    title: 'Email Us',
    description: 'Send us a detailed inquiry and we will respond within 24 business hours.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    actionLabel: 'info@shibhaenterprises.com',
    actionHref: 'mailto:info@shibhaenterprises.com',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    title: 'Working Hours',
    description: 'Monday — Saturday: 9:00 AM — 6:00 PM. Sunday: Closed.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    actionLabel: 'Schedule a Visit',
    actionHref: '#contact-form',
    gradient: 'from-emerald-600 to-teal-500',
  },
]

function ContactInfo() {
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
      {/* Decorative */}
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
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-label-dark">Reach Out</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Multiple Ways to{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Choose the way that works best for you. We're always happy to hear from you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-700 ease-out hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Gradient top accent on hover */}
              <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r ${card.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {card.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{card.description}</p>

              {card.actionHref && (
                <a
                  href={card.actionHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300 group/link"
                  target={card.actionHref.startsWith('http') ? '_blank' : undefined}
                  rel={card.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {card.actionLabel}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}

              {/* Bottom glow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-12 w-24 rounded-full bg-emerald-500/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
