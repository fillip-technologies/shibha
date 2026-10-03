import villaImg from '../../../assets/images/install-1.jpeg'

export default function ResidentialOverview() {
  const highlights = [
    {
      title: 'Net Metering Integration',
      desc: 'DISCOM bi-directional net meters record imported units and exported solar units, allowing you to pay only for the net difference.',
    },
    {
      title: 'Tier-1 Mono PERC & Bifacial Modules',
      desc: 'Top-tier MNRE & ALMM approved panels with 22%+ cell efficiency providing optimum generation even during foggy or overcast Bihar days.',
    },
    {
      title: 'Smart Real-time Mobile Monitoring',
      desc: 'Track daily energy generation, power consumption, and monthly savings live on your smartphone via Wi-Fi enabled smart inverters.',
    },
    {
      title: 'Custom Aerodynamic Roof Mounting',
      desc: 'Engineered galvanized structural framing ensuring zero roof puncture leaks and resistance to high-speed storms and monsoons.',
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Overview text & bullet highlights */}
          <div>
            <span className="section-label">Smart Home Energy</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Designed For Independent Homes,{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Villas & Housing Societies
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every home has unique energy consumption habits and roof geometry. At Shibha Solar, we engineer personalized rooftop solar plants that fit seamlessly on concrete flat roofs, sloped tin shades, or elevated pergolas without damaging your living space.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mt-0.5">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{h.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Installation photography & floating badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-950/10 border border-slate-100">
              <img
                src={villaImg}
                alt="Residential rooftop solar installation"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">Patna Villa Project</p>
                    <p className="text-sm font-black text-slate-900">10 kW Mono PERC Rooftop System</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Net Metered
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative background glows */}
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-emerald-500/10 -z-10 blur-2xl" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-teal-500/10 -z-10 blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
