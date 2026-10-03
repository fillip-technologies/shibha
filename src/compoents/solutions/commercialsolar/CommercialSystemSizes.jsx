import { useState } from 'react'
import { useQuoteModal } from '../../../context/QuoteModalContext'

const commercialPlans = [
  {
    id: '15kW',
    capacity: '15 kW System',
    capacityNum: 15,
    badge: 'Commercial Building',
    recommendedFor: 'Offices, Retail Spaces & Commercial Buildings',
    billRange: '₹22,000 - ₹35,000 / month',
    panelsCount: '28 High-Efficiency Panels',
    annualSavings: '₹1.98 Lakhs Reported',
    co2Offset: '18 Tonnes / Year Reported CO₂ Offset',
    systemType: 'Grid-Tied / Hybrid with Inverter & ACDB/DCDB Protection',
    monitoring: 'Cloud-Based Software Telemetry',
    netMetering: 'Net-Metering Supported (Utility Approved)',
    appliances: [
      'Commercial Air Conditioning & Fans',
      'Office Workstations & Lighting',
      'Water Pumps & Facility Power',
      'ACDB & DCDB Electrical Protection',
    ],
  },
  {
    id: '25kW',
    capacity: '25 kW System',
    capacityNum: 25,
    badge: 'School Campus',
    recommendedFor: 'School & College Campuses, Institutes & Large Facilities',
    billRange: '₹35,000 - ₹60,000 / month',
    panelsCount: '47 High-Efficiency Panels',
    annualSavings: '₹3.30 Lakhs Reported',
    co2Offset: '30 Tonnes / Year Reported CO₂ Offset',
    systemType: 'Grid-Tied with Optional Battery Backup for Critical Labs',
    monitoring: 'Cloud-Based Software Telemetry',
    netMetering: 'Net-Metering Supported (Utility Approved)',
    appliances: [
      'Classroom Lighting & Smart Boards',
      'Computer Labs & Server Rooms',
      'Administrative Block & Offices',
      'Campus Water Booster Pumps',
    ],
  },
  {
    id: '75kW',
    capacity: '75 kW System',
    capacityNum: 75,
    badge: 'Hospital Solar',
    recommendedFor: 'Hospitals, Nursing Homes & 24x7 Healthcare Facilities',
    billRange: '₹1,00,000 - ₹1,80,000 / month',
    panelsCount: '140 High-Efficiency Panels',
    annualSavings: '₹9.90 Lakhs Reported',
    co2Offset: '90 Tonnes / Year Reported CO₂ Offset',
    systemType: 'Hybrid with Battery Backup / Solar-DG Sync for Critical Loads',
    monitoring: 'Cloud-Based Software Telemetry',
    netMetering: 'Net-Metering Supported (Utility Approved)',
    appliances: [
      'Critical Healthcare & ICU Loads',
      'Hospital Diagnostic & Imaging Equipment',
      'Central Hospital HVAC & Lifts',
      'Uninterrupted Power Supply (UPS) Support',
    ],
  },
  {
    id: '100kW+',
    capacity: '100 kW+ Custom System',
    capacityNum: 100,
    badge: 'Large Enterprise',
    recommendedFor: 'Malls, Hotels, Factories & Multi-Storey Commercial Complexes',
    billRange: '₹1.5 Lakhs - ₹10 Lakhs+ / month',
    panelsCount: 'Custom Scaled (180+ Panels)',
    annualSavings: '₹13 Lakhs+ Projected Annual Savings',
    co2Offset: '120+ Tonnes / Year CO₂ Offset',
    systemType: 'High-Capacity Grid-Tied or Multi-Inverter Hybrid Matrix',
    monitoring: 'Enterprise Multi-User Cloud Telemetry',
    netMetering: 'HT / LT Net-Metering Supported',
    appliances: [
      'Multi-Storey Central Chillers & Escalators',
      'Factory Machinery & High-Bay Lighting',
      'Cold Storage & Refrigeration Units',
      'Full Campus Integration & Backup Power',
    ],
  },
]

export default function CommercialSystemSizes() {
  const [activePlanId, setActivePlanId] = useState('25kW')
  const { openQuoteModal } = useQuoteModal()

  const currentPlan = commercialPlans.find((p) => p.id === activePlanId) || commercialPlans[1]

  return (
    <section id="commercial-sizes" className="py-20 lg:py-24 bg-white overflow-hidden scroll-mt-10">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
            SYSTEM SIZING & PLANNING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            Commercial Solar Capacities & Configurations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Solar systems can be planned and scaled for multi-storey buildings, institutional campuses, and other properties with significant energy demand.
          </p>
        </div>

        {/* Capacity Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {commercialPlans.map((plan) => (
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
                  <p className="text-lg font-black text-slate-900 mt-1">{currentPlan.panelsCount}</p>
                  <p className="text-[10px] text-emerald-600 font-medium mt-0.5">High-efficiency modules</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Annual Savings</p>
                  <p className="text-lg font-black text-emerald-700 mt-1">{currentPlan.annualSavings}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Reported savings</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Environmental Impact</p>
                  <p className="text-sm font-black text-[#064E3B] mt-1">{currentPlan.co2Offset}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Carbon reduction</p>
                </div>
              </div>

              {/* System Architecture Banner */}
              <div className="rounded-2xl bg-[#064E3B] text-white p-5 mb-6 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6EE7B7] block mb-1">
                  INTEGRATED ARCHITECTURE
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

            {/* Right 5 Cols: Loads & CTA */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Supported Loads & Electrical Equipment
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Planned and designed around your business energy needs
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
