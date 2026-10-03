import { useQuoteModal } from '../../../context/QuoteModalContext'
import install3 from '../../../assets/images/install-3.jpeg'
import install2 from '../../../assets/images/install-2.jpeg'
import install5 from '../../../assets/images/install-5.jpeg'

const caseStudies = [
  {
    image: install3,
    category: 'COMMERCIAL BUILDING',
    badge: '15 kW System',
    title: '15 kW Commercial Building System',
    stat: '₹1.98 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '28 Panels',
    co2Offset: '18 tonnes/year reported CO₂ offset',
    hardware: ['28 Solar Panels', '₹1.98 Lakh/Yr Savings', '18T CO₂ Offset / Yr'],
    desc: 'A 15 kW commercial building system with 28 panels delivers a reported ₹1.98 lakh in annual electricity savings while offsetting 18 tonnes of CO₂ each year.',
    cta: 'Explore Commercial Setup',
  },
  {
    image: install2,
    category: 'SCHOOL CAMPUS',
    badge: '25 kW System',
    title: '25 kW School Campus System',
    stat: '₹3.30 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '47 Panels',
    co2Offset: '30 tonnes/year reported CO₂ offset',
    hardware: ['47 Solar Panels', '₹3.30 Lakh/Yr Savings', '30T CO₂ Offset / Yr'],
    desc: 'A 25 kW campus system utilizing 47 solar panels generates clean power for educational blocks, delivering reported annual savings of ₹3.30 lakh and offsetting 30 tonnes of CO₂ per year.',
    cta: 'Explore Campus Setup',
  },
  {
    image: install5,
    category: 'HOSPITAL SOLAR',
    badge: '75 kW System',
    title: '75 kW Hospital Solar System',
    stat: '₹9.90 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '140 Panels',
    co2Offset: '90 tonnes/year reported CO₂ offset',
    hardware: ['140 Solar Panels', '₹9.90 Lakh/Yr Savings', '90T CO₂ Offset / Yr'],
    desc: 'A 75 kW hospital installation with 140 panels provides dependable energy, delivering reported savings of ₹9.90 lakh per year and reducing carbon emissions by 90 tonnes annually.',
    cta: 'Explore Hospital Setup',
  },
]

export default function CommercialResults() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section id="commercial-results" className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-emerald-100/60 overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Real Commercial Results
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From commercial buildings and academic institutions to major hospitals, see how our installations turn rooftop space into reliable annual savings.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-emerald-600 text-white px-3 py-1 text-[11px] font-extrabold shadow-md">
                      {study.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 leading-snug mb-3">
                    {study.title}
                  </h3>

                  {/* Primary KPI Highlight */}
                  <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-4 mb-4">
                    <p className="text-2xl font-black text-emerald-800 leading-none">
                      {study.stat}
                    </p>
                    <p className="text-xs text-emerald-700 font-medium mt-1">
                      {study.statLabel}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {study.desc}
                  </p>

                  {/* Hardware & Metric Chips */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      System Metrics:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.hardware.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs py-3 transition-colors cursor-pointer"
                >
                  <span>{study.cta}</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
