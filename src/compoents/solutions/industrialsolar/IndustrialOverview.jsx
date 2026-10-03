import { useQuoteModal } from '../../../context/QuoteModalContext'
import install1 from '../../../assets/images/install-1.jpeg'
import solar7 from '../../../assets/images/solar-7.jpg'

export default function IndustrialOverview() {
  const { openQuoteModal } = useQuoteModal()

  const industrialPlanningSteps = [
    'Comprehensive energy consumption analysis',
    'Feasibility study (roof-top / ground-mounted)',
    'Solar generation capacity planning',
    'Choice of high-efficiency photovoltaic modules',
    'Design of string or centralized inverter',
    'Industrially rugged mounting structures',
    'Electrical protection and distribution system',
    'Grid interconnection and DISCOM process',
    'System monitoring',
    'Commissioning and testing of the project',
  ]

  const workflowSteps = [
    {
      step: 'Generate',
      title: 'Generating Electricity',
      desc: 'Utilize your huge roofs and open lands to produce clean energy directly on-site.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      step: 'Consume',
      title: 'Powering Heavy Loads',
      desc: 'Feed energy continuously to heavy industrial machinery, chilling compressors, and assembly lines.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      step: 'Save',
      title: 'Cutting Operational Costs',
      desc: 'Decrease reliance on conventional grid electricity while keeping your future unit costs in check.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 'Monitor',
      title: 'System Monitoring',
      desc: 'Track generation, export, and load behavior using appropriate monitoring systems.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
  ]

  return (
    <section id="industrial-planning" className="py-20 lg:py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Top Subsection: Designed for Industrial-Level Energy Requirements */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Story & Planning Points */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-3">
              INDUSTRIAL-LEVEL ENERGY REQUIREMENTS
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.18] tracking-tight">
              Designed for Industrial-Level Energy Requirements
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Industrial solar is not only about placing hundreds of solar panels together. It involves detailed consideration of aspects such as load requirements, space availability, equipment choice, electrical system, generation pattern, and operation.
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our strategy towards Industrial Solar Solutions in Patna emphasises developing customized solar systems that suit industrial needs, regardless of whether you run a factory, warehouse, cold storage, production unit, or solar power plant.
            </p>

            {/* Industrial planning items */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Planning of an Industrial Solar System Could Include The Following:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {industrialPlanningSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-tight">{step}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold text-emerald-800 bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                It’s all about using space efficiently and generating energy out of it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <span>Unleash Solar Potential</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <a
                href="#industrial-results"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs px-5 py-3.5 transition-all"
              >
                <span>View Real Project Results</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative aspect-[4/3]">
                <img
                  src={install1}
                  alt="Industrial Solar Installation in Patna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                    Megawatt Scale EPC
                  </span>
                  <p className="text-sm font-bold">Rooftop & Ground-Mounted Industrial Systems</p>
                </div>
              </div>

              {/* Floating Second Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block aspect-video">
                <img
                  src={solar7}
                  alt="High Capacity Solar Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subsection: Built for Bigger Loads, Designed for Bigger Savings */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              THE HIGHER THE ENERGY CONSUMPTION, THE MORE UNITS MATTER
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              Built for Bigger Loads, Designed for Bigger Savings
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Electricity expenditure can greatly affect the operational costs for industries. With larger generation of solar energy, less conventional electricity would be needed to operate day-to-day functions. Our Industrial Solar Solutions in Patna are suited for various capacity requirements.
            </p>
          </div>

          {/* 4 Interactive Flow Cards: Generate -> Consume -> Save -> Monitor */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F8FAF9] border border-emerald-100/70 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="h-10 w-10 rounded-2xl bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-[#064E3B] group-hover:text-[#6EE7B7] transition-all">
                    {wf.icon}
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100/60 text-emerald-800">
                    {wf.step} &rarr;
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                  {wf.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
