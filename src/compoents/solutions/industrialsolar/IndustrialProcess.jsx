export default function IndustrialProcess() {
  const steps = [
    {
      num: '01',
      title: 'HT Audit & Structural Wind-Speed CAD',
      desc: 'Electrical engineers audit transformer capacity, power factor, contract demand (kVA), and model 160 km/h wind loads on PEB factory roofs.',
      badge: 'Step 1',
    },
    {
      num: '02',
      title: 'DPR Engineering & DISCOM HT Filing',
      desc: 'Comprehensive PVsyst generation modeling, single-line diagrams (SLD), financial IRR projections, and DISCOM technical grid feasibility clearance.',
      badge: 'Step 2',
    },
    {
      num: '03',
      title: 'Industrial EPC & Solar-DG Sync',
      desc: 'Non-penetrating standing-seam mounting, Tier-1 modules, central inverters, and automated zero-export DG synchronization controllers.',
      badge: 'Step 3',
    },
    {
      num: '04',
      title: 'CEIG Clearance & HT Net-Metering Go-Live',
      desc: 'Chief Electrical Inspector (CEIG) statutory approval, DISCOM bidirectional HT meter synchronization, and 24x7 cloud SCADA monitoring activation.',
      badge: 'Commissioned',
    },
  ]

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            TURNKEY INDUSTRIAL EXECUTION
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
            Designing an Energy System{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Around Your Manufacturing Plant
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From electrical load profiling and CEIG approvals to HT net-metering synchronization, our turnkey industrial EPC delivers zero downtime to your production floor.
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

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Zero factory downtime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
