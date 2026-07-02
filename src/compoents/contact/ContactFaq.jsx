import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    question: 'How much does a solar panel system cost?',
    answer:
      'A typical 3kW residential system starts around ₹1.5-2.5 lakhs before subsidies. Under PM Surya Ghar Yojana, you may receive up to ₹78,000 in subsidies, significantly reducing your net cost. Contact us for a free, detailed quote tailored to your roof and usage.',
  },
  {
    question: 'How long does solar panel installation take?',
    answer:
      'A standard residential installation takes 2-3 days after site survey and system design. Commercial projects may take 1-3 weeks depending on scale. Our team handles everything — permits, design, installation, and grid connection.',
  },
  {
    question: 'Do solar panels work during monsoon or cloudy weather?',
    answer:
      'Yes! Solar panels generate electricity even on cloudy days, though output may be reduced to 25-50% of peak. Modern panels with advanced cell technology perform well in low-light conditions. Our system designs factor in regional climate data for optimal annual performance.',
  },
  {
    question: 'What maintenance do solar panels require?',
    answer:
      'Solar panels require minimal maintenance — periodic cleaning (2-4 times/year) to remove dust. We offer annual maintenance contracts including panel cleaning, inverter checks, wiring inspection, and performance monitoring.',
  },
  {
    question: 'How does net metering work?',
    answer:
      'Net metering lets you export excess electricity to the grid. Your meter runs backward when exporting, giving you credits. You only pay for the net difference. We handle the entire net metering application process for you.',
  },
  {
    question: 'What warranty coverage do you provide?',
    answer:
      'We provide a 25-year performance warranty on panels, 5-10 year warranty on inverters, and 5-year workmanship warranty. Our after-sales team is available throughout the warranty period for any assistance.',
  },
]

function ContactFaq() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)

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
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-28 overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-[80px]" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-teal-100/30 blur-[60px]" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Everything you need to know about going solar. Can't find the answer? Contact our team.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-700 ease-out ${
                  isOpen ? 'border-emerald-200 shadow-xl shadow-emerald-100/40' : 'border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                      isOpen
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-sm font-bold transition-colors sm:text-base ${isOpen ? 'text-emerald-700' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? 'bg-emerald-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-transparent px-7 py-6 pl-19">
                    <p className="text-sm leading-relaxed text-slate-600 ml-12">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-sm text-slate-500 mb-4">Still have questions?</p>
          <a
            href="tel:+919534668343"
            className="group inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Talk to our solar expert
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactFaq
