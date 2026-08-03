import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import solar5 from '../../assets/images/solar-5.jpg'
import solar4 from '../../assets/images/solar-4.jpg'

const systemEstimates = {
  '3kW': {
    capacity: '3 kW',
    panels: '6 panels (540W Mono PERC)',
    battery: '9.6 kWh LiFePO4 Lithium Bank',
    space: '300 sq. ft.',
    generation: '12-15 Units/day',
    supportLoad: 'Lights, Fans, TV, Fridge, Computer',
    estimatedCost: '₹2,60,000',
    batteryLife: '10+ Years (3000+ Cycles)',
    payback: '5.2 Years',
  },
  '5kW': {
    capacity: '5 kW',
    panels: '10 panels (540W Mono PERC)',
    battery: '14.4 kWh LiFePO4 Lithium Bank',
    space: '500 sq. ft.',
    generation: '20-25 Units/day',
    supportLoad: '1.5 Ton AC, Water Pump, Fridge, Lights & Fans',
    estimatedCost: '₹4,10,000',
    batteryLife: '10+ Years (3000+ Cycles)',
    payback: '5.4 Years',
  },
  '8kW': {
    capacity: '8 kW',
    panels: '15 panels (540W Mono PERC)',
    battery: '19.2 kWh LiFePO4 Lithium Bank',
    space: '750 sq. ft.',
    generation: '32-40 Units/day',
    supportLoad: '2 ACs, Microwave, Geyser, Water Pump, Home Loads',
    estimatedCost: '₹5,80,000',
    batteryLife: '10+ Years (3000+ Cycles)',
    payback: '5.6 Years',
  },
  '10kW': {
    capacity: '10 kW',
    panels: '19 panels (540W Mono PERC)',
    battery: '28.8 kWh LiFePO4 Lithium Bank',
    space: '1,000 sq. ft.',
    generation: '40-50 Units/day',
    supportLoad: 'Full Home Loads, 3 ACs, EV Charger, Luxury Appliances',
    estimatedCost: '₹7,50,000',
    batteryLife: '10+ Years (3000+ Cycles)',
    payback: '5.8 Years',
  },
}

const keyComponents = [
  {
    title: 'Tier-1 Mono PERC Panels',
    desc: 'High-wattage solar panels designed to deliver maximum energy harvesting per square foot, critical for standalone off-grid battery charging.',
    features: ['22%+ conversion efficiency', 'Anti-reflective heavy-duty glass', 'Excellent performance in low light/overcast'],
  },
  {
    title: 'MPPT Solar PCU Inverter',
    desc: 'Off-grid Power Conditioning Unit with high-speed Maximum Power Point Tracking (MPPT) to harvest up to 30% more power from solar arrays.',
    features: ['Pure sine wave clean AC output', 'Configurable AC/Solar charging priority', 'Advanced thermal management & overload safety'],
  },
  {
    title: 'LiFePO4 Lithium Batteries',
    desc: 'Lithium Iron Phosphate energy storage banks. The safest, longest-lasting battery tech available, eliminating maintenance and gas venting.',
    features: ['10+ year operational lifespan', '90% Depth of Discharge (DoD) capability', 'Zero water refilling or maintenance required'],
  },
  {
    title: 'DCDB / ACDB Protection Units',
    desc: 'Custom-wired distribution boxes providing essential fuse protection, circuit breakers, and Surge Protection Devices (SPD) for DC and AC lines.',
    features: ['IP65 weather-proof safety enclosures', 'High-current isolator switches', 'Lightning protection grounding design'],
  },
]

const processSteps = [
  {
    title: 'Solar Generation',
    desc: 'Rooftop solar panels convert sunlight into direct current (DC) power throughout daylight hours.',
  },
  {
    title: 'MPPT Battery Charging',
    desc: 'The MPPT charge controller regulates the DC power to safely and rapidly charge the Lithium battery bank.',
  },
  {
    title: 'DC-to-AC Inversion',
    desc: 'The off-grid solar inverter converts the stored DC power from batteries into stable AC electricity.',
  },
  {
    title: '24/7 Home Power',
    desc: 'Your home runs on solar power during the day, and draws silent backup from batteries throughout the night.',
  },
]

