import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import solar3 from '../../assets/images/solar-3.jpg'
import solar7 from '../../assets/images/solar-7.jpg'

const systemEstimates = {
  '3kW': {
    capacity: '3 kW',
    panels: '6 panels (540W Mono PERC)',
    space: '300 sq. ft.',
    generation: '12-15 Units/day',
    monthlySavings: '₹2,700 - ₹3,300',
    subsidy: '₹78,000',
    estimatedCost: '₹1,80,000',
    netCost: '₹1,02,000',
    payback: '3.1 Years',
  },
  '5kW': {
    capacity: '5 kW',
    panels: '10 panels (540W Mono PERC)',
    space: '500 sq. ft.',
    generation: '20-25 Units/day',
    monthlySavings: '₹4,500 - ₹5,500',
    subsidy: '₹78,000',
    estimatedCost: '₹2,80,000',
    netCost: '₹2,02,000',
    payback: '3.3 Years',
  },
  '8kW': {
    capacity: '8 kW',
    panels: '15 panels (540W Mono PERC)',
    space: '750 sq. ft.',
    generation: '32-40 Units/day',
    monthlySavings: '₹7,200 - ₹9,000',
    subsidy: '₹78,000',
    estimatedCost: '₹4,20,000',
    netCost: '₹3,42,000',
    payback: '3.4 Years',
  },
  '10kW': {
    capacity: '10 kW',
    panels: '19 panels (540W Mono PERC)',
    space: '1,000 sq. ft.',
    generation: '40-50 Units/day',
    monthlySavings: '₹9,000 - ₹11,250',
    subsidy: '₹78,000',
    estimatedCost: '₹5,10,000',
    netCost: '₹4,32,000',
    payback: '3.5 Years',
  },
}

const keyComponents = [
  {
    title: 'Tier-1 Mono PERC Panels',
    desc: 'High-efficiency mono-crystalline PERC panels (typically 540W–580W each) that maximize energy production even in low-light conditions.',
    features: ['22%+ solar conversion efficiency', 'Bifacial options for dual-side absorption', 'Anti-reflective & self-cleaning glass'],
  },
  {
    title: 'Smart Grid-Tied Inverter',
    desc: 'The brain of the system. Converts DC solar energy into clean AC utility-grade power and syncs seamlessly with the main grid grid frequency.',
    features: ['98.6% peak efficiency conversion', 'Built-in Wi-Fi cloud monitoring app', 'Anti-islanding protection for grid safety'],
  },
  {
    title: 'Bi-Directional Smart Meter',
    desc: 'DISCOM-approved net meter that records both the units of electricity you import from the grid and the excess solar units you export.',
    features: ['Approved by state power distribution boards', 'Accurate net billing recording', 'Real-time billing credits on bills'],
  },
  {
    title: 'ACDB / DCDB Protection Box',
    desc: 'Distribution boxes equipped with Surge Protection Devices (SPD) and fuses to shield the inverter and appliances from electrical spikes.',
    features: ['IP65 waterproof safety enclosures', 'High-grade copper wiring', 'Dual isolation switch protection'],
  },
]

const syncSteps = [
  {
    title: 'Sunlight Conversion',
    desc: 'Solar PV panels absorb sunlight and convert it into DC electricity during daylight hours.',
  },
  {
    title: 'Inverter Synchronization',
    desc: 'The grid-tied inverter transforms the DC power into stable AC power and matches the grid voltage precisely.',
  },
  {
    title: 'Building Consumption',
    desc: 'The solar electricity first flows directly to run your home appliances, lighting, and electrical loads.',
  },
  {
    title: 'Net Export',
    desc: 'Any unused surplus power automatically flows back to the utility grid, spinning your net meter backwards.',
  },
]

