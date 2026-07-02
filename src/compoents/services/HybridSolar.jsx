import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import solar6 from '../../assets/images/solar-6.jpg'
import solar8 from '../../assets/images/solar-8.jpg'

const systemEstimates = {
  '3kW': {
    capacity: '3 kW',
    panels: '6 panels (540W Mono PERC)',
    battery: '4.8 kWh LiFePO4 Lithium Storage',
    space: '300 sq. ft.',
    generation: '12-15 Units/day',
    monthlySavings: '₹2,500 - ₹3,100',
    subsidy: '₹78,000',
    estimatedCost: '₹2,30,000',
    netCost: '₹1,52,000',
    payback: '4.2 Years',
  },
  '5kW': {
    capacity: '5 kW',
    panels: '10 panels (540W Mono PERC)',
    battery: '9.6 kWh LiFePO4 Lithium Storage',
    space: '500 sq. ft.',
    generation: '20-25 Units/day',
    monthlySavings: '₹4,200 - ₹5,200',
    subsidy: '₹78,000',
    estimatedCost: '₹3,40,000',
    netCost: '₹2,62,000',
    payback: '4.4 Years',
  },
  '8kW': {
    capacity: '8 kW',
    panels: '15 panels (540W Mono PERC)',
    battery: '14.4 kWh LiFePO4 Lithium Storage',
    space: '750 sq. ft.',
    generation: '32-40 Units/day',
    monthlySavings: '₹6,800 - ₹8,500',
    subsidy: '₹78,000',
    estimatedCost: '₹5,00,000',
    netCost: '₹4,22,000',
    payback: '4.6 Years',
  },
  '10kW': {
    capacity: '10 kW',
    panels: '19 panels (540W Mono PERC)',
    battery: '19.2 kWh LiFePO4 Lithium Storage',
    space: '1,000 sq. ft.',
    generation: '40-50 Units/day',
    monthlySavings: '₹8,500 - ₹10,600',
    subsidy: '₹78,000',
    estimatedCost: '₹6,20,000',
    netCost: '₹5,42,000',
    payback: '4.8 Years',
  },
}

const keyComponents = [
  {
    title: 'Tier-1 Mono PERC Panels',
    desc: 'High-wattage mono-crystalline solar panels designed to capture maximum energy for immediate household load demands and battery backup charging.',
    features: ['22%+ solar conversion efficiency', 'Anti-reflective heavy-duty glass', '25-year performance warranty structure'],
  },
  {
    title: 'Smart Hybrid Inverter',
    desc: 'The brain of the hybrid system. Manages grid feed, home load requirements, and battery charge/discharge dynamically based on real-time priorities.',
    features: ['Seamless automatic grid isolation (<10ms)', 'Dual-MPPT trackers for multi-roof orientation', 'Mobile application tracking dashboard'],
  },
  {
    title: 'LiFePO4 Lithium Battery Rack',
    desc: 'Wall-mounted or floor cabinet Lithium Iron Phosphate batteries. Highly safe, zero maintenance, and handles deep charging cycles smoothly.',
    features: ['10+ year design life (3000+ full cycles)', 'Integrated Battery Management System (BMS)', 'Zero hazardous outgassing'],
  },
  {
    title: 'Bi-Directional Net Meter',
    desc: 'Approved smart bi-directional meter installed at the main grid connection to export excess solar energy and credit your electricity account.',
    features: ['DISCOM approved net metering sync', 'Monitors grid imports and exports', 'Allows net zero billing targets'],
  },
]

const processSteps = [
  {
    title: 'Sunlight Conversion',
    desc: 'Rooftop solar panels convert sunlight into DC electricity to power the active loads in your home.',
  },
  {
    title: 'Smart Charge & Sync',
    desc: 'The hybrid inverter directs energy to run home appliances and charge the battery bank to 100%.',
  },
  {
    title: 'Net Exporting Credits',
    desc: 'Once batteries are fully charged and home needs are met, excess solar power is exported to the grid.',
  },
  {
    title: 'Seamless Grid Backup',
    desc: 'During power failures, the hybrid inverter isolates from the grid in <10ms and keeps critical loads running on battery.',
  },
]