const faqsList = [
  {
    q: 'Why is Shibha Enterprises the Best Off Grid Solar Company in Patna?',
    a: 'Shibha Enterprises is recognized as the Best Off Grid Solar Company in Patna for delivering reliable off-grid solar systems, premium lithium battery solutions, expert installation, and dependable after-sales support.',
  },
  {
    q: 'What is an Off-Grid Solar System?',
    a: 'An Off-Grid Solar System operates independently of the electricity grid. It generates power through solar panels, stores energy in batteries, and supplies electricity whenever you need it.',
  },
  {
    q: 'Who should install an Off-Grid Solar System?',
    a: 'Off-grid solar is ideal for rural homes, farmhouses, remote locations, resorts, construction sites, and areas with limited or unreliable grid connectivity.',
  },
  {
    q: 'What are the benefits of choosing the Best Off Grid Solar Company in Patna?',
    a: 'Choosing the Best Off Grid Solar Company in Patna ensures professionally designed systems, premium components, reliable battery backup, maximum efficiency, and long-lasting performance.',
  },
  {
    q: 'Does an Off-Grid Solar System work during power cuts?',
    a: 'Yes. Since it is completely independent of the utility grid, an Off-Grid Solar System continues to supply electricity even during extended power outages.',
  },
  {
    q: ' What type of batteries are used in your Off-Grid Solar Systems?',
    a: 'We use advanced lithium battery technology that offers faster charging, longer lifespan, higher efficiency, and minimal maintenance compared to conventional batteries.',
  },
  {
    q: ' Can an Off-Grid Solar System eliminate electricity bills?',
    a: 'Yes. Since the system generates and stores its own electricity, users can enjoy energy independence without relying on utility power, subject to system sizing and energy usage.',
  },
    {
    q: ' How long do Off-Grid Solar Systems last?',
    a: 'Our Tier-1 solar panels typically have a lifespan of over 25 years, while premium lithium batteries are designed for years of dependable performance with proper maintenance.',
  },
  {
    q: 'How do I choose the right Off-Grid Solar System capacity?',
    a: 'Our experts perform a detailed energy assessment, considering your daily electricity consumption, appliance load, and future requirements to recommend the ideal system size.',
  },
  {
    q: 'Does Shibha Enterprises provide installation and maintenance services?',
    a: 'Yes. As the Best Off Grid Solar Company in Patna, we provide complete services, including consultation, system design, installation, commissioning, and ongoing maintenance support.',
  },
   {
    q: ' Are Off-Grid Solar Systems suitable for businesses?',
    a: 'Absolutely. Off-grid systems are an excellent choice for industries, warehouses, telecom towers, agricultural operations, and commercial facilities that require uninterrupted power in remote locations.',
  },
  {
    q: ' How can I get a free consultation for an Off-Grid Solar System?',
    a: 'Contact Shibha Enterprises today to book a free site survey and consultation. Our solar experts will recommend a customized Off-Grid Solar solution based on your energy requirements and budget.',
  },
]

