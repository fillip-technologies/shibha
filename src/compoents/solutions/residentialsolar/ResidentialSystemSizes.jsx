import { useState } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'

const systemPlans = [
  {
    id: '3kW',
    capacity: '3 kW System',
    capacityNum: 3,
    badge: 'Most Popular for Homes',
    recommendedFor: '2 - 3 BHK Independent House / Villa',
    billRange: '₹2,500 - ₹4,000 / month',
    netCost: '₹1,07,000',
    grossCost: '₹1,85,000',
    subsidy: '₹78,000',
    dailyGeneration: '12 - 15 Units / day',
    monthlyGeneration: '360 - 450 Units / month',
    monthlySavings: '₹2,700 - ₹3,300',
    annualSavings: '₹32,400 - ₹39,600',
    lifetimeSavings: '₹9.2 Lakhs+',
    paybackYears: '3.1 Years',
    roofSpace: '250 - 300 sq. ft.',
    panelsCount: '6 x Tier-1 540W Mono PERC Panels',
    inverter: '3.3 kW Smart Grid-Tied Inverter (Wi-Fi App)',
    metering: 'Bi-Directional Net Metering (SBPDCL/NBPDCL)',
    warranty: '25-Year Linear Power Warranty',
    appliances: [
      { name: '1.5 Ton Inverter AC', usage: 'Up to 8 hours daily', icon: 'ac' },
      { name: 'Double-Door Refrigerator', usage: '24x7 Continuous operation', icon: 'fridge' },
      { name: '1 HP Submersible Pump', usage: '1 - 2 hours daily water fill', icon: 'pump' },
      { name: 'LED Lights & Ceiling Fans', usage: 'All rooms (8-10 units)', icon: 'bulb' },
      { name: '55" 4K Smart TV', usage: 'Evening entertainment (4-6 hrs)', icon: 'tv' },
      { name: 'RO Water Purifier & Wi-Fi', usage: '24x7 Continuous power', icon: 'purifier' },
    ],
  },
  {
    id: '5kW',
    capacity: '5 kW System',
    capacityNum: 5,
    badge: 'Best Value for Families',
    recommendedFor: '3 - 4 BHK Duplex & Large Bungalow',
    billRange: '₹4,500 - ₹7,000 / month',
    netCost: '₹2,02,000',
    grossCost: '₹2,80,000',
    subsidy: '₹78,000',
    dailyGeneration: '20 - 25 Units / day',
    monthlyGeneration: '600 - 750 Units / month',
    monthlySavings: '₹4,500 - ₹5,500',
    annualSavings: '₹54,000 - ₹66,000',
    lifetimeSavings: '₹15.5 Lakhs+',
    paybackYears: '3.3 Years',
    roofSpace: '400 - 500 sq. ft.',
    panelsCount: '10 x Tier-1 540W Mono PERC Panels',
    inverter: '5 kW Dual-MPPT Smart Inverter (Wi-Fi App)',
    metering: 'Bi-Directional Net Metering (SBPDCL/NBPDCL)',
    warranty: '25-Year Linear Power Warranty',
    appliances: [
      { name: '2x 1.5 Ton Inverter ACs', usage: 'Up to 8-10 hours daily', icon: 'ac' },
      { name: 'Double-Door Refrigerator', usage: '24x7 Continuous operation', icon: 'fridge' },
      { name: '1.5 HP Water Pump', usage: 'Daily full tank supply', icon: 'pump' },
      { name: 'All Household Lights & Fans', usage: 'Multi-floor coverage (15+ units)', icon: 'bulb' },
      { name: 'Microwave & Kitchen Load', usage: 'Regular daily cooking loads', icon: 'purifier' },
      { name: 'Washing Machine & Geysers', usage: 'Heavy heating cycles', icon: 'tv' },
    ],
  },
  {
    id: '8kW',
    capacity: '8 kW System',
    capacityNum: 8,
    badge: 'Luxury Villa Choice',
    recommendedFor: 'Multi-Floor Villa & Joint Family Home',
    billRange: '₹7,000 - ₹11,000 / month',
    netCost: '₹3,42,000',
    grossCost: '₹4,20,000',
    subsidy: '₹78,000',
    dailyGeneration: '32 - 40 Units / day',
    monthlyGeneration: '960 - 1,200 Units / month',
    monthlySavings: '₹7,200 - ₹9,000',
    annualSavings: '₹86,400 - ₹1,08,000',
    lifetimeSavings: '₹24.8 Lakhs+',
    paybackYears: '3.4 Years',
    roofSpace: '650 - 750 sq. ft.',
    panelsCount: '15 x Tier-1 540W Mono PERC Panels',
    inverter: '8 kW Three-Phase Smart Inverter',
    metering: 'Bi-Directional Net Metering (SBPDCL/NBPDCL)',
    warranty: '25-Year Linear Power Warranty',
    appliances: [
      { name: '3x Inverter ACs', usage: 'Multi-room continuous cooling', icon: 'ac' },
      { name: '2x Refrigerators / Deep Freezer', usage: 'Continuous high cold storage', icon: 'fridge' },
      { name: '2 HP Heavy Submersible Pump', usage: 'Dual floor & garden water', icon: 'pump' },
      { name: 'Electric Geysers (2 Units)', usage: 'Daily morning heating', icon: 'tv' },
      { name: 'Smart Home & Security Systems', usage: 'CCTV, Gate automation, Servers', icon: 'purifier' },
      { name: 'Complete Lighting & Ventilation', usage: 'Multi-storey full house', icon: 'bulb' },
    ],
  },
  {
    id: '10kW',
    capacity: '10 kW System',
    capacityNum: 10,
    badge: 'High Performance & EV Ready',
    recommendedFor: 'Large Estates, Dual Meters & EV Charging',
    billRange: '₹12,000+ / month',
    netCost: '₹4,32,000',
    grossCost: '₹5,10,000',
    subsidy: '₹78,000',
    dailyGeneration: '40 - 50 Units / day',
    monthlyGeneration: '1,200 - 1,500 Units / month',
    monthlySavings: '₹9,000 - ₹11,250',
    annualSavings: '₹1,08,000 - ₹1,35,000',
    lifetimeSavings: '₹31.5 Lakhs+',
    paybackYears: '3.5 Years',
    roofSpace: '850 - 1,000 sq. ft.',
    panelsCount: '19 x Tier-1 540W Mono PERC Panels',
    inverter: '10 kW Three-Phase Commercial-Grade Inverter',
    metering: 'Bi-Directional Net Metering (SBPDCL/NBPDCL)',
    warranty: '25-Year Linear Power Warranty',
    appliances: [
      { name: '4+ Air Conditioners', usage: 'Full mansion air conditioning', icon: 'ac' },
      { name: 'Electric Vehicle (EV) Charger', usage: '7.4 kW Level-2 Home EV Charging', icon: 'purifier' },
      { name: 'Private Home Passenger Lift', usage: 'Daily multi-floor elevator rides', icon: 'tv' },
      { name: 'Heavy Submersible & Filtration', usage: 'Borewell & overhead tank water', icon: 'pump' },
      { name: 'Multiple High-End Refrigerators', usage: 'Kitchen, pantry & wine coolers', icon: 'fridge' },
      { name: 'All Lighting, Audio & Automation', usage: 'Full villa automation', icon: 'bulb' },
    ],
  },
]

