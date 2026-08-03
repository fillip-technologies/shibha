import { useState, useRef } from 'react'
import yojnaLogo from '../../assets/logo/yojna.png'
import mnreLogo from '../../assets/logo/MNRE-removebg-preview.png'
import nbpdclLogo from '../../assets/logo/NBPDCL_logo.png'
import sbpdclLogo from '../../assets/logo/SBPDCL_logo.gif'

const govRateChart = {
  1: { cost: 70808, subsidy: 30000, oneTime: 70808, net: 40808 },
  2: { cost: 141617, subsidy: 60000, oneTime: 139617, net: 81617 },
  3: { cost: 212425, subsidy: 78000, oneTime: 209426, net: 134425 },
  4: { cost: 266292, subsidy: 78000, oneTime: 262292, net: 188292 },
  5: { cost: 332865, subsidy: 78000, oneTime: 327865, net: 254865 },
  6: { cost: 399438, subsidy: 78000, oneTime: 393438, net: 321438 },
  7: { cost: 466011, subsidy: 78000, oneTime: 457011, net: 388011 },
  8: { cost: 532584, subsidy: 78000, oneTime: 520584, net: 454584 },
  9: { cost: 599157, subsidy: 78000, oneTime: 584157, net: 521157 },
  10: { cost: 665730, subsidy: 78000, oneTime: 645730, net: 587730 }
}

