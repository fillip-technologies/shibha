import { useState } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'

const pmsuryaPlans = [
  {
    id: '1kW',
    capacity: '1 kW System',
    capacityNum: 1,
    badge: '1-2 BHK Home',
    recommendedFor: 'Small households, basic lighting, fans & TV',
    centralSubsidy: '₹30,000',
    biharSubsidy: '₹10,000',
    totalSubsidy: '₹40,000',
    estimatedGross: '₹75,000',
    netCustomerCost: '₹35,000',
    monthlyGeneration: '120 - 140 Units / Mo',
    roofSpace: 'approx. 100 sq.ft shadow-free',
    panelsCount: '2 High-Efficiency DCR Modules',
    appliances: [
      'Ceiling Fans & LED Lights',
      'LED Television & Setup Box',
      'Refrigerator (Single Door)',
      'Mobile & Laptop Charging',
    ],
  },
  {
    id: '2kW',
    capacity: '2 kW System',
    capacityNum: 2,
    badge: '2-3 BHK Home',
    recommendedFor: 'Medium households with washing machine & refrigerator',
    centralSubsidy: '₹60,000',
    biharSubsidy: '₹20,000',
    totalSubsidy: '₹80,000',
    estimatedGross: '₹1,45,000',
    netCustomerCost: '₹65,000',
    monthlyGeneration: '240 - 270 Units / Mo',
    roofSpace: 'approx. 180 - 200 sq.ft',
    panelsCount: '4 High-Efficiency DCR Modules',
    appliances: [
      'All Lights, Fans & Electronics',
      'Double Door Refrigerator',
      'Washing Machine & Microwave',
      'Water Purifier & Small Mixer',
    ],
  },
  {
    id: '3kW',
    capacity: '3 kW System',
    capacityNum: 3,
    badge: 'Most Popular (Max Subsidy)',
    recommendedFor: 'Standard 3-4 BHK homes running 1-2 Inverter ACs',
    centralSubsidy: '₹78,000',
    biharSubsidy: '₹20,000',
    totalSubsidy: '₹98,000',
    estimatedGross: '₹1,95,000',
    netCustomerCost: '₹97,000',
    monthlyGeneration: '360 - 400 Units / Mo',
    roofSpace: 'approx. 270 - 300 sq.ft',
    panelsCount: '6 High-Efficiency DCR Modules',
    appliances: [
      '1 to 2 Inverter Air Conditioners (1.5 Ton)',
      '1 HP Domestic Water Booster Pump',
      'Refrigerator, Washing Machine & TV',
      'All Residential Lights & Fans',
    ],
  },
  {
    id: '5kW',
    capacity: '5 kW System',
    capacityNum: 5,
    badge: 'Large Multi-Floor Home',
    recommendedFor: 'Joint families, multi-storey bungalows with 3+ ACs',
    centralSubsidy: '₹78,000',
    biharSubsidy: '₹20,000',
    totalSubsidy: '₹98,000',
    estimatedGross: '₹3,10,000',
    netCustomerCost: '₹2,12,000',
    monthlyGeneration: '600 - 650 Units / Mo',
    roofSpace: 'approx. 450 - 500 sq.ft',
    panelsCount: '10 High-Efficiency DCR Modules',
    appliances: [
      '2 to 3 Inverter Air Conditioners',
      '2 HP Submersible / Water Pump',
      'Geyser, Microwave, Washing Machine',
      'Full Home Backup & Day Loads',
    ],
  },
]

export default function PMSuryaGharSystemSizes() {
  const [activePlanId, setActivePlanId] = useState('3kW')
  const { openQuoteModal } = useQuoteModal()

  const currentPlan = pmsuryaPlans.find((p) => p.id === activePlanId) || pmsuryaPlans[2]

  return (
    <section id="system-sizing" className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white overflow-hidden scroll-mt-12">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            PM Surya Ghar Sizing & Subsidy Breakdown
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Choose your solar system capacity to view eligible Central + Bihar government subsidy support and estimated net homeowner investment.
          </p>
        </div>

        {/* Capacity Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {pmsuryaPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlanId(plan.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activePlanId === plan.id
                  ? 'bg-[#064E3B] text-[#6EE7B7] shadow-lg shadow-emerald-950/20 scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{plan.capacity}</span>
              <span className="hidden sm:inline text-[11px] opacity-75 font-normal ml-1">
                ({plan.badge})
              </span>
            </button>
          ))}
        </div>

        {/* Active Plan Card Details */}
        <div className="rounded-3xl border border-emerald-100 bg-[#F8FAF9] p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: System Sizing Metrics */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  {currentPlan.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Ideal for: <strong className="text-slate-700">{currentPlan.recommendedFor}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentPlan.capacity} Rooftop Solar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                Rooftop space requirement: <strong className="text-slate-900 font-semibold">{currentPlan.roofSpace}</strong>
              </p>

              {/* Subsidy Breakdown Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Central Subsidy</p>
                  <p className="text-lg font-black text-emerald-700 mt-1">{currentPlan.centralSubsidy}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Direct to Bank (DBT)</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bihar State Subsidy</p>
                  <p className="text-lg font-black text-emerald-700 mt-1">{currentPlan.biharSubsidy}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">State Govt Top-up</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-900 text-white shadow-xs">
                  <p className="text-[10px] font-bold text-[#6EE7B7] uppercase tracking-wider">Total Support</p>
                  <p className="text-lg font-black text-white mt-1">{currentPlan.totalSubsidy}</p>
                  <p className="text-[10px] text-emerald-200 font-medium mt-0.5">Combined Financial Aid</p>
                </div>
              </div>

              {/* Monthly generation banner */}
              <div className="rounded-2xl bg-[#064E3B] text-white p-5 mb-6 shadow-md flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6EE7B7] block mb-1">
                    ESTIMATED POWER GENERATION
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {currentPlan.monthlyGeneration}
                  </p>
                  <p className="text-xs text-emerald-100/80 mt-0.5">
                    Saves up to 300+ units from your monthly electricity bill.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block">
                    Module Standard
                  </span>
                  <span className="text-xs font-bold text-white bg-emerald-800/80 px-2.5 py-1 rounded-md border border-emerald-600/50 inline-block mt-1">
                    {currentPlan.panelsCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Supported Appliances & Booking CTA */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Supported Home Appliances
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Run daily household appliances directly on solar energy
                </p>

                <div className="space-y-2.5 mb-6">
                  {currentPlan.appliances.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        ✓
                      </span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                >
                  <span>Apply for {currentPlan.capacity} Subsidy</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