export default function ResidentialSystemSizes() {
  const { openQuoteModal } = useQuoteModal()
  const [selectedPlanId, setSelectedPlanId] = useState('3kW')
  const [viewMode, setViewMode] = useState('interactive') // 'interactive' | 'comparison'
  const [sliderBill, setSliderBill] = useState(3500)

  const activePlan = systemPlans.find((p) => p.id === selectedPlanId) || systemPlans[0]

  // Dynamic calculator math
  const unitRate = 7.5
  const estimatedMonthlyUnits = Math.round(sliderBill / unitRate)
  const calcRecommendedKw = Math.max(1, Math.min(10, Math.ceil(estimatedMonthlyUnits / 120)))
  const calcSubsidy = calcRecommendedKw === 1 ? 30000 : calcRecommendedKw === 2 ? 60000 : 78000
  const calcGross = calcRecommendedKw * 58000 + 11000
  const calcNet = calcGross - calcSubsidy
  const calcMonthlySavings = Math.min(sliderBill, Math.round(calcRecommendedKw * 120 * unitRate))
  const calcPayback = (calcNet / (calcMonthlySavings * 12)).toFixed(1)

  // Render Appliance Icon
  const renderApplianceIcon = (type) => {
    switch (type) {
      case 'ac':
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        )
      case 'fridge':
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75h7.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5zm0 6.75h1.5m-1.5 4.5h1.5M6.75 9h10.5" />
          </svg>
        )
      case 'pump':
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18" />
          </svg>
        )
      case 'bulb':
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.002 6.002 0 00-4-5.659V5.25a2.25 2.25 0 014.5 0v1.841a6.002 6.002 0 004 5.659H12z" />
          </svg>
        )
      case 'tv':
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-6-3v3m9-15H3a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0021 5.25z" />
          </svg>
        )
      default:
        return (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        )
    }
  }

  return (
    <section id="residential-pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background soft glowing accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 via-teal-50/20 to-transparent pointer-events-none -z-0" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            PM Surya Ghar Approved Packages
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Sizing & Pricing for{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Your Home
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Choose from standard pre-engineered capacities or use our live savings estimator below. All packages include Tier-1 Mono PERC panels, smart grid-tie inverter, DISCOM net metering, and hassle-free subsidy credit.
          </p>

          {/* View Mode Toggle: Interactive Plan vs Comparison Table */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interactive Plan Studio
            </button>
            <button
              type="button"
              onClick={() => setViewMode('comparison')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'comparison'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Compare All Specs Side-by-Side
            </button>
          </div>
        </div>

        {/* ── MODE 1: INTERACTIVE PLAN STUDIO ── */}
        {viewMode === 'interactive' && (
          <div>
            {/* System Capacity Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
              {systemPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`relative p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20 -translate-y-0.5'
                        : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {plan.id === '3kW' && (
                      <span className="absolute -top-2.5 right-3 text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-white px-2 py-0.5 rounded-full shadow-xs">
                        Most Popular
                      </span>
                    )}
                    <span className="text-lg font-black text-slate-900 block">
                      {plan.capacity}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5 line-clamp-1">
                      {plan.recommendedFor.split('/')[0]}
                    </span>
                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-600">
                        {plan.netCost}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        Net Post-Subsidy
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Master Showcase Card (Split 2-Column Luxury Layout) */}
            <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden mb-16">
              <div className="grid lg:grid-cols-12">
                {/* Left Column: System Details & Appliance Matrix (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {activePlan.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Standard Utility Bill: {activePlan.billRange}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {activePlan.capacity} Rooftop Plant
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Optimized for {activePlan.recommendedFor}
                  </p>

                  {/* Appliance Matrix */}
                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      What This System Runs Concurrently:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activePlan.appliances.map((app, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                        >
                          <div className="h-9 w-9 rounded-lg bg-emerald-100/70 flex items-center justify-center flex-shrink-0">
                            {renderApplianceIcon(app.icon)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-tight">
                              {app.name}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {app.usage}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & Engineering Specs Strip */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      Included Engineering Hardware:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Solar Modules</span>
                        <span className="font-bold text-slate-900 block mt-0.5">{activePlan.panelsCount.split(' ')[0]} {activePlan.panelsCount.split(' ')[1]} Mono PERC</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Smart Inverter</span>
                        <span className="font-bold text-slate-900 block mt-0.5">{activePlan.inverter.split('(')[0]}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Roof Space</span>
                        <span className="font-bold text-slate-900 block mt-0.5">{activePlan.roofSpace}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Financial & Subsidy Transparency (5 cols) */}
                <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 right-0 h-64 w-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Financial Breakdown
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        MNRE DBT Approved
                      </span>
                    </div>

                    {/* Price breakdown */}
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between items-center text-sm text-slate-300">
                        <span>Gross System Cost:</span>
                        <span className="font-bold line-through text-slate-400">{activePlan.grossCost}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-emerald-400 font-semibold">PM Surya Ghar DBT Subsidy:</span>
                        <span className="font-bold text-emerald-400">-{activePlan.subsidy}</span>
                      </div>
                      <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                        <div>
                          <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                            Net Out-of-Pocket Cost
                          </span>
                          <span className="text-3xl sm:text-4xl font-black text-white mt-1 block">
                            {activePlan.netCost}
                          </span>
                        </div>
                        <span className="text-xs text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold">
                          All Inclusive*
                        </span>
                      </div>
                    </div>

                    {/* ROI & Payback Highlights */}
                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          Monthly Savings
                        </span>
                        <span className="text-lg font-black text-emerald-400 block mt-0.5">
                          {activePlan.monthlySavings}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          ~{activePlan.annualSavings} / yr
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          Payback Period
                        </span>
                        <span className="text-lg font-black text-white block mt-0.5">
                          {activePlan.paybackYears}
                        </span>
                        <span className="text-[10px] text-emerald-400 block">
                          21+ Yrs Free Power
                        </span>
                      </div>
                    </div>

                    {/* Visual 25-Year Progress Meter */}
                    <div className="mt-6 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                        <span className="text-slate-300">Investment Payback: {activePlan.paybackYears}</span>
                        <span className="text-emerald-400">Lifetime: 25 Years</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                        <div className="bg-emerald-500 h-full w-[13%]" title="Payback period" />
                        <div className="bg-teal-400/50 h-full w-[87%]" title="22 years 100% free power" />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2">
                        ⚡ Est. Lifetime Electricity Savings: <strong className="text-white">{activePlan.lifetimeSavings}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3 relative z-10">
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Book Free {activePlan.capacity} Site Survey</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                    <a
                      href="tel:+919534668343"
                      className="w-full py-2.5 px-4 rounded-xl border border-white/20 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold text-center block transition-colors"
                    >
                      Speak to Solar Engineer: +91 95346 68343
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MODE 2: FULL COMPARISON SPEC SHEET TABLE ── */}
        {viewMode === 'comparison' && (
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                      Specification
                    </th>
                    {systemPlans.map((plan) => (
                      <th key={plan.id} className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[11px]">
                        <div>{plan.capacity}</div>
                        <div className="text-[10px] text-emerald-400 font-normal lowercase">{plan.recommendedFor.split('/')[0]}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Monthly Bill Range</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-600 font-semibold">{p.billRange}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Net Cost (Post Subsidy)</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 font-black text-emerald-700 text-sm">{p.netCost}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">PM Surya Ghar Subsidy</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 font-bold text-emerald-600">{p.subsidy}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Gross System Cost</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-500 line-through">{p.grossCost}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Daily Generation</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-700 font-medium">{p.dailyGeneration}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Estimated Monthly Savings</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-emerald-600 font-bold">{p.monthlySavings}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Payback Period</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-900 font-bold">{p.paybackYears}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Roof Area Required</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-600">{p.roofSpace}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">Solar Panels</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-600">{p.panelsCount}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Inverter Type</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-slate-600">{p.inverter.split('(')[0]}</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-slate-900">DISCOM Net Meter</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4 text-emerald-600 font-semibold">Included (SBPDCL/NBPDCL)</td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Action</td>
                    {systemPlans.map((p) => (
                      <td key={p.id} className="p-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPlanId(p.id)
                            openQuoteModal()
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider cursor-pointer"
                        >
                          Select {p.capacityNum}kW
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── INTERACTIVE BILL-TO-CAPACITY CALCULATOR TOOL ── */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-7 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Instant Solar Sizer
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Find Your Capacity by Monthly Electricity Bill
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Average Bihar Tariff:</span>
                <span className="text-xs font-bold bg-white/10 px-2.5 py-1 rounded-md text-emerald-300">
                  ₹{unitRate} / Unit
                </span>
              </div>
            </div>

            {/* Quick Bill Preset Buttons */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Quick Select Average Monthly Bill:
              </span>
              <div className="flex flex-wrap gap-2">
                {[2500, 3500, 5000, 7500, 10000, 15000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setSliderBill(val)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      sliderBill === val
                        ? 'bg-emerald-500 text-slate-950 shadow-md'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    ₹{val.toLocaleString('en-IN')} / mo
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Control */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Drag to Fine-Tune Bill Amount
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                  ₹{sliderBill.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-400 font-normal"> / month</span>
                </span>
              </div>

              <input
                type="range"
                min="1500"
                max="15000"
                step="500"
                value={sliderBill}
                onChange={(e) => setSliderBill(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                <span>₹1,500/mo (Small 1-2 BHK)</span>
                <span>₹5,000/mo (3 BHK Family)</span>
                <span>₹10,000/mo (Bungalow)</span>
                <span>₹15,000+/mo (Villa/Heavy)</span>
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Recommended Size
                </span>
                <span className="text-2xl font-black text-white mt-1 block">
                  {calcRecommendedKw} kW System
                </span>
                <span className="text-[11px] text-emerald-400 mt-0.5 block">
                  ~{calcRecommendedKw * 120} Units / month
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Govt. DBT Subsidy
                </span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block">
                  ₹{calcSubsidy.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  PM Surya Ghar Scheme
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Estimated Net Cost
                </span>
                <span className="text-2xl font-black text-white mt-1 block">
                  ₹{calcNet.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 block line-through">
                  Gross: ₹{calcGross.toLocaleString('en-IN')}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Estimated Payback
                </span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block">
                  {calcPayback} Years
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  21+ Yrs Free Power
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-400 max-w-md">
                * Based on Bihar solar radiation index (4.5 peak sun hours) and DISCOM net metering tariffs. Actual generation may vary slightly by roof tilt and orientation.
              </p>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href="#residential-contact"
                  className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-colors"
                >
                  Book Free Site Survey
                </a>
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  Get Instant Quotation
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
