import { useState } from 'react'

const commercialFaqs = [
  {
    q: '1. What is Commercial Solar Installation in Patna?',
    a: 'Commercial Solar Installation in Patna involves designing and installing solar power systems for businesses, institutions, hospitals, schools, and other commercial properties.',
  },
  {
    q: '2. Can solar reduce electricity costs for commercial properties?',
    a: 'Yes, a properly sized commercial solar system can reduce the amount of electricity a property needs to purchase from the grid.',
  },
  {
    q: '3. What types of businesses can use commercial solar?',
    a: 'Offices, hospitals, schools, hotels, factories, retail spaces, warehouses, and other commercial facilities can benefit from solar power.',
  },
  {
    q: '4. How is the right commercial solar system size determined?',
    a: 'The ideal capacity depends on electricity consumption, available installation space, operating patterns, and the property’s energy requirements.',
  },
  {
    q: '5. Is Commercial Solar Installation in Patna suitable for large buildings?',
    a: 'Yes, commercial solar systems can be scaled for multi-storey buildings, institutional campuses, and other properties with significant energy demand.',
  },
  {
    q: '6. Can commercial solar provide backup power during outages?',
    a: 'A hybrid solar system with suitable battery storage can provide backup power for selected loads during grid outages.',
  },
  {
    q: '7. What is the difference between grid-tied and hybrid solar?',
    a: 'Grid-tied systems work with the utility grid, while hybrid systems can combine solar, grid electricity, and battery storage for additional backup capability.',
  },
  {
    q: '8. Can a hospital benefit from Commercial Solar Installation in Patna?',
    a: 'Yes, hospitals can use solar to reduce energy costs, while hybrid systems with battery backup can support critical loads during power interruptions.',
  },
  {
    q: '9. Does commercial solar require regular maintenance?',
    a: 'Yes, periodic inspection, cleaning, electrical checks, and system monitoring help maintain safe and efficient operation.',
  },
  {
    q: '10. Can solar system performance be monitored remotely?',
    a: 'Yes, compatible commercial solar systems can include cloud-based monitoring to provide visibility into generation and system performance.',
  },
  {
    q: '11. Does Commercial Solar Installation in Patna support net metering?',
    a: 'Where permitted and approved by the relevant electricity utility, eligible systems may be connected under applicable net-metering regulations.',
  },
  {
    q: '12. How can I start a Commercial Solar Installation in Patna?',
    a: 'Begin with a professional site and energy assessment to determine the suitable system capacity, technology, and installation requirements.',
  },
]

export default function CommercialFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-[#F8FAF9] border-t border-emerald-100/80 overflow-hidden">
      <div className="site-container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about commercial solar installation in Patna, system sizing, hybrid options, and net metering.
          </p>
        </div>

        <div className="space-y-3.5">
          {commercialFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#064E3B] text-[#6EE7B7] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-[#FAFCFB]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