const faqsList = [
  {
    q: 'What is the main difference between Hybrid and Off-Grid solar?',
    a: 'A hybrid system remains connected to the utility grid, allowing you to use net metering to export excess power and save on bills. It has a battery backup for power failures. An off-grid system is completely isolated from the grid, requiring a much larger battery bank to ensure power during consecutive cloudy days.',
  },
  {
    q: 'How fast is the power backup changeover during a grid failure?',
    a: 'The switching time is less than 10 milliseconds. This is extremely fast (matching standard online UPS specifications), meaning computers, Wi-Fi routers, televisions, and other sensitive appliances will not shut down or reboot.',
  },
  {
    q: 'Am I eligible for government subsidies on a hybrid solar system?',
    a: 'Yes. Since hybrid systems are grid-connected with a bi-directional net meter, the solar panels and hybrid inverter component qualify for the central government PM Surya Ghar subsidy (up to ₹78,000). The cost of the batteries is borne entirely by the buyer.',
  },
  {
    q: 'How long do the hybrid batteries last?',
    a: 'Shibha Solar uses premium LiFePO4 Lithium batteries which come with a 5 to 10-year manufacturer warranty and last more than 10-12 years under normal daily operation (rated for over 3,000 charging cycles).',
  },
  {
    q: 'Can I add more battery storage to my hybrid system later?',
    a: 'Yes. Hybrid systems are modular. You can start with a basic battery bank (e.g. 4.8 kWh) to cover emergency lighting/critical loads and easily stack more battery units later as your energy requirements grow.',
  },
]

