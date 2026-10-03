export default function ResidentialProcess() {
  const steps = [
    {
      num: '01',
      title: 'Free Roof Survey & 3D Shadow Analysis',
      desc: 'Our certified solar engineers visit your home to inspect roof load-bearing strength, orientation, and carry out precision shadow analysis.',
      badge: 'Day 1',
    },
    {
      num: '02',
      title: 'Bespoke Layout & DISCOM Filing',
      desc: 'We engineer a tailored layout for your monthly electricity usage, roof tilt, and prepare official documentation for DISCOM net metering.',
      badge: 'Day 2 - 3',
    },
    {
      num: '03',
      title: 'Precision Mounting & Smart Inverter Setup',
      desc: 'Our trained crew installs heavy-duty galvanized mounting frames, Tier-1 panels, earthing kits, and smart Wi-Fi inverter with zero roof leakage.',
      badge: 'Day 4 - 6',
    },
    {
      num: '04',
      title: 'Net Meter Commissioning & DBT Subsidy',
      desc: 'DISCOM inspects and connects your bi-directional net meter. We submit commissioning reports to the national portal for your ₹78,000 DBT transfer.',
      badge: 'Commissioned',
    },
  ]

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            End-To-End Execution
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
            How We Install Solar On{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Your Home
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From initial site assessment to government subsidy credit, we manage every single technical and DISCOM approval step with zero headache.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <span>Verified Step {i + 1}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

