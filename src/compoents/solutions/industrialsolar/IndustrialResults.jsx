import { useQuoteModal } from '../../../context/QuoteModalContext'
import install7 from '../../../assets/images/install-7.jpeg'
import solar7 from '../../../assets/images/solar-7.jpg'
import install1 from '../../../assets/images/install-1.jpeg'

const industrialCaseStudies = [
  {
    image: install7,
    category: 'INDUSTRIAL WAREHOUSE',
    badge: '250 kW System',
    title: 'Industrial Warehouse Array',
    stat: '₹33 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '475 Panels',
    co2Offset: '300 tonnes/year CO₂ offset',
    hardware: ['475 Solar Panels', '250 kW System', 'Completed in < 30 Days', 'DISCOM Approved'],
    desc: 'Reported annual savings of ₹33 lakh with approximately 300 tonnes/year of CO₂ offset. The project was completed in under 30 days and included DISCOM approval.',
    cta: 'Explore Warehouse Setup',
  },
  {
    image: solar7,
    category: 'SOLAR ARRAY FARM',
    badge: '500 kW System',
    title: 'Solar Array Farm',
    stat: '₹66 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '950 Panels',
    co2Offset: '600 tonnes/year CO₂ offset',
    hardware: ['950 Bifacial Panels', '500 kW System', 'Advanced Tracking', 'Utility-Scale'],
    desc: 'A utility-scale installation using bifacial modules and advanced tracking systems, with reported annual savings of ₹66 lakh and approximately 600 tonnes/year of CO₂ offset.',
    cta: 'Explore Solar Farm Setup',
  },
  {
    image: install1,
    category: 'COLD STORAGE',
    badge: '120 kW System',
    title: 'Cold Storage Solar Farm',
    stat: '₹15.84 Lakh',
    statLabel: 'Reported Annual Savings',
    panels: '228 Panels',
    co2Offset: '144 tonnes/year CO₂ offset',
    hardware: ['228 Solar Panels', '120 kW System', 'Compressor Loads', 'Agro-Facility'],
    desc: 'Designed for an agricultural cold-storage facility with heavy compressor loads, delivering reported annual savings of ₹15.84 lakh and approximately 144 tonnes/year of CO₂ offset.',
    cta: 'Explore Cold Storage Setup',
  },
]

export default function IndustrialResults() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section id="industrial-results" className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-emerald-100/60 overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Real Project Results
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            See how high-capacity industrial systems deliver reported annual savings and substantial emission offsets across warehouses, solar farms, and cold storage facilities.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industrialCaseStudies.map((study, idx) => (
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

                  {/* Hardware Specs Chips */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Project Highlights:
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
