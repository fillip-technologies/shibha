import { useState } from 'react'

const faqs = [
  {
    q: 'How much subsidy will I get for my residential rooftop solar plant?',
    a: 'Under the PM Surya Ghar: Muft Bijli Yojana, residential consumers receive direct DBT subsidies into their bank accounts: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and higher systems. Shibha Solar manages the entire portal upload and verification process for you.',
  },
  {
    q: 'How does Net Metering work with SBPDCL and NBPDCL in Bihar?',
    a: 'A bi-directional smart net meter replaces your traditional utility meter. When your solar panels generate more electricity than your home consumes during daytime, excess units are exported to the grid. At night, you draw power back from the grid. You are only billed for the net difference.',
  },
  {
    q: 'Will my solar system power my house during a grid power cut?',
    a: 'A standard Grid-Tied (On-Grid) system shuts off automatically during power outages for lineman safety (anti-islanding). If power backup is essential for your home, we recommend our Hybrid Solar System, which integrates lithium batteries to keep your fans, lights, and appliances running continuously even during blackout hours.',
  },
  {
    q: 'How much roof space do I need for a 3 kW or 5 kW system?',
    a: 'You need approximately 80 to 100 square feet of shadow-free roof area per kilowatt (kW). For a 3 kW system, you need roughly 250 to 300 sq. ft., and for a 5 kW system, around 450 to 500 sq. ft.',
  },
  {
    q: 'What maintenance does a residential solar system need?',
    a: 'Solar modules have zero moving parts and require minimal maintenance. Rinsing the panel surfaces with clean water every 2 to 3 weeks to wash off dust and bird droppings ensures optimal sunlight absorption and maximum energy output.',
  },
  {
    q: 'How long does the installation and commissioning take?',
    a: 'The physical mounting and electrical installation of a residential rooftop solar system is usually completed within 2 to 3 days. DISCOM net meter inspection and portal subsidy approval typically take an additional 2 to 4 weeks depending on local electricity board schedules.',
  },
]

export default function ResidentialFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <div className="site-container max-w-4xl">
        <div className="text-center mb-16">
          <span className="section-label">Common Questions</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Residential Solar{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Everything you need to know about rooftop solar installation, net metering, and subsidies for your home.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50/50 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </div>
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
