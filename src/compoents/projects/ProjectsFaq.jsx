import { useState } from 'react'

const faqsList = [
  {
    q: '1. Why is Shibha Enterprises considered the Best Rooftop Solar Company in Patna?',
    a: 'Shibha Enterprises is known as the Best Rooftop Solar Company in Patna for delivering high-performance rooftop solar systems, premium components, expert installation, and reliable after-sales support for homes and businesses.',
  },
  {
    q: '2. What is a Rooftop Solar System?',
    a: 'A Rooftop Solar System is installed on the roof of your home, office, or commercial building to generate clean electricity from sunlight, helping reduce electricity bills and dependence on conventional power sources.',
  },
  {
    q: '3. Who can benefit from Rooftop Solar Installation?',
    a: 'Homeowners, commercial establishments, industries, educational institutions, hospitals, and government buildings can all benefit from rooftop solar systems by lowering energy costs and adopting sustainable energy.',
  },
  {
    q: '4. Why should I choose the Best Rooftop Solar Company in Patna?',
    a: 'Choosing the Best Rooftop Solar Company in Patna ensures expert consultation, customized system design, certified installation, premium-quality components, and long-term system performance.',
  },
  {
    q: '5. Is a Rooftop Solar System eligible for government subsidies?',
    a: 'Yes. Eligible residential rooftop solar systems can avail benefits under the PM Surya Ghar Muft Bijli Yojana and other applicable government subsidy schemes.',
  },
  {
    q: '6. How much can I save with a Rooftop Solar System?',
    a: 'Your savings depend on your electricity consumption and system capacity. A well-designed rooftop solar system can significantly reduce your monthly electricity bills while offering an excellent return on investment.',
  },
  {
    q: '7. How long does it take to install a Rooftop Solar System?',
    a: 'Most residential rooftop solar projects are completed within a few days after the site survey and approval process, while larger commercial installations may require additional time.',
  },
  {
    q: '8. Does Shibha Enterprises provide customized Rooftop Solar solutions?',
    a: 'Yes. As the Best Rooftop Solar Company in Patna, we design customized rooftop solar systems based on your roof size, energy consumption, and future electricity requirements.',
  },
  {
    q: '9. What type of solar panels do you use?',
    a: 'We use premium Tier-1 solar panels and high-efficiency inverters that ensure maximum power generation, durability, and long-term performance under varying weather conditions.',
  },
  {
    q: '10. What maintenance does a Rooftop Solar System require?',
    a: 'Rooftop solar systems require minimal maintenance. Regular panel cleaning and periodic inspections help maintain optimum efficiency and long-lasting performance.',
  },
  {
    q: '11. Why do customers trust the Best Rooftop Solar Company in Patna?',
    a: 'Customers trust the Best Rooftop Solar Company in Patna because of our transparent pricing, quality workmanship, advanced technology, timely project delivery, and dedicated customer support.',
  },
  {
    q: '12. How can I get a free quote from the Best Rooftop Solar Company in Patna?',
    a: 'Simply contact Shibha Enterprises to schedule a free consultation and site survey. Our experts will recommend the ideal rooftop solar solution based on your energy needs and budget.',
  },
]

function ProjectsFaq() {
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
            Got questions about rooftop solar projects, installation timelines, or savings? We have answers.
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

export default ProjectsFaq
