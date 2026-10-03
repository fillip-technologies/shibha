import { useQuoteModal } from '../../../context/QuoteModalContext'
import install4 from '../../../assets/images/install-4.jpeg'
import solar2 from '../../../assets/images/solar-2.jpg'

export default function CommercialOverview() {
  const { openQuoteModal } = useQuoteModal()

  const planningSteps = [
    'Analysis of electricity consumption',
    'Assessment of site and availability of space',
    'Solar capacity planning',
    'Recommendations for high-efficiency modules',
    'Design of grid-tied or hybrid systems',
    'Inverter and electrical infrastructure',
    'ACDB/DCDB protections',
    'Net-metering design, when applicable',
    'Performance monitoring and maintenance',
  ]

  const workflowSteps = [
    {
      step: 'Generate',
      title: 'Generating Electricity',
      desc: 'Harness clean solar energy directly from your own rooftop, shed, or campus space.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      step: 'Consume',
      title: 'Consuming On-Site',
      desc: 'Use the generated power directly to run HVAC, lighting, labs, elevators, and facility loads.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      step: 'Save',
      title: 'Cutting Your Bills',
      desc: 'Substantially reduce your monthly DISCOM bill and offset power costs for years to come.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 'Monitor',
      title: 'Monitoring Performance',
      desc: 'Track generation, export, and yield through modern cloud-based monitoring software.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
  ]

  return (
    <section id="commercial-planning" className="py-20 lg:py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Top Subsection: Solar Built Around Your Business */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Story & Planning Points */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-3">
              SOLAR DESIGNED AROUND YOUR BUSINESS
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.18] tracking-tight">
              Solar Built Around Your Business
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              A commercial solar project is not simply about the solar panels. It is about designing the right energy system around the needs of a business.
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our Commercial Solar Installation in Patna is about electricity consumption, space availability, system capacity, inverter requirements, electrical infrastructure, safety, monitoring, and, in some cases of critical loads, backup power and uninterrupted power supply.
            </p>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              For commercial establishments, the solar systems can be planned and designed according to the specific requirements. <strong className="text-slate-900 font-semibold">The goal is to design an energy system around the business.</strong>
            </p>

            {/* What goes into our planning */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Our Commercial Solar Planning Includes:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {planningSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <span>Plan Your Commercial System</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <a
                href="#commercial-results"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs px-5 py-3.5 transition-all"
              >
                <span>View Real Results</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative aspect-[4/3]">
                <img
                  src={install4}
                  alt="Commercial Solar Installation in Patna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                    Custom Solar Engineering
                  </span>
                  <p className="text-sm font-bold">Integrated Rooftop & Campus Solar Systems</p>
                </div>
              </div>

              {/* Floating Second Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block aspect-video">
                <img
                  src={solar2}
                  alt="High Efficiency Solar Panels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subsection: From Electricity Expense to Energy Asset */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              VALUE TRANSFORMATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              From Electricity Expense to Energy Asset
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Electricity is a major expense for commercial properties. Solar can help commercial entities offset some of their electricity costs by generating a part of the power they consume. A well-structured Commercial Solar Installation in Patna can thus be valuable in:
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
