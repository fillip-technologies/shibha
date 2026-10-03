export default function CommercialBenefits() {
  const technologies = [
    {
      title: 'High-Performance Solar Modules',
      desc: 'That effectively harness the sun’s energy and convert it into electricity with high conversion efficiency and durability.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      title: 'Commercial-Grade Inverters',
      desc: 'Transform the direct current (DC) from the modules into alternating current (AC) for use in the building with maximum efficiency.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'ACDB & DCDB Protection',
      desc: 'The solar system can provide the level of isolation and protection needed for a commercial installation, safeguarding equipment and building infrastructure.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Monitoring via Cloud-Based Software',
      desc: 'When the appropriate infrastructure is in place, system performance can be tracked and managed from a remote location in real time.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'Hybrid and Battery-Based Systems',
      desc: 'It can offer backup power to critical loads when the sun isn’t shining or during unexpected grid load-shedding and power cuts.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6A2.25 2.25 0 0018.75 7.5h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
        </svg>
      ),
    },
    {
      title: 'Net-Metering Connections',
      desc: 'When allowed by the utility, systems can be connected to the grid to sell back surplus power and offset night-time electricity charges.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-2">
            SMART SOLAR ISN&apos;T JUST ABOUT PANELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            The Technology Behind the Rooftop Matters
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A commercial solar installation in Patna is only as good as the supporting systems that make it safe, functional, and monitored. With the help of a Commercial Solar Installation in Patna, business owners can benefit from:
          </p>
        </div>

        {/* 6 Technology Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#F8FAF9] border border-emerald-100/70 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-white shadow-xs border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-[#064E3B] group-hover:text-[#6EE7B7] transition-all mb-6">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-800 transition-colors">
                {tech.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/80 px-6 py-2.5 rounded-full border border-emerald-100">
            A commercial solar installation is an integrated system &ndash; not just solar panels.
          </p>
        </div>
      </div>
    </section>
  )
}
