import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar8 from '../../../assets/images/solar-8.jpg'
import solar3 from '../../../assets/images/solar-3.jpg'
import install2 from '../../../assets/images/install-2.jpeg'

const caseStudies = [
  {
    image: solar8,
    category: 'VILLA CASE STUDY',
    badge: 'Luxury Villa',
    title: 'Modern Villa Rooftop',
    stat: '85%+',
    statLabel: 'Reported Monthly Bill Reduction',
    hardware: ['540W Mono PERC', 'Growatt Grid-Tied Inverter', 'Net Metering'],
    desc: 'A luxury villa installation with 540W Mono PERC panels, a Growatt grid-tied inverter, and net metering achieved a reported 85%+ reduction in monthly electricity bills.',
    cta: 'Explore Villa Solutions',
  },
  {
    image: solar3,
    category: 'INDEPENDENT HOUSE',
    badge: '8 kW System',
    title: 'Suburban Home Setup',
    stat: '₹1,05,600',
    statLabel: 'Annual Savings & 9.6T CO₂ Offset / Yr',
    hardware: ['8 kW Capacity', '15 Mono Panels', '9.6 Tonnes CO₂ Offset'],
    desc: 'An 8 kW system with 15 panels delivers an estimated ₹1,05,600 in annual savings and offsets approximately 9.6 tonnes of CO₂ per year.',
    cta: 'Explore Home Setups',
  },
  {
    image: install2,
    category: 'COMMUNITY SCALE',
    badge: '200 kW Township',
    title: 'Residential Township Project',
    stat: '100+ Homes',
    statLabel: '~₹2,200 / Month Avg. Savings Per House',
    hardware: ['200 kW Rooftop Plant', '380 Panels', 'Micro-Grid Setup'],
    desc: 'A 200 kW rooftop solar project with 380 panels supports a community of 100+ households, with reported average savings of approximately ₹2,200 per household per month.',
    cta: 'Explore Township Solar',
  },
]

export default function ResidentialResults() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-emerald-100/60 overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Proven Track Record in Patna
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            From Sunlight to Savings
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A well-designed Residential Solar Installation in Patna has the potential to cover a large amount of your daytime electricity consumption needs directly from your own roof.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            With a grid-tied solar and net metering system, you can sell excess electricity produced back to the grid (subject to approval and regulations by the local distribution company). In addition to environmental benefits, solar becomes an investment in your home that pays off in multiple ways.
          </p>
        </div>

        {/* 3 Real Case Study Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

                  {/* Floating Tags */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {study.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {study.badge}
                    </span>
                  </div>

                  {/* Stat Overlay in Bottom Left */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-baseline justify-between text-white">
                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-white leading-none">
                        {study.stat}
                      </p>
                      <p className="text-[10px] text-emerald-200 font-semibold mt-1">
                        {study.statLabel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {study.desc}
                  </p>

                  {/* Hardware Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {study.hardware.map((hw, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#064E3B] hover:bg-[#043d2e] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer group/btn"
                >
                  <span>{study.cta}</span>
                  <svg className="h-3.5 w-3.5 text-[#6EE7B7] transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