const faqsList = [
  {
    q: 'Why is Shibha Enterprises regarded as the Best On Grid Solar Company in Patna?',
    a: 'Shibha Enterprises is trusted as the Best On Grid Solar Company in Patna for delivering premium-quality solar systems, expert installation, seamless net metering support, and reliable after-sales service for homes and businesses.',
  },
  {
    q: 'What is an On-Grid Solar System?',
    a: 'An On-Grid Solar System is connected to the utility grid, allowing you to use solar energy during the day and export excess electricity through net metering to reduce your electricity bills.',
  },
  {
    q: 'Who should choose an On-Grid Solar System?',
    a: 'On-grid solar is ideal for homeowners, offices, commercial buildings, schools, hospitals, and industries with a reliable grid connection looking to maximize savings without battery storage.',
  },
  {
    q: 'What are the benefits of choosing the Best On Grid Solar Company in Patna, Bihar?',
    a: 'Choosing the Best On Grid Solar Company in Patna ensures professional system design, premium components, certified installation, higher energy efficiency, and long-term performance.',
  },
  {
    q: 'How does net metering work?',
    a: 'Net metering allows your solar system to export surplus electricity to the utility grid. The exported units are adjusted against your electricity consumption, helping reduce your monthly energy bills.',
  },
  {
    q: 'Does an On-Grid Solar System require batteries?',
    a: 'No. On-grid systems operate without battery storage, making them more affordable, easier to maintain, and highly efficient for locations with a stable electricity supply.',
  },
  {
    q: 'How much can I save with an On-Grid Solar System?',
    a: 'Savings depend on your electricity usage and system capacity. Most users experience substantial reductions in monthly electricity bills while enjoying excellent long-term returns.',
  },
  {
    q: 'Is an On-Grid Solar System eligible for government subsidies?',
    a: 'Yes. Eligible residential rooftop solar systems can receive benefits under government subsidy schemes such as the PM Surya Ghar Muft Bijli Yojana, subject to applicable guidelines.',
  },
  {
    q: 'How long does an On-Grid Solar installation take?',
    a: 'Most residential installations are completed within a few days after the site survey and approval process, while commercial projects may require additional time based on project size.',
  },
  {
    q: 'Why should I choose Shibha Enterprises for On-Grid Solar installation?',
    a: 'As the Best On Grid Solar Company in Patna, we provide customized solar solutions, Tier-1 components, expert engineering, transparent pricing, and dedicated technical support from consultation to commissioning.',
  },
  {
    q: 'What maintenance does an On-Grid Solar System require?',
    a: 'On-grid systems require minimal maintenance. Periodic cleaning of solar panels and routine inspections help maintain maximum energy generation and long-term efficiency.',
  },
  {
    q: 'How can I get a free consultation for an On Grid Solar System?',
    a: 'Simply contact Shibha Enterprises to schedule a free site survey and consultation. Our experts will evaluate your energy needs and recommend the most efficient On-Grid Solar solution for your property.',
  },
]

