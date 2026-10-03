import { useState } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'

const industrialPlans = [
  {
    id: '120kW',
    capacity: '120 kW System',
    capacityNum: 120,
    badge: 'Cold Storage Farm',
    recommendedFor: 'Agricultural Cold-Storage Facilities & Heavy Compressor Loads',
    billRange: '₹1.8 Lakhs - ₹3.0 Lakhs / month',
    panelsCount: '228 High-Efficiency Panels',
    annualSavings: '₹15.84 Lakh Reported Annual Savings',
    co2Offset: '144 Tonnes / Year Reported CO₂ Offset',
    systemType: 'High-Capacity Inverter Architecture with Heavy Compressor Buffer',
    monitoring: 'Industrial Monitoring Systems for Real-Time Control',
    netMetering: 'Grid Interconnection & DISCOM Net-Metering Process',
    equipment: [
      'Heavy Chilling Compressors & Cold Rooms',
      'Continuous Ventilation & Blowers',
      'Water Circulation & Booster Pumps',
      'Industrial-Grade Protection & ACDB/DCDB Isolation',
    ],
  },
  {
    id: '250kW',
    capacity: '250 kW System',
    capacityNum: 250,
    badge: 'Industrial Warehouse Array',
    recommendedFor: 'Factories, Warehouses, Logistics Centers & Production Units',
    billRange: '₹3.5 Lakhs - ₹6.5 Lakhs / month',
    panelsCount: '475 High-Efficiency Panels',
    annualSavings: '₹33 Lakh Reported Annual Savings',
    co2Offset: '300 Tonnes / Year Reported CO₂ Offset',
    systemType: 'Completed in < 30 Days with Full DISCOM Approval',
    monitoring: 'Industrial Monitoring Systems for Real-Time Control',
    netMetering: 'HT / LT Grid Interconnection & DISCOM Approval',
    equipment: [
      'Heavy Machinery & Production Lines',
      'Industrial Air Handling & Dust Extraction',
      'Automated Sorting & Conveyor Systems',
      'Robust Industrial Electrical Infrastructure',
    ],
  },
  {
    id: '500kW',
    capacity: '500 kW System',
    capacityNum: 500,
    badge: 'Solar Array Farm',
    recommendedFor: 'Utility-Scale Installations, Large Industrial Plants & Solar Farms',
    billRange: '₹7.0 Lakhs - ₹13.0 Lakhs / month',
    panelsCount: '950 Bifacial Panels',
    annualSavings: '₹66 Lakh Reported Annual Savings',
    co2Offset: '600 Tonnes / Year Reported CO₂ Offset',
    systemType: 'Utility-Scale Installation with Advanced Tracking Systems',
    monitoring: 'Industrial Monitoring Systems for Real-Time Control',
    netMetering: 'HT Substation Dedicated Feeder Synchronization',
    equipment: [
      'Bifacial Dual-Sided Solar Absorption',
      'Advanced Tracking Systems for Solar Capture',
      'High-Power Centralized / Multi-String Inverters',
      'Full Grid Interconnection & Distribution Protection',
    ],
  },
  {
    id: '1MW+',
    capacity: '1 MW+ Megawatt Scale',
    capacityNum: 1000,
    badge: 'Utility Solar Farm',
    recommendedFor: 'Multi-Acre Industrial Campuses, Mega Factories & Solar Power Plants',
    billRange: '₹15 Lakhs - ₹50 Lakhs+ / month',
    panelsCount: '1,900+ Bifacial Modules',
    annualSavings: '₹1.3+ Crores Projected Annual Savings',
    co2Offset: '1,200+ Tonnes / Year CO₂ Offset',
    systemType: 'Comprehensive Megawatt Scale Solar Power Plant',
    monitoring: 'Industrial Monitoring Systems for Real-Time Control',
    netMetering: '33kV Substation Dedicated Feeder Synchronization',
    equipment: [
      'Dual-Axis / Single-Axis Solar Tracking Integration',
      'Central Inverter Substation Switchyard',
      'Heavy Continuous Industrial Process Loads',
      'Turnkey Commissioning, Testing & Maintenance',
    ],
  },
]

export default function IndustrialSystemSizes() {
  const [activePlanId, setActivePlanId] = useState('250kW')
  const { openQuoteModal } = useQuoteModal()

  const currentPlan = industrialPlans.find((p) => p.id === activePlanId) || industrialPlans[1]

  return (
    <section id="industrial-sizes" className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Industrial Solar Capacities & Configurations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Suited for various capacity requirements, whether you run a factory, warehouse, cold storage, production unit, or utility-scale solar farm.
          </p>
        </div>

        {/* Capacity Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {industrialPlans.map((plan) => (
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
                {currentPlan.capacity}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                Estimated Monthly Electricity Bill:{' '}
                <strong className="text-slate-900 font-semibold">{currentPlan.billRange}</strong>
              </p>

              {/* KPI Cards matching user content */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hardware Sizing</p>
                  <p className="text-base sm:text-lg font-black text-slate-900 mt-1">{currentPlan.panelsCount}</p>
                  <p className="text-[10px] text-emerald-600 font-medium mt-0.5">High-efficiency modules</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Annual Savings</p>
                  <p className="text-lg font-black text-emerald-700 mt-1">{currentPlan.annualSavings}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Reported savings</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Carbon Offset</p>
                  <p className="text-sm font-black text-[#064E3B] mt-1">{currentPlan.co2Offset}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Emission reduction</p>
                </div>
              </div>

              {/* System Architecture Banner */}
              <div className="rounded-2xl bg-[#064E3B] text-white p-5 mb-6 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6EE7B7] block mb-1">
                  SYSTEM ARCHITECTURE & APPROVALS
                </span>
                <p className="text-sm sm:text-base font-bold text-white mb-2">
                  {currentPlan.systemType}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-emerald-100/80">
                  <span className="bg-emerald-900/60 px-2.5 py-1 rounded-md border border-emerald-700/50">
                    &bull; {currentPlan.monitoring}
                  </span>
                  <span className="bg-emerald-900/60 px-2.5 py-1 rounded-md border border-emerald-700/50">
                    &bull; {currentPlan.netMetering}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Equipment Powered & CTA */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Supported Industrial Loads
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Custom engineered around your operational needs
                </p>

                <div className="space-y-2.5 mb-6">
                  {currentPlan.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
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
                  <span>Plan Your {currentPlan.capacity}</span>
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
