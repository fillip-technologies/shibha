import { useState } from 'react'

const faqsList = [
  {
    q: '1. Why is Shibha Enterprises known as the Best Solar Company in Bihar?',
    a: 'Shibha Enterprises is recognized as the Best Solar Company in Bihar for its commitment to quality, innovative solar solutions, expert installations, and exceptional customer satisfaction across residential, commercial, and industrial sectors.',
  },
  {
    q: '2. What is the vision of Shibha Enterprises?',
    a: 'Our vision is to accelerate the adoption of clean energy by delivering reliable, efficient, and sustainable solar solutions that empower homes and businesses while contributing to a greener future.',
  },
  {
    q: '3. How experienced is Shibha Enterprises in the solar industry?',
    a: 'With years of industry expertise, Shibha Enterprises has successfully completed hundreds of solar installations, earning a reputation for engineering excellence, dependable service, and long-term customer trust.',
  },
  {
    q: '4. What makes Shibha Enterprises different from other solar companies?',
    a: 'Our customer-first approach, premium-quality components, skilled professionals, transparent consultation, and end-to-end project execution make us the Best Solar Company in Bihar.',
  },
  {
    q: '5. What values drive Shibha Enterprises?',
    a: 'Integrity, innovation, quality, sustainability, and customer satisfaction are the core values that guide every project we undertake.',
  },
  {
    q: '6. How does Shibha Enterprises ensure quality in every project?',
    a: 'We use premium Tier-1 solar components, follow industry best practices, and conduct thorough quality inspections to ensure maximum efficiency, safety, and long-term performance.',
  },
  {
    q: '7. Why should I choose the Best Solar Company in Bihar?',
    a: 'Choosing the Best Solar Company in Bihar ensures you receive expert guidance, certified installations, reliable products, government subsidy assistance, and dedicated after-sales support.',
  },
  {
    q: '8. Does your team provide complete solar consultation?',
    a: 'Yes. Our experienced professionals handle everything from site assessment and system design to installation, commissioning, subsidy guidance, and ongoing maintenance support.',
  },
  {
    q: '9. What industries does Shibha Enterprises work with?',
    a: 'We deliver solar solutions for homes, offices, factories, warehouses, schools, hospitals, hotels, and various commercial and industrial facilities across Bihar.',
  },
  {
    q: '10. How does Shibha Enterprises contribute to sustainability?',
    a: 'By helping customers switch to renewable energy, we reduce carbon emissions, promote energy independence, and support a cleaner, more sustainable future for generations to come.',
  },
  {
    q: '11. How can I connect with the Best Solar Company in Bihar?',
    a: 'Simply contact Shibha Enterprises to schedule a free consultation. Our experts will understand your energy needs and recommend the most efficient solar solution for your property.',
  },
]

function AboutFaq() {
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
            Learn more about our company, vision, quality standards, and services in Bihar.
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

export default AboutFaq