function OnGridSolar() {
  const [selectedSize, setSelectedSize] = useState('3kW')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">

      {/* ── Hero Banner ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">

        {/* Background visual elements */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35"
          style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
        />

        <div className="absolute inset-0 -z-10 opacity-15">
          <img
            src={solar7}
            alt="Solar installation backdrop"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-emerald-950/80" />

        {/* Elegant light glowing spots */}
        <div className="absolute left-1/4 top-1/4 -z-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" aria-hidden="true" />
        <div className="absolute right-10 bottom-10 -z-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" aria-hidden="true" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Column: Text & CTAs */}
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
                  <li className="text-white font-semibold">On-Grid Solar</li>
                </ol>
              </nav>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm mb-5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Grid-Tied Systems
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl">
                Power Your Home with{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
                  On-Grid Solar
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
                Harness the power of solar energy and get uninterrupted savings through the best on-grid system with the best on grid solar company in Patna. Connected directly to the electricity grid,
                it powers your home and provides excess power that you can sell in exchange for credits.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#estimator"
                  className="group inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
                >
                  Estimate Savings
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

            {/* Right Column: Live Glassmorphism Status Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl shadow-emerald-950/50">
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">Live System Monitor</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Grid-Synced
                  </span>
                </div>

                {/* Mockup Generation Stats */}
                <div className="my-6">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">Current Generation</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl font-black text-white tracking-tight">4.72</span>
                    <span className="text-xl font-bold text-emerald-400">kW</span>
                  </div>
                </div>

                {/* Grid stats columns */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Exported Today</span>
                    <span className="text-base font-bold text-slate-100 block mt-0.5">14.8 Units</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">This Month Savings</span>
                    <span className="text-base font-bold text-emerald-400 block mt-0.5">₹6,840.00</span>
                  </div>
                </div>

                {/* Mini flow visualization */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-3">Power Flow</span>
                  <div className="flex items-center justify-between bg-slate-900/40 rounded-xl p-3 border border-white/5">
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-slate-400">Solar Panels</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-2">
                      <div className="h-0.5 w-full bg-emerald-500/30 relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-0 bg-emerald-400 w-1/3 animate-[shimmer_2s_infinite_linear]" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-slate-400">Inverter</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-2">
                      <div className="h-0.5 w-full bg-emerald-500/30 relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-0 bg-emerald-400 w-1/3 animate-[shimmer_2s_infinite_linear]" style={{ animationDuration: '1.5s' }} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-slate-400">Home/Grid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Key Advantages Section ───────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="section-label">Overview</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Maximum Savings. Minimal Maintenance.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
                Select an On Grid Solar System by the Best Net Metering Consultant in Patna and save on electricity bills, faster return on investment, and optimal performance. Tailored for residential as well as commercial needs, our advanced solar systems provide maximum efficiency.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Government Subsidies</h4>
                    <p className="text-xs text-slate-500 mt-1">Get up to ₹78,000 on rooftop solar power plant subsidy programs.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Quick Return on Investment </h4>
                    <p className="text-xs text-slate-500 mt-1">Return on investment in as little as 3-4 years and monthly savings.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658-3.163a1.5 1.5 0 01-.554-2.049l2.5-4.33a1.5 1.5 0 012.049-.554l5.658 3.163a1.5 1.5 0 01.554 2.049l-2.5 4.33a1.5 1.5 0 01-2.049.554z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Hassle-Free Maintenance </h4>
                    <p className="text-xs text-slate-500 mt-1">Without any batteries and with easy maintenance, just clean panels once a week for high performance</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Smart Net Metering
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">We offer seamless grid-tie functionality, enabling you to sell off excess energy and earn billing credits.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-emerald-100/40">
                <img
                  src={solar3}
                  alt="On-grid solar installation"
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
            <span className="section-label">Investment & Savings</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Interactive System Estimator
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Being the best on grid solar company in Patna, we help you choose a system size from below to determine the average costs, government incentives, and payback time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* System Size Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {Object.keys(systemEstimates).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-between p-5 rounded-xl border text-left transition-all ${selectedSize === size
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-600/20 translate-x-1.5'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-300'
                    }`}
                >
                  <div>
                    <span className="block text-lg font-bold">{size} Solar Power System</span>
                    <span className={`text-xs block ${selectedSize === size ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {systemEstimates[size].panels}
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

            {/* Estimator Details Card */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Selected Capacity</span>
                  <h3 className="text-2xl font-black text-slate-900">{systemEstimates[selectedSize].capacity} On-Grid System</h3>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Estimated Payback</span>
                  <span className="text-lg font-extrabold text-emerald-600">{systemEstimates[selectedSize].payback}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Panels Needed</span>
                  <span className="text-base font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].panels}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Roof Space Required</span>
                  <span className="text-base font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].space}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Daily Power Generation</span>
                  <span className="text-base font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].generation}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Monthly Savings</span>
                  <span className="text-base font-bold text-emerald-600 block mt-1">{systemEstimates[selectedSize].monthlySavings}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Avg. System Cost</span>
                  <span className="text-base font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].estimatedCost}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Govt. Subsidy (PM Surya Ghar)</span>
                  <span className="text-base font-bold text-emerald-600 block mt-1">-{systemEstimates[selectedSize].subsidy}</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Net Out-of-Pocket Investment</span>
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
                * Prices are indicative of local averages. Exact costs depend on brand selections, structural mounting specs, and cable distances.
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
              Being the best on grid Solar company in Patna, Shibha Enterprises always uses high-quality solar panels, inverters, and other electrical parts from reputed suppliers. Each system is designed to ensure the highest level of efficiency, reliability, and durability.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

      {/* ── Grid Synchonization Process ──────────────── */}
      <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="section-label">Grid Sync</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              How Synchronization Works
            </h2>
            <p className="mt-3 text-base text-slate-500">

              We are the best on grid solar company in Patna. We provide seamless integration with the grid and help in using your solar system to run your premises, with excess power being exported.

            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {syncSteps.map((step, index) => (
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

      {/* ── Interactive Collapsible FAQ Section ──────── */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-200">
        <div className="site-container max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label">FAQs</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Got questions about on-grid solar systems? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${isOpen ? 'border-emerald-500 bg-emerald-50/10 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 select-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`h-6 w-6 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-slate-200/60 opacity-100' : 'max-h-0 opacity-0'
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
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-14 sm:py-16 text-center text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" aria-hidden="true" />
        <div className="site-container relative z-10 flex flex-col items-center">
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Go On-Grid?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            Let our MNRE-certified engineers design the perfect grid-tied solar system for your home or commercial structure.
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

export default OnGridSolar
