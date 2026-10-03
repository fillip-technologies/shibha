export default function PMSuryaGharProcess() {
  const steps = [
    {
      num: '01',
      title: 'Portal Registration & Application',
      desc: 'We assist with registration on the PM Surya Ghar National Portal (pmsuryaghar.gov.in) with your SBPDCL / NBPDCL electricity consumer CA number and bank details.',
      badge: 'Step 1',
    },
    {
      num: '02',
      title: 'Technical Feasibility & Design',
      desc: 'DISCOM reviews grid feasibility for your sanctioned load while our engineers conduct physical rooftop shadow assessment and custom layout engineering.',
      badge: 'Step 2',
    },
    {
      num: '03',
      title: 'DCR Installation & Commissioning',
      desc: 'Execution with domestic content compliant (DCR) mono-PERC/TOPCon panels, grid-tied inverter, ACDB/DCDB, lightning arrestor, and dual chemical earthing.',
      badge: 'Step 3',
    },
    {
      num: '04',
      title: 'Net Metering & DBT Subsidy',
      desc: 'DISCOM testing, bi-directional net meter installation, and commissioning certificate upload. Up to ₹98,000 combined subsidy is directly credited to your bank account.',
      badge: 'Disbursed',
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#032B25] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="site-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full border border-[#6EE7B7]/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#6EE7B7]">
            4-STEP SUBSIDY JOURNEY
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
            From Application to{' '}
            <span className="bg-gradient-to-r from-[#6EE7B7] to-teal-300 bg-clip-text text-transparent">
              Subsidy in Your Bank Account
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/80">
            Shibha Enterprises manages the entire PM Surya Ghar Yojana process so you don't have to worry about bureaucratic delays or paperwork.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#04362E]/90 border border-white/10 hover:border-[#6EE7B7]/50 transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#6EE7B7]/35 group-hover:text-[#6EE7B7] transition-colors">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#6EE7B7]/10 text-[#6EE7B7] border border-[#6EE7B7]/30">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#6EE7B7] transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#6EE7B7] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
                <span>100% DISCOM liaison included</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
