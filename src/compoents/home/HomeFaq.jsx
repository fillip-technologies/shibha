import { useState } from 'react'

const faqsList = [
  {
    q: '1. Why is Shibha Enterprises considered the Best Solar Company in Patna?',
    a: 'Shibha Enterprises is recognized as the Best Solar Company in Patna for delivering premium solar solutions, expert installations, quality components, and exceptional after-sales support for residential, commercial, and industrial projects.',
  },
  {
    q: '2. What types of solar solutions do you provide?',
    a: 'We offer complete solar solutions, including on-grid, off-grid, hybrid, residential, commercial, and industrial solar systems, tailored to meet your specific energy requirements.',
  },
  {
    q: '3. How much can I save by installing a solar system?',
    a: 'Your savings depend on your electricity consumption and system capacity. A professionally installed solar system can significantly reduce monthly electricity bills while providing long-term returns on investment.',
  },
  {
    q: '4. Do you provide government subsidy assistance?',
    a: 'Yes. We assist eligible customers with the PM Surya Ghar Muft Bijli Yojana and other applicable rooftop solar subsidy programs, making the installation process smooth and hassle-free.',
  },
  {
    q: '5. Why should I choose the Best Solar Company in Patna for my project?',
    a: 'Choosing the Best Solar Company in Patna ensures high-quality equipment, certified installation, expert consultation, reliable performance, and comprehensive after-sales service for long-term peace of mind.',
  },
  {
    q: '6. Do you offer solar solutions for commercial and industrial businesses?',
    a: 'Absolutely. We design and install customized commercial and industrial solar systems that help businesses reduce operational costs, improve energy efficiency, and achieve sustainability goals.',
  },
  {
    q: '7. How long does a solar installation take?',
    a: 'Most residential installations are completed within a few days after site inspection and approval. Larger commercial and industrial projects are scheduled according to project size and technical requirements.',
  },
  {
    q: '8. Are your solar systems covered under warranty?',
    a: 'Yes. We use premium Tier-1 components backed by manufacturer warranties, along with professional installation to ensure reliable performance and long-term durability.',
  },
  {
    q: '9. How do I know which solar system is right for my property?',
    a: 'Our experts conduct a detailed site survey and energy assessment to recommend the most efficient solar solution based on your energy consumption, roof space, and budget.',
  },
  {
    q: '10. Does Shibha Enterprises provide maintenance and after-sales support?',
    a: 'Yes. As the Best Solar Company in Patna, we offer dedicated maintenance, performance monitoring, and prompt technical support to keep your solar system operating at peak efficiency.',
  },
  {
    q: '11. How can I get a free solar consultation or quotation?',
    a: 'Simply contact Shibha Enterprises to schedule a free consultation and site survey. Our specialists will evaluate your requirements and provide a customized solar solution with a transparent, no-obligation quotation.',
  },
]

function HomeFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
      <div className="site-container max-w-4xl">
        <div className="text-center mb-16">
          <span className="section-label">FAQs</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Got questions about solar installation, subsidies, or pricing? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-emerald-500 bg-emerald-50/10 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 select-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 border-t border-slate-200/60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 text-sm leading-relaxed text-slate-500">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
