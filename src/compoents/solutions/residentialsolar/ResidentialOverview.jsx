import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar4 from '../../../assets/images/solar-4.jpg'
import solar8 from '../../../assets/images/solar-8.jpg'
import solar7 from '../../../assets/images/solar-7.jpg'

export default function ResidentialOverview() {
  const { openQuoteModal } = useQuoteModal()

  const planningSteps = [
    'Analysis of rooftop and sunlight availability',
    'Evaluation of household power requirements',
    'Choosing the right solar panels and inverters',
    'Calculations for system capacity',
    'Mounting structure and electrical safety',
    'Net metering requirements',
    'Performance-optimized installation',
  ]

  return (
    <section id="solar-planning" className="py-20 lg:py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Story & Planning Points */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-3">
              SOLAR DESIGNED AROUND YOUR HOME
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.18] tracking-tight">
              Understanding the Home We Power in Patna
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Good solar installations are about understanding the home they power, not the other way round. Providing the best Residential Solar Installation in Patna, we install solar panels as per your energy requirements. The solar panel capacity, rooftop suitability, panel orientation, inverter, mounting structure, electrical safety, and net-metering requirements are all taken into consideration to design a practical, efficient, and safe solar power system.
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Whether it&apos;s an independent house, luxury villa, or a residential township, the end goal remains the same: <strong className="text-slate-900 font-semibold">to extract maximum usable power from the sun, reduce reliance on grid power, and make your rooftops work harder.</strong>
            </p>

            {/* What goes into our planning */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Here&apos;s what goes into our planning:
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

            <div className="mt-8">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 rounded-full bg-[#064E3B] hover:bg-[#043d2e] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 shadow-lg shadow-emerald-950/20 transition-all hover:gap-3 cursor-pointer"
              >
                <span>Get Free Rooftop Assessment</span>
                <svg className="h-4 w-4 text-[#6EE7B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Image Collage (Responsive: Balanced feature + 2-col on mobile, 7/5 split on desktop) */}
          <div className="lg:col-span-6">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
              {/* Main Feature Image (Full width on mobile, 7 cols on tablet/desktop) */}
              <div className="sm:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg aspect-[16/10] sm:aspect-auto sm:min-h-[380px] group">
                <img
                  src={solar4}
                  alt="Solar Panels In Sun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Stack of 2 Images (Side-by-side 2-col on mobile, stacked column on tablet/desktop) */}
              <div className="grid grid-cols-2 sm:flex sm:flex-col sm:col-span-5 gap-3.5 sm:gap-4">
                {/* Top Image: Modern Villa Solar Roof */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg aspect-[4/3] group relative">
                  <img
                    src={solar8}
                    alt="Rooftop Solar Villa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Image: Solar Panel Grid Array */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg aspect-[4/3] group relative">
                  <img
                    src={solar7}
                    alt="Solar Panel Grid Array"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
