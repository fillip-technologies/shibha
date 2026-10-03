import { useQuoteModal } from '../../../context/QuoteModalContext'
import solar8 from '../../../assets/images/solar-8.jpg'
import yojnaLogo from '../../../assets/logo/yojna.png'

export default function PMSuryaGharOverview() {
  const { openQuoteModal } = useQuoteModal()

  const subsidyRows = [
    {
      capacity: '1 kW',
      central: '₹30,000',
      bihar: '₹10,000',
      total: '₹40,000',
      highlight: false,
      idealFor: 'Small households, basic lighting & fan loads',
    },
    {
      capacity: '2 kW',
      central: '₹60,000',
      bihar: '₹20,000',
      total: '₹80,000',
      highlight: false,
      idealFor: '2-3 BHK homes, refrigerator, TV, lighting',
    },
    {
      capacity: '3 kW & More',
      central: '₹78,000',
      bihar: '₹20,000',
      total: '₹98,000',
      highlight: true,
      idealFor: 'Full home with 1-2 Air Conditioners & water pump',
    },
  ]

  return (
    <section id="subsidy-breakdown" className="py-16 sm:py-20 bg-white overflow-hidden scroll-mt-12">
      <div className="site-container">
        {/* Top Section: PM Surya Ghar Yojana, Simplified */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Subsidy Rule explanation */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
              ONE SCHEME &bull; ONE ROOFTOP &bull; A SMARTER APPROACH TO GENERATING ELECTRICITY
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.18] tracking-tight">
              PM Surya Ghar Yojana, Simplified
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The Process of PM Surya Ghar Solar Installation in Patna is specifically created for eligible residential consumers to go ahead with the installation of grid-connected rooftop solar according to the government scheme.
            </p>

            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-slate-700 space-y-3">
              <p className="text-xs sm:text-sm leading-relaxed">
                In the current framework, the central subsidy will be <strong className="text-emerald-900 font-bold">₹30,000 per kW for the first 2 kW</strong> and <strong className="text-emerald-900 font-bold">₹18,000 per kW on the remaining 1 kW</strong>, which amounts to a central subsidy of up to <strong className="text-emerald-900 font-bold">₹78,000</strong> for systems of 3 kW or more.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed border-t border-emerald-200/60 pt-3">
                In addition to this, for the eligible beneficiaries in Bihar, there will be assistance of <strong className="text-emerald-900 font-bold">₹10,000 per kW</strong> and an upper limit of <strong className="text-emerald-900 font-bold">₹20,000</strong> per beneficiary. This makes a total support of up to <strong className="text-emerald-900 font-bold">₹40,000 for 1 kW</strong>, <strong className="text-emerald-900 font-bold">₹80,000 for 2 kW</strong>, and <strong className="text-emerald-900 font-bold">₹98,000 for 3 kW or more</strong>.
              </p>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <span>Calculate My Subsidy</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <a
                href="#what-we-offer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs px-5 py-3.5 transition-all"
              >
                <span>Explore Installation Scope</span>
              </a>
            </div>
          </div>

          {/* Right Column: Combined Financial Assistance Table Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-slate-800">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6EE7B7] block">
                    GOVERNMENT OF INDIA & BIHAR
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Combined Financial Assistance
                  </h3>
                </div>
                <img
                  src={yojnaLogo}
                  alt="PM Surya Ghar Logo"
                  className="h-9 w-auto bg-white/95 rounded-md px-1.5 py-0.5"
                />
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/15 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                      <th className="py-2.5">Solar Capacity</th>
                      <th className="py-2.5 text-center">Central Subsidy</th>
                      <th className="py-2.5 text-center">Bihar Subsidy</th>
                      <th className="py-2.5 text-right text-[#6EE7B7]">Total Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-medium">
                    {subsidyRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          row.highlight
                            ? 'bg-emerald-500/15 font-bold text-white'
                            : 'hover:bg-white/5 text-slate-200'
                        } transition-colors`}
                      >
                        <td className="py-3.5 pr-2">
                          <span className="font-bold">{row.capacity}</span>
                          {row.highlight && (
                            <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#6EE7B7] text-[#032B25] uppercase tracking-wider">
                              Max
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 text-center text-slate-300">{row.central}</td>
                        <td className="py-3.5 text-center text-slate-300">{row.bihar}</td>
                        <td className="py-3.5 text-right font-black text-[#6EE7B7] text-sm">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1.5">
                <p className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
                  <span>Subsidy credited directly into consumer bank account via DBT.</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
                  <span>Subject to national portal registration & DISCOM inspection.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subsection: Harness the Energy of the Sun Shining on Your Roof */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual element */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-[4/3]">
                <img
                  src={solar8}
                  alt="Harness the Energy of the Sun Shining on Your Roof Patna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#032B25]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#6EE7B7] text-[#032B25] text-[10px] font-black uppercase tracking-wider mb-1">
                    PM Surya Ghar Vendor in Patna
                  </span>
                  <p className="text-sm font-bold">Reliable Rooftop EPC with Direct DBT Benefit</p>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
                CLEAN POWER &bull; DIRECT ASSISTANCE &bull; SUSTAINABLE SAVINGS
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Harness the Energy of the Sun Shining on Your Roof
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                With PM Surya Ghar Yojana Vendor in Patna, your roof can produce energy sustainably, while certain customers have the opportunity to get government subsidies worth a great amount of money.
              </p>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                With a subsidy of up to <strong className="text-slate-900 font-semibold">₹78,000</strong> from the central government, in addition to the state of Bihar subsidy of up to <strong className="text-slate-900 font-semibold">₹20,000</strong>, a consumer is entitled to get a total subsidy of up to <strong className="text-emerald-700 font-bold">₹98,000</strong>.
              </p>

              <p className="mt-3 text-sm text-slate-700 font-medium">
                Whatever your reasons for switching to solar power are - reducing electricity costs, utilizing your roof more effectively, or adopting clean energy- the first step to take is a proper assessment.
              </p>

              {/* 3 Pill Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Reducing Electricity Costs
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Utilizing Your Roof More Effectively
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Adopting Clean Green Energy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