function HybridSolar() {
  const [selectedSize, setSelectedSize] = useState('3kW')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* ── Hero Banner ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
        
        {/* Tech Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" 
          style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
        />
        
        <div className="absolute inset-0 -z-10 opacity-15">
          <img
            src={solar6}
            alt="Hybrid solar panel installation background"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-emerald-950/85" />
        
        {/* Glow Spots */}
        <div className="absolute left-1/4 top-1/4 -z-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" aria-hidden="true" />
        <div className="absolute right-10 bottom-10 -z-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" aria-hidden="true" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400/80">
                  <li>
                    <Link to="/" className="transition hover:text-white">Home</Link>
                  </li>
                  <li aria-hidden="true">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="transition text-emerald-400 cursor-default">Services</span>
                  </li>
                  <li aria-hidden="true">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li className="text-white font-semibold">Hybrid Solar</li>
                </ol>
              </nav>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm mb-5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Grid + Battery Systems
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl">
                The Smartest way to{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
                  Go Solar
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
                Enjoy maximum utility savings with net metering while securing your home with automatic battery backup. Stay powered during outages with zero interruptions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#estimator"
                  className="group inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
                >
                  Estimate System
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5"
                >
                  Book Free Survey
                </a>
              </div>
            </div>

            {/* Right Column: Glassmorphism Hybrid Sync Dashboard */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl shadow-emerald-950/50">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">Hybrid Energy Sync</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                </div>

                {/* Dashboard Stats */}
                <div className="my-6">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">Solar Power</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl font-black text-white tracking-tight">5.20</span>
                    <span className="text-xl font-bold text-emerald-400">kW</span>
                  </div>
                </div>

                {/* Grid stats columns */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Battery Charge</span>
                    <span className="text-base font-bold text-slate-100 block mt-0.5">94% (Charging)</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Export to Grid</span>
                    <span className="text-base font-bold text-emerald-400 block mt-0.5">1.85 kW</span>
                  </div>
                </div>

                {/* Hybrid mode visualization */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-3">System Routing Mode</span>
                  <div className="bg-slate-900/40 rounded-xl p-3.5 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                    <span>Power Priority:</span>
                    <span className="font-bold text-emerald-400">Solar → Load → Battery → Grid</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Advantages Section ───────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="section-label">Overview</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Smartest Energy Security
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
                Hybrid systems offer the absolute ultimate in flexibility. You keep the financial advantages of net metering (sending power back to grid for high bill deductions) while staying protected from grid failures, power fluctuations, and daily load shedding with smart Lithium batteries.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Seamless Changeover</h4>
                    <p className="text-xs text-slate-500 mt-1">Automatic switching takes less than 10ms. Computers stay online.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Max Savings & Billing</h4>
                    <p className="text-xs text-slate-500 mt-1">Export surplus power during peak generation to lower your bill.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">PM Surya Ghar Subsidy</h4>
                    <p className="text-xs text-slate-500 mt-1">Fully eligible for central rooftop subsidies up to ₹78,000.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Intelligent Controls</h4>
                    <p className="text-xs text-slate-500 mt-1">Prioritize solar, battery, or grid to minimize electricity consumption.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-emerald-100/40">
                <img
                  src={solar8}
                  alt="Hybrid solar inverter setup"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-emerald-500/10 -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-teal-500/10 -z-10" aria-hidden="true" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive ROI Estimator Section ────────── */}
      <section id="estimator" className="py-24 bg-slate-100 overflow-hidden border-t border-b border-slate-200">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="section-label">Hybrid Cost Estimates</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Hybrid Package Estimator
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Select a capacity below to view technical specifications, estimates, and subsidy calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Options */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {Object.keys(systemEstimates).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-between p-5 rounded-xl border text-left transition-all ${
                    selectedSize === size
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-600/20 translate-x-1.5'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-300'
                  }`}
                >
                  <div>
                    <span className="block text-lg font-bold">{size} Hybrid Setup</span>
                    <span className={`text-xs block ${selectedSize === size ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {systemEstimates[size].battery}
                    </span>
                  </div>
                  <span className={`h-6 w-6 rounded-full flex items-center justify-center ${selectedSize === size ? 'bg-white text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            {/* Details Card */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">System Package</span>
                  <h3 className="text-2xl font-black text-slate-900">{systemEstimates[selectedSize].capacity} Hybrid System</h3>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">ROI Payback</span>
                  <span className="text-base font-extrabold text-emerald-600">{systemEstimates[selectedSize].payback}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Solar Panels</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].panels}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Lithium Backup</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].battery}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Roof Area Required</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].space}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Daily Production</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].generation}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Govt. Subsidy (PM Surya Ghar)</span>
                  <span className="text-sm font-bold text-emerald-600 block mt-1">-{systemEstimates[selectedSize].subsidy}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Monthly Bill Savings</span>
                  <span className="text-sm font-bold text-emerald-600 block mt-1">{systemEstimates[selectedSize].monthlySavings}</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Net Complete Investment (est.)</span>
                  <span className="text-3xl font-black text-slate-900 mt-1 block">
                    {systemEstimates[selectedSize].netCost}*
                  </span>
                </div>
                <a
                  href="#contact"
                  className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold text-center px-6 py-3 shadow-md transition-all active:scale-95"
                >
                  Book Free Site Survey
                </a>
              </div>
              
              <span className="text-[10px] text-slate-400 block mt-3 text-center sm:text-left">
                * System costs include premium Tier-1 mono solar panels, hybrid sync inverter, LiFePO4 battery pack, structures, and bidirectional net-meter setup fees.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Key Hardware Components Section ───────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="section-label">System Hardware</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Premium Hardware Components
            </h2>
            <p className="mt-3 text-base text-slate-500">
              We select only high-reliability Tier-1 hardware engineered for independent standalone applications.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {keyComponents.map((component, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {component.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {component.desc}
                  </p>
                </div>
                
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {component.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standalone Process ────────────────────────── */}
      <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="section-label">Process Flow</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              How Hybrid Energy Flows
            </h2>
            <p className="mt-3 text-base text-slate-500">
              A detailed view of how hybrid solar balances panels, storage batteries, and utility grid connections.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm relative group hover:border-emerald-500 transition-colors"
              >
                <div className="absolute -top-4 -left-2 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-sm font-extrabold text-white shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-emerald-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
        <div className="site-container max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label">FAQs</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Got questions about hybrid solar + battery configurations? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div 
                  key={index} 
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen ? 'border-emerald-500 bg-emerald-50/10 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 select-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 border-t border-slate-200/60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="p-5 text-sm leading-relaxed text-slate-500">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-20 text-center text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" aria-hidden="true" />
        <div className="site-container relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 backdrop-blur-sm">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Go Hybrid?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            Let our MNRE-certified engineers design the perfect smart hybrid solar system for your home or commercial structure.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+919534668343"
              className="inline-flex h-13 items-center justify-center rounded-lg bg-white px-7 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us Now
            </a>
            <Link
              to="/"
              className="inline-flex h-13 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HybridSolar
