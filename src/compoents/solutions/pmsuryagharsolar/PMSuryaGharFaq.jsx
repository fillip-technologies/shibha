import { useState } from 'react'

const pmsuryaFaqs = [
  {
    q: '1. What is PM Surya Ghar Solar Installation in Patna?',
    a: 'PM Surya Ghar Solar Installation in Patna enables eligible households to install rooftop solar under the PM Surya Ghar: Muft Bijli Yojana and access applicable government financial assistance.',
  },
  {
    q: '2. Who can benefit from PM Surya Ghar Solar Installation in Patna?',
    a: 'Eligible residential electricity consumers can apply for rooftop solar support under the scheme, subject to the applicable guidelines.',
  },
  {
    q: '3. How much subsidy is available under PM Surya Ghar Yojana?',
    a: 'Eligible households can receive central financial assistance of up to ₹78,000, along with applicable Bihar state assistance.',
  },
  {
    q: '4. Can I receive up to ₹98,000 for rooftop solar in Bihar?',
    a: 'Eligible consumers may receive up to ₹98,000 in combined central and Bihar state assistance, subject to applicable scheme conditions.',
  },
  {
    q: '5. What does a PM Surya Ghar Yojana Vendor in Patna do?',
    a: 'A PM Surya Ghar Yojana Vendor in Patna can assist with system design, installation, documentation, and applicable grid-connection procedures.',
  },
  {
    q: '6. How do I choose a PM Surya Ghar Yojana Vendor in Patna?',
    a: 'Choose a vendor familiar with rooftop solar installation, scheme procedures, system design, installation standards, and applicable DISCOM requirements.',
  },
  {
    q: '7. What size solar system should I install?',
    a: 'The appropriate capacity for PM Surya Ghar Solar Installation in Patna depends on your electricity consumption, sanctioned load, rooftop space, and energy requirements.',
  },
  {
    q: '8. Does PM Surya Ghar Solar Installation in Patna include net metering?',
    a: 'Eligible grid-connected rooftop systems can undergo the applicable net-metering process as prescribed by the concerned electricity distribution utility.',
  },
  {
    q: '9. Can a PM Surya Ghar Yojana Vendor in Patna help with net metering?',
    a: 'Yes, a PM Surya Ghar Yojana Vendor in Patna can provide guidance and assistance with the applicable net-metering and grid-connection process.',
  },
  {
    q: '10. What is required before installing rooftop solar?',
    a: 'A rooftop assessment, electricity-consumption review, suitable system design, and completion of the applicable application and approval procedures are generally required.',
  },
  {
    q: '11. How long does PM Surya Ghar Solar Installation in Patna take?',
    a: 'Installation time depends on system size, site conditions, approvals, equipment availability, and the applicable DISCOM process.',
  },
  {
    q: '12. How can I get started with PM Surya Ghar Solar Installation in Patna?',
    a: 'Start with a professional rooftop and energy assessment to determine your suitable system capacity, applicable assistance, and installation requirements.',
  },
]

export default function PMSuryaGharFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAF9] border-t border-emerald-100/80 overflow-hidden">
      <div className="site-container max-w-4xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Find clear answers to key questions about PM Surya Ghar Solar Installation in Patna, subsidies up to ₹98,000, eligibility, and net metering.
          </p>
        </div>

        <div className="space-y-3.5">
          {pmsuryaFaqs.map((faq, idx) => {
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