function PMSuryaGhar() {
  const [activeTab, setActiveTab] = useState('rates') // 'rates' | 'savings'
  const cardRef = useRef(null)

  // Savings Calculator State
  const [monthlyBill, setMonthlyBill] = useState(3000)

  // Calculations for Savings
  const unitRate = 7.5
  const estimatedUnits = Math.round(monthlyBill / unitRate)
  
  // Recommended system size: 1kW per ~120 units/month, max 10kW
  const recommendedCapacity = Math.max(1, Math.min(10, Math.ceil(estimatedUnits / 120)))
  
  // Get official rate data for current capacity
  const rateData = govRateChart[recommendedCapacity] || { cost: recommendedCapacity * 60000, subsidy: 78000, oneTime: recommendedCapacity * 60000, net: recommendedCapacity * 60000 - 78000 }
  
  const estimatedCost = rateData.cost
  const estimatedSubsidy = rateData.subsidy
  const netInvestment = rateData.net
  
  const monthlyGeneration = recommendedCapacity * 120 // 120 units per kW per month
  const monthlySavingsVal = Math.round(Math.min(monthlyBill, monthlyGeneration * unitRate))
  const annualSavingsVal = monthlySavingsVal * 12
  const paybackPeriod = (netInvestment / annualSavingsVal).toFixed(1)
  const co2Saved = (recommendedCapacity * 1.2).toFixed(1)
  const treesPlanted = recommendedCapacity * 60

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <section id="subsidy-scheme" className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-20 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 -z-0 h-96 w-96 rounded-full bg-teal-500/5 blur-[120px]" aria-hidden="true" />

      <div className="site-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <img 
                src={yojnaLogo} 
                alt="PM Surya Ghar Yojana Logo" 
                className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-lg"
              />
              <img 
                src={mnreLogo} 
                alt="MNRE Logo" 
                className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-lg"
              />
              <img 
                src={nbpdclLogo} 
                alt="NBPDCL Logo" 
                className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-lg"
              />
              <img 
                src={sbpdclLogo} 
                alt="SBPDCL Logo" 
                className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-lg"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-sm">
              {/* Sun Icon */}
              <svg className="h-4 w-4 animate-spin-slow text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.243 3.05a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.05 4.243a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.757 14.95a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm1.757-4.243a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Government Approved
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            PM Surya Ghar Muft <br className="hidden sm:inline" />
            Bijli Yojana
          </h2>

          <p className="mt-4 text-xl sm:text-2xl font-bold text-emerald-300">
            Unlock Up to ₹78,000 Subsidy With PM Surya Ghar Solar Installation in Patna
          </p>

          <p className="mt-4 max-w-2xl text-emerald-100/80 text-base sm:text-lg leading-relaxed">
          Why spend your hard-earned money on expensive electricity bills when you can have your own source of energy? Utilise the PM Surya Ghar Muft Bijli Yojana scheme and avail of up to ₹78,000 subsidy from the government for rooftop solar panels. With a Surya Ghar Yojna Vendor in Patna, switch to solar and save your money. 

          </p>

          <div className="mt-8">
            <button
              onClick={() => handleTabChange('savings')}
              className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-emerald-50 px-8 py-4 text-sm font-bold text-emerald-950 shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Calculate Savings
              <svg className="ml-2 h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side Card Container */}
        <div ref={cardRef} className="lg:col-span-5 w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-emerald-100/10 transition-all duration-300">
            
            {/* Tabs Header */}
            <div className="mb-6 bg-slate-100 p-1.5 rounded-2xl flex gap-1 text-center">
              <button
                type="button"
                onClick={() => setActiveTab('rates')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === 'rates'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Subsidy Rates
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('savings')}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === 'savings'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Calculate Savings
              </button>
            </div>

            {/* TAB CONTENT: Rates */}
            {activeTab === 'rates' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                  Approved System Rates & Subsidy
                </h3>
                
                <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-inner">
                  <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                    <thead>
                      <tr className="bg-emerald-950 text-white font-bold uppercase tracking-wider text-[9px] sm:text-[10px]">
                        <th className="p-2 sm:p-3 whitespace-nowrap">Capacity</th>
                        <th className="p-2 sm:p-3 whitespace-nowrap">System Cost</th>
                        <th className="p-2 sm:p-3 whitespace-nowrap">Govt. Subsidy</th>
                        <th className="p-2 sm:p-3 whitespace-nowrap">One-Time Pay</th>
                        <th className="p-2 sm:p-3 whitespace-nowrap">Net Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(govRateChart).map(([kw, data]) => (
                        <tr key={kw} className="hover:bg-emerald-50/20 transition-colors even:bg-slate-50/50">
                          <td className="p-2 sm:p-3 font-bold text-slate-900">{kw} kW</td>
                          <td className="p-2 sm:p-3 text-slate-600">₹{data.cost.toLocaleString('en-IN')}</td>
                          <td className="p-2 sm:p-3 font-bold text-emerald-600">₹{data.subsidy.toLocaleString('en-IN')}</td>
                          <td className="p-2 sm:p-3 text-slate-600">₹{data.oneTime.toLocaleString('en-IN')}</td>
                          <td className="p-2 sm:p-3 font-extrabold text-slate-900">₹{data.net.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[10px] text-slate-400 text-center mt-4 leading-relaxed">
                  * System Cost includes GST at 13.8%. Govt. Subsidy will be credited directly to your bank account post installation.
                </p>
              </div>
            )}

            {/* TAB CONTENT: Savings */}
            {activeTab === 'savings' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                  Solar Savings Calculator
                </h3>

                {/* Input Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="bill-range" className="text-xs font-bold text-slate-600 uppercase">
                      Average Monthly Bill
                    </label>
                    <span className="text-lg font-extrabold text-emerald-600">
                      ₹{monthlyBill.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="bill-range"
                    type="range"
                    min="500"
                    max="15000"
                    step="200"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>₹500</span>
                    <span>₹5,000</span>
                    <span>₹10,000</span>
                    <span>₹15,000+</span>
                  </div>
                </div>

                {/* Calculation Dashboard */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Recommended Size */}
                  <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/60">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      Recommended System
                    </span>
                    <span className="text-lg font-extrabold text-slate-800 mt-1 block">
                      {recommendedCapacity} kW
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      ~{estimatedUnits} units/month
                    </span>
                  </div>

                  {/* Govt Subsidy */}
                  <div className="border border-slate-100 rounded-xl p-3 bg-emerald-50/20">
                    <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                      Govt. Subsidy
                    </span>
                    <span className="text-lg font-extrabold text-emerald-600 mt-1 block">
                      ₹{estimatedSubsidy.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {recommendedCapacity >= 3 ? 'Max Subsidy Capped' : 'Direct Transfer'}
                    </span>
                  </div>

                  {/* Net Investment */}
                  <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/60">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      Net Investment (est.)
                    </span>
                    <span className="text-lg font-extrabold text-slate-800 mt-1 block">
                      ₹{netInvestment.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Original: ₹{estimatedCost.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Payback Period */}
                  <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/60">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      Payback Period
                    </span>
                    <span className="text-lg font-extrabold text-emerald-600 mt-1 block">
                      ~{paybackPeriod} Years
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Annual Savings: ₹{annualSavingsVal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Environmental Impact Accordion or Banner */}
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    {/* Tree Icon */}
                    <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                    <div>
                      <span className="font-bold block text-[10px] text-emerald-800 uppercase">
                        Green Impact
                      </span>
                      <span>
                        Saves <strong>{co2Saved} Tons</strong> CO₂/yr (equivalent to <strong>{treesPlanted} trees</strong>).
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-md transition-all mt-1 cursor-pointer"
                >
                  Book Free Site Survey
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default PMSuryaGhar
