import { useQuoteModal } from '../../../context/QuoteModalContext'

export default function PMSuryaGharServices() {
  const { openQuoteModal } = useQuoteModal()

  const services = [
    {
      title: 'Rooftop Assessment',
      desc: 'Assess your rooftop area, structural shadow-free layout, orientation, and its structural suitability for solar module installation.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: 'Requirement of Electricity Analysis',
      desc: 'Determine your monthly electricity consumption, sanctioned load from DISCOM, and power patterns to decide on your ideal system capacity.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Design of Solar System',
      desc: 'Design the system according to your project, that includes design of panels, inverter, mounting structure, wiring, protection, and other components.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: 'Installation and Commissioning',
      desc: 'Professionally install your rooftop system for safe functioning, weather-proofing, surge protection, earthing, and rigorous safety checks.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.315-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l5.234-4.306a2.548 2.548 0 00-3.586-3.586l-4.306 5.234m0 0l-3.03 2.496" />
        </svg>
      ),
    },
    {
      title: 'Net Metering Facilitation',
      desc: 'Help you through the net metering process with SBPDCL or NBPDCL, ensuring smooth bi-directional grid export and billing credits.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'Subsidy Process Facilitation',
      desc: 'Help consumers in getting the subsidy on the PM Surya Ghar National Portal, if they are eligible, directly disbursed into their bank account.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="what-we-offer" className="py-14 sm:py-16 bg-[#F9FBFA] border-y border-emerald-100/60 scroll-mt-12">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
            RIGHT SYSTEM CAPACITY BEGINS WITH THE RIGHT ASSESSMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Your Home, Your Solar System
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Your best system will not depend on any standardization. It all depends on factors like your electricity consumption per month, sanctioned load, rooftop area, availability of sunlight, number of household appliances, and future power needs.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            To start with, we help you assess your needs to ensure that your solar system is tailored to your house.
          </p>
        </div>

        {/* 6 What We Offer Cards */}
        <div className="mb-10">
          <h3 className="text-center text-xs font-black uppercase tracking-widest text-slate-800 mb-8">
            What We Offer in Our Solar Installation Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-emerald-100/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-[#064E3B] group-hover:text-[#6EE7B7] transition-all mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <span>Included in PM Surya Ghar Package</span>
                  <span className="text-emerald-500">&bull;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear takeaway callout */}
        <div className="max-w-2xl mx-auto text-center rounded-2xl bg-emerald-900 text-white p-6 sm:p-7 shadow-lg">
          <p className="text-base sm:text-lg font-black tracking-tight text-[#6EE7B7]">
            “The basic idea is very clear: install the right system and not the largest one.”
          </p>
          <p className="mt-2 text-xs text-emerald-100/80">
            Let our technical team audit your rooftop and calculate exact savings before you spend a single rupee.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 rounded-full bg-[#6EE7B7] hover:bg-[#5ee1a8] text-[#032B25] font-black text-xs uppercase tracking-wider px-6 py-3 transition-all cursor-pointer"
            >
              <span>Schedule Free Rooftop Assessment</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
