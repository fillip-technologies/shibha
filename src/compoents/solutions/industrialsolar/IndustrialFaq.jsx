import { useState } from 'react'

const industrialFaqs = [
  {
    q: '1. What are Industrial Solar Solutions in Patna?',
    a: 'Industrial Solar Solutions in Patna are large-scale solar power systems designed for factories, warehouses, cold storage facilities, manufacturing units, and other energy-intensive industrial properties.',
  },
  {
    q: '2. Can Industrial Solar Solutions in Patna reduce industrial electricity costs?',
    a: 'Yes, a properly designed solar system can help industries generate electricity on-site and potentially reduce their dependence on grid power.',
  },
  {
    q: '3. What types of industries can use industrial solar?',
    a: 'Manufacturing units, warehouses, cold storage facilities, processing plants, factories, and large industrial facilities can utilise industrial solar systems.',
  },
  {
    q: '4. How is the capacity of an industrial solar system determined?',
    a: 'The appropriate capacity depends on electricity consumption, peak loads, operating hours, available rooftop or land area, and the project’s energy objectives.',
  },
  {
    q: '5. Are Industrial Solar Solutions in Patna suitable for heavy power loads?',
    a: 'Yes, industrial solar systems can be engineered for substantial energy requirements, including facilities with significant machinery and compressor loads.',
  },
  {
    q: '6. Can solar power be installed on an industrial warehouse?',
    a: 'Yes, large warehouse rooftops can provide valuable space for high-capacity solar installations when structural and site conditions are suitable.',
  },
  {
    q: '7. What solar panels are used for industrial installations?',
    a: 'Depending on project requirements, Industrial Solar Solutions in Patna can incorporate high-efficiency mono PERC, bifacial, or other suitable photovoltaic technologies.',
  },
  {
    q: '8. What are bifacial solar panels?',
    a: 'Bifacial panels can generate electricity from sunlight received on both sides of the module, making them suitable for certain ground-mounted industrial and solar-farm applications.',
  },
  {
    q: '9. Can industrial solar farms use tracking systems?',
    a: 'Yes, suitable large-scale solar farms can incorporate tracking systems designed to adjust panel orientation according to the sun’s position.',
  },
  {
    q: '10. Do Industrial Solar Solutions in Patna require DISCOM approval?',
    a: 'Grid-connected industrial projects may require applicable DISCOM approvals, inspections, and grid-connection procedures depending on the project and connection arrangement.',
  },
  {
    q: '11. How much can an industrial solar system save?',
    a: 'Savings depend on system capacity, electricity consumption, tariff structure, solar generation, operating conditions, and the applicable grid arrangement.',
  },
  {
    q: '12. How can I get started with Industrial Solar Solutions in Patna?',
    a: 'Begin with a professional site and energy assessment to determine the suitable solar capacity, technology, installation requirements, and expected project performance.',
  },
]

export default function IndustrialFaq() {
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
            Find answers to common questions about industrial solar solutions in Patna, heavy loads, bifacial modules, tracking systems, and DISCOM approvals.
          </p>
        </div>

        <div className="space-y-3.5">
          {industrialFaqs.map((faq, idx) => {
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