function OffGridSolar() {
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
            src={solar5}
            alt="Off-grid battery bank setup"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900/90 to-emerald-950/85" />

        {/* Glow Spots */}
        <div className="absolute left-1/4 top-1/4 -z-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" aria-hidden="true" />
        <div className="absolute right-10 bottom-10 -z-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[130px]" aria-hidden="true" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Column: Text Content */}
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
                  <li className="text-white font-semibold">Off-Grid Solar</li>
                </ol>
              </nav>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm mb-5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Standalone Power Systems
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl">
                Complete Energy{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
                  Independence
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
                Say goodbye to the hassles of grid-based systems with smart off-grid solar solutions by the best off grid solar company in Patna. With our advanced high-capacity lithium battery storage, we provide uninterrupted generation, storage, and distribution of clean energy around the clock.
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

            {/* Right Column: Glassmorphism Battery Monitor Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl shadow-emerald-950/50">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">Battery storage monitor</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Discharging
                  </span>
                </div>

                {/* Battery percentage circle simulation */}
                <div className="my-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block">Battery Capacity</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl font-black text-white tracking-tight">88%</span>
                      <span className="text-xs text-emerald-400 font-semibold">Healthy</span>
                    </div>
                  </div>

                  {/* Visual battery icon layout */}
                  <div className="flex items-center border-2 border-emerald-500/60 rounded-lg p-1 w-20 h-10 relative">
                    <div className="bg-emerald-500 rounded h-full w-[88%]" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-emerald-500/60 w-1.5 h-4 rounded-r" />
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Autonomy Left</span>
                    <span className="text-base font-bold text-slate-100 block mt-0.5">14.5 Hours</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Load Demand</span>
                    <span className="text-base font-bold text-emerald-400 block mt-0.5">1.25 kW</span>
                  </div>
                </div>

                {/* Standalone flow representation */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-3">Power Routing</span>
                  <div className="flex items-center justify-between bg-slate-900/40 rounded-xl p-3 border border-white/5 text-center">
                    <div className="flex-1">
                      <span className="text-[9px] text-slate-400 block uppercase font-bold">Solar Generation</span>
                      <span className="text-xs font-semibold text-slate-200 block mt-1">0.00 kW</span>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div className="flex-1">
                      <span className="text-[9px] text-slate-400 block uppercase font-bold">Battery Input</span>
                      <span className="text-xs font-semibold text-emerald-400 block mt-1">-1.25 kW</span>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div className="flex-1">
                      <span className="text-[9px] text-slate-400 block uppercase font-bold">Inverter Load</span>
                      <span className="text-xs font-semibold text-slate-200 block mt-1">100% Clean</span>
                    </div>
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
                Your Own Private Power Station
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
                As the Best Off Grid Solar Company in Patna, Shibha Enterprises provides sophisticated off-grid solar solutions with high-quality lithium battery storage to ensure uninterrupted power supply, day and night. Power your home without connecting it to the electricity grid.

              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Energy Independent</h4>
                    <p className="text-xs text-slate-500 mt-1">Stay energy independent during blackouts and never depend on the power grid. </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Innovative Lithium Battery Storage</h4>
                    <p className="text-xs text-slate-500 mt-1">Innovative lithium-based batteries provide secure and powerful power backup. </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Utility Bills</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Create your own energy and enjoy the benefits of substantial long-term savings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Go Off-Grid Anywhere</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      An ideal solution for farmhouses, resorts, rural places, industries, and remote areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-emerald-100/40">
                <img
                  src={solar4}
                  alt="Off-Grid solar farm array"
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

      {/* ── Interactive Estimator Section ────────────── */}
      <section id="estimator" className="py-24 bg-slate-100 overflow-hidden border-t border-b border-slate-200">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="section-label">Standalone Cost Estimates</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Off-Grid Package Estimator
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Compare system capacities and integrated Lithium storage bank configurations below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Capacity Options */}
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
                    <span className="block text-lg font-bold">{size} Off-Grid Setup</span>
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
                  <h3 className="text-2xl font-black text-slate-900">{systemEstimates[selectedSize].capacity} Standalone System</h3>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Battery Lifespan</span>
                  <span className="text-xs font-bold text-emerald-600">{systemEstimates[selectedSize].batteryLife}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Solar Panels</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].panels}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Lithium Storage</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].battery}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Rooftop Area Required</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].space}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Daily Production</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{systemEstimates[selectedSize].generation}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Payback Return</span>
                  <span className="text-sm font-bold text-emerald-600 block mt-1">~{systemEstimates[selectedSize].payback}</span>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <span className="text-xs text-slate-400 block font-medium">Supported Loads (Typical backup)</span>
                  <span className="text-sm font-semibold text-slate-700 block mt-1">{systemEstimates[selectedSize].supportLoad}</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Estimated Complete System Investment</span>
                  <span className="text-3xl font-black text-slate-900 mt-1 block">
                    {systemEstimates[selectedSize].estimatedCost}*
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
                * Cost estimates include premium mono-crystalline solar panels, off-grid PCU inverter, and LiFePO4 Lithium battery rack cabinet configurations.
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
              As the Best off grid solar company in Patna, Shibha Enterprises offers solar panels that belong to the Tier-1 category, ensuring continuous power in any conditions.
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
              How Standalone Power Flows
            </h2>
            <p className="mt-3 text-base text-slate-500">
              A detailed view of how off-grid solar charges, stores, and delivers energy completely off the grid.
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
              Got questions about off-grid battery systems? We have answers.
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
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-20 text-center text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" aria-hidden="true" />
        <div className="site-container relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 backdrop-blur-sm">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Go Independent?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            Let our MNRE-certified engineers design the perfect off-grid battery-backed solar system for your home or rural property.
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

export default OffGridSolar
